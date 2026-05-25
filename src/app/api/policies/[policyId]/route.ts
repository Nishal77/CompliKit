import { NextResponse } from "next/server";
import { z } from "zod";
import { getAuthContext } from "@/lib/auth";
import { db } from "@/lib/db";
import type { PolicyStatus } from "@prisma/client";

const patchSchema = z.object({
  content: z.string().optional(),
  status: z.enum(["DRAFT", "REVIEW", "APPROVED", "OUTDATED"]).optional(),
  reviewDueAt: z.string().datetime().optional(),
});

async function resolvePolicy(userId: string, policyId: string) {
  const policy = await db.policy.findUnique({ where: { id: policyId } });
  if (!policy) return null;

  const member = await db.organizationMember.findUnique({
    where: { organizationId_userId: { organizationId: policy.organizationId, userId } },
  });
  if (!member) return null;

  return { policy, member };
}

export async function GET(_req: Request, { params }: { params: Promise<{ policyId: string }> }) {
  const { policyId } = await params;
  const ctx = await getAuthContext();
  if (!ctx) return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });

  const resolved = await resolvePolicy(ctx.userId, policyId);
  if (!resolved) return NextResponse.json({ error: "Not found", code: "NOT_FOUND" }, { status: 404 });

  const versions = await db.policyVersion.findMany({
    where: { policyId },
    orderBy: { version: "desc" },
    take: 20,
  });

  return NextResponse.json({ data: { ...resolved.policy, versions } });
}

export async function PATCH(req: Request, { params }: { params: Promise<{ policyId: string }> }) {
  const { policyId } = await params;
  const ctx = await getAuthContext();
  if (!ctx) return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });

  const resolved = await resolvePolicy(ctx.userId, policyId);
  if (!resolved) return NextResponse.json({ error: "Not found", code: "NOT_FOUND" }, { status: 404 });

  if (resolved.member.role === "AUDITOR") {
    return NextResponse.json({ error: "Auditors cannot edit policies", code: "FORBIDDEN" }, { status: 403 });
  }

  const body = await req.json();
  const parsed = patchSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request", code: "VALIDATION_ERROR", details: parsed.error }, { status: 400 });
  }

  const { content, status, reviewDueAt } = parsed.data;

  const updated = await db.$transaction(async (tx) => {
    if (content) {
      await tx.policyVersion.create({
        data: {
          policyId,
          version: resolved.policy.version,
          content: resolved.policy.content,
          changedBy: ctx.userId,
        },
      });

      const versionCount = await tx.policyVersion.count({ where: { policyId } });
      if (versionCount > 20) {
        const oldest = await tx.policyVersion.findFirst({
          where: { policyId },
          orderBy: { version: "asc" },
        });
        if (oldest) await tx.policyVersion.delete({ where: { id: oldest.id } });
      }
    }

    return tx.policy.update({
      where: { id: policyId },
      data: {
        ...(content && { content, version: { increment: 1 } }),
        ...(status && { status: status as PolicyStatus }),
        ...(status === "APPROVED" && { approvedBy: ctx.userId, approvedAt: new Date() }),
        ...(reviewDueAt && { reviewDueAt: new Date(reviewDueAt) }),
      },
    });
  });

  return NextResponse.json({ data: updated });
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ policyId: string }> }) {
  const { policyId } = await params;
  const ctx = await getAuthContext();
  if (!ctx) return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });

  const resolved = await resolvePolicy(ctx.userId, policyId);
  if (!resolved) return NextResponse.json({ error: "Not found", code: "NOT_FOUND" }, { status: 404 });

  if (!["OWNER", "ADMIN"].includes(resolved.member.role)) {
    return NextResponse.json({ error: "Insufficient permissions", code: "FORBIDDEN" }, { status: 403 });
  }

  await db.policy.delete({ where: { id: policyId } });
  return NextResponse.json({ data: { deleted: true } });
}
