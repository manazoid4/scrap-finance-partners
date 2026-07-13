"use client"

import LeadForm from "@/components/lead-form"
import {
  AlertTriangle, EyeOff, TrendingDown, Gauge, ShieldCheck, FileCheck,
  ClipboardList, Calculator, BarChart3, Table2, Lock, CheckCircle2,
  Activity,
} from "lucide-react"
import { cn } from "@/lib/utils"

const processSteps = [
  { num: "01", label: "You request", desc: "Fill out the brief form below" },
  { num: "02", label: "We scope", desc: "30-min call to understand your setup" },
  { num: "03", label: "We diagnose", desc: "Deep-dive across 11 areas of your finance ops" },
  { num: "04", label: "You get", desc: "RAG report + costed priority list + walkthrough" },
]

const reviewAreas = [
  {
    icon: EyeOff,
    title: "Stock Visibility",
    desc: "Are your stock sheets accurate? Do you trust your monthly stock position reporting? We check stock by category, location, and system alignment.",
    status: "red",
    statusLabel: "What we usually find",
  },
  {
    icon: TrendingDown,
    title: "Margin Reporting",
    desc: "Can you see true gross margin by material category without manual spreadsheet acrobatics? We trace margin from deal sheet to balance sheet.",
    status: "amber",
    statusLabel: "Often unclear",
  },
  {
    icon: Gauge,
    title: "Transport Performance",
    desc: "Is transport costing you more than you think? Are manual deal sheets slowing you down? We analyse cost per tonne and route efficiency.",
    status: "amber",
    statusLabel: "Often unclear",
  },
  {
    icon: AlertTriangle,
    title: "System Data Risk",
    desc: "Are Fred EWC codes, Xero product codes, and nominal structures aligned and automated? We find the gaps that cause miscoding and missed reporting.",
    status: "red",
    statusLabel: "Common issue",
  },
]

const diagnosticCategories = [
  { icon: EyeOff, label: "Stock visibility" },
  { icon: TrendingDown, label: "Margin reporting" },
  { icon: Gauge, label: "Transport performance" },
  { icon: Calculator, label: "Cost-centre control" },
  { icon: FileCheck, label: "Fred / Xero / D365 data" },
  { icon: ClipboardList, label: "PO workflow" },
  { icon: BarChart3, label: "Payroll & commission" },
  { icon: Activity, label: "Management reporting rhythm" },
  { icon: Table2, label: "Manual spreadsheet burden" },
  { icon: ShieldCheck, label: "Data integrity" },
  { icon: Lock, label: "Compliance & data readiness" },
]

const deliverables = [
  "Red/amber/green scoring across all four areas",
  "Specific issues identified — not generic 'opportunities for improvement'",
  "Costed priority list: what to fix first, what it costs, and what you gain",
  "Recommended next steps: whether that is fixed monthly support, a sprint, or internal fixes",
  "A 60-minute walkthrough call where we explain every finding",
]

const statusStyles: Record<string, { dot: string; badge: string; text: string }> = {
  red: { dot: "bg-red", badge: "bg-red/10 text-red border-red/20", text: "text-red" },
  amber: { dot: "bg-amber", badge: "bg-amber/10 text-amber border-amber/20", text: "text-amber" },
  green: { dot: "bg-green", badge: "bg-green/10 text-green border-green/20", text: "text-green" },
}

