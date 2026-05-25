import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SOC 2 Compliance Software for Startups — CompliKit",
  description:
    "CompliKit is the SOC 2 compliance platform built for startups. Get audit-ready in 3 weeks with AI-generated policies, 36-control tracking, and automated evidence collection. Starting at $99/mo.",
  keywords: [
    "SOC 2 compliance for startups",
    "SOC 2 compliance software",
    "affordable SOC 2 compliance",
    "SOC 2 compliance platform",
    "SOC 2 audit preparation",
    "SOC 2 Type 1",
    "SOC 2 Type 2",
    "SOC 2 policies template",
    "SOC 2 compliance tool",
    "SOC 2 certification startup",
  ],
  openGraph: {
    title: "SOC 2 in weeks, not months — CompliKit",
    description:
      "AI-powered SOC 2 compliance platform for B2B SaaS startups. Starting at $99/mo. Audit-ready in under 4 weeks.",
    type: "website",
    url: "https://complikit.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOC 2 compliance for startups — CompliKit",
    description: "Get SOC 2 audit-ready in 3 weeks. AI policies, 36-control tracker, evidence vault. Starting at $99/mo.",
  },
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* FAQ + Organization structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: "CompliKit",
                url: "https://complikit.io",
                description:
                  "SOC 2 compliance software for startups. AI-generated policies, control tracking, and audit-ready reports starting at $99/month.",
                foundingDate: "2024",
                sameAs: [],
              },
              {
                "@type": "SoftwareApplication",
                name: "CompliKit",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                offers: {
                  "@type": "Offer",
                  price: "99",
                  priceCurrency: "USD",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "99",
                    priceCurrency: "USD",
                    unitText: "MONTH",
                  },
                },
                description:
                  "SOC 2 compliance platform for B2B SaaS startups. Get SOC 2 Type 1 audit-ready in 3 weeks with AI-generated policies and guided control tracking.",
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What exactly is CompliKit and what does it do?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "CompliKit is a SOC 2 compliance software platform built for startups and small B2B SaaS teams. It helps you get SOC 2 audit-ready by using AI to generate all 10 required SOC 2 policies, guiding you through all 36 SOC 2 Trust Services Criteria controls, organizing your evidence, and producing an audit-ready PDF report.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How is CompliKit different from other SOC 2 compliance platforms?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Most enterprise compliance platforms cost $10,000–15,000/year and are built for companies with 25–500+ employees. CompliKit starts at $99/month, designed specifically for seed-to-Series-A startups with 3–25 people. Same SOC 2 report. A fraction of the cost.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How long does it take to get SOC 2 Type 1 audit-ready with CompliKit?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Most CompliKit customers are SOC 2 Type 1 audit-ready in 2–4 weeks. Week 1: AI generates all 10 policies. Weeks 2–3: work through 36 controls with our guided tracker. Week 4: final review and PDF report generation.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the difference between SOC 2 Type 1 and Type 2?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "SOC 2 Type 1 is a point-in-time assessment verifying controls are correctly designed. Most enterprise prospects accept it to unblock a deal. SOC 2 Type 2 tests that controls operated effectively over 6–12 months, required by larger enterprise accounts.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do I still need to hire a SOC 2 auditor?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. CompliKit prepares you for the audit but does not issue the SOC 2 report itself. That requires a licensed CPA firm. CompliKit dramatically reduces audit preparation time and cost.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
