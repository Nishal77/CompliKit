import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-04-22.dahlia",
  typescript: true,
});

export async function createCheckoutSession(params: {
  customerId: string;
  priceId: string;
  organizationId: string;
  successUrl: string;
  cancelUrl: string;
}): Promise<Stripe.Checkout.Session> {
  return stripe.checkout.sessions.create({
    customer: params.customerId,
    payment_method_types: ["card"],
    line_items: [{ price: params.priceId, quantity: 1 }],
    mode: "subscription",
    success_url: params.successUrl,
    cancel_url: params.cancelUrl,
    metadata: { organizationId: params.organizationId },
    subscription_data: {
      trial_period_days: 14,
      metadata: { organizationId: params.organizationId },
    },
  });
}

export async function createBillingPortalSession(params: {
  customerId: string;
  returnUrl: string;
}): Promise<Stripe.BillingPortal.Session> {
  return stripe.billingPortal.sessions.create({
    customer: params.customerId,
    return_url: params.returnUrl,
  });
}

export async function createOrRetrieveCustomer(params: {
  email: string;
  name: string;
  organizationId: string;
}): Promise<string> {
  const existing = await stripe.customers.list({ email: params.email, limit: 1 });
  if (existing.data.length > 0) return existing.data[0].id;

  const customer = await stripe.customers.create({
    email: params.email,
    name: params.name,
    metadata: { organizationId: params.organizationId },
  });
  return customer.id;
}
