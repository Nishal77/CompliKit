import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";
import { sendPaymentFailedEmail } from "@/lib/email";
import type { Plan } from "@prisma/client";
import type Stripe from "stripe";

const STRIPE_PLAN_MAP: Record<string, Plan> = {
  [process.env.STRIPE_STARTER_PRICE_ID ?? ""]: "STARTER",
  [process.env.STRIPE_GROWTH_PRICE_ID ?? ""]: "GROWTH",
  [process.env.STRIPE_PRO_PRICE_ID ?? ""]: "PRO",
};

export async function POST(req: Request) {
  const body = await req.text();
  const sig = (await headers()).get("stripe-signature");
  if (!sig) return NextResponse.json({ error: "Missing signature" }, { status: 400 });

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const orgId = session.metadata?.organizationId;
      const customerId = session.customer as string;
      const subscriptionId = session.subscription as string;

      if (!orgId) break;

      const subscription = await stripe.subscriptions.retrieve(subscriptionId);
      const priceId = subscription.items.data[0]?.price.id;
      const plan = STRIPE_PLAN_MAP[priceId] ?? "STARTER";

      await db.organization.update({
        where: { id: orgId },
        data: { plan, stripeCustomerId: customerId, stripeSubscriptionId: subscriptionId },
      });
      break;
    }

    case "customer.subscription.updated": {
      const sub = event.data.object as Stripe.Subscription;
      const priceId = sub.items.data[0]?.price.id;
      const plan = STRIPE_PLAN_MAP[priceId] ?? "FREE";

      await db.organization.updateMany({
        where: { stripeSubscriptionId: sub.id },
        data: { plan },
      });
      break;
    }

    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      await db.organization.updateMany({
        where: { stripeSubscriptionId: sub.id },
        data: { plan: "FREE", stripeSubscriptionId: null },
      });
      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      const customerId = invoice.customer as string;

      const org = await db.organization.findUnique({ where: { stripeCustomerId: customerId } });
      if (!org) break;

      const member = await db.organizationMember.findFirst({
        where: { organizationId: org.id, role: "OWNER" },
        include: { user: true },
      });

      if (member?.user.email) {
        await sendPaymentFailedEmail({ to: member.user.email, orgName: org.name });
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}
