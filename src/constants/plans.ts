export const PLANS = {
  FREE: {
    id: "FREE" as const,
    name: "Free",
    price: 0,
    stripePriceId: null,
    limits: {
      policies: 0,
      controls: 36,
      evidenceItems: 10,
      vendorItems: 5,
      teamMembers: 1,
      reports: 0,
      aiGenerations: 0,
      integrations: 0,
    },
    features: [
      "SOC 2 readiness checklist",
      "Manual control tracking",
      "10 evidence uploads",
    ],
  },
  STARTER: {
    id: "STARTER" as const,
    name: "Starter",
    price: 99,
    stripePriceId: process.env.STRIPE_STARTER_PRICE_ID,
    limits: {
      policies: 10,
      controls: 36,
      evidenceItems: 200,
      vendorItems: 50,
      teamMembers: 3,
      reports: 5,
      aiGenerations: 30,
      integrations: 0,
    },
    features: [
      "All 10 SOC 2 policy templates (AI-generated)",
      "Full control tracker (36 controls)",
      "200 evidence uploads",
      "5 audit-ready PDF reports/month",
      "Vendor risk register (50 vendors)",
      "3 team members",
      "Security questionnaire library",
    ],
  },
  GROWTH: {
    id: "GROWTH" as const,
    name: "Growth",
    price: 199,
    stripePriceId: process.env.STRIPE_GROWTH_PRICE_ID,
    limits: {
      policies: 10,
      controls: 36,
      evidenceItems: 2000,
      vendorItems: 200,
      teamMembers: 10,
      reports: -1,
      aiGenerations: 200,
      integrations: 3,
    },
    features: [
      "Everything in Starter",
      "Automated evidence collection (GitHub, AWS)",
      "Unlimited PDF reports",
      "10 team members",
      "3 integrations",
      "Slack notifications",
      "Control due date tracking",
    ],
  },
  PRO: {
    id: "PRO" as const,
    name: "Pro",
    price: 299,
    stripePriceId: process.env.STRIPE_PRO_PRICE_ID,
    limits: {
      policies: 10,
      controls: 36,
      evidenceItems: -1,
      vendorItems: -1,
      teamMembers: 25,
      reports: -1,
      aiGenerations: -1,
      integrations: -1,
    },
    features: [
      "Everything in Growth",
      "Auditor portal (read-only external access)",
      "Custom policy branding",
      "Unlimited evidence + vendors",
      "25 team members",
      "Priority support",
      "Annual review reminders",
    ],
  },
} as const;

export type PlanId = keyof typeof PLANS;

export function getPlanById(id: PlanId) {
  return PLANS[id];
}

export function isWithinLimit(limit: number, usage: number): boolean {
  return limit === -1 || usage < limit;
}
