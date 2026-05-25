import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { ControlStatusBadge } from "@/components/shared/status-badge";
import { getControlById } from "@/constants/soc2-controls";
import type { ControlStatus } from "@prisma/client";

interface ActionItem {
  id: string;
  controlId: string;
  status: ControlStatus;
}

export function ActionItemsList({ controls }: { controls: ActionItem[] }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium">Action Items</CardTitle>
        <Link href="/controls" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
          View all <ArrowRight className="h-3 w-3" />
        </Link>
      </CardHeader>
      <CardContent>
        {controls.length === 0 ? (
          <p className="text-sm text-muted-foreground">All controls are complete!</p>
        ) : (
          <ul className="space-y-3">
            {controls.map((item) => {
              const control = getControlById(item.controlId);
              return (
                <li key={item.id} className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">
                      {item.controlId}: {control?.title ?? "Unknown Control"}
                    </p>
                    <p className="text-xs text-muted-foreground">{control?.categoryName}</p>
                  </div>
                  <ControlStatusBadge status={item.status} />
                </li>
              );
            })}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
