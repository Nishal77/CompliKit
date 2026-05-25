import { NextResponse } from "next/server";
import { getAuthContext } from "@/lib/auth";
import { db } from "@/lib/db";
import { createBillingPortalSession } from "@/lib/stripe";

export async function POST() {
  const ctx = await getAuthContext();
  if (!ctx) return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });

  if (!["OWNER", "ADMIN"].includes(ctx.role)) {
    return NextResponse.json({ error: "Only owners/admins can manage billing", code: "FORBIDDEN" }, { status: 403 });
  }

  const org = await db.organization.findUnique({ where: { id: ctx.organizationId } });
  if (!org?.stripeCustomerId) {
    return NextResponse.json({ error: "No billing account found", code: "NOT_FOUND" }, { status: 404 });
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.complikit.io";
  const session = await createBillingPortalSession({
    customerId: org.stripeCustomerId,
    returnUrl: `${appUrl}/settings`,
  });

  return NextResponse.json({ data: { url: session.url } });
}
