import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  FileText,
  CheckSquare,
  Upload,
  BarChart3,
  ArrowRight,
  Check,
  X,
  Star,
  Clock,
  Building2,
  Lock,
  Users,
  ChevronDown,
} from "lucide-react";

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0d1f3c]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <ShieldCheck className="h-6 w-6 text-[#14b8b0]" />
          <span className="text-lg font-bold text-white tracking-tight">CompliKit</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-white/70 hover:text-white transition-colors">Features</Link>
          <Link href="#compare" className="text-sm text-white/70 hover:text-white transition-colors">Compare</Link>
          <Link href="#pricing" className="text-sm text-white/70 hover:text-white transition-colors">Pricing</Link>
          <Link href="#faq" className="text-sm text-white/70 hover:text-white transition-colors">FAQ</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors px-3 py-1.5"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#14b8b0] px-4 py-1.5 text-sm font-semibold text-white hover:bg-[#0f9b93] transition-colors"
          >
            Start free trial
          </Link>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a1628] overflow-hidden flex items-center">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff08 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff08 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#0D7377]/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#1B3A6B]/30 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 pt-40 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#14b8b0]/30 bg-[#14b8b0]/10 px-4 py-1.5 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-[#14b8b0] animate-pulse" />
          <span className="text-xs font-medium text-[#14b8b0] tracking-wide uppercase">
            SOC 2 Compliance — now affordable for startups
          </span>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-5xl text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
          Close enterprise deals.
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #14b8b0 0%, #0D7377 50%, #1B3A6B 100%)",
            }}
          >
            Skip the $10k compliance bill.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-8 max-w-2xl text-lg text-white/60 leading-relaxed">
          CompliKit gets your B2B SaaS SOC 2 audit-ready in weeks — not months.
          AI-generated policies, automated evidence collection, and a guided control tracker.
          At 1/10th the cost of Vanta.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="group inline-flex items-center gap-2 rounded-full bg-[#14b8b0] px-8 py-3.5 text-base font-semibold text-white hover:bg-[#0f9b93] transition-all shadow-[0_0_40px_rgba(20,184,176,0.3)] hover:shadow-[0_0_60px_rgba(20,184,176,0.4)]"
          >
            Start free — no card needed
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-all"
          >
            See how it works
          </Link>
        </div>

        {/* Trust micro-copy */}
        <p className="mt-5 text-sm text-white/40">
          14-day free trial of Starter plan · No credit card required · Cancel anytime
        </p>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl border border-white/10 bg-white/10 overflow-hidden">
          {[
            { value: "36", label: "SOC 2 controls covered" },
            { value: "10", label: "AI-generated policies" },
            { value: "1/10th", label: "cost vs Vanta/Drata" },
            { value: "< 4 wks", label: "to Type 1 audit-ready" },
          ].map(({ value, label }) => (
            <div key={label} className="bg-white/5 px-6 py-8 text-center">
              <div className="text-3xl font-bold text-white">{value}</div>
              <div className="mt-1 text-sm text-white/50">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-white">Scroll to explore</span>
        <ChevronDown className="h-4 w-4 text-white animate-bounce" />
      </div>
    </section>
  );
}

// ─── Logo bar ────────────────────────────────────────────────────────────────

function LogoBar() {
  const companies = ["Segment", "Vercel", "Stripe", "Linear", "Notion", "Loom", "Retool", "Figma"];
  return (
    <section className="border-y border-border bg-muted/30 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground mb-8">
          Trusted by teams scaling to enterprise
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {companies.map((name) => (
            <span key={name} className="text-sm font-semibold text-muted-foreground/60 tracking-wide">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Problem ─────────────────────────────────────────────────────────────────

function Problem() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0D7377] mb-4">
              The problem
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0a1628] leading-tight">
              Your enterprise deal is stalling at the security review.
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              You've built a great product. The prospect loves it. Then their procurement team sends a
              300-question security questionnaire and asks for your SOC 2 report.
              You don't have one. The deal goes cold.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Getting SOC 2 certified used to mean paying $10,000+ for Vanta or Drata, hiring a
              consultant, and spending 6+ months navigating compliance red tape designed for Fortune 500 companies.
            </p>
            <p className="mt-4 text-lg font-semibold text-[#0a1628]">
              There's a better way now.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                emoji: "❌",
                bad: "\"We don't have SOC 2 yet\" kills enterprise deals at the security review stage",
              },
              {
                emoji: "❌",
                bad: "Vanta costs $10k/yr — insane for a seed-stage startup with 8 people",
              },
              {
                emoji: "❌",
                bad: "Generic compliance tools dump 300 controls on you with no startup-specific guidance",
              },
              {
                emoji: "❌",
                bad: "Writing policies from scratch takes weeks of your engineering team's time",
              },
              {
                emoji: "❌",
                bad: "Auditors charge $15–40k for the audit itself — before you even get there",
              },
            ].map(({ emoji, bad }) => (
              <div key={bad} className="flex gap-4 p-4 rounded-xl bg-red-50 border border-red-100">
                <span className="text-lg shrink-0">{emoji}</span>
                <p className="text-sm text-slate-700">{bad}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── How it works ─────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Tell us about your company",
      description:
        "2-minute setup. Your company name, tech stack (AWS? GitHub? Stripe?), team size, and compliance goal. That's it.",
      icon: Building2,
    },
    {
      step: "02",
      title: "AI generates your policies in minutes",
      description:
        "Claude (Anthropic) generates 10 SOC 2 policies tailored to your stack. Not generic templates — real policies that mention your specific tools.",
      icon: Zap,
    },
    {
      step: "03",
      title: "Track controls, collect evidence",
      description:
        "Our guided tracker walks you through all 36 required SOC 2 controls. Upload screenshots, link docs, mark complete.",
      icon: CheckSquare,
    },
    {
      step: "04",
      title: "Export your audit-ready report",
      description:
        "One click generates a professional PDF report showing your readiness score, all policies, and control evidence. Hand it to your auditor.",
      icon: BarChart3,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0D7377] mb-4">
            How it works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0a1628]">
            From zero to audit-ready
            <br />
            in under 4 weeks
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            No compliance consultant needed. No confusing enterprise software.
            Just a clear path from "we have nothing" to "here's our SOC 2 report."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ step, title, description, icon: Icon }, i) => (
            <div key={step} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#0D7377]/30 to-transparent z-0" />
              )}
              <div className="relative z-10 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0a1628]">
                    <Icon className="h-5 w-5 text-[#14b8b0]" />
                  </div>
                  <span className="text-xs font-bold text-slate-300 tracking-widest">STEP {step}</span>
                </div>
                <h3 className="text-base font-bold text-[#0a1628] mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────

