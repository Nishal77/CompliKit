import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { POLICY_TEMPLATES } from "@/constants/policy-templates";
import { PageHeader } from "@/components/shared/page-header";
import { PolicyCard } from "@/components/policies/policy-card";
import type { Policy } from "@prisma/client";

export const metadata = { title: "Policies" };

export default async function PoliciesPage() {
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) redirect("/login");

  const user = await db.user.findUnique({ where: { clerkId: clerkUserId } });
  if (!user) redirect("/onboarding");

  const org = await db.organization.findFirst({
    where: { members: { some: { userId: user.id } } },
  });
  if (!org) redirect("/onboarding");

  const policies = await db.policy.findMany({
    where: { organizationId: org.id },
    orderBy: { updatedAt: "desc" },
  });

  const policyByKey = policies.reduce<Record<string, Policy>>((acc, p) => {
    acc[p.templateKey] = p;
    return acc;
  }, {});

  return (
    <div>
      <PageHeader
        title="Policy Library"
        description="AI-generated SOC 2 policies tailored to your company."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {POLICY_TEMPLATES.map((template) => (
          <PolicyCard
            key={template.key}
            template={template}
            policy={policyByKey[template.key] ?? null}
            canGenerate={org.plan !== "FREE"}
          />
        ))}
      </div>
    </div>
  );
}
