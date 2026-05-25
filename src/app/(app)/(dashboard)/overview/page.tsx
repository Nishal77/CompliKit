import { Suspense } from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { calculateReadinessScore, formatRelativeDate } from "@/lib/utils";
import { PageHeader } from "@/components/shared/page-header";
import { ReadinessScoreCard } from "@/components/dashboard/readiness-score-card";
import { QuickStatsGrid } from "@/components/dashboard/quick-stats-grid";
import { ActionItemsList } from "@/components/dashboard/action-items-list";
import { RecentActivityList } from "@/components/dashboard/recent-activity-list";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata = { title: "Overview" };

async function getOverviewData(organizationId: string) {
  const [controls, policies, evidenceItems, vendors, activities] = await Promise.all([
    db.controlInstance.findMany({ where: { organizationId } }),
    db.policy.findMany({ where: { organizationId } }),
    db.evidenceItem.count({ where: { organizationId } }),
    db.vendor.count({ where: { organizationId } }),
    db.activityLog.findMany({
      where: { organizationId },
      orderBy: { createdAt: "desc" },
      take: 10,
      include: { user: { select: { firstName: true, lastName: true, avatarUrl: true } } },
    }),
  ]);

  const score = calculateReadinessScore(controls);
  const completeControls = controls.filter((c) => c.status === "COMPLETE").length;
  const approvedPolicies = policies.filter((p) => p.status === "APPROVED").length;

  const actionItems = controls
    .filter((c) => c.status !== "COMPLETE" && c.status !== "NOT_APPLICABLE")
    .sort((a, b) => {
      const order = { IN_PROGRESS: 0, NEEDS_REVIEW: 1, NOT_STARTED: 2 };
      return (order[a.status as keyof typeof order] ?? 3) - (order[b.status as keyof typeof order] ?? 3);
    })
    .slice(0, 5);

  return {
    score,
    totalControls: controls.length,
    completeControls,
    totalPolicies: policies.length,
    approvedPolicies,
    evidenceCount: evidenceItems,
    vendorCount: vendors,
    actionItems,
    activities,
  };
}

export default async function OverviewPage() {
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) redirect("/login");

  const user = await db.user.findUnique({ where: { clerkId: clerkUserId } });
  if (!user) redirect("/onboarding");

  const org = await db.organization.findFirst({
    where: {
      members: { some: { userId: user.id } },
    },
  });
  if (!org) redirect("/onboarding");

  const data = await getOverviewData(org.id);

  return (
    <div>
      <PageHeader
        title={`Welcome back${user.firstName ? `, ${user.firstName}` : ""}`}
        description="Here's your SOC 2 readiness at a glance."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Suspense fallback={<Skeleton className="h-48" />}>
            <ReadinessScoreCard score={data.score} />
          </Suspense>
        </div>
        <div className="lg:col-span-2">
          <QuickStatsGrid
            controls={{ complete: data.completeControls, total: data.totalControls }}
            policies={{ approved: data.approvedPolicies, total: 10 }}
            evidenceCount={data.evidenceCount}
            vendorCount={data.vendorCount}
          />
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <ActionItemsList controls={data.actionItems} />
        <RecentActivityList
          activities={data.activities.map((a) => ({
            id: a.id,
            action: a.action,
            createdAt: formatRelativeDate(a.createdAt),
            user: a.user,
          }))}
        />
      </div>
    </div>
  );
}
