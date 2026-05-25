import { cn } from "@/lib/utils";
import type { ControlStatus, PolicyStatus, RiskLevel } from "@prisma/client";

type StatusVariant = "success" | "warning" | "danger" | "info" | "neutral";

const DOT_COLORS: Record<StatusVariant, string> = {
  success: "bg-green-500",
  warning: "bg-amber-500",
  danger: "bg-red-500",
  info: "bg-blue-500",
  neutral: "bg-muted-foreground",
};

const TEXT_COLORS: Record<StatusVariant, string> = {
  success: "text-green-700 dark:text-green-400",
  warning: "text-amber-700 dark:text-amber-400",
  danger: "text-red-700 dark:text-red-400",
  info: "text-blue-700 dark:text-blue-400",
  neutral: "text-muted-foreground",
};

function StatusBadge({ variant, label }: { variant: StatusVariant; label: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-xs font-medium", TEXT_COLORS[variant])}>
      <span className={cn("h-1.5 w-1.5 rounded-full", DOT_COLORS[variant])} />
      {label}
    </span>
  );
}

export function ControlStatusBadge({ status }: { status: ControlStatus }) {
  const map: Record<ControlStatus, { variant: StatusVariant; label: string }> = {
    NOT_STARTED: { variant: "neutral", label: "Not Started" },
    IN_PROGRESS: { variant: "info", label: "In Progress" },
    NEEDS_REVIEW: { variant: "warning", label: "Needs Review" },
    COMPLETE: { variant: "success", label: "Complete" },
    NOT_APPLICABLE: { variant: "neutral", label: "N/A" },
  };
  const { variant, label } = map[status];
  return <StatusBadge variant={variant} label={label} />;
}

export function PolicyStatusBadge({ status }: { status: PolicyStatus }) {
  const map: Record<PolicyStatus, { variant: StatusVariant; label: string }> = {
    DRAFT: { variant: "neutral", label: "Draft" },
    REVIEW: { variant: "warning", label: "In Review" },
    APPROVED: { variant: "success", label: "Approved" },
    OUTDATED: { variant: "danger", label: "Outdated" },
  };
  const { variant, label } = map[status];
  return <StatusBadge variant={variant} label={label} />;
}

export function RiskLevelBadge({ level }: { level: RiskLevel }) {
  const map: Record<RiskLevel, { variant: StatusVariant; label: string }> = {
    LOW: { variant: "success", label: "Low" },
    MEDIUM: { variant: "warning", label: "Medium" },
    HIGH: { variant: "danger", label: "High" },
    CRITICAL: { variant: "danger", label: "Critical" },
  };
  const { variant, label } = map[level];
  return <StatusBadge variant={variant} label={label} />;
}
