import Anthropic from "@anthropic-ai/sdk";

const globalForAI = globalThis as unknown as { anthropic: Anthropic };

export const anthropic =
  globalForAI.anthropic ??
  new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! });

if (process.env.NODE_ENV !== "production") globalForAI.anthropic = anthropic;

export const MODELS = {
  FAST: "claude-haiku-4-5-20251001",
  QUALITY: "claude-sonnet-4-5",
} as const;

export function buildPolicyPrompt(params: {
  companyName: string;
  industry: string;
  employeeCount: string;
  techStack: string[];
  policyType: string;
  complianceGoal: "SOC2_TYPE1" | "SOC2_TYPE2";
}): string {
  return `You are a compliance expert writing a ${params.policyType} policy for a B2B SaaS company.

Company details:
- Name: ${params.companyName}
- Industry: ${params.industry}
- Team size: ${params.employeeCount}
- Tech stack: ${params.techStack.join(", ")}
- Compliance goal: ${params.complianceGoal === "SOC2_TYPE1" ? "SOC 2 Type 1 audit" : "SOC 2 Type 2 audit"}

Write a complete, professional ${params.policyType} that:
1. Is specific to this company's tech stack and industry
2. Uses plain English — no unnecessary legal jargon
3. Is appropriate for a startup team of ${params.employeeCount} people
4. Meets AICPA SOC 2 Trust Services Criteria requirements
5. Is formatted in Markdown with clear headings and sections
6. Includes version number (1.0), effective date (today), and a review date (1 year from today)
7. Is immediately actionable — real guidance, not boilerplate

DO NOT include placeholder text like [INSERT NAME HERE]. Fill in everything with appropriate defaults for this company.
DO NOT write a generic policy. Reference their specific tools (${params.techStack.join(", ")}) where relevant.`;
}
