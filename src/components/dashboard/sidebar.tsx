"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  CheckSquare,
  Upload,
  Building2,
  ClipboardList,
  BarChart3,
  Users,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/overview", label: "Overview", icon: LayoutDashboard },
  { href: "/policies", label: "Policies", icon: FileText },
  { href: "/controls", label: "Controls", icon: CheckSquare },
  { href: "/evidence", label: "Evidence", icon: Upload },
  { href: "/vendors", label: "Vendors", icon: Building2 },
  { href: "/questionnaires", label: "Questionnaires", icon: ClipboardList },
  { href: "/report", label: "Reports", icon: BarChart3 },
  { href: "/team", label: "Team", icon: Users },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-60 flex-col border-r border-border bg-card">
      <div className="flex h-16 items-center gap-2.5 border-b border-border px-5">
        <ShieldCheck className="h-6 w-6 text-primary" />
        <span className="text-base font-semibold tracking-tight">CompliKit</span>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-0.5">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-border p-3">
        <p className="px-3 text-xs text-muted-foreground">
          SOC 2 Compliance Platform
        </p>
      </div>
    </aside>
  );
}
