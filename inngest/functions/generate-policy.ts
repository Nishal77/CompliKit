import { inngest } from "../client";
import { db } from "@/lib/db";
import { anthropic, MODELS, buildPolicyPrompt } from "@/lib/ai";
import { getPolicyTemplateByKey } from "@/constants/policy-templates";
import { incrementMonthlyAIUsage } from "@/lib/redis";

export const generatePolicy = inngest.createFunction(
  {
    id: "generate-policy",
    name: "Generate AI Policy",
    triggers: [{ event: "policy/generate.requested" }],
    concurrency: { limit: 5 },
  },
  async ({ event, step }) => {
    const { organizationId, templateKey, userId } = event.data as {
      organizationId: string;
      templateKey: string;
      userId: string;
    };

    const org = await step.run("fetch-org", () =>
      db.organization.findUniqueOrThrow({ where: { id: organizationId } })
    );

    const template = getPolicyTemplateByKey(templateKey);
    if (!template) throw new Error(`Unknown template key: ${templateKey}`);

    const content = await step.run("call-claude", async () => {
      const message = await anthropic.messages.create({
        model: MODELS.QUALITY,
        max_tokens: 4096,
        messages: [
          {
            role: "user",
            content: buildPolicyPrompt({
              companyName: org.name,
              industry: org.industry ?? "Software",
              employeeCount: org.employeeCount ?? "1-10",
              techStack: org.techStack,
              policyType: template.name,
              complianceGoal: (org.frameworks[0] as "SOC2_TYPE1" | "SOC2_TYPE2") ?? "SOC2_TYPE1",
            }),
          },
        ],
      });
      return message.content[0].type === "text" ? message.content[0].text : "";
    });

    await step.run("upsert-policy", () =>
      db.policy.upsert({
        where: { organizationId_templateKey: { organizationId, templateKey } },
        create: {
          organizationId,
          templateKey,
          title: template.name,
          content,
          status: "DRAFT",
          version: 1,
        },
        update: {
          content,
          status: "DRAFT",
          version: { increment: 1 },
          updatedAt: new Date(),
        },
      })
    );

    await step.run("track-usage", () => incrementMonthlyAIUsage(organizationId));

    await step.run("log-activity", () =>
      db.activityLog.create({
        data: {
          organizationId,
          userId,
          action: "policy.generated",
          entityType: "Policy",
          metadata: { templateKey },
        },
      })
    );

    return { templateKey, success: true };
  }
);
