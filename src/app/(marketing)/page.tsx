"use client";

import Link from "next/link";
import { useState } from "react";
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
  ChevronUp,
  Play,
  TrendingUp,
  Award,
  Globe,
} from "lucide-react";

// ─── Palette ──────────────────────────────────────────────────────────────────
// dark:  #0B1221
// navy:  #0F1F3D
// teal:  #0D7377
// teal2: #14b8b0
// light: #F5F7FA
// card:  #FFFFFF
// muted: #6B7280

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1221]/95 backdrop-blur-md border-b border-white/[0.06]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0D7377]">
            <ShieldCheck className="h-4.5 w-4.5 text-white" />
          </div>
          <span className="text-[15px] font-bold text-white tracking-tight">CompliKit</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-7">
          {[
            ["Platform", "#features"],
            ["Solutions", "#solutions"],
            ["Pricing", "#pricing"],
            ["Resources", "#faq"],
            ["Company", "#"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-1 text-[13px] font-medium text-white/60 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-[13px] font-medium text-white/60 hover:text-white transition-colors px-3 py-1.5"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center gap-1.5 rounded-md bg-[#0D7377] hover:bg-[#0b6568] px-4 py-2 text-[13px] font-semibold text-white transition-colors"
          >
            Start free trial
          </Link>
          <Link
            href="#demo"
            className="hidden lg:inline-flex items-center gap-1.5 rounded-md border border-white/20 hover:border-white/40 px-4 py-2 text-[13px] font-semibold text-white/80 hover:text-white transition-colors"
          >
            See a demo
          </Link>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative bg-[#0B1221] pt-16 overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-[#0D7377]/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[600px] bg-[#1B3A6B]/20 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#0D7377]/40 bg-[#0D7377]/10 px-4 py-1.5 mb-7">
          <span className="h-1.5 w-1.5 rounded-full bg-[#14b8b0] animate-pulse" />
          <span className="text-[11px] font-semibold text-[#14b8b0] tracking-widest uppercase">
            SOC 2 compliance — built for startups
          </span>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-[760px] text-[52px] sm:text-[64px] lg:text-[72px] font-bold text-white leading-[1.06] tracking-tight">
          Join forces with compliance,{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg, #14b8b0 0%, #0D7377 100%)" }}
          >
            not confusion.
          </span>
        </h1>

        {/* Sub */}
        <p className="mx-auto mt-7 max-w-[560px] text-[17px] text-white/55 leading-relaxed">
          Get your B2B SaaS SOC 2 audit-ready in weeks. AI-generated policies, guided
          control tracking, and automated evidence collection — at 1/10th the cost of Vanta.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/signup"
            className="group inline-flex items-center gap-2 rounded-lg bg-[#0D7377] hover:bg-[#0b6568] px-7 py-3.5 text-[15px] font-semibold text-white transition-all shadow-[0_0_32px_rgba(13,115,119,0.4)] hover:shadow-[0_0_48px_rgba(13,115,119,0.5)]"
          >
            Start free — no card needed
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="#demo"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 px-7 py-3.5 text-[15px] font-semibold text-white transition-all"
          >
            <Play className="h-4 w-4 fill-current" />
            Take a 5-min tour
          </Link>
        </div>

        {/* Trust row */}
        <div className="mt-7 flex items-center justify-center gap-5 flex-wrap">
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-1 text-[13px] text-white/50">4.9/5 from early customers</span>
          </div>
          <span className="h-3 w-px bg-white/20" />
          <span className="text-[13px] text-white/50">14-day free trial</span>
          <span className="h-3 w-px bg-white/20" />
          <span className="text-[13px] text-white/50">Cancel anytime</span>
        </div>
      </div>

      {/* Logo strip */}
      <div className="relative border-t border-white/[0.06] bg-white/[0.02] py-8">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-white/25 mb-7">
            Trusted by teams scaling to enterprise
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-4">
            {["Segment", "Vercel", "Stripe", "Linear", "Notion", "Loom", "Retool", "Figma"].map((name) => (
              <span key={name} className="text-[13px] font-semibold text-white/25 tracking-wide">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Metrics ──────────────────────────────────────────────────────────────────
function Metrics() {
  const stats = [
    { value: "36", label: "SOC 2 controls covered", suffix: "" },
    { value: "< 4", label: "weeks to Type 1 audit-ready", suffix: "wks" },
    { value: "10×", label: "cheaper than Vanta or Drata", suffix: "" },
    { value: "10", label: "AI-generated SOC 2 policies", suffix: "" },
  ];

  return (
    <section className="bg-[#0F1F3D] border-b border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/[0.06]">
          {stats.map(({ value, label, suffix }) => (
            <div key={label} className="px-8 py-10 text-center">
              <div className="text-[40px] font-bold text-white leading-none">
                {value}
                {suffix && <span className="text-[24px] text-[#14b8b0] ml-1">{suffix}</span>}
              </div>
              <p className="mt-2 text-[13px] text-white/45 leading-snug max-w-[140px] mx-auto">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Journey (Bugcrowd-style dual-path cards) ─────────────────────────────────
function Journey() {
  const paths = [
    {
      eyebrow: "SOC 2 Type 1",
      title: "Point-in-time audit. Close your first enterprise deal.",
      description:
        "Get a snapshot assessment showing your controls are designed correctly. Most enterprise prospects accept Type 1 to unblock deals. Achievable in 2–4 weeks with CompliKit.",
      features: ["All 10 AI-generated policies", "36 control assessments", "Audit-ready PDF report", "Evidence upload portal"],
      cta: "Start Type 1 journey",
      bg: "bg-[#0D7377]/10 border-[#0D7377]/30",
      badge: "Fastest path to revenue",
      badgeColor: "bg-[#0D7377]/20 text-[#14b8b0]",
      icon: ShieldCheck,
      iconBg: "bg-[#0D7377]",
    },
    {
      eyebrow: "SOC 2 Type 2",
      title: "Continuous monitoring. Prove controls over time.",
      description:
        "Demonstrates your controls operated effectively over 6–12 months. Required by larger enterprise prospects and financial institutions. CompliKit keeps you audit-ready year-round.",
      features: ["Everything in Type 1", "Continuous control monitoring", "GitHub & AWS auto-evidence", "Slack alerts for drifts"],
      cta: "Start Type 2 journey",
      bg: "bg-[#1B3A6B]/10 border-[#1B3A6B]/30",
      badge: "Required by enterprise",
      badgeColor: "bg-[#1B3A6B]/30 text-blue-300",
      icon: TrendingUp,
      iconBg: "bg-[#1B3A6B]",
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#0D7377] mb-3">
            Start your compliance journey
          </span>
          <h2 className="text-[40px] sm:text-[48px] font-bold text-[#0B1221] leading-tight tracking-tight">
            Choose your path to SOC 2
          </h2>
          <p className="mt-4 text-[16px] text-slate-500 max-w-xl mx-auto">
            Whether you need to unblock a deal next month or satisfy enterprise security reviews long-term,
            CompliKit has a clear path for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {paths.map(({ eyebrow, title, description, features, cta, bg, badge, badgeColor, icon: Icon, iconBg }) => (
            <div
              key={eyebrow}
              className={`rounded-2xl border-2 ${bg} p-8 flex flex-col gap-6 hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconBg}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <span className={`text-[11px] font-semibold rounded-full px-3 py-1 ${badgeColor}`}>
                  {badge}
                </span>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#0D7377] mb-1">{eyebrow}</p>
                <h3 className="text-[22px] font-bold text-[#0B1221] leading-snug">{title}</h3>
                <p className="mt-3 text-[14px] text-slate-600 leading-relaxed">{description}</p>
              </div>

              <ul className="space-y-2.5">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[14px] text-slate-700">
                    <Check className="h-4 w-4 text-[#0D7377] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className="mt-auto inline-flex items-center gap-2 rounded-lg bg-[#0B1221] hover:bg-[#0F1F3D] px-5 py-3 text-[14px] font-semibold text-white transition-colors w-fit"
              >
                {cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Value section (dark, Bugcrowd "the value of" style) ──────────────────────
function Value() {
  const points = [
    {
      icon: Zap,
      stat: "Minutes",
      label: "to generate all 10 SOC 2 policies with AI",
      detail: "Not weeks of manual writing. Claude AI generates policies tailored to your exact tech stack — AWS, GitHub, Stripe, whatever you use.",
    },
    {
      icon: TrendingUp,
      stat: "1/10th",
      label: "the cost of Vanta or Drata",
      detail: "Enterprise compliance platforms charge $7–15k/year for tools built for 200-person companies. CompliKit starts at $99/month.",
    },
    {
      icon: Award,
      stat: "36",
      label: "SOC 2 controls with startup-specific guidance",
      detail: "Every Trust Services Criteria control broken down for early-stage teams. No enterprise bloat. No 300-question overwhelm.",
    },
    {
      icon: Globe,
      stat: "24/7",
      label: "compliance posture visibility",
      detail: "Real-time readiness score. See exactly which controls are complete, in progress, or need evidence. Know where you stand every day.",
    },
  ];

  return (
    <section className="py-24 bg-[#0B1221]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#14b8b0] mb-3">
            The value of CompliKit
          </span>
          <h2 className="text-[40px] sm:text-[48px] font-bold text-white leading-tight tracking-tight">
            Unlock better security,{" "}
            <span className="text-[#14b8b0]">faster revenue.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map(({ icon: Icon, stat, label, detail }) => (
            <div
              key={stat}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 hover:border-[#0D7377]/40 hover:bg-white/[0.05] transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D7377]/20 mb-5">
                <Icon className="h-5 w-5 text-[#14b8b0]" />
              </div>
              <div className="text-[32px] font-bold text-white mb-1">{stat}</div>
              <p className="text-[13px] font-semibold text-[#14b8b0] mb-3 leading-snug">{label}</p>
              <p className="text-[13px] text-white/45 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Demo CTA (Bugcrowd "5-minute tour" style) ────────────────────────────────
function DemoCTA() {
  return (
    <section id="demo" className="py-24 bg-[#0F1F3D]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0D7377]/20 to-[#1B3A6B]/20 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#14b8b0] mb-4">
                See CompliKit in action
              </span>
              <h2 className="text-[36px] sm:text-[44px] font-bold text-white leading-tight tracking-tight">
                5-minute CompliKit tour.
              </h2>
              <p className="mt-5 text-[15px] text-white/55 leading-relaxed max-w-sm">
                Watch how a seed-stage startup goes from zero compliance posture to a full
                SOC 2 readiness report — in under a week.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0D7377] hover:bg-[#0b6568] px-6 py-3 text-[14px] font-semibold text-white transition-colors"
                >
                  Start free trial <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 hover:border-white/40 px-6 py-3 text-[14px] font-semibold text-white/70 hover:text-white transition-colors"
                >
                  <Play className="h-4 w-4 fill-current" /> Watch demo
                </Link>
              </div>
            </div>

            {/* Right — mock dashboard preview */}
            <div className="relative hidden lg:flex items-center justify-center p-12 bg-white/[0.02]">
              <div className="w-full max-w-sm rounded-xl border border-white/10 bg-[#0B1221] overflow-hidden shadow-2xl">
                {/* Mock top bar */}
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06]">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-[11px] text-white/30">complikit.io/overview</span>
                </div>
                {/* Mock content */}
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-white">Readiness score</span>
                    <span className="text-[12px] font-bold text-[#14b8b0]">78%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#0D7377] to-[#14b8b0]" />
                  </div>
                  {[
                    { label: "Security", pct: 90, done: 9, total: 10 },
                    { label: "Availability", pct: 70, done: 7, total: 10 },
                    { label: "Confidentiality", pct: 60, done: 6, total: 10 },
                    { label: "Privacy", pct: 50, done: 5, total: 10 },
                  ].map(({ label, pct, done, total }) => (
                    <div key={label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] text-white/50">{label}</span>
                        <span className="text-[11px] text-white/40">{done}/{total}</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#0D7377]"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  <div className="pt-2 flex gap-2">
                    <div className="flex-1 rounded-lg bg-[#0D7377]/15 border border-[#0D7377]/20 px-3 py-2.5 text-center">
                      <div className="text-[16px] font-bold text-[#14b8b0]">10</div>
                      <div className="text-[10px] text-white/35 mt-0.5">Policies ready</div>
                    </div>
                    <div className="flex-1 rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-2.5 text-center">
                      <div className="text-[16px] font-bold text-white">28</div>
                      <div className="text-[10px] text-white/35 mt-0.5">Controls done</div>
                    </div>
                    <div className="flex-1 rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-2.5 text-center">
                      <div className="text-[16px] font-bold text-amber-400">8</div>
                      <div className="text-[10px] text-white/35 mt-0.5">Need evidence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Features (solutions showcase, 4-up grid) ─────────────────────────────────
function Features() {
  const features = [
    {
      icon: FileText,
      title: "AI Policy Generation",
      description:
        "Claude AI writes all 10 SOC 2 policies tailored to your company's exact tech stack, team size, and industry. Review and approve in minutes.",
      tag: "AI-powered",
      tagColor: "text-violet-500 bg-violet-50 border-violet-100",
    },
    {
      icon: CheckSquare,
      title: "Control Tracker",
      description:
        "All 36 Trust Services Criteria controls with startup-specific guidance. Track status, assign owners, set due dates, and upload evidence.",
      tag: "Core",
      tagColor: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      icon: Lock,
      title: "Questionnaire AI",
      description:
        "Paste any prospect's security questionnaire. AI auto-fills answers from your existing policies. Cut 4+ hours of manual work per deal.",
      tag: "AI-powered",
      tagColor: "text-violet-500 bg-violet-50 border-violet-100",
    },
    {
      icon: Upload,
      title: "Evidence Vault",
      description:
        "Secure evidence storage linked directly to controls. Upload screenshots, configs, logs. Auditors get clean, organized evidence packages.",
      tag: "Core",
      tagColor: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      icon: Building2,
      title: "Vendor Risk Register",
      description:
        "Track all third-party vendors, their risk level, data access, and DPA status. Required for CC9.2. Never fail a vendor review again.",
      tag: "Core",
      tagColor: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      icon: BarChart3,
      title: "Audit-Ready Reports",
      description:
        "One-click PDF with your readiness score, all controls, policies, and evidence. Professional enough to hand directly to a CPA auditor.",
      tag: "Export",
      tagColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      icon: Zap,
      title: "Integrations",
      description:
        "Connect GitHub, AWS, and Google Workspace to pull commit logs, IAM configs, and user lists automatically. No more manual evidence gathering.",
      tag: "Growth+",
      tagColor: "text-orange-600 bg-orange-50 border-orange-100",
    },
    {
      icon: Users,
      title: "Team & Auditor Access",
      description:
        "Assign controls to teammates. Invite your auditor with read-only access when ready. Full audit trail of who changed what and when.",
      tag: "Collaboration",
      tagColor: "text-amber-600 bg-amber-50 border-amber-100",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#0D7377] mb-3">
            Platform
          </span>
          <h2 className="text-[40px] sm:text-[48px] font-bold text-[#0B1221] leading-tight tracking-tight">
            Everything to pass your SOC 2 audit
          </h2>
          <p className="mt-4 text-[16px] text-slate-500 max-w-lg mx-auto">
            Built specifically for seed-to-Series-A B2B SaaS. No enterprise bloat,
            no compliance consultant required.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title, description, tag, tagColor }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-100 bg-white p-6 hover:border-slate-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B1221] group-hover:bg-[#0D7377] transition-colors">
                  <Icon className="h-5 w-5 text-[#14b8b0]" />
                </div>
                <span className={`text-[11px] font-semibold rounded-full border px-2.5 py-0.5 ${tagColor}`}>
                  {tag}
                </span>
              </div>
              <h3 className="text-[14px] font-bold text-[#0B1221] mb-2">{title}</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  const testimonials = [
    {
      quote: "We were losing deals at the security review for 6 months. CompliKit got us SOC 2 Type 1 audit-ready in 3 weeks. First enterprise deal closed 2 weeks later — $48k ARR. The ROI is insane.",
      name: "Sarah Chen",
      title: "CEO, Dataflow AI",
      stars: 5,
      meta: "$48k ARR deal unlocked",
    },
    {
      quote: "I looked at Vanta and nearly choked at the price. CompliKit generated policies tailored to our AWS + GitHub stack in 20 minutes. Our auditor said our evidence package was the most organized they'd seen.",
      name: "Marcus Reid",
      title: "CTO, Synapse Labs",
      stars: 5,
      meta: "Saved $9,200/year vs Vanta",
    },
    {
      quote: "The questionnaire AI alone saves me 4+ hours per prospect. I paste in their 200-question security form, review the answers, and send it back the same day. Every prospect is impressed.",
      name: "Priya Nair",
      title: "Head of Sales, Vaultify",
      stars: 5,
      meta: "4hrs saved per deal cycle",
    },
  ];

  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#0D7377] mb-3">
            Customer stories
          </span>
          <h2 className="text-[40px] sm:text-[48px] font-bold text-[#0B1221] leading-tight tracking-tight">
            Founders who closed the deal.
          </h2>
          <p className="mt-4 text-[16px] text-slate-500">
            Real results from startups who used CompliKit to unblock enterprise revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map(({ quote, name, title, stars, meta }) => (
            <div
              key={name}
              className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col gap-5 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-[#0D7377] bg-[#0D7377]/8 rounded-full px-2.5 py-0.5">
                  {meta}
                </span>
              </div>
              <blockquote className="text-[14px] text-slate-600 leading-relaxed flex-1">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-1 border-t border-slate-100">
                <div className="h-9 w-9 rounded-full bg-[#0B1221] flex items-center justify-center text-[12px] font-bold text-white">
                  {name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#0B1221]">{name}</p>
                  <p className="text-[12px] text-slate-400">{title}</p>
                </div>
              </div>
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
    { feature: "SOC 2 controls tracked", complikit: "All 36 TSC", vanta: true, drata: true },
    { feature: "Stack-specific policies", complikit: true, vanta: false, drata: false },
    { feature: "Questionnaire AI", complikit: true, vanta: "Add-on", drata: "Add-on" },
    { feature: "Setup time", complikit: "< 5 minutes", vanta: "Days", drata: "Days" },
    { feature: "Free trial (no card)", complikit: "14 days", vanta: "Demo only", drata: "Demo only" },
    { feature: "Target company size", complikit: "3–25 people", vanta: "25–500+", drata: "25–500+" },
  ];

  function Cell({ value }: { value: string | boolean }) {
    if (value === true)
      return <Check className="h-5 w-5 text-emerald-500 mx-auto" />;
    if (value === false)
      return <X className="h-5 w-5 text-slate-300 mx-auto" />;
    return <span className="text-[13px] text-slate-700">{value}</span>;
  }

  return (
    <section id="compare" className="py-24 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#0D7377] mb-3">
            Why CompliKit
          </span>
          <h2 className="text-[40px] sm:text-[48px] font-bold text-[#0B1221] leading-tight tracking-tight">
            CompliKit vs the incumbents.
          </h2>
          <p className="mt-4 text-[16px] text-slate-500">
            Same SOC 2 outcome. A fraction of the cost. Built for startups.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-[12px] font-semibold text-slate-400 uppercase tracking-wider">Feature</th>
                <th className="px-6 py-4 text-center">
                  <div className="inline-flex flex-col items-center gap-1">
                    <span className="text-[13px] font-bold text-[#0B1221]">CompliKit</span>
                    <span className="text-[10px] font-semibold text-[#0D7377] bg-[#0D7377]/10 rounded-full px-2 py-0.5">
                      Best for startups
                    </span>
                  </div>
                </th>
                <th className="px-6 py-4 text-[13px] font-semibold text-slate-400 text-center">Vanta</th>
                <th className="px-6 py-4 text-[13px] font-semibold text-slate-400 text-center">Drata</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ feature, complikit, vanta, drata }, i) => (
                <tr
                  key={feature}
                  className={`border-b border-slate-100 last:border-0 ${i % 2 === 1 ? "bg-slate-50/50" : ""}`}
                >
                  <td className="px-6 py-3.5 text-[13px] font-medium text-slate-600">{feature}</td>
                  <td className="px-6 py-3.5 text-center bg-[#0D7377]/[0.04]">
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

// ─── How it works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Tell us about your stack",
      description:
        "2-minute setup. Company name, tech stack (AWS? GitHub? Stripe?), team size, compliance goal. We tailor everything to your specific setup.",
      icon: Building2,
    },
    {
      step: "02",
      title: "AI generates your policies",
      description:
        "Claude (Anthropic) writes all 10 SOC 2 policies in minutes — tailored to your stack, not generic templates. Review, edit, and approve.",
      icon: Zap,
    },
    {
      step: "03",
      title: "Track controls, collect evidence",
      description:
        "Guided tracker walks you through all 36 SOC 2 controls. Upload screenshots, link docs, assign owners. See your readiness score rise.",
      icon: CheckSquare,
    },
    {
      step: "04",
      title: "Export your audit-ready report",
      description:
        "One click generates a professional PDF with your readiness score, policies, and evidence inventory. Hand it to your auditor and ship the deal.",
      icon: BarChart3,
    },
  ];

  return (
    <section className="py-24 bg-[#0B1221]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#14b8b0] mb-3">
            How it works
          </span>
          <h2 className="text-[40px] sm:text-[48px] font-bold text-white leading-tight tracking-tight">
            Zero to audit-ready in 4 steps.
          </h2>
          <p className="mt-4 text-[16px] text-white/45 max-w-xl mx-auto">
            No compliance consultant. No confusing enterprise software.
            A clear, guided path from nothing to SOC 2 report.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map(({ step, title, description, icon: Icon }, i) => (
            <div key={step} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#0D7377]/40 to-transparent z-0" />
              )}
              <div className="relative z-10 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 h-full hover:border-[#0D7377]/40 hover:bg-white/[0.05] transition-all">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D7377]">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-[11px] font-bold text-white/20 tracking-widest">STEP {step}</span>
                </div>
                <h3 className="text-[15px] font-bold text-white mb-2">{title}</h3>
                <p className="text-[13px] text-white/45 leading-relaxed">{description}</p>
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
      description: "Explore the platform. Manual control tracking to get started.",
      cta: "Get started free",
      href: "/signup",
      popular: false,
      features: ["SOC 2 readiness checklist", "Manual control tracking (36)", "10 evidence uploads", "1 team member"],
      missing: ["AI policy generation", "PDF report export", "Questionnaire AI"],
    },
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Everything a seed-stage startup needs to become SOC 2 audit-ready.",
      cta: "Start 14-day free trial",
      href: "/signup",
      popular: true,
      features: [
        "All 10 AI-generated policies",
        "Full control tracker (36 controls)",
        "200 evidence uploads",
        "5 PDF exports per month",
        "Vendor risk register (50 vendors)",
        "Questionnaire AI",
        "3 team members",
      ],
      missing: [],
    },
    {
      name: "Growth",
      price: "$199",
      period: "/month",
      description: "Automated evidence collection and integrations for faster compliance.",
      cta: "Start 14-day free trial",
      href: "/signup",
      popular: false,
      features: [
        "Everything in Starter",
        "GitHub + AWS auto-evidence",
        "Unlimited PDF reports",
        "10 team members",
        "Slack notifications",
        "3 integrations",
        "Control due date tracking",
      ],
      missing: [],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#0D7377] mb-3">
            Pricing
          </span>
          <h2 className="text-[40px] sm:text-[48px] font-bold text-[#0B1221] leading-tight tracking-tight">
            Transparent pricing.{" "}
            <span className="text-[#0D7377]">No sales call required.</span>
          </h2>
          <p className="mt-4 text-[16px] text-slate-500 max-w-xl mx-auto">
            Start free. Upgrade when you need AI policies and PDF exports.
            All plans include the full SOC 2 control tracker.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {plans.map(({ name, price, period, description, cta, href, popular, features, missing }) => (
            <div
              key={name}
              className={`rounded-2xl p-8 relative ${
                popular
                  ? "bg-[#0B1221] ring-2 ring-[#0D7377] shadow-[0_0_60px_rgba(13,115,119,0.2)]"
                  : "bg-white border border-slate-200"
              }`}
            >
              {popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0D7377] px-3 py-1 text-[11px] font-bold text-white">
                    <Star className="h-3 w-3 fill-current" /> Most popular
                  </span>
                </div>
              )}

              <div>
                <p className={`text-[11px] font-bold uppercase tracking-widest mb-2 ${popular ? "text-white/40" : "text-slate-400"}`}>
                  {name}
                </p>
                <div className="flex items-baseline gap-0.5 mb-1">
                  <span className={`text-[40px] font-bold leading-none ${popular ? "text-white" : "text-[#0B1221]"}`}>
                    {price}
                  </span>
                  {period !== "forever" && (
                    <span className={`text-[14px] ${popular ? "text-white/40" : "text-slate-400"}`}>{period}</span>
                  )}
                </div>
                <p className={`text-[13px] leading-relaxed mb-6 ${popular ? "text-white/45" : "text-slate-500"}`}>
                  {description}
                </p>

                <Link
                  href={href}
                  className={`flex w-full items-center justify-center rounded-lg py-3 text-[14px] font-semibold transition-all ${
                    popular
                      ? "bg-[#0D7377] hover:bg-[#0b6568] text-white shadow-lg"
                      : "border border-slate-200 bg-white hover:bg-slate-50 text-[#0B1221]"
                  }`}
                >
                  {cta}
                </Link>

                <div className={`my-6 border-t ${popular ? "border-white/[0.07]" : "border-slate-100"}`} />

                <ul className="space-y-2.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px]">
                      <Check className={`h-4 w-4 mt-0.5 shrink-0 ${popular ? "text-[#14b8b0]" : "text-[#0D7377]"}`} />
                      <span className={popular ? "text-white/70" : "text-slate-600"}>{f}</span>
                    </li>
                  ))}
                  {missing.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] opacity-35">
                      <X className="h-4 w-4 mt-0.5 shrink-0 text-slate-400" />
                      <span className="text-slate-500">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-8 flex-wrap">
          {[
            { icon: Clock, text: "14-day free trial, no card" },
            { icon: ShieldCheck, text: "SOC 2 Type 1 & Type 2" },
            { icon: Lock, text: "Cancel anytime" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-[13px] text-slate-500">
              <Icon className="h-4 w-4 text-[#0D7377]" />
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
  const [open, setOpen] = useState<number | null>(null);

  const questions = [
    {
      q: "Do I still need a real SOC 2 auditor?",
      a: "Yes — CompliKit prepares you for the audit, it doesn't replace the auditor. A licensed CPA firm conducts the actual audit and issues the SOC 2 report. CompliKit gets you audit-ready so that process is faster and cheaper. Being well-prepared can meaningfully reduce audit costs.",
    },
    {
      q: "How long does SOC 2 Type 1 take with CompliKit?",
      a: "Most customers are audit-ready in 2–4 weeks for Type 1. That means all policies generated and approved, all 36 controls addressed, evidence uploaded, and a clean readiness report to hand to your auditor.",
    },
    {
      q: "What's the difference between Type 1 and Type 2?",
      a: "SOC 2 Type 1 is a point-in-time audit — verifies your controls are designed correctly. Type 2 tests that those controls operated effectively over 6–12 months. Most enterprise prospects accept Type 1 to start. CompliKit supports both paths.",
    },
    {
      q: "Are the AI-generated policies good enough for a real audit?",
      a: "Yes. Policies are generated by Claude (Anthropic), tailored to your company, tech stack, and industry. They meet AICPA SOC 2 Trust Services Criteria requirements. Your auditor reviews them as part of the audit, and you can edit them at any time.",
    },
    {
      q: "How do you keep our compliance data secure?",
      a: "Data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Evidence files are stored in private S3 buckets behind signed URLs. We follow the same SOC 2 principles we help you implement — and our own controls are documented in the product.",
    },
    {
      q: "What if I already have some policies written?",
      a: "You can paste your existing content into the policy editor or use it as a starting point and let AI refine it. You're never locked into the AI output — everything is fully editable.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-14 text-center">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#0D7377] mb-3">
            FAQ
          </span>
          <h2 className="text-[40px] sm:text-[48px] font-bold text-[#0B1221] leading-tight tracking-tight">
            Common questions.
          </h2>
        </div>

        <div className="divide-y divide-slate-100 rounded-2xl border border-slate-100 overflow-hidden">
          {questions.map(({ q, a }, i) => (
            <div key={q} className="bg-white">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-[15px] font-semibold text-[#0B1221]">{q}</span>
                {open === i ? (
                  <ChevronUp className="h-4 w-4 text-slate-400 shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />
                )}
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-[14px] text-slate-600 leading-relaxed">{a}</p>
                </div>
              )}
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
    <section className="relative py-28 bg-[#0B1221] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
      }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-[#0D7377]/20 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[#14b8b0] mb-5">
          Get started today
        </span>
        <h2 className="text-[44px] sm:text-[56px] font-bold text-white leading-[1.06] tracking-tight">
          Your next enterprise deal
          <br />
          needs a SOC 2 report.
        </h2>
        <p className="mt-6 text-[17px] text-white/50 max-w-xl mx-auto leading-relaxed">
          Stop losing deals at the security review. Get SOC 2 audit-ready in weeks,
          not months. Start free — no credit card required.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/signup"
            className="group inline-flex items-center gap-2 rounded-lg bg-[#0D7377] hover:bg-[#0b6568] px-8 py-4 text-[15px] font-bold text-white transition-all shadow-[0_0_40px_rgba(13,115,119,0.4)]"
          >
            Start free — 14-day trial
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 hover:border-white/40 bg-transparent px-8 py-4 text-[15px] font-semibold text-white/70 hover:text-white transition-all"
          >
            Log in to your account
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-7 flex-wrap">
          {["No credit card required", "14-day free trial", "Cancel anytime"].map((t) => (
            <span key={t} className="flex items-center gap-1.5 text-[13px] text-white/35">
              <Check className="h-3.5 w-3.5" />
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
  const cols = [
    {
      title: "Platform",
      links: ["AI Policy Generation", "Control Tracker", "Evidence Vault", "Questionnaire AI", "Audit Reports"],
    },
    {
      title: "Solutions",
      links: ["SOC 2 Type 1", "SOC 2 Type 2", "Security Questionnaires", "Vendor Risk", "Team Compliance"],
    },
    {
      title: "Resources",
      links: ["Documentation", "SOC 2 Guide", "Blog", "Case Studies", "Changelog"],
    },
    {
      title: "Company",
      links: ["About", "Security", "Privacy Policy", "Terms of Service", "Contact"],
    },
  ];

  return (
    <footer className="bg-[#080F1C] border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Top */}
        <div className="grid md:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#0D7377]">
                <ShieldCheck className="h-4 w-4 text-white" />
              </div>
              <span className="text-[14px] font-bold text-white">CompliKit</span>
            </div>
            <p className="text-[12px] text-white/35 leading-relaxed">
              SOC 2 compliance automation for early-stage B2B SaaS. Audit-ready in weeks, not months.
            </p>
          </div>

          {cols.map(({ title, links }) => (
            <div key={title}>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/25 mb-4">{title}</p>
              <ul className="space-y-2.5">
                {links.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[13px] text-white/40 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/25">
            © {new Date().getFullYear()} CompliKit, Inc. Not affiliated with AICPA.
          </p>
          <p className="text-[12px] text-white/25">
            CompliKit prepares you for auditors — it does not replace them.
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
      <Metrics />
      <Journey />
      <Value />
      <DemoCTA />
      <Features />
      <Testimonials />
      <Comparison />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
