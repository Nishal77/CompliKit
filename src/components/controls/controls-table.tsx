"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { buttonVariants } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ControlStatusBadge } from "@/components/shared/status-badge";
import { formatDate } from "@/lib/utils";
import type { SOC2Control } from "@/types/soc2";
import type { ControlInstance, ControlStatus } from "@prisma/client";
import { CONTROL_CATEGORIES } from "@/constants/soc2-controls";

interface ControlRow extends ControlInstance {
  catalogControl?: SOC2Control;
  evidenceCount: number;
}

interface ControlsTableProps {
  controls: ControlRow[];
  categories: typeof CONTROL_CATEGORIES;
}

export function ControlsTable({ controls, categories }: ControlsTableProps) {
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = controls.filter((c) => {
    if (categoryFilter !== "all" && c.catalogControl?.category !== categoryFilter) return false;
    if (statusFilter !== "all" && c.status !== statusFilter) return false;
    return true;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <Select value={categoryFilter} onValueChange={(v) => setCategoryFilter(v ?? "all")}>
          <SelectTrigger className="w-56">
            <SelectValue placeholder="All categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.id}>
                {cat.id} — {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v ?? "all")}>
          <SelectTrigger className="w-44">
            <SelectValue placeholder="All statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="NOT_STARTED">Not Started</SelectItem>
            <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
            <SelectItem value="NEEDS_REVIEW">Needs Review</SelectItem>
            <SelectItem value="COMPLETE">Complete</SelectItem>
            <SelectItem value="NOT_APPLICABLE">N/A</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-8" />
              <TableHead className="w-20">Control</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="w-32">Status</TableHead>
              <TableHead className="w-24">Evidence</TableHead>
              <TableHead className="w-28">Due Date</TableHead>
              <TableHead className="w-20" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((control) => (
              <>
                <TableRow
                  key={control.id}
                  className="cursor-pointer"
                  onClick={() => setExpandedId(expandedId === control.id ? null : control.id)}
                >
                  <TableCell>
                    {expandedId === control.id ? (
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    )}
                  </TableCell>
                  <TableCell className="font-mono text-xs font-medium">
                    {control.controlId}
                  </TableCell>
                  <TableCell className="text-sm">
                    {control.catalogControl?.title ?? control.controlId}
                  </TableCell>
                  <TableCell>
                    <ControlStatusBadge status={control.status as ControlStatus} />
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {control.evidenceCount} item{control.evidenceCount !== 1 ? "s" : ""}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {control.dueDate ? formatDate(control.dueDate) : "—"}
                  </TableCell>
                  <TableCell onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                    <Link
                      href={`/controls/${control.id}`}
                      className={buttonVariants({ variant: "ghost", size: "sm" })}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </TableCell>
                </TableRow>

                {expandedId === control.id && (
                  <TableRow key={`${control.id}-expanded`} className="bg-muted/30">
                    <TableCell colSpan={7} className="py-4 pl-10">
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-medium text-muted-foreground text-xs uppercase tracking-wide mb-1">Description</p>
                          <p>{control.catalogControl?.description}</p>
                        </div>
                        <div>
                          <p className="font-medium text-muted-foreground text-xs uppercase tracking-wide mb-1">Implementation Guidance</p>
                          <p className="text-muted-foreground">{control.catalogControl?.guidance}</p>
                        </div>
                        {(control.catalogControl?.commonEvidence?.length ?? 0) > 0 && (
                          <div>
                            <p className="font-medium text-muted-foreground text-xs uppercase tracking-wide mb-1">Common Evidence</p>
                            <ul className="list-disc list-inside space-y-0.5 text-muted-foreground">
                              {control.catalogControl?.commonEvidence.map((e) => (
                                <li key={e}>{e}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
