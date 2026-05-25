import { NextResponse } from "next/server";
import { z } from "zod";
import { getAuthContext } from "@/lib/auth";
import { db } from "@/lib/db";
import { createCheckoutSession, createOrRetrieveCustomer } from "@/lib/stripe";
import { PLANS } from "@/constants/plans";
import type { Plan } from "@prisma/client";

const schema = z.object({
  planId: z.enum(["STARTER", "GROWTH", "PRO"]),
});

export async function POST(req: Request) {
  const ctx = await getAuthContext();
  if (!ctx) return NextResponse.json({ error: "Organization not found", code: "NOT_FOUND" }, { status: 404 });

  if (!["OWNER", "ADMIN"].includes(ctx.role)) {
    return NextResponse.json({ error: "Only owners/admins can manage billing", code: "FORBIDDEN" }, { status: 403 });
  }

  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request", code: "VALIDATION_ERROR" }, { status: 400 });
  }

  const plan = PLANS[parsed.data.planId as Plan];
  if (!plan.stripePriceId) {
    return NextResponse.json({ error: "No price configured for this plan", code: "CONFIG_ERROR" }, { status: 500 });
  }

  const org = await db.organization.findUnique({ where: { id: ctx.organizationId } });
  if (!org) return NextResponse.json({ error: "Organization not found", code: "NOT_FOUND" }, { status: 404 });

  const user = await db.user.findUnique({ where: { id: ctx.userId } });
  if (!user) return NextResponse.json({ error: "User not found", code: "NOT_FOUND" }, { status: 404 });

  const customerId = await createOrRetrieveCustomer({
    email: user.email,
    name: org.name,
    organizationId: org.id,
  });

  if (!org.stripeCustomerId) {
    await db.organization.update({
      where: { id: org.id },
      data: { stripeCustomerId: customerId },
    });
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.complikit.io";
  const checkoutSession = await createCheckoutSession({
    customerId,
    priceId: plan.stripePriceId,
    organizationId: org.id,
    successUrl: `${appUrl}/settings?upgrade=success`,
    cancelUrl: `${appUrl}/settings`,
  });

  return NextResponse.json({ data: { url: checkoutSession.url } });
}
