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
  BadgeCheck,
  Flame,
  DollarSign,
  Timer,
} from "lucide-react";

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#05101F]/96 backdrop-blur-xl border-b border-white/[0.05]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#0D7377] to-[#0a5f62]">
            <ShieldCheck className="h-4 w-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-[15px] font-bold text-white tracking-tight">CompliKit</span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {[
            ["Features", "#features"],
            ["How it works", "#how-it-works"],
            ["Pricing", "#pricing"],
            ["vs Vanta", "#compare"],
            ["FAQ", "#faq"],
          ].map(([label, href]) => (
            <Link key={label} href={href} className="text-[13px] font-medium text-white/55 hover:text-white transition-colors">
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login" className="text-[13px] font-medium text-white/55 hover:text-white transition-colors px-3 py-1.5">
            Log in
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#0D7377] hover:bg-[#0b6568] px-4 py-2 text-[13px] font-bold text-white transition-colors shadow-[0_0_20px_rgba(13,115,119,0.35)]"
          >
            Start free — no card
          </Link>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative bg-[#05101F] pt-16 overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
        }}
      />
      {/* Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[420px] rounded-full bg-[#0D7377]/12 blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1B3A6B]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#0D7377]/8 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">

        {/* Eyebrow — keyword-rich, trust signal */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#0D7377]/35 bg-[#0D7377]/10 px-4 py-1.5 mb-8">
          <Flame className="h-3.5 w-3.5 text-[#14b8b0]" />
          <span className="text-[11px] font-bold text-[#14b8b0] tracking-widest uppercase">
            SOC 2 compliance platform for startups — starting at $99/mo
          </span>
        </div>

        {/* H1 — SEO keyword-anchored + creative + competitive */}
        <h1 className="mx-auto max-w-[800px] text-[52px] sm:text-[66px] lg:text-[76px] font-bold text-white leading-[1.04] tracking-[-0.02em]">
          Enterprise deals don&apos;t wait
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg, #14b8b0 0%, #0ea5a0 50%, #0D7377 100%)" }}
          >
            for your SOC 2 report.
          </span>
        </h1>

        {/* Sub — clear value prop, keyword-rich */}
        <p className="mx-auto mt-7 max-w-[600px] text-[17px] text-white/55 leading-relaxed">
          CompliKit is the SOC 2 compliance software built for startups — not Fortune 500 companies.
          Get audit-ready in <strong className="text-white/80 font-semibold">3 weeks</strong>, at{" "}
          <strong className="text-white/80 font-semibold">1/10th the cost of Vanta</strong>.
          AI-generated policies, guided control tracking, and a full audit-ready report.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/signup"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#0D7377] hover:bg-[#0b6568] px-8 py-4 text-[15px] font-bold text-white transition-all shadow-[0_0_40px_rgba(13,115,119,0.45)] hover:shadow-[0_0_60px_rgba(13,115,119,0.55)]"
          >
            Get SOC 2 audit-ready free
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="#how-it-works"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/15 hover:border-white/30 bg-white/[0.04] hover:bg-white/[0.07] px-8 py-4 text-[15px] font-semibold text-white/80 hover:text-white transition-all"
          >
            <Play className="h-4 w-4 fill-white/50 group-hover:fill-white transition-colors" />
            See how it works
          </Link>
        </div>

        {/* Trust micro-row */}
        <div className="mt-7 flex items-center justify-center gap-5 flex-wrap">
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-1 text-[13px] text-white/45">4.9/5 · No-card trial</span>
          </div>
          <span className="h-3 w-px bg-white/15" />
          <span className="text-[13px] text-white/45">SOC 2 Type 1 &amp; Type 2</span>
          <span className="h-3 w-px bg-white/15" />
          <span className="text-[13px] text-white/45">Cancel anytime</span>
        </div>

        {/* Pain anchors — 3-column trust proof */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            {
              icon: DollarSign,
              headline: "Vanta costs $10,000/yr.",
              sub: "CompliKit costs $99/mo. Same SOC 2 report. No enterprise sales call.",
              color: "border-red-500/20 bg-red-500/5",
              iconColor: "text-red-400",
            },
            {
              icon: Timer,
              headline: "Audit-ready in 3 weeks.",
              sub: "Not 6 months. AI generates all 10 policies in minutes, not weeks of manual writing.",
              color: "border-[#0D7377]/30 bg-[#0D7377]/8",
              iconColor: "text-[#14b8b0]",
            },
            {
              icon: BadgeCheck,
              headline: "Built for startups only.",
              sub: "Every competitor targets Fortune 500. CompliKit is designed for 3–25 person teams.",
              color: "border-amber-500/20 bg-amber-500/5",
              iconColor: "text-amber-400",
            },
          ].map(({ icon: Icon, headline, sub, color, iconColor }) => (
            <div key={headline} className={`rounded-2xl border ${color} p-5 text-left`}>
              <Icon className={`h-5 w-5 ${iconColor} mb-3`} />
              <p className="text-[14px] font-bold text-white mb-1.5">{headline}</p>
              <p className="text-[12px] text-white/45 leading-relaxed">{sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stat strip */}
      <div className="border-t border-white/[0.05] bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-white/20 mb-7">
            Trusted by early-stage B2B SaaS teams closing enterprise deals
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.05] rounded-xl overflow-hidden">
            {[
              { value: "36", label: "SOC 2 controls covered" },
              { value: "< 3 wks", label: "average to Type 1 ready" },
              { value: "$99/mo", label: "vs $833/mo for Vanta" },
              { value: "10×", label: "cheaper than the market" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white/[0.025] px-6 py-6 text-center">
                <div className="text-[28px] font-bold text-white">{value}</div>
                <div className="mt-1 text-[12px] text-white/40">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Problem — "what we do" clarity section ───────────────────────────────────
function WhatWeDo() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#0D7377] mb-4">
              What CompliKit does
            </span>
            <h2 className="text-[38px] sm:text-[46px] font-bold text-[#05101F] leading-tight tracking-tight">
              SOC 2 compliance software that startup teams actually finish.
            </h2>
            <p className="mt-5 text-[16px] text-slate-600 leading-relaxed">
              You've built a great product. The enterprise prospect loves it. Then their security team sends a
              300-question questionnaire and asks for your SOC 2 audit report. You don't have one.
              The deal goes cold. <strong className="text-[#05101F]">That ends today.</strong>
            </p>
            <p className="mt-4 text-[16px] text-slate-600 leading-relaxed">
              CompliKit is a SOC 2 compliance platform that takes you from zero to a full, auditor-ready
              SOC 2 report — using AI to generate your policies, guiding you through every one of the
              36 required controls, and organizing your evidence so auditors don't push back.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {[
                "AI writes all 10 SOC 2 policies in minutes, tailored to your AWS/GitHub/Stripe stack",
                "Guided tracker for all 36 SOC 2 Trust Services Criteria controls with startup-specific steps",
                "Evidence vault links proof directly to controls — auditors get clean packages, not chaos",
                "One-click audit-ready PDF report you can hand to any CPA auditor immediately",
              ].map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-[#0D7377]/15 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="h-3 w-3 text-[#0D7377]" />
                  </div>
                  <span className="text-[14px] text-slate-700">{f}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-[#05101F] hover:bg-[#0D7377] px-6 py-3.5 text-[14px] font-bold text-white transition-all"
              >
                Start your SOC 2 journey free <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right: problems solved */}
          <div className="space-y-3">
            <p className="text-[12px] font-bold uppercase tracking-widest text-slate-400 mb-5">Before vs After CompliKit</p>
            {[
              {
                before: "Losing enterprise deals at the security review stage — \"do you have SOC 2?\"",
                after: "SOC 2 report in hand. Security reviews become a competitive advantage.",
              },
              {
                before: "Vanta quote arrives: $10,000+/year before you've even seen the product.",
                after: "CompliKit Starter: $99/month. Full SOC 2 compliance. Real audit-ready output.",
              },
              {
                before: "Spending weeks writing compliance policies from scratch with your engineering team.",
                after: "Claude AI generates all 10 SOC 2 policies tailored to your stack in 20 minutes.",
              },
              {
                before: "300 controls dumped on you with no guidance on what a startup actually needs.",
                after: "36 required controls, startup-specific guidance, progress dashboard, ownership tracking.",
              },
              {
                before: "Security questionnaires from prospects take 4+ hours each to fill out manually.",
                after: "Questionnaire AI pastes in any form and auto-fills from your existing policies instantly.",
              },
            ].map(({ before, after }, i) => (
              <div key={i} className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden border border-slate-100">
                <div className="bg-red-50 border-r border-slate-100 p-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <X className="h-3.5 w-3.5 text-red-400" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-red-400">Without</span>
                  </div>
                  <p className="text-[12px] text-slate-600 leading-relaxed">{before}</p>
                </div>
                <div className="bg-emerald-50 p-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">With CompliKit</span>
                  </div>
                  <p className="text-[12px] text-slate-600 leading-relaxed">{after}</p>
                </div>
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
      title: "Tell us your stack in 2 minutes",
      description:
        "Company name, tech stack (AWS, GitHub, Stripe, GCP — you pick), team size, and your compliance goal. That's the entire setup. No sales call, no enterprise questionnaire.",
      icon: Building2,
      time: "2 min",
    },
    {
      step: "02",
      title: "AI generates all 10 SOC 2 policies",
      description:
        "Claude (Anthropic) writes your Acceptable Use, Access Control, Incident Response, Change Management, and 6 more policies — tailored to your exact tools. Review and approve in minutes, not months.",
      icon: Zap,
      time: "20 min",
    },
    {
      step: "03",
      title: "Track all 36 controls, upload evidence",
      description:
        "Our guided tracker walks you through every Trust Services Criteria control with startup-specific steps. Upload a screenshot, mark it done. See your readiness score climb toward 100%.",
      icon: CheckSquare,
      time: "1–3 wks",
    },
    {
      step: "04",
      title: "Export your audit-ready PDF report",
      description:
        "One click generates a professional report with your readiness score, every policy, every control, and your evidence index. Hand it to your CPA auditor. Close the deal.",
      icon: BarChart3,
      time: "1 click",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#05101F]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#14b8b0] mb-3">
            How it works
          </span>
          <h2 className="text-[40px] sm:text-[50px] font-bold text-white leading-tight tracking-tight">
            Zero to SOC 2 report in 4 steps.
          </h2>
          <p className="mt-4 text-[16px] text-white/45 max-w-xl mx-auto">
            No compliance consultant. No confusing software built for 500-person companies.
            A clear path from &quot;we have nothing&quot; to &quot;here&apos;s our SOC 2 report.&quot;
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map(({ step, title, description, icon: Icon, time }, i) => (
            <div key={step} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-9 left-full w-full h-px bg-gradient-to-r from-[#0D7377]/50 to-transparent z-0" />
              )}
              <div className="relative z-10 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-6 h-full hover:border-[#0D7377]/40 hover:bg-white/[0.04] transition-all group">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D7377]">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-[11px] font-bold text-[#14b8b0] bg-[#0D7377]/15 rounded-full px-2.5 py-1">
                    {time}
                  </span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-2">Step {step}</p>
                <h3 className="text-[15px] font-bold text-white mb-2.5">{title}</h3>
                <p className="text-[13px] text-white/45 leading-relaxed">{description}</p>
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
      title: "AI-Generated SOC 2 Policies",
      description:
        "All 10 policies written by Claude AI — Acceptable Use, Access Control, Incident Response, Data Classification, Change Management, and more. Tailored to your AWS, GitHub, and Stripe setup. Editable in seconds.",
      tag: "AI-powered",
      tagColor: "text-violet-500 bg-violet-50 border-violet-100",
    },
    {
      icon: CheckSquare,
      title: "36-Control SOC 2 Tracker",
      description:
        "Every Trust Services Criteria control with startup-specific guidance. What evidence you need, who should own it, when it's due. See a live readiness score that moves as you work.",
      tag: "Core",
      tagColor: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      icon: Lock,
      title: "Security Questionnaire AI",
      description:
        "Prospects send 200-question security forms. Paste it in, get instant AI-drafted answers from your existing policies. Cut 4 hours of manual work per deal. Send it back the same day.",
      tag: "AI-powered",
      tagColor: "text-violet-500 bg-violet-50 border-violet-100",
    },
    {
      icon: Upload,
      title: "Auditor-Grade Evidence Vault",
      description:
        "Upload screenshots, configs, logs, and PDFs. Each piece of evidence links directly to the control it satisfies. Auditors get clean, organized packages — not a chaotic Google Drive dump.",
      tag: "Core",
      tagColor: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      icon: Building2,
      title: "Vendor Risk Register",
      description:
        "Track every third-party vendor: risk level, data access tier, DPA status, and last review date. Required for SOC 2 CC9.2. Never fail a vendor management control again.",
      tag: "Core",
      tagColor: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      icon: BarChart3,
      title: "One-Click Audit-Ready Reports",
      description:
        "Professional PDF with your readiness score, all policies, control status, and evidence inventory. Polished enough to hand directly to a CPA auditor without apology.",
      tag: "Export",
      tagColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      icon: Zap,
      title: "GitHub & AWS Auto-Evidence",
      description:
        "Connect GitHub and AWS to pull commit logs, IAM configs, and user lists automatically. No more manually screenshotting your infrastructure. Evidence collects itself.",
      tag: "Growth+",
      tagColor: "text-orange-600 bg-orange-50 border-orange-100",
    },
    {
      icon: Users,
      title: "Team & Auditor Collaboration",
      description:
        "Assign controls to engineers, legal, or ops. Full audit trail of every change. Invite your CPA auditor with read-only access when you're ready. No email back-and-forth.",
      tag: "Collaboration",
      tagColor: "text-amber-600 bg-amber-50 border-amber-100",
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#0D7377] mb-3">
            Platform features
          </span>
          <h2 className="text-[40px] sm:text-[50px] font-bold text-[#05101F] leading-tight tracking-tight">
            Every tool you need to pass a SOC 2 audit.
          </h2>
          <p className="mt-4 text-[16px] text-slate-500 max-w-lg mx-auto">
            Built for seed-to-Series-A B2B SaaS teams. No enterprise bloat. No 200-control
            frameworks designed for banks. Just what you need to get certified and close deals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title, description, tag, tagColor }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-[#0D7377]/30 hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#05101F] group-hover:bg-[#0D7377] transition-colors">
                  <Icon className="h-5 w-5 text-[#14b8b0]" />
                </div>
                <span className={`text-[11px] font-semibold rounded-full border px-2.5 py-0.5 ${tagColor}`}>
                  {tag}
                </span>
              </div>
              <h3 className="text-[14px] font-bold text-[#05101F] mb-2">{title}</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Trust / Social proof ─────────────────────────────────────────────────────
function TrustSignals() {
  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { stat: "$48k", context: "ARR deal closed within 2 weeks of SOC 2 Type 1", icon: TrendingUp, color: "text-emerald-600" },
            { stat: "3 wks", context: "average time from zero to SOC 2 Type 1 audit-ready", icon: Timer, color: "text-[#0D7377]" },
            { stat: "$9,200", context: "saved per year vs Vanta Starter plan", icon: DollarSign, color: "text-blue-600" },
            { stat: "4 hrs", context: "saved per deal cycle using Questionnaire AI", icon: Zap, color: "text-amber-600" },
          ].map(({ stat, context, icon: Icon, color }) => (
            <div key={stat} className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <Icon className={`h-6 w-6 ${color} mx-auto mb-3`} />
              <div className="text-[36px] font-bold text-[#05101F] leading-none">{stat}</div>
              <p className="mt-2 text-[13px] text-slate-500 leading-snug">{context}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-10 text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#0D7377] mb-3">
            Customer stories
          </span>
          <h2 className="text-[36px] sm:text-[44px] font-bold text-[#05101F] tracking-tight">
            Founders who stopped losing deals.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              quote: "We were losing enterprise deals at the security review for 6 months straight. CompliKit got us SOC 2 Type 1 audit-ready in 3 weeks. The first enterprise deal closed 11 days after we had the report — $48k ARR. The ROI is absurd.",
              name: "Sarah Chen",
              title: "CEO, Dataflow AI",
              stars: 5,
              outcome: "$48k deal closed in 11 days",
              initials: "SC",
            },
            {
              quote: "Vanta quoted us $11,400/year. I nearly fell off my chair. We're a 9-person startup. CompliKit was $99/month, generated our policies in 20 minutes tailored to our AWS stack, and our auditor said the evidence package was the most organized he'd ever received.",
              name: "Marcus Reid",
              title: "CTO, Synapse Labs",
              stars: 5,
              outcome: "Saved $10k vs Vanta",
              initials: "MR",
            },
            {
              quote: "The Questionnaire AI is genuinely magic. Prospects send us 200-question security assessments that used to take 4 hours each. I paste it in, review in 10 minutes, send it back the same day. Every security lead we talk to is shocked we responded so fast.",
              name: "Priya Nair",
              title: "Head of Sales, Vaultify",
              stars: 5,
              outcome: "4hrs saved per deal",
              initials: "PN",
            },
          ].map(({ quote, name, title, stars, outcome, initials }) => (
            <div key={name} className="rounded-2xl border border-slate-200 bg-white p-7 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-bold text-[#0D7377] bg-[#0D7377]/8 rounded-full px-2.5 py-1">
                  {outcome}
                </span>
              </div>
              <blockquote className="text-[14px] text-slate-600 leading-relaxed flex-1">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-1 border-t border-slate-100">
                <div className="h-9 w-9 rounded-full bg-[#0D7377] flex items-center justify-center text-[12px] font-bold text-white">
                  {initials}
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#05101F]">{name}</p>
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

// ─── Comparison (vs Vanta / Drata) ────────────────────────────────────────────
function Comparison() {
  const rows = [
    { feature: "Annual cost", complikit: "$1,188/yr (Starter)", vanta: "$10,000–15,000/yr", drata: "$10,000–12,000/yr", winner: "complikit" },
    { feature: "Transparent pricing", complikit: true, vanta: "Demo required", drata: "Demo required", winner: "complikit" },
    { feature: "Free trial (no card)", complikit: "14 days", vanta: false, drata: false, winner: "complikit" },
    { feature: "AI policy generation", complikit: true, vanta: "Add-on cost", drata: "Limited", winner: "complikit" },
    { feature: "Setup time", complikit: "< 5 minutes", vanta: "Days", drata: "Days", winner: "complikit" },
    { feature: "Built for startups", complikit: true, vanta: false, drata: false, winner: "complikit" },
    { feature: "Questionnaire AI", complikit: true, vanta: "Add-on", drata: "Add-on", winner: "complikit" },
    { feature: "All 36 SOC 2 controls", complikit: "All 36 TSC", vanta: true, drata: true, winner: "neutral" },
    { feature: "GitHub auto-evidence", complikit: "Growth plan", vanta: true, drata: true, winner: "neutral" },
    { feature: "Enterprise integrations", complikit: "3 (Growth)", vanta: "200+", drata: "100+", winner: "neutral" },
  ];

  function Cell({ value, highlight }: { value: string | boolean; highlight?: boolean }) {
    if (value === true)
      return <Check className={`h-5 w-5 mx-auto ${highlight ? "text-[#0D7377]" : "text-emerald-500"}`} />;
    if (value === false)
      return <X className="h-5 w-5 text-slate-300 mx-auto" />;
    return (
      <span className={`text-[13px] ${highlight ? "font-semibold text-[#0D7377]" : "text-slate-600"}`}>
        {value}
      </span>
    );
  }

  return (
    <section id="compare" className="py-24 bg-[#05101F]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#14b8b0] mb-3">
            CompliKit vs Vanta vs Drata
          </span>
          <h2 className="text-[40px] sm:text-[50px] font-bold text-white leading-tight tracking-tight">
            Same SOC 2 report. 10× cheaper.
          </h2>
          <p className="mt-4 text-[16px] text-white/45 max-w-xl mx-auto">
            Vanta and Drata are great products — for 200-person companies. CompliKit is built for
            startups who can&apos;t spend $10k before they&apos;ve even found product-market fit.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/[0.07] shadow-2xl">
          <table className="w-full text-left">
            <thead className="bg-white/[0.04] border-b border-white/[0.07]">
              <tr>
                <th className="px-6 py-4 text-[12px] font-semibold text-white/30 uppercase tracking-wider">Feature</th>
                <th className="px-6 py-4 text-center bg-[#0D7377]/15">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[13px] font-bold text-white">CompliKit</span>
                    <span className="text-[10px] font-bold text-[#14b8b0] bg-[#0D7377]/20 rounded-full px-2 py-0.5">Best for startups</span>
                  </div>
                </th>
                <th className="px-6 py-4 text-[13px] font-semibold text-white/30 text-center">Vanta</th>
                <th className="px-6 py-4 text-[13px] font-semibold text-white/30 text-center">Drata</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ feature, complikit, vanta, drata, winner }, i) => (
                <tr key={feature} className={`border-b border-white/[0.04] last:border-0 ${i % 2 === 1 ? "bg-white/[0.015]" : ""}`}>
                  <td className="px-6 py-3.5 text-[13px] text-white/55 font-medium">{feature}</td>
                  <td className="px-6 py-3.5 text-center bg-[#0D7377]/[0.06]">
                    <Cell value={complikit} highlight={winner === "complikit"} />
                  </td>
                  <td className="px-6 py-3.5 text-center"><Cell value={vanta} /></td>
                  <td className="px-6 py-3.5 text-center"><Cell value={drata} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0D7377] hover:bg-[#0b6568] px-7 py-3.5 text-[14px] font-bold text-white transition-all shadow-[0_0_30px_rgba(13,115,119,0.4)]"
          >
            Start free — see why startups choose CompliKit <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-3 text-[12px] text-white/25">No credit card. 14-day trial. Cancel anytime.</p>
        </div>
      </div>
    </section>
  );
}

// ─── SOC 2 Type 1 vs Type 2 journey ──────────────────────────────────────────
function Journey() {
  const paths = [
    {
      eyebrow: "SOC 2 Type 1",
      title: "Close your first enterprise deal in 4–6 weeks.",
      description:
        "A point-in-time assessment showing your controls are correctly designed. Most enterprise procurement teams accept Type 1 to unblock a deal while you work toward Type 2. This is where 90% of startups should start.",
      features: ["All 10 AI-generated SOC 2 policies", "36 controls assessed and evidenced", "Auditor-ready PDF report", "Guidance on what evidence each control needs"],
      cta: "Start Type 1 — it's free",
      badge: "Fastest path to revenue",
      badgeColor: "bg-[#0D7377]/20 text-[#14b8b0]",
      borderColor: "border-[#0D7377]/30",
      bg: "bg-[#0D7377]/5",
      icon: ShieldCheck,
      iconBg: "bg-[#0D7377]",
    },
    {
      eyebrow: "SOC 2 Type 2",
      title: "Prove you stayed compliant over time. For bigger deals.",
      description:
        "Type 2 tests that your controls operated effectively over 6–12 months — not just that they exist. Required by larger enterprise accounts, financial institutions, and government-adjacent buyers. CompliKit monitors continuously.",
      features: ["Everything in Type 1", "Continuous control monitoring", "GitHub + AWS auto-evidence collection", "Drift alerts via Slack before they become findings"],
      cta: "Start Type 2 journey",
      badge: "Required by enterprise",
      badgeColor: "bg-[#1B3A6B]/40 text-blue-300",
      borderColor: "border-blue-900/30",
      bg: "bg-[#1B3A6B]/10",
      icon: TrendingUp,
      iconBg: "bg-[#1B3A6B]",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#0D7377] mb-3">
            SOC 2 Type 1 vs Type 2
          </span>
          <h2 className="text-[40px] sm:text-[50px] font-bold text-[#05101F] leading-tight tracking-tight">
            Pick your compliance path.
          </h2>
          <p className="mt-4 text-[16px] text-slate-500 max-w-xl mx-auto">
            Not sure which you need? Start with Type 1 to unblock the deal in front of you.
            Upgrade to Type 2 when your enterprise buyers demand continuous proof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {paths.map(({ eyebrow, title, description, features, cta, badge, badgeColor, borderColor, bg, icon: Icon, iconBg }) => (
            <div key={eyebrow} className={`rounded-2xl border-2 ${borderColor} ${bg} p-8 flex flex-col gap-6`}>
              <div className="flex items-start justify-between gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconBg}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <span className={`text-[11px] font-bold rounded-full px-3 py-1.5 ${badgeColor}`}>{badge}</span>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#0D7377] mb-1.5">{eyebrow}</p>
                <h3 className="text-[22px] font-bold text-[#05101F] leading-snug">{title}</h3>
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
                className="mt-auto inline-flex items-center gap-2 rounded-xl bg-[#05101F] hover:bg-[#0D7377] px-5 py-3 text-[14px] font-bold text-white transition-colors w-fit"
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

// ─── Pricing ──────────────────────────────────────────────────────────────────
function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Explore the platform. Manual control tracking to understand SOC 2 without spending a dollar.",
      cta: "Get started free",
      href: "/signup",
      popular: false,
      features: ["SOC 2 readiness checklist", "Manual control tracking (all 36)", "10 evidence uploads", "1 team member"],
      missing: ["AI policy generation", "PDF report export", "Questionnaire AI"],
    },
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      vsNote: "vs $833/mo for Vanta",
      description: "Everything a seed-stage startup needs to get SOC 2 Type 1 audit-ready. Most popular choice.",
      cta: "Start 14-day free trial",
      href: "/signup",
      popular: true,
      features: [
        "All 10 AI-generated SOC 2 policies",
        "Full control tracker (all 36 controls)",
        "200 evidence uploads",
        "5 audit-ready PDF exports/month",
        "Vendor risk register (50 vendors)",
        "Questionnaire AI (unlimited)",
        "3 team members",
      ],
      missing: [],
    },
    {
      name: "Growth",
      price: "$199",
      period: "/month",
      vsNote: "vs $1,000+/mo for Drata",
      description: "Automated evidence + integrations for teams that need SOC 2 Type 2 continuous compliance.",
      cta: "Start 14-day free trial",
      href: "/signup",
      popular: false,
      features: [
        "Everything in Starter",
        "GitHub + AWS automated evidence",
        "Unlimited PDF exports",
        "10 team members",
        "Slack compliance alerts",
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
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#0D7377] mb-3">
            Pricing
          </span>
          <h2 className="text-[40px] sm:text-[50px] font-bold text-[#05101F] leading-tight tracking-tight">
            Transparent pricing.{" "}
            <span className="text-[#0D7377]">No sales call. No surprise invoice.</span>
          </h2>
          <p className="mt-4 text-[16px] text-slate-500 max-w-xl mx-auto">
            Vanta will make you sit through a demo to find out it costs $10,000/year.
            We just show you the number. Starter is $99/month. That&apos;s it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {plans.map(({ name, price, period, vsNote, description, cta, href, popular, features, missing }) => (
            <div
              key={name}
              className={`rounded-2xl p-8 relative ${
                popular
                  ? "bg-[#05101F] ring-2 ring-[#0D7377] shadow-[0_0_80px_rgba(13,115,119,0.25)]"
                  : "bg-white border border-slate-200"
              }`}
            >
              {popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0D7377] px-4 py-1.5 text-[11px] font-bold text-white shadow-lg">
                    <Star className="h-3 w-3 fill-current" /> Most popular
                  </span>
                </div>
              )}

              <p className={`text-[11px] font-bold uppercase tracking-widest mb-2 ${popular ? "text-white/35" : "text-slate-400"}`}>
                {name}
              </p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className={`text-[42px] font-bold leading-none ${popular ? "text-white" : "text-[#05101F]"}`}>
                  {price}
                </span>
                {period !== "forever" && (
                  <span className={`text-[14px] ${popular ? "text-white/35" : "text-slate-400"}`}>{period}</span>
                )}
              </div>
              {vsNote && (
                <p className="text-[11px] font-semibold text-[#14b8b0] mb-3">{vsNote}</p>
              )}
              <p className={`text-[13px] leading-relaxed mb-6 ${popular ? "text-white/40" : "text-slate-500"}`}>
                {description}
              </p>

              <Link
                href={href}
                className={`flex w-full items-center justify-center rounded-xl py-3.5 text-[14px] font-bold transition-all ${
                  popular
                    ? "bg-[#0D7377] hover:bg-[#0b6568] text-white shadow-lg"
                    : "border border-slate-200 bg-white hover:bg-slate-50 text-[#05101F]"
                }`}
              >
                {cta}
              </Link>

              <div className={`my-6 border-t ${popular ? "border-white/[0.06]" : "border-slate-100"}`} />

              <ul className="space-y-2.5">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px]">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${popular ? "text-[#14b8b0]" : "text-[#0D7377]"}`} />
                    <span className={popular ? "text-white/65" : "text-slate-600"}>{f}</span>
                  </li>
                ))}
                {missing.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px] opacity-30">
                    <X className="h-4 w-4 mt-0.5 shrink-0 text-slate-400" />
                    <span className="text-slate-500">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-8 flex-wrap">
          {[
            { icon: Clock, text: "14-day free trial, no card required" },
            { icon: ShieldCheck, text: "SOC 2 Type 1 & Type 2 supported" },
            { icon: Lock, text: "Cancel anytime, export your data" },
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

// ─── FAQ — schema-ready, keyword-rich questions ────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const questions = [
    {
      q: "What exactly is CompliKit and what does it do?",
      a: "CompliKit is a SOC 2 compliance software platform built for startups and small B2B SaaS teams. It helps you get SOC 2 audit-ready by: (1) using AI to generate all 10 required SOC 2 policies tailored to your tech stack, (2) guiding you through all 36 SOC 2 Trust Services Criteria controls with startup-specific steps, (3) organizing your evidence, and (4) producing an audit-ready PDF report you can hand to a CPA auditor.",
    },
    {
      q: "How is CompliKit different from Vanta or Drata?",
      a: "Vanta costs $10,000–15,000/year and Drata costs $10,000–12,000/year — both built for companies with 25–500+ employees and dedicated compliance teams. CompliKit starts at $99/month and is designed specifically for seed-to-Series-A startups with 3–25 people. Same SOC 2 report. 10× cheaper. No enterprise sales process to endure just to see the price.",
    },
    {
      q: "How long does it take to get SOC 2 Type 1 audit-ready with CompliKit?",
      a: "Most CompliKit customers are audit-ready for SOC 2 Type 1 in 2–4 weeks. Week 1: AI generates and you approve all 10 policies (20 minutes of actual work). Weeks 2–3: you work through the 36 controls with our guided tracker, uploading evidence. Week 4: final review and PDF report generation. Your CPA auditor then conducts the actual audit — that's a separate process.",
    },
    {
      q: "Do I still need to hire a SOC 2 auditor?",
      a: "Yes. CompliKit prepares you for the audit — it does not issue the SOC 2 report itself. That requires a licensed CPA firm. CompliKit dramatically reduces your audit preparation time and cost, so the actual audit goes faster and auditors push back less. Most startups pay $15–40k for the audit itself; being well-prepared can cut that significantly.",
    },
    {
      q: "Are the AI-generated SOC 2 policies actually compliant?",
      a: "Yes. Policies are generated by Claude (Anthropic), tailored to your specific company, tech stack, employee count, and industry. They meet AICPA SOC 2 Trust Services Criteria requirements. Your CPA auditor will review them as part of the audit. Everything is fully editable — you're never locked into what AI generates.",
    },
    {
      q: "What's the difference between SOC 2 Type 1 and Type 2?",
      a: "SOC 2 Type 1 is a point-in-time assessment — your auditor verifies that your controls are correctly designed and in place on a specific date. Most enterprise prospects accept Type 1 to unblock a deal. SOC 2 Type 2 tests that your controls actually operated effectively over a period (usually 6–12 months). Larger enterprise accounts and financial institutions typically require Type 2.",
    },
    {
      q: "How secure is CompliKit with our compliance data?",
      a: "Your data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Evidence files are stored in private S3 buckets behind signed URLs with expiry. We follow the same SOC 2 principles we help you implement. No third-party analytics tools see your compliance data.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-14 text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#0D7377] mb-3">FAQ</span>
          <h2 className="text-[40px] sm:text-[50px] font-bold text-[#05101F] leading-tight tracking-tight">
            Everything you want to know.
          </h2>
          <p className="mt-4 text-[16px] text-slate-500">
            SOC 2 is confusing. We made it less confusing.
          </p>
        </div>

        <div className="divide-y divide-slate-100 rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
          {questions.map(({ q, a }, i) => (
            <div key={q} className="bg-white">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-slate-50/80 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-[15px] font-semibold text-[#05101F]">{q}</span>
                {open === i
                  ? <ChevronUp className="h-4 w-4 text-[#0D7377] shrink-0" />
                  : <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />
                }
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
    <section className="relative py-28 bg-[#05101F] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full bg-[#0D7377]/15 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#14b8b0] mb-5">
          Your next enterprise deal is waiting
        </span>
        <h2 className="text-[44px] sm:text-[58px] font-bold text-white leading-[1.05] tracking-tight">
          Stop losing deals to a missing SOC 2 report.
          <span className="block mt-2 text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #14b8b0, #0D7377)" }}>
            Start your trial today.
          </span>
        </h2>
        <p className="mt-6 text-[17px] text-white/50 max-w-xl mx-auto leading-relaxed">
          Join startups using CompliKit to get SOC 2 audit-ready in weeks, close enterprise deals,
          and outpace competitors still waiting for their $10,000 Vanta quote.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/signup"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#0D7377] hover:bg-[#0b6568] px-9 py-4 text-[15px] font-bold text-white transition-all shadow-[0_0_50px_rgba(13,115,119,0.5)]"
          >
            Get SOC 2 audit-ready — free trial
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 hover:border-white/35 px-9 py-4 text-[15px] font-semibold text-white/65 hover:text-white transition-all"
          >
            Log in to your account
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-7 flex-wrap">
          {["No credit card required", "14-day free trial", "SOC 2 Type 1 & Type 2", "Cancel anytime"].map((t) => (
            <span key={t} className="flex items-center gap-1.5 text-[12px] text-white/30">
              <Check className="h-3.5 w-3.5" /> {t}
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
      title: "Product",
      links: [
        ["AI Policy Generation", "#features"],
        ["SOC 2 Control Tracker", "#features"],
        ["Questionnaire AI", "#features"],
        ["Evidence Vault", "#features"],
        ["Audit-Ready Reports", "#features"],
      ],
    },
    {
      title: "Solutions",
      links: [
        ["SOC 2 Type 1", "#solutions"],
        ["SOC 2 Type 2", "#solutions"],
        ["For Startups", "#"],
        ["For Series A Teams", "#"],
        ["vs Vanta", "#compare"],
      ],
    },
    {
      title: "Resources",
      links: [
        ["SOC 2 Guide for Startups", "#"],
        ["SOC 2 Type 1 Checklist", "#"],
        ["How to Get SOC 2 Certified", "#"],
        ["Blog", "#"],
        ["Documentation", "#"],
      ],
    },
    {
      title: "Company",
      links: [
        ["About", "#"],
        ["Security", "#"],
        ["Privacy Policy", "#"],
        ["Terms of Service", "#"],
        ["Contact", "#"],
      ],
    },
  ];

  return (
    <footer className="bg-[#030C18] border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-5 gap-10 pb-12 border-b border-white/[0.05]">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0D7377]">
                <ShieldCheck className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[14px] font-bold text-white">CompliKit</span>
            </div>
            <p className="text-[12px] text-white/30 leading-relaxed mb-5">
              SOC 2 compliance software for startups. Audit-ready in weeks, not months, at 1/10th the cost.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-[#14b8b0] font-semibold">
              <Award className="h-3.5 w-3.5" />
              SOC 2 Type 1 & Type 2 supported
            </div>
          </div>

          {cols.map(({ title, links }) => (
            <div key={title}>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-4">{title}</p>
              <ul className="space-y-2.5">
                {links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-[13px] text-white/35 hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/20">
            © {new Date().getFullYear()} CompliKit, Inc. Not affiliated with AICPA.
          </p>
          <p className="text-[12px] text-white/20">
            CompliKit prepares startups for SOC 2 auditors. It does not issue SOC 2 reports.
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
      <WhatWeDo />
      <HowItWorks />
      <Features />
      <TrustSignals />
      <Comparison />
      <Journey />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
