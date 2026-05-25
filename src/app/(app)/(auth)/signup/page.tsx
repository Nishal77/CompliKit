"use client";

import React, { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Loader2, AlertCircle, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = "credentials" | "verify";

export default function SignUpPage() {
  const { signUp, errors, fetchStatus } = useSignUp();
  const router = useRouter();

  const [step, setStep] = useState<Step>("credentials");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isLoading = fetchStatus === "fetching";

  const fieldErrors = errors?.fields ?? {};
  const globalError =
    errors?.global?.[0]?.message ??
    null;

  async function handleCredentials(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await signUp.password({
      emailAddress: email,
      password,
      firstName: firstName || undefined,
      lastName: lastName || undefined,
    });

    if (error) return;

    // Trigger email OTP
    const { error: sendError } = await signUp.verifications.sendEmailCode();
    if (sendError) return;

    setStep("verify");
  }

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await signUp.verifications.verifyEmailCode({ code });
    if (error) return;

    if (signUp.status === "complete") {
      await signUp.finalize({
        navigate: ({ session, decorateUrl }) => {
          if (session?.currentTask) return;
          const url = decorateUrl("/onboarding");
          if (url.startsWith("http")) {
            window.location.href = url;
          } else {
            router.push(url);
          }
        },
      });
    }
  }

  async function resendCode() {
    await signUp.verifications.sendEmailCode();
  }

  // ── Verify step ─────────────────────────────────────────────────────────────
  if (step === "verify") {
    return (
      <div className="space-y-6">
        <div className="space-y-1">
          <div className="w-12 h-12 rounded-full bg-[#0D7377]/10 flex items-center justify-center mb-4">
            <Mail className="h-5 w-5 text-[#0D7377]" />
          </div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Check your email</h1>
          <p className="text-muted-foreground text-sm">
            We sent a 6-digit code to <span className="font-medium text-foreground">{email}</span>.
            Enter it below to verify your account.
          </p>
        </div>

        <form onSubmit={handleVerify} className="space-y-4">
          {globalError && (
            <div className="flex items-start gap-2.5 rounded-lg border border-destructive/30 bg-destructive/8 px-4 py-3">
              <AlertCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
              <p className="text-sm text-destructive leading-snug">{globalError}</p>
            </div>
          )}

          <div className="space-y-1.5">
            <label htmlFor="code" className="text-sm font-medium text-foreground">
              Verification code
            </label>
            <input
              id="code"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              required
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
              disabled={isLoading}
              placeholder="123456"
              className={cn(
                "w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground",
                "placeholder:text-muted-foreground/60 tracking-widest text-center text-lg font-mono",
                "outline-none transition focus:ring-2 focus:ring-ring focus:border-ring",
                fieldErrors.code ? "border-destructive" : "border-input",
                "disabled:opacity-60 disabled:cursor-not-allowed"
              )}
            />
            {fieldErrors.code && (
              <p className="text-xs text-destructive">{fieldErrors.code.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading || code.length < 6}
            className={cn(
              "w-full flex items-center justify-center gap-2 rounded-lg",
              "bg-[#1B3A6B] hover:bg-[#1B3A6B]/90 text-white",
              "px-4 py-2.5 text-sm font-medium transition",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              "disabled:opacity-60 disabled:cursor-not-allowed"
            )}
          >
            {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
            {isLoading ? "Verifying…" : "Verify email"}
          </button>
        </form>

        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Didn&apos;t receive it?{" "}
            <button
              type="button"
              onClick={resendCode}
              disabled={isLoading}
              className="text-[#0D7377] hover:underline font-medium disabled:opacity-60"
            >
              Resend code
            </button>
          </p>
          <button
            type="button"
            onClick={() => {
              setStep("credentials");
              setCode("");
            }}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Use a different email
          </button>
        </div>
      </div>
    );
  }

  // ── Credentials step ────────────────────────────────────────────────────────
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-foreground tracking-tight">Create your account</h1>
        <p className="text-muted-foreground text-sm">
          Start your 14-day free trial. No credit card required.
        </p>
      </div>

      <form onSubmit={handleCredentials} className="space-y-4">
        {globalError && (
          <div className="flex items-start gap-2.5 rounded-lg border border-destructive/30 bg-destructive/8 px-4 py-3">
            <AlertCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
            <p className="text-sm text-destructive leading-snug">{globalError}</p>
          </div>
        )}

        {/* Name row */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label htmlFor="firstName" className="text-sm font-medium text-foreground">
              First name
            </label>
            <input
              id="firstName"
              type="text"
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={isLoading}
              placeholder="Jane"
              className={cn(
                "w-full rounded-lg border border-input bg-background px-3.5 py-2.5",
                "text-sm text-foreground placeholder:text-muted-foreground/60",
                "outline-none transition focus:ring-2 focus:ring-ring focus:border-ring",
                "disabled:opacity-60 disabled:cursor-not-allowed"
              )}
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="lastName" className="text-sm font-medium text-foreground">
              Last name
            </label>
            <input
              id="lastName"
              type="text"
              autoComplete="family-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              disabled={isLoading}
              placeholder="Smith"
              className={cn(
                "w-full rounded-lg border border-input bg-background px-3.5 py-2.5",
                "text-sm text-foreground placeholder:text-muted-foreground/60",
                "outline-none transition focus:ring-2 focus:ring-ring focus:border-ring",
                "disabled:opacity-60 disabled:cursor-not-allowed"
              )}
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Work email
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
              "outline-none transition focus:ring-2 focus:ring-ring focus:border-ring",
              fieldErrors.emailAddress ? "border-destructive" : "border-input",
              "disabled:opacity-60 disabled:cursor-not-allowed"
            )}
          />
          {fieldErrors.emailAddress && (
            <p className="text-xs text-destructive">{fieldErrors.emailAddress.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <label htmlFor="password" className="text-sm font-medium text-foreground">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              placeholder="Min. 8 characters"
              className={cn(
                "w-full rounded-lg border bg-background px-3.5 py-2.5 pr-10 text-sm text-foreground",
                "placeholder:text-muted-foreground/60",
                "outline-none transition focus:ring-2 focus:ring-ring focus:border-ring",
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
            <p className="text-xs text-destructive">{fieldErrors.password.message}</p>
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
          {isLoading ? "Creating account…" : "Start free trial"}
        </button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-background px-3 text-muted-foreground">
            Already have an account?
          </span>
        </div>
      </div>

      <Link
        href="/login"
        className={cn(
          "flex w-full items-center justify-center rounded-lg border border-input",
          "bg-background hover:bg-secondary/60 px-4 py-2.5",
          "text-sm font-medium text-foreground transition",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        )}
      >
        Sign in instead
      </Link>

      <p className="text-center text-xs text-muted-foreground/60">
        By creating an account, you agree to our{" "}
        <Link href="/terms" className="underline hover:text-foreground">Terms</Link>
        {" "}and{" "}
        <Link href="/privacy" className="underline hover:text-foreground">Privacy Policy</Link>.
      </p>
    </div>
  );
}
