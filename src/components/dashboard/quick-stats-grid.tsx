import { FileText, CheckSquare, Upload, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface QuickStatsGridProps {
  controls: { complete: number; total: number };
  policies: { approved: number; total: number };
  evidenceCount: number;
  vendorCount: number;
}

export function QuickStatsGrid({ controls, policies, evidenceCount, vendorCount }: QuickStatsGridProps) {
  const stats = [
    {
      label: "Policies",
      value: `${policies.approved}/${policies.total}`,
      sub: "approved",
      icon: FileText,
      color: "text-blue-600",
      bg: "bg-blue-50 dark:bg-blue-950",
    },
    {
      label: "Controls",
      value: `${controls.complete}/${controls.total}`,
      sub: "complete",
      icon: CheckSquare,
      color: "text-green-600",
      bg: "bg-green-50 dark:bg-green-950",
    },
    {
      label: "Evidence",
      value: evidenceCount.toString(),
      sub: "items uploaded",
      icon: Upload,
      color: "text-purple-600",
      bg: "bg-purple-50 dark:bg-purple-950",
    },
    {
      label: "Vendors",
      value: vendorCount.toString(),
      sub: "in register",
      icon: Building2,
      color: "text-amber-600",
      bg: "bg-amber-50 dark:bg-amber-950",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map(({ label, value, sub, icon: Icon, color, bg }) => (
        <Card key={label}>
          <CardContent className="pt-5">
            <div className="flex items-start gap-4">
              <div className={`rounded-lg p-2 ${bg}`}>
                <Icon className={`h-5 w-5 ${color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold">{value}</p>
                <p className="text-xs text-muted-foreground">
                  {label} — {sub}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
