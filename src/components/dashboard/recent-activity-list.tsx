import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";

interface ActivityEntry {
  id: string;
  action: string;
  createdAt: string;
  user: { firstName: string | null; lastName: string | null; avatarUrl: string | null };
}

const ACTION_LABELS: Record<string, string> = {
  "policy.generated": "Generated a policy",
  "policy.approved": "Approved a policy",
  "control.completed": "Marked a control complete",
  "evidence.uploaded": "Uploaded evidence",
  "vendor.added": "Added a vendor",
  "report.generated": "Generated a report",
};

export function RecentActivityList({ activities }: { activities: ActivityEntry[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        {activities.length === 0 ? (
          <p className="text-sm text-muted-foreground">No activity yet.</p>
        ) : (
          <ul className="space-y-3">
            {activities.map((entry) => (
              <li key={entry.id} className="flex items-center gap-3">
                <Avatar className="h-7 w-7 text-xs">
                  <AvatarImage src={entry.user.avatarUrl ?? undefined} />
                  <AvatarFallback>
                    {getInitials(entry.user.firstName, entry.user.lastName)}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm">
                    {ACTION_LABELS[entry.action] ?? entry.action}
                  </p>
                  <p className="text-xs text-muted-foreground">{entry.createdAt}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
