import { NextResponse } from "next/server";
import { z } from "zod";
import { getAuthContext } from "@/lib/auth";
import { db } from "@/lib/db";
import { getPresignedUploadUrl, buildEvidenceKey, S3_BUCKETS } from "@/lib/s3";

const ALLOWED_TYPES = [
  "application/pdf",
  "image/png",
  "image/jpeg",
  "text/csv",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
  "application/zip",
];

const MAX_SIZE = 50 * 1024 * 1024;

const schema = z.object({
  fileName: z.string().min(1),
  contentType: z.string().refine((t) => ALLOWED_TYPES.includes(t), "File type not allowed"),
  fileSize: z.number().max(MAX_SIZE, "File too large (max 50MB)"),
  controlInstanceId: z.string().optional(),
  title: z.string().min(1),
});

export async function POST(req: Request) {
  const ctx = await getAuthContext();
  if (!ctx) return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });

  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request", code: "VALIDATION_ERROR", details: parsed.error }, { status: 400 });
  }

  const { fileName, contentType, fileSize, controlInstanceId, title } = parsed.data;

  const evidenceItem = await db.evidenceItem.create({
    data: {
      organizationId: ctx.organizationId,
      controlInstanceId: controlInstanceId ?? null,
      title,
      evidenceType: "FILE",
      fileName,
      fileSize,
      mimeType: contentType,
      collectedBy: ctx.userId,
    },
  });

  const s3Key = buildEvidenceKey(ctx.organizationId, evidenceItem.id, fileName);
  const uploadUrl = await getPresignedUploadUrl(S3_BUCKETS.EVIDENCE, s3Key, contentType);

  await db.evidenceItem.update({
    where: { id: evidenceItem.id },
    data: { s3Key },
  });

  return NextResponse.json({
    data: { uploadUrl, s3Key, evidenceItemId: evidenceItem.id },
  });
}
