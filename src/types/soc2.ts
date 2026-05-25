export type ControlDifficulty = "low" | "medium" | "high";

export interface SOC2Control {
  id: string;
  category: string;
  categoryName: string;
  title: string;
  description: string;
  guidance: string;
  commonEvidence: string[];
  relatedPolicies: string[];
  difficulty: ControlDifficulty;
  estimatedHours: number;
}

export interface PolicyTemplate {
  key: string;
  name: string;
  description: string;
  requiredFor: string[];
  icon: string;
}
