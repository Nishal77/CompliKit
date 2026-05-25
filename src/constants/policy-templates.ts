import type { PolicyTemplate } from "@/types/soc2";

export const POLICY_TEMPLATES: PolicyTemplate[] = [
  {
    key: "acceptable_use",
    name: "Acceptable Use Policy",
    description: "Defines how employees may use company systems, devices, and data.",
    requiredFor: ["CC1.1", "CC1.5", "CC2.2"],
    icon: "Shield",
  },
  {
    key: "access_control",
    name: "Access Control Policy",
    description: "Defines how access to systems and data is granted, reviewed, and revoked.",
    requiredFor: ["CC6.1", "CC6.2", "CC6.3", "CC6.5"],
    icon: "Lock",
  },
  {
    key: "incident_response",
    name: "Incident Response Plan",
    description: "Defines how security incidents are detected, contained, and resolved.",
    requiredFor: ["CC7.3", "CC7.4", "CC7.5"],
    icon: "AlertTriangle",
  },
  {
    key: "change_management",
    name: "Change Management Policy",
    description: "Defines the process for reviewing and approving changes to production systems.",
    requiredFor: ["CC8.1", "CC3.4"],
    icon: "GitPullRequest",
  },
  {
    key: "risk_assessment",
    name: "Risk Assessment Policy",
    description: "Defines how risks are identified, analyzed, and treated.",
    requiredFor: ["CC3.1", "CC3.2", "CC9.1"],
    icon: "BarChart2",
  },
  {
    key: "data_classification",
    name: "Data Classification Policy",
    description: "Defines data categories, handling requirements, and retention rules.",
    requiredFor: ["CC6.7", "CC7.5"],
    icon: "Database",
  },
  {
    key: "vendor_management",
    name: "Vendor Management Policy",
    description: "Defines how third-party vendors are assessed and managed.",
    requiredFor: ["CC9.2"],
    icon: "Building2",
  },
  {
    key: "business_continuity",
    name: "Business Continuity Plan",
    description: "Defines how the business recovers from disruptions.",
    requiredFor: ["A1.1", "A1.2", "A1.3"],
    icon: "RefreshCw",
  },
  {
    key: "password_policy",
    name: "Password & Authentication Policy",
    description: "Defines password requirements, MFA, and authentication standards.",
    requiredFor: ["CC6.1", "CC5.2"],
    icon: "Key",
  },
  {
    key: "employee_security",
    name: "Employee Security Awareness Policy",
    description: "Defines security training requirements and employee responsibilities.",
    requiredFor: ["CC1.4", "CC5.3"],
    icon: "Users",
  },
];

export function getPolicyTemplateByKey(key: string): PolicyTemplate | undefined {
  return POLICY_TEMPLATES.find((t) => t.key === key);
}
