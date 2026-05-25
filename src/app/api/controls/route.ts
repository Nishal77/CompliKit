import { NextResponse } from "next/server";
import { getAuthContext } from "@/lib/auth";
import { db } from "@/lib/db";
import { getControlById } from "@/constants/soc2-controls";

export async function GET() {
  const ctx = await getAuthContext();
  if (!ctx) return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });

  const instances = await db.controlInstance.findMany({
    where: { organizationId: ctx.organizationId },
    include: { _count: { select: { evidenceItems: true } } },
    orderBy: { controlId: "asc" },
  });

  const data = instances.map((instance) => ({
    ...instance,
    catalogControl: getControlById(instance.controlId),
    evidenceCount: instance._count.evidenceItems,
  }));

  return NextResponse.json({ data });
}
