import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const s3 = new S3Client({
  region: process.env.AWS_REGION ?? "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export const S3_BUCKETS = {
  EVIDENCE: process.env.AWS_S3_BUCKET_EVIDENCE ?? "complikit-evidence",
  POLICIES: process.env.AWS_S3_BUCKET_POLICIES ?? "complikit-policies",
} as const;

export function buildEvidenceKey(orgId: string, evidenceItemId: string, fileName: string): string {
  return `${orgId}/evidence/${evidenceItemId}/${fileName}`;
}

export function buildReportKey(orgId: string, reportId: string): string {
  return `${orgId}/reports/${reportId}/report.pdf`;
}

export function buildPolicyKey(orgId: string, policyId: string, version: number): string {
  return `${orgId}/${policyId}/v${version}.pdf`;
}

export async function getPresignedUploadUrl(
  bucket: string,
  key: string,
  contentType: string,
  expiresIn = 300
): Promise<string> {
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    ContentType: contentType,
  });
  return getSignedUrl(s3, command, { expiresIn });
}

export async function getPresignedDownloadUrl(
  bucket: string,
  key: string,
  expiresIn = 3600
): Promise<string> {
  const command = new GetObjectCommand({ Bucket: bucket, Key: key });
  return getSignedUrl(s3, command, { expiresIn });
}

export async function deleteObject(bucket: string, key: string): Promise<void> {
  await s3.send(new DeleteObjectCommand({ Bucket: bucket, Key: key }));
}
