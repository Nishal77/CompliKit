import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import type { Organization, OrgRole } from "@prisma/client";

export interface AuthContext {
  userId: string;
  clerkId: string;
  organizationId: string;
  role: OrgRole;
  plan: Organization["plan"];
}

/**
 * Resolves Clerk session → internal user → primary org membership.
 * Returns null if not authenticated or has no org.
 */
export async function getAuthContext(): Promise<AuthContext | null> {
  const { userId: clerkId } = await auth();
  if (!clerkId) return null;

  const membership = await db.organizationMember.findFirst({
    where: { user: { clerkId } },
    include: { organization: true },
    orderBy: { joinedAt: "asc" },
  });

  if (!membership) return null;

  return {
    userId: membership.userId,
    clerkId,
    organizationId: membership.organizationId,
    role: membership.role,
    plan: membership.organization.plan,
  };
}

/**
 * Like getAuthContext but throws 401 instead of returning null.
 */
export async function requireAuth(): Promise<AuthContext> {
  const ctx = await getAuthContext();
  if (!ctx) throw new Response("Unauthorized", { status: 401 });
  return ctx;
}

export function canEdit(role: OrgRole): boolean {
  return role === "OWNER" || role === "ADMIN" || role === "MEMBER";
}

export function canAdmin(role: OrgRole): boolean {
  return role === "OWNER" || role === "ADMIN";
}

export function isOwner(role: OrgRole): boolean {
  return role === "OWNER";
}
