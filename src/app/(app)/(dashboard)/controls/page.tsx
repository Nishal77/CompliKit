import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { SOC2_CONTROLS, CONTROL_CATEGORIES, getControlById } from "@/constants/soc2-controls";
import { PageHeader } from "@/components/shared/page-header";
import { ControlsTable } from "@/components/controls/controls-table";

export const metadata = { title: "Controls" };

export default async function ControlsPage() {
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) redirect("/login");

  const user = await db.user.findUnique({ where: { clerkId: clerkUserId } });
  if (!user) redirect("/onboarding");

  const org = await db.organization.findFirst({
    where: { members: { some: { userId: user.id } } },
  });
  if (!org) redirect("/onboarding");

  const instances = await db.controlInstance.findMany({
    where: { organizationId: org.id },
    include: { _count: { select: { evidenceItems: true } } },
    orderBy: { controlId: "asc" },
  });

  const controls = instances.map((instance) => ({
    ...instance,
    catalogControl: getControlById(instance.controlId),
    evidenceCount: instance._count.evidenceItems,
  }));

  return (
    <div>
      <PageHeader
        title="SOC 2 Controls"
        description={`${instances.filter((c) => c.status === "COMPLETE").length} of ${instances.length} controls complete`}
      />
      <ControlsTable controls={controls} categories={CONTROL_CATEGORIES} />
    </div>
  );
}
