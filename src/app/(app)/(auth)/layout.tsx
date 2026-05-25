import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Left panel — brand */}
      <div className="hidden lg:flex lg:w-[480px] xl:w-[560px] flex-col justify-between bg-[#1B3A6B] p-12 relative overflow-hidden shrink-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-[#0D7377]/20 blur-[100px]" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#0D7377] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z" fill="white" fillOpacity="0.9" />
              <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-white font-semibold text-xl tracking-tight">CompliKit</span>
        </div>

        {/* Quote / benefit block */}
        <div className="relative z-10 space-y-8">
          <div className="space-y-3">
            <p className="text-white/90 text-2xl font-semibold leading-snug">
              SOC 2 compliance without the&nbsp;$10k bill.
            </p>
            <p className="text-white/55 text-base leading-relaxed">
              Generate AI-powered policies, track all 36 controls, and walk into your audit fully prepared — in weeks, not months.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "36", label: "SOC 2 controls" },
              { value: "10×", label: "cheaper than Vanta" },
              { value: "<4 wks", label: "to audit-ready" },
              { value: "AI", label: "policy generation" },
            ].map((s) => (
              <div key={s.label} className="bg-white/[0.07] rounded-xl p-4 border border-white/10">
                <p className="text-white text-2xl font-bold">{s.value}</p>
                <p className="text-white/50 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-white/[0.06] border border-white/10 rounded-xl p-5">
            <p className="text-white/80 text-sm leading-relaxed italic">
              "CompliKit cut our SOC 2 prep from 6 months to 3 weeks. Our auditor said the evidence package was the most organized they'd seen."
            </p>
            <div className="flex items-center gap-3 mt-3">
              <div className="w-8 h-8 rounded-full bg-[#0D7377]/60 flex items-center justify-center">
                <span className="text-white text-xs font-semibold">MR</span>
              </div>
              <div>
                <p className="text-white text-sm font-medium">Marcus Reid</p>
                <p className="text-white/45 text-xs">CTO, Synapse Labs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="relative z-10 text-white/30 text-xs">
          SOC 2 Type 1 & 2 · AICPA Trust Services Criteria · 256-bit encryption
        </p>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 bg-background">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-8 h-8 rounded-lg bg-[#1B3A6B] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z" fill="white" />
              </svg>
            </div>
            <span className="font-semibold text-foreground">CompliKit</span>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
