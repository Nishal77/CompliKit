"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import {
  FileText, Shield, Lock, AlertTriangle, GitPullRequest,
  BarChart2, Database, Building2, RefreshCw, Key, Users,
  Loader2, Plus, ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { PolicyStatusBadge } from "@/components/shared/status-badge";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils";
import type { PolicyTemplate } from "@/types/soc2";
import type { Policy } from "@prisma/client";

const ICON_MAP: Record<string, React.ElementType> = {
  Shield, Lock, AlertTriangle, GitPullRequest, BarChart2,
  Database, Building2, RefreshCw, Key, Users, FileText,
};

interface PolicyCardProps {
  template: PolicyTemplate;
  policy: Policy | null;
  canGenerate: boolean;
}

export function PolicyCard({ template, policy, canGenerate }: PolicyCardProps) {
  const [generating, setGenerating] = useState(false);
  const Icon = ICON_MAP[template.icon] ?? FileText;

  async function handleGenerate() {
    if (!canGenerate) {
      toast.error("Upgrade your plan to generate AI policies.");
      return;
    }

    setGenerating(true);
    try {
      const res = await fetch("/api/ai/generate-policy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ templateKey: template.key }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Generation failed");
      }

      toast.success("Policy generation queued! It'll be ready in a moment.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Generation failed");
    } finally {
      setGenerating(false);
    }
  }

  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <CardTitle className="text-sm font-semibold leading-snug">{template.name}</CardTitle>
          </div>
          {policy && <PolicyStatusBadge status={policy.status} />}
        </div>
      </CardHeader>

      <CardContent className="flex-1 pb-3">
        <p className="text-xs text-muted-foreground">{template.description}</p>
        {policy && (
          <p className="mt-2 text-xs text-muted-foreground">
            Updated {formatDate(policy.updatedAt)}
          </p>
        )}
      </CardContent>

      <CardFooter className="pt-0">
        {policy ? (
          <Link
            href={`/policies/${policy.id}`}
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full")}
          >
            <ExternalLink className="mr-2 h-3.5 w-3.5" />
            Edit Policy
          </Link>
        ) : (
          <Button
            size="sm"
            className="w-full"
            onClick={handleGenerate}
            disabled={generating}
          >
            {generating ? (
              <><Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" /> Generating...</>
            ) : (
              <><Plus className="mr-2 h-3.5 w-3.5" /> Generate Policy</>
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
