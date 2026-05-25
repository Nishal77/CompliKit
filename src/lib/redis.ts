import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export const aiRatelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "1 m"),
  analytics: true,
  prefix: "ratelimit:ai",
});

export async function getMonthlyAIUsage(organizationId: string): Promise<number> {
  const now = new Date();
  const key = `ai:usage:${organizationId}:${now.getFullYear()}:${now.getMonth() + 1}`;
  const usage = await redis.get<number>(key);
  return usage ?? 0;
}

export async function incrementMonthlyAIUsage(organizationId: string): Promise<void> {
  const now = new Date();
  const key = `ai:usage:${organizationId}:${now.getFullYear()}:${now.getMonth() + 1}`;
  // TTL = ~35 days so it auto-expires after the billing month
  await redis.incr(key);
  await redis.expire(key, 60 * 60 * 24 * 35);
}
