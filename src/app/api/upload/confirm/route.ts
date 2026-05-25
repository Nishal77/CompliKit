import { NextResponse } from "next/server";
import { z } from "zod";
import { getAuthContext } from "@/lib/auth";
import { db } from "@/lib/db";
import { s3, S3_BUCKETS } from "@/lib/s3";
import { HeadObjectCommand } from "@aws-sdk/client-s3";

const schema = z.object({
  evidenceItemId: z.string().min(1),
  s3Key: z.string().min(1),
});

export async function POST(req: Request) {
  const ctx = await getAuthContext();
  if (!ctx) return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });

  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request", code: "VALIDATION_ERROR" }, { status: 400 });
  }

  const { evidenceItemId, s3Key } = parsed.data;

  const item = await db.evidenceItem.findUnique({ where: { id: evidenceItemId } });
  if (!item) return NextResponse.json({ error: "Not found", code: "NOT_FOUND" }, { status: 404 });

  // Ensure evidence belongs to this org
  if (item.organizationId !== ctx.organizationId) {
    return NextResponse.json({ error: "Forbidden", code: "FORBIDDEN" }, { status: 403 });
  }

  try {
    await s3.send(new HeadObjectCommand({ Bucket: S3_BUCKETS.EVIDENCE, Key: s3Key }));
  } catch {
    return NextResponse.json({ error: "File not found in storage", code: "UPLOAD_INCOMPLETE" }, { status: 422 });
  }

  const updated = await db.evidenceItem.update({
    where: { id: evidenceItemId },
    data: { s3Key, updatedAt: new Date() },
  });

  await db.activityLog.create({
    data: {
      organizationId: ctx.organizationId,
      userId: ctx.userId,
      action: "evidence.uploaded",
      entityType: "EvidenceItem",
      entityId: evidenceItemId,
    },
  });

  return NextResponse.json({ data: updated });
}
