import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, formatDistanceToNow } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  return format(new Date(date), "MMM d, yyyy");
}

export function formatRelativeDate(date: Date | string): string {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function calculateReadinessScore(
  controls: Array<{ status: string }>
): number {
  const applicable = controls.filter((c) => c.status !== "NOT_APPLICABLE");
  if (applicable.length === 0) return 0;

  const weights: Record<string, number> = {
    NOT_STARTED: 0,
    IN_PROGRESS: 0.4,
    NEEDS_REVIEW: 0.7,
    COMPLETE: 1.0,
  };

  const totalWeight = applicable.reduce(
    (sum, c) => sum + (weights[c.status] ?? 0),
    0
  );
  return Math.round((totalWeight / applicable.length) * 100);
}

export function getInitials(firstName?: string | null, lastName?: string | null): string {
  const f = firstName?.[0] ?? "";
  const l = lastName?.[0] ?? "";
  return `${f}${l}`.toUpperCase() || "?";
}

export function isExpired(date: Date | string): boolean {
  return new Date(date) < new Date();
}

export function daysUntil(date: Date | string): number {
  const diff = new Date(date).getTime() - Date.now();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
