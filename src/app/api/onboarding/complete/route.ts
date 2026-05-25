import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { inngest } from "@/inngest/client";
import { slugify } from "@/lib/utils";

const schema = z.object({
  companyName: z.string().min(1),
  website: z.string().url().optional().or(z.literal("")),
  industry: z.string().min(1),
  employeeCount: z.string().min(1),
  techStack: z.array(z.string()),
  complianceGoal: z.enum(["SOC2_TYPE1", "SOC2_TYPE2"]),
});

export async function POST(req: Request) {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 });
  }

  const dbUser = await db.user.findUnique({ where: { clerkId } });
  if (!dbUser) {
    return NextResponse.json({ error: "User not found", code: "NOT_FOUND" }, { status: 404 });
  }

  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request", code: "VALIDATION_ERROR", details: parsed.error }, { status: 400 });
  }

  const { companyName, website, industry, employeeCount, techStack, complianceGoal } = parsed.data;
  const userId = dbUser.id;

  // Check if user already owns an org (idempotent)
  const existingMembership = await db.organizationMember.findFirst({
    where: { userId, role: "OWNER" },
    include: { organization: true },
  });

  const trialEndsAt = new Date();
  trialEndsAt.setDate(trialEndsAt.getDate() + 14);

  let orgId: string;

  if (existingMembership) {
    // Update existing org
    await db.organization.update({
      where: { id: existingMembership.organizationId },
      data: {
        name: companyName,
        website: website || null,
        industry,
        employeeCount,
        techStack,
        frameworks: [complianceGoal],
      },
    });
    orgId = existingMembership.organizationId;
  } else {
    // Generate unique slug
    const baseSlug = slugify(companyName);
    const count = await db.organization.count({ where: { slug: { startsWith: baseSlug } } });
    const slug = count === 0 ? baseSlug : `${baseSlug}-${count}`;

    const org = await db.organization.create({
      data: {
        name: companyName,
        slug,
        website: website || null,
        industry,
        employeeCount,
        techStack,
        frameworks: [complianceGoal],
        plan: "FREE",
        trialEndsAt,
      },
    });

    await db.organizationMember.create({
      data: { organizationId: org.id, userId, role: "OWNER" },
    });

    orgId = org.id;
  }

  await inngest.send([
    {
      name: "org/onboarding.completed",
      data: { organizationId: orgId },
    },
    {
      name: "policy/generate.requested",
      data: { organizationId: orgId, templateKey: "acceptable_use", userId },
    },
  ]);

  return NextResponse.json({ data: { organizationId: orgId } });
}
