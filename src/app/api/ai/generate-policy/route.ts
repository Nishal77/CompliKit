import { NextResponse } from "next/server";
import { z } from "zod";
import { getAuthContext } from "@/lib/auth";
import { db } from "@/lib/db";
import { getMonthlyAIUsage } from "@/lib/redis";
import { PLANS } from "@/constants/plans";
import { inngest } from "@/inngest/client";
import type { Plan } from "@prisma/client";

const schema = z.object({
  templateKey: z.string().min(1),
});

export async function POST(req: Request) {
  const ctx = await getAuthContext();
  if (!ctx) return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });

  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request", code: "VALIDATION_ERROR", details: parsed.error }, { status: 400 });
  }

  const plan = PLANS[ctx.plan as Plan];
  if (plan.limits.aiGenerations === 0) {
    return NextResponse.json({ error: "Upgrade your plan to generate AI policies.", code: "PLAN_LIMIT_EXCEEDED" }, { status: 429 });
  }

  const usage = await getMonthlyAIUsage(ctx.organizationId);
  if (plan.limits.aiGenerations !== -1 && usage >= plan.limits.aiGenerations) {
    return NextResponse.json({ error: "Monthly AI generation limit reached.", code: "PLAN_LIMIT_EXCEEDED" }, { status: 429 });
  }

  await inngest.send({
    name: "policy/generate.requested",
    data: {
      organizationId: ctx.organizationId,
      templateKey: parsed.data.templateKey,
      userId: ctx.userId,
    },
  });

  return NextResponse.json({ data: { queued: true, templateKey: parsed.data.templateKey } });
}
