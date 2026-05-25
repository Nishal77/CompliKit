import { NextResponse } from "next/server";
import { getAuthContext } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET() {
  const ctx = await getAuthContext();
  if (!ctx) return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });

  const policies = await db.policy.findMany({
    where: { organizationId: ctx.organizationId },
    orderBy: { updatedAt: "desc" },
  });

  return NextResponse.json({ data: policies });
}