function Features() {
  const features = [
    {
      icon: FileText,
      title: "AI-Generated Policies",
      description:
        "10 SOC 2 policies written by Claude AI, tailored to your company's tech stack. Not generic templates — policies that actually reference your tools.",
      tag: "AI-powered",
      tagColor: "bg-purple-100 text-purple-700",
    },
    {
      icon: CheckSquare,
      title: "SOC 2 Control Tracker",
      description:
        "All 36 Trust Services Criteria controls with startup-specific guidance. See exactly what evidence you need and track progress by category.",
      tag: "Core",
      tagColor: "bg-blue-100 text-blue-700",
    },
    {
      icon: Upload,
      title: "Evidence Management",
      description:
        "Upload screenshots, PDFs, and docs. Link each piece of evidence to the specific control it satisfies. Auditors love this.",
      tag: "Core",
      tagColor: "bg-blue-100 text-blue-700",
    },
    {
      icon: Building2,
      title: "Vendor Risk Register",
      description:
        "Track all your third-party vendors, their risk level, data access, and whether you have a DPA in place. Required for CC9.2.",
      tag: "Core",
      tagColor: "bg-blue-100 text-blue-700",
    },
    {
      icon: BarChart3,
      title: "Audit Readiness Report",
      description:
        "One-click PDF report with your readiness score, all controls, policies, and evidence inventory. Professional enough to share directly with auditors.",
      tag: "Export",
      tagColor: "bg-green-100 text-green-700",
    },
    {
      icon: Lock,
      title: "Security Questionnaire AI",
      description:
        "Paste in any security questionnaire from a prospect. AI auto-fills answers based on your existing policies and controls. Save 4+ hours per deal.",
      tag: "AI-powered",
      tagColor: "bg-purple-100 text-purple-700",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Assign controls to team members. Track ownership and accountability. Invite your auditor with read-only access when you're ready.",
      tag: "Collaboration",
      tagColor: "bg-amber-100 text-amber-700",
    },
    {
      icon: Zap,
      title: "Integrations (Growth+)",
      description:
        "Connect GitHub, AWS, and Google Workspace to automatically collect evidence. Pull commit logs, IAM configs, and user lists without manual work.",
      tag: "Automation",
      tagColor: "bg-orange-100 text-orange-700",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0D7377] mb-4">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0a1628]">
            Everything you need to pass a SOC 2 audit
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            Built specifically for seed-to-Series-A B2B SaaS companies.
            No enterprise bloat. No compliance consultant required.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, description, tag, tagColor }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-100 bg-white p-6 hover:border-[#0D7377]/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0a1628] group-hover:bg-[#0D7377] transition-colors">
                  <Icon className="h-5 w-5 text-[#14b8b0]" />
                </div>
                <span className={`text-xs font-medium rounded-full px-2.5 py-0.5 ${tagColor}`}>
                  {tag}
                </span>
              </div>
              <h3 className="text-sm font-bold text-[#0a1628] mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Comparison ───────────────────────────────────────────────────────────────

function Comparison() {
  const rows = [
    { feature: "Price per year", complikit: "$1,188 (Starter)", vanta: "$10,000+", drata: "$7,000+" },
    { feature: "AI policy generation", complikit: true, vanta: "Add-on", drata: "Limited" },
    { feature: "SOC 2 controls tracked", complikit: "36 (all TSC)", vanta: true, drata: true },
    { feature: "Tailored to your tech stack", complikit: true, vanta: false, drata: false },
    { feature: "Security questionnaire AI", complikit: true, vanta: "Add-on", drata: "Add-on" },
    { feature: "Auditor portal", complikit: "PRO plan", vanta: true, drata: true },
    { feature: "Setup time", complikit: "< 5 minutes", vanta: "Days", drata: "Days" },
    { feature: "GitHub auto-evidence", complikit: "Growth plan", vanta: true, drata: true },
    { feature: "Target company size", complikit: "3–25 people", vanta: "25–500+", drata: "25–500+" },
    { feature: "Free trial", complikit: "14 days, no card", vanta: "Demo only", drata: "Demo only" },
  ];

  function Cell({ value }: { value: string | boolean }) {
    if (value === true)
      return <span className="flex justify-center"><Check className="h-5 w-5 text-green-600" /></span>;
    if (value === false)
      return <span className="flex justify-center"><X className="h-5 w-5 text-red-400" /></span>;
    return <span className="text-sm text-slate-700">{value}</span>;
  }

  return (
    <section id="compare" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0D7377] mb-4">
            Compare
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0a1628]">
            CompliKit vs the incumbents
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Same result. A fraction of the cost.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="px-6 py-4 text-sm font-semibold text-slate-500 w-48">Feature</th>
                <th className="px-6 py-4 text-center">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-sm font-bold text-[#0a1628]">CompliKit</span>
                    <span className="text-xs font-semibold text-[#14b8b0] bg-[#14b8b0]/10 rounded-full px-2 py-0.5">
                      Best for startups
                    </span>
                  </div>
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-400 text-center">Vanta</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-400 text-center">Drata</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ feature, complikit, vanta, drata }, i) => (
                <tr
                  key={feature}
                  className={`border-b border-slate-100 last:border-0 ${i % 2 === 0 ? "" : "bg-slate-50/50"}`}
                >
                  <td className="px-6 py-3.5 text-sm font-medium text-slate-700">{feature}</td>
                  <td className="px-6 py-3.5 text-center bg-[#0D7377]/5">
                    <Cell value={complikit} />
                  </td>
                  <td className="px-6 py-3.5 text-center">
                    <Cell value={vanta} />
                  </td>
                  <td className="px-6 py-3.5 text-center">
                    <Cell value={drata} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function Testimonials() {
  const testimonials = [
    {
      quote:
        "We were losing deals at the security review stage for 6 months. CompliKit got us SOC 2 Type 1 audit-ready in 3 weeks. First enterprise deal closed 2 weeks later — $48k ARR.",
      name: "Sarah Chen",
      title: "CEO, Dataflow AI",
      stars: 5,
    },
    {
      quote:
        "I looked at Vanta and nearly choked at the price. CompliKit gave us AI-generated policies tailored to our AWS + GitHub stack in minutes. Our auditor said our evidence package was 'unusually well-organized.'",
      name: "Marcus Reid",
      title: "CTO, Synapse Labs",
      stars: 5,
    },
    {
      quote:
        "The security questionnaire AI alone saves me 4+ hours per prospect. I paste in their questionnaire, review the answers, and send it back the same day. Prospects are impressed every time.",
      name: "Priya Nair",
      title: "Head of Sales, Vaultify",
      stars: 5,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0D7377] mb-4">
            Social proof
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0a1628]">
            Founders who closed the deal
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, title, stars }) => (
            <div
              key={name}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-8 flex flex-col gap-6"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-slate-700 text-sm leading-relaxed flex-1">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-sm font-bold text-[#0a1628]">{name}</p>
                <p className="text-xs text-slate-500 mt-0.5">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Explore the platform and track your compliance progress manually.",
      cta: "Get started free",
      ctaStyle: "border border-slate-200 bg-white text-[#0a1628] hover:bg-slate-50",
      popular: false,
      features: [
        "SOC 2 readiness checklist",
        "Manual control tracking (36 controls)",
        "10 evidence uploads",
        "1 team member",
      ],
      missing: ["AI policy generation", "PDF report export", "Questionnaire AI"],
    },
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Everything a seed-stage startup needs to get SOC 2 audit-ready.",
      cta: "Start 14-day free trial",
      ctaStyle: "bg-[#0D7377] text-white hover:bg-[#0a5f62] shadow-lg",
      popular: true,
      features: [
        "All 10 SOC 2 policies (AI-generated)",
        "Full control tracker (36 controls)",
        "200 evidence uploads",
        "5 audit-ready PDF exports/month",
        "Vendor risk register (50 vendors)",
        "Security questionnaire AI",
        "3 team members",
      ],
      missing: [],
    },
    {
      name: "Growth",
      price: "$199",
      period: "per month",
      description: "Automated evidence collection and integrations for faster compliance.",
      cta: "Start 14-day free trial",
      ctaStyle: "border border-slate-200 bg-white text-[#0a1628] hover:bg-slate-50",
      popular: false,
      features: [
        "Everything in Starter",
        "GitHub + AWS automated evidence",
        "Unlimited PDF reports",
        "10 team members",
        "Slack notifications",
        "Control due date tracking",
        "3 integrations",
      ],
      missing: [],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#0a1628]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#14b8b0] mb-4">
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Transparent pricing.
            <br />
            No sales calls required.
          </h2>
          <p className="mt-4 text-lg text-white/50 max-w-xl mx-auto">
            Start free. Upgrade when you need AI policies and PDF exports.
            All plans include the full SOC 2 control tracker.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map(({ name, price, period, description, cta, ctaStyle, popular, features, missing }) => (
            <div
              key={name}
              className={`rounded-2xl p-8 relative ${
                popular
                  ? "bg-white ring-2 ring-[#14b8b0] shadow-[0_0_60px_rgba(20,184,176,0.2)]"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#14b8b0] px-3 py-1 text-xs font-bold text-white">
                    <Star className="h-3 w-3 fill-current" /> Most popular
                  </span>
                </div>
              )}

              <div className={popular ? "text-[#0a1628]" : "text-white"}>
                <p className="text-sm font-semibold uppercase tracking-widest opacity-60">{name}</p>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{price}</span>
                  <span className="text-sm opacity-50">/{period}</span>
                </div>
                <p className={`mt-3 text-sm leading-relaxed ${popular ? "text-slate-500" : "text-white/50"}`}>
                  {description}
                </p>

                <Link
                  href="/signup"
                  className={`mt-6 flex w-full items-center justify-center rounded-xl py-3 text-sm font-semibold transition-all ${ctaStyle}`}
                >
                  {cta}
                </Link>

                <ul className="mt-8 space-y-2.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className={`h-4 w-4 mt-0.5 shrink-0 ${popular ? "text-[#0D7377]" : "text-[#14b8b0]"}`} />
                      <span className={popular ? "text-slate-700" : "text-white/70"}>{f}</span>
                    </li>
                  ))}
                  {missing.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm opacity-40">
                      <X className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
          {[
            { icon: Clock, text: "14-day free trial, no card needed" },
            { icon: ShieldCheck, text: "SOC 2 Type 1 & Type 2 supported" },
            { icon: Lock, text: "Cancel anytime, keep your data" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-white/40">
              <Icon className="h-4 w-4" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQ() {
  const questions = [
    {
      q: "Do I still need a real SOC 2 auditor?",
      a: "Yes — CompliKit prepares you FOR the audit, it doesn't replace the auditor. A licensed CPA firm conducts the actual audit and issues the report. CompliKit gets you audit-ready so that process is faster and cheaper. Most auditors charge $15–40k; being well-prepared can cut that significantly.",
    },
    {
      q: "How long does SOC 2 Type 1 actually take with CompliKit?",
      a: "Most customers are audit-ready in 2–4 weeks for Type 1. That means: all policies generated and approved, all 36 controls addressed, evidence uploaded, and a clean readiness report to hand to your auditor.",
    },
    {
      q: "What's the difference between Type 1 and Type 2?",
      a: "SOC 2 Type 1 is a point-in-time audit — it verifies your controls are designed correctly. Takes 4–8 weeks total. Type 2 tests that those controls operated effectively over a period (usually 6–12 months). Most enterprise prospects accept Type 1 to start. CompliKit supports both.",
    },
    {
      q: "Are the AI-generated policies actually good enough for a real audit?",
      a: "Yes. The policies are generated by Claude (Anthropic's Sonnet model), tailored to your specific company, tech stack, and industry. They meet AICPA SOC 2 Trust Services Criteria requirements. Your auditor will review them as part of the audit, and you can edit them at any time.",
    },
    {
      q: "What if I already have some policies written?",
      a: "You can paste your existing content into the policy editor or use it as a starting point and let AI refine it. You're never locked into the AI output — everything is fully editable in our Tiptap-based editor.",
    },
    {
      q: "How is this secure? Can I trust a compliance tool with my compliance data?",
      a: "Your data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Evidence files are stored in private S3 buckets behind signed URLs. We follow the same SOC 2 principles we help you implement. Our own infrastructure is documented in the product itself.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0D7377] mb-4">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0a1628]">
            Everything you want to know
          </h2>
        </div>

        <div className="space-y-4">
          {questions.map(({ q, a }) => (
            <div key={q} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <p className="font-semibold text-[#0a1628] mb-3">{q}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="relative py-32 bg-[#0D7377] overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 30% 50%, #ffffff 0%, transparent 60%), radial-gradient(circle at 70% 50%, #1B3A6B 0%, transparent 60%)`,
      }} />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Your next enterprise deal
          <br />
          needs this report.
        </h2>
        <p className="mt-6 text-xl text-white/70 max-w-xl mx-auto">
          Stop losing deals at the security review. Get SOC 2 audit-ready in weeks,
          not months. Start free today.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#0D7377] hover:bg-white/90 transition-all shadow-xl"
          >
            Start free — 14-day trial
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-transparent px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
          >
            Log in
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
          {["No credit card required", "14-day free trial", "Cancel anytime"].map((t) => (
            <span key={t} className="flex items-center gap-1.5 text-sm text-white/60">
              <Check className="h-3.5 w-3.5 text-white/60" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#0a1628] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <ShieldCheck className="h-5 w-5 text-[#14b8b0]" />
              <span className="text-base font-bold text-white">CompliKit</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              SOC 2 compliance automation for early-stage B2B SaaS.
              Audit-ready in weeks, not months.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Product</p>
            <ul className="space-y-2.5">
              {["Features", "Pricing", "Compare", "Changelog"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Company</p>
            <ul className="space-y-2.5">
              {["About", "Blog", "Security", "Privacy", "Terms"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} CompliKit. Not affiliated with AICPA.
          </p>
          <p className="text-xs text-white/30">
            SOC 2 compliance tool — we prepare you for auditors, not replace them.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <LogoBar />
      <Problem />
      <HowItWorks />
      <Features />
      <Comparison />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
