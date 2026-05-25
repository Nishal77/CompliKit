export type { Plan, OrgRole, PolicyStatus, ControlStatus, EvidenceType, RiskLevel } from "@prisma/client";

export interface ApiError {
  error: string;
  code: string;
  details?: unknown;
}

export interface ApiResponse<T> {
  data: T;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}
