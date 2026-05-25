"use client";

import React, { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Loader2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const { signIn, errors, fetchStatus } = useSignIn();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isLoading = fetchStatus === "fetching";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await signIn.password({
      emailAddress: email,
      password,
    });

    if (error) return;

    if (signIn.status === "complete") {
      await signIn.finalize({
        navigate: ({ session, decorateUrl }) => {
          if (session?.currentTask) return;
          const url = decorateUrl("/overview");
          if (url.startsWith("http")) {
            window.location.href = url;
          } else {
            router.push(url);
          }
        },
      });
    }
  }

  // Flatten Clerk errors for display
  const fieldErrors = errors?.fields ?? {};
  const globalError =
    errors?.global?.[0]?.message ??
    fieldErrors.identifier?.message ??
    null;

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-foreground tracking-tight">Welcome back</h1>
        <p className="text-muted-foreground text-sm">
          Sign in to your CompliKit account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Global error */}
        {globalError && (
          <div className="flex items-start gap-2.5 rounded-lg border border-destructive/30 bg-destructive/8 px-4 py-3">
            <AlertCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
            <p className="text-sm text-destructive leading-snug">{globalError}</p>
          </div>
        )}

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            placeholder="you@company.com"
            className={cn(
              "w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground",
              "placeholder:text-muted-foreground/60",
              "outline-none transition",
              "focus:ring-2 focus:ring-ring focus:border-ring",
              fieldErrors.identifier ? "border-destructive" : "border-input",
              "disabled:opacity-60 disabled:cursor-not-allowed"
            )}
          />
          {fieldErrors.identifier && (
            <p className="text-xs text-destructive mt-1">{fieldErrors.identifier.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium text-foreground">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              placeholder="••••••••"
              className={cn(
                "w-full rounded-lg border bg-background px-3.5 py-2.5 pr-10 text-sm text-foreground",
                "placeholder:text-muted-foreground/60",
                "outline-none transition",
                "focus:ring-2 focus:ring-ring focus:border-ring",
                fieldErrors.password ? "border-destructive" : "border-input",
                "disabled:opacity-60 disabled:cursor-not-allowed"
              )}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {fieldErrors.password && (
            <p className="text-xs text-destructive mt-1">{fieldErrors.password.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading || !email || !password}
          className={cn(
            "w-full flex items-center justify-center gap-2 rounded-lg",
            "bg-[#1B3A6B] hover:bg-[#1B3A6B]/90 text-white",
            "px-4 py-2.5 text-sm font-medium transition",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            "disabled:opacity-60 disabled:cursor-not-allowed"
          )}
        >
          {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
          {isLoading ? "Signing in…" : "Sign in"}
        </button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-background px-3 text-muted-foreground">
            Don&apos;t have an account?
          </span>
        </div>
      </div>

      <Link
        href="/signup"
        className={cn(
          "flex w-full items-center justify-center rounded-lg border border-input",
          "bg-background hover:bg-secondary/60 px-4 py-2.5",
          "text-sm font-medium text-foreground transition",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        )}
      >
        Create a free account
      </Link>

      <p className="text-center text-xs text-muted-foreground/60">
        By signing in, you agree to our{" "}
        <Link href="/terms" className="underline hover:text-foreground">Terms</Link>
        {" "}and{" "}
        <Link href="/privacy" className="underline hover:text-foreground">Privacy Policy</Link>.
      </p>
    </div>
  );
}
