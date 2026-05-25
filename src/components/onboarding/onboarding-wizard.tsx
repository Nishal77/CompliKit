"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ShieldCheck, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const TECH_STACK_OPTIONS = [
  "AWS", "GCP", "Azure", "GitHub", "GitLab", "Vercel", "Supabase",
  "PostgreSQL", "MySQL", "MongoDB", "Stripe", "Clerk", "Auth0",
  "Cloudflare", "Docker", "Kubernetes", "Datadog", "Sentry",
];

const INDUSTRIES = [
  "SaaS / Software", "Fintech", "Healthcare Tech", "EdTech",
  "E-commerce", "Cybersecurity", "Data / Analytics", "Other",
];

const EMPLOYEE_COUNTS = ["1-10", "11-25", "26-50", "51+"];

const step1Schema = z.object({
  companyName: z.string().min(1, "Required"),
  website: z.string().url("Enter a valid URL").optional().or(z.literal("")),
  industry: z.string().min(1, "Required"),
  employeeCount: z.string().min(1, "Required"),
});

type Step1Data = z.infer<typeof step1Schema>;

export function OnboardingWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [techStack, setTechStack] = useState<string[]>([]);
  const [complianceGoal, setComplianceGoal] = useState<"SOC2_TYPE1" | "SOC2_TYPE2">("SOC2_TYPE1");
  const [loading, setLoading] = useState(false);
  const [step1Data, setStep1Data] = useState<Step1Data | null>(null);

  const form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  function toggleTech(tech: string) {
    setTechStack((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  }

  async function handleFinish() {
    if (!step1Data) return;
    setLoading(true);

    try {
      const res = await fetch("/api/onboarding/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...step1Data,
          techStack,
          complianceGoal,
        }),
      });

      if (!res.ok) throw new Error("Onboarding failed");
      router.push("/overview");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <ShieldCheck className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-2xl font-bold">Welcome to CompliKit</h1>
          <p className="text-sm text-muted-foreground">
            Step {step} of {totalSteps} — let's set up your compliance workspace
          </p>
        </div>
      </div>

      <Progress value={progress} className="h-1.5" />

      {step === 1 && (
        <form
          onSubmit={form.handleSubmit((data) => {
            setStep1Data(data);
            setStep(2);
          })}
          className="space-y-5"
        >
          <h2 className="text-lg font-semibold">Company Info</h2>

          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input id="companyName" {...form.register("companyName")} placeholder="Acme Inc." />
            {form.formState.errors.companyName && (
              <p className="text-xs text-destructive">{form.formState.errors.companyName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input id="website" {...form.register("website")} placeholder="https://acme.com" />
          </div>

          <div className="space-y-2">
            <Label>Industry</Label>
            <div className="grid grid-cols-2 gap-2">
              {INDUSTRIES.map((ind) => (
                <button
                  key={ind}
                  type="button"
                  onClick={() => form.setValue("industry", ind)}
                  className={cn(
                    "rounded-lg border px-3 py-2 text-left text-sm transition-colors",
                    form.watch("industry") === ind
                      ? "border-primary bg-primary/10 font-medium"
                      : "border-border hover:bg-accent"
                  )}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Team Size</Label>
            <div className="flex gap-2">
              {EMPLOYEE_COUNTS.map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => form.setValue("employeeCount", count)}
                  className={cn(
                    "flex-1 rounded-lg border px-3 py-2 text-sm transition-colors",
                    form.watch("employeeCount") === count
                      ? "border-primary bg-primary/10 font-medium"
                      : "border-border hover:bg-accent"
                  )}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>

          <Button type="submit" className="w-full">
            Continue <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <h2 className="text-lg font-semibold">Tech Stack</h2>
          <p className="text-sm text-muted-foreground">
            Select the tools your company uses. We'll tailor your policies to your stack.
          </p>

          <div className="flex flex-wrap gap-2">
            {TECH_STACK_OPTIONS.map((tech) => (
              <button
                key={tech}
                type="button"
                onClick={() => toggleTech(tech)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-sm transition-colors",
                  techStack.includes(tech)
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:bg-accent"
                )}
              >
                {tech}
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setStep(1)} className="flex-1">Back</Button>
            <Button onClick={() => setStep(3)} className="flex-1">
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-5">
          <h2 className="text-lg font-semibold">Compliance Goal</h2>

          <div className="space-y-3">
            {[
              {
                value: "SOC2_TYPE1" as const,
                label: "SOC 2 Type 1",
                desc: "Point-in-time audit — faster to complete (4–8 weeks). Great starting point.",
              },
              {
                value: "SOC2_TYPE2" as const,
                label: "SOC 2 Type 2",
                desc: "Operational audit over 6–12 months. Required by most enterprise buyers.",
              },
            ].map(({ value, label, desc }) => (
              <button
                key={value}
                type="button"
                onClick={() => setComplianceGoal(value)}
                className={cn(
                  "w-full rounded-lg border p-4 text-left transition-colors",
                  complianceGoal === value
                    ? "border-primary bg-primary/10"
                    : "border-border hover:bg-accent"
                )}
              >
                <p className="font-medium">{label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setStep(2)} className="flex-1">Back</Button>
            <Button onClick={() => setStep(4)} className="flex-1">
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-5">
          <h2 className="text-lg font-semibold">Generate Your First Policy</h2>
          <p className="text-sm text-muted-foreground">
            We'll generate your Acceptable Use Policy as a preview of the WOW experience.
            All 10 policies will be queued in the background.
          </p>

          <div className="rounded-lg border border-dashed border-border bg-muted/30 p-6 text-center">
            <ShieldCheck className="mx-auto h-10 w-10 text-primary/60" />
            <p className="mt-3 font-medium">AI-Powered Policy Generation</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Tailored to {step1Data?.companyName ?? "your company"} using {techStack.length} tools in your stack
            </p>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setStep(3)} className="flex-1" disabled={loading}>Back</Button>
            <Button onClick={handleFinish} className="flex-1" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Setting up...
                </>
              ) : (
                <>Let's go! <ArrowRight className="ml-2 h-4 w-4" /></>
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