export default function HealthCheckPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="border-b border-hairline bg-graphite">
        <div className="container px-4 py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-copper/10 border border-copper/20 px-3 py-1 text-xs font-mono uppercase tracking-wider text-copper mb-6">
              <Activity className="h-3 w-3" />
              Finance Diagnostic
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-ink">
              Find out what your
              <br />
              <span className="text-copper">numbers are hiding</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-ink-secondary max-w-3xl leading-relaxed font-light">
              A one-off diagnostic of your reporting, stock visibility, margin control, and system accuracy. We deliver a red/amber/green report showing exactly what is broken and what it is costing you.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="bg-copper/10 text-copper px-4 py-2 text-sm font-semibold border border-copper/20 font-mono">
                £750 – £1,500
              </span>
              <span className="text-sm text-ink-secondary">One-off · No ongoing commitment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="border-b border-hairline bg-panel/30">
        <div className="container py-10 px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.num} className="relative">
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(50%+2rem)] right-0 h-px bg-hairline" />
                )}
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 h-12 w-12 bg-graphite border border-hairline flex items-center justify-center text-sm font-bold text-copper font-mono tabular-nums">
                    {step.num}
                  </span>
                  <div>
                    <p className="font-bold text-sm text-ink">{step.label}</p>
                    <p className="text-xs text-ink-secondary mt-0.5">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Review */}
      <section className="border-b border-hairline">
        <div className="container py-16 md:py-20 px-4">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-ink">
                What we review
              </h2>
              <p className="mt-4 text-ink-secondary">Four core areas, eleven diagnostic categories.</p>
            </div>
            <div className="space-y-0">
              {reviewAreas.map((area) => {
                const styles = statusStyles[area.status]
                return (
                  <div
                    key={area.title}
                    className="py-7 border-t border-hairline first:border-t-0 group hover:bg-panel/20 transition-colors -mx-4 px-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 h-9 w-9 bg-copper/10 border border-copper/20 flex items-center justify-center">
                          <area.icon className="h-4 w-4 text-copper" />
                        </span>
                        <h3 className="text-base font-bold text-ink">{area.title}</h3>
                      </div>
                      <span className={cn("text-xs px-2 py-1 border font-medium whitespace-nowrap flex-shrink-0", styles.badge)}>
                        <span className={cn("inline-block h-1.5 w-1.5 mr-1.5", styles.dot)} />
                        {area.statusLabel}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-ink-secondary leading-relaxed pl-12">{area.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Diagnostic Categories */}
          <div className="mt-16 pt-10 border-t border-hairline">
            <p className="text-xs font-mono uppercase tracking-wider text-ink-tertiary mb-6">Full diagnostic scope — 11 categories</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {diagnosticCategories.map((cat, i) => (
                <div
                  key={cat.label}
                  className="flex items-center gap-2.5 p-3 border border-hairline bg-panel/20 hover:border-copper/30 transition-colors"
                >
                  <span className="flex-shrink-0 h-7 w-7 bg-graphite border border-hairline flex items-center justify-center text-xs font-bold text-ink-tertiary font-mono tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <cat.icon className="h-3.5 w-3.5 text-copper/70 flex-shrink-0" />
                  <span className="text-xs font-medium truncate text-ink-secondary">{cat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-b border-hairline bg-graphite">
        <div className="container px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-ink mb-10">
              What you get
            </h2>
            <div className="space-y-0">
              {deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-5 border-t border-hairline first:border-t-0">
                  <span className="flex-shrink-0 h-6 w-6 bg-green-500/10 border border-green-500/20 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                  </span>
                  <span className="text-ink-secondary leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-panel/30">
        <div className="container px-4 py-16 md:py-20">
          <div className="max-w-2xl mx-auto">
            <div className="border border-hairline bg-graphite">
              <div className="p-6 border-b border-hairline">
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 h-10 w-10 bg-copper/10 border border-copper/20 flex items-center justify-center">
                    <ClipboardList className="h-5 w-5 text-copper" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-ink">Request a Health Check</h3>
                    <p className="text-sm text-ink-secondary">Fill out this brief form and we will be in touch within 24 hours to schedule a preliminary call.</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <LeadForm
                  source="health-check"
                  messageLabel="Tell us about your biggest finance headache"
                  messagePlaceholder="e.g. 'Our month-end takes 7 days and nobody trusts the numbers...'"
                  submitLabel="Request Health Check"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
