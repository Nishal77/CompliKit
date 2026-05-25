import { NextResponse } from "next/server";
import { z } from "zod";
import { getAuthContext } from "@/lib/auth";
import { db } from "@/lib/db";
import type { ControlStatus } from "@prisma/client";

const patchSchema = z.object({
  status: z.enum(["NOT_STARTED", "IN_PROGRESS", "NEEDS_REVIEW", "COMPLETE", "NOT_APPLICABLE"]).optional(),
  ownerId: z.string().nullable().optional(),
  notes: z.string().nullable().optional(),
  dueDate: z.string().datetime().nullable().optional(),
});

export async function PATCH(req: Request, { params }: { params: Promise<{ controlId: string }> }) {
  const { controlId } = await params;
  const ctx = await getAuthContext();
  if (!ctx) return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });

  if (ctx.role === "AUDITOR") {
    return NextResponse.json({ error: "Auditors cannot edit controls", code: "FORBIDDEN" }, { status: 403 });
  }

  const instance = await db.controlInstance.findUnique({ where: { id: controlId } });
  if (!instance) return NextResponse.json({ error: "Not found", code: "NOT_FOUND" }, { status: 404 });

  // Ensure control belongs to this org
  if (instance.organizationId !== ctx.organizationId) {
    return NextResponse.json({ error: "Forbidden", code: "FORBIDDEN" }, { status: 403 });
  }

  const body = await req.json();
  const parsed = patchSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request", code: "VALIDATION_ERROR", details: parsed.error }, { status: 400 });
  }

  const { status, ownerId, notes, dueDate } = parsed.data;

  const updated = await db.controlInstance.update({
    where: { id: controlId },
    data: {
      ...(status && { status: status as ControlStatus }),
      ...(status === "COMPLETE" && { completedAt: new Date() }),
      ...(ownerId !== undefined && { ownerId }),
      ...(notes !== undefined && { notes }),
      ...(dueDate !== undefined && { dueDate: dueDate ? new Date(dueDate) : null }),
    },
  });

  await db.activityLog.create({
    data: {
      organizationId: ctx.organizationId,
      userId: ctx.userId,
      action: status === "COMPLETE" ? "control.completed" : "control.updated",
      entityType: "ControlInstance",
      entityId: controlId,
      metadata: { status },
    },
  });

  return NextResponse.json({ data: updated });
}
