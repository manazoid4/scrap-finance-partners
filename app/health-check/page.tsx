"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AlertTriangle, EyeOff, TrendingDown, Gauge, ShieldCheck, FileCheck,
  ClipboardList, Calculator, BarChart3, Table2, Lock, CheckCircle2,
  ArrowRight, Activity,
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
    statusLabel: "Common issue",
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
  "Recommended next steps: whether that is a monthly retainer, a sprint, or internal fixes",
  "A 60-minute walkthrough call where we explain every finding",
]

const statusStyles: Record<string, { dot: string; badge: string; text: string }> = {
  red: { dot: "bg-red-500", badge: "bg-red-500/10 text-red-700 border-red-500/20", text: "text-red-600" },
  amber: { dot: "bg-amber-500", badge: "bg-amber-500/10 text-amber-700 border-amber-500/20", text: "text-amber-600" },
  green: { dot: "bg-green-500", badge: "bg-green-500/10 text-green-700 border-green-500/20", text: "text-green-600" },
}

export default function HealthCheckPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-hairline bg-panel/20">
        <div className="container py-12 md:py-20 px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-copper/10 border border-copper/20 px-3 py-1 text-xs font-medium text-copper mb-4">
              <Activity className="h-3 w-3" />
              Finance Diagnostic
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Find out what your numbers are hiding.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A one-off diagnostic of your reporting, stock visibility, margin control, and system accuracy. We deliver a red/amber/green report showing exactly what is broken and what it is costing you.
            </p>
            <div className="mt-6 inline-flex items-center gap-3">
              <span className="bg-copper/10 text-copper px-4 py-2 rounded-lg font-semibold text-sm border border-copper/20">
                £750 – £1,500
              </span>
              <span className="text-sm text-muted-foreground">One-off · No ongoing commitment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="border-b border-hairline">
        <div className="container py-10 px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, i) => (
              <div key={step.num} className="relative">
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(50%+2rem)] right-0 h-px bg-hairline" />
                )}
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 h-12 w-12 rounded-xl bg-panel border border-hairline flex items-center justify-center text-sm font-bold text-copper tabular-nums">
                    {step.num}
                  </span>
                  <div>
                    <p className="font-semibold text-sm">{step.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Review */}
      <section className="border-b border-hairline">
        <div className="container py-12 px-4">
          <h2 className="text-2xl font-bold mb-2">What we review</h2>
          <p className="text-muted-foreground mb-8">Four core areas, eleven diagnostic categories.</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mb-10">
            {reviewAreas.map((area) => {
              const styles = statusStyles[area.status]
              return (
                <Card key={area.title} className="border-hairline hover:border-copper/30 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="flex-shrink-0 h-9 w-9 rounded-lg bg-copper/10 border border-copper/20 flex items-center justify-center">
                          <area.icon className="h-4 w-4 text-copper" />
                        </span>
                        <CardTitle className="text-base">{area.title}</CardTitle>
                      </div>
                      <span className={cn("text-xs px-2 py-1 rounded-full border font-medium whitespace-nowrap", styles.badge)}>
                        <span className={cn("inline-block h-1.5 w-1.5 rounded-full mr-1.5", styles.dot)} />
                        {area.statusLabel}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {area.desc}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Diagnostic Categories Grid */}
          <div className="max-w-4xl">
            <p className="text-sm font-medium text-muted-foreground mb-4">Full diagnostic scope — 11 categories:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {diagnosticCategories.map((cat, i) => (
                <div
                  key={cat.label}
                  className="flex items-center gap-2.5 p-3 rounded-lg border border-hairline bg-panel/20 hover:border-copper/30 transition-colors"
                >
                  <span className="flex-shrink-0 h-7 w-7 rounded-md bg-panel border border-hairline flex items-center justify-center text-xs font-bold text-muted-foreground tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <cat.icon className="h-3.5 w-3.5 text-copper/70 flex-shrink-0" />
                  <span className="text-xs font-medium truncate">{cat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-b border-hairline bg-panel/20">
        <div className="container py-12 px-4">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">What you get</h2>
            <div className="space-y-3">
              {deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-card border border-hairline">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                  </span>
                  <span className="text-sm text-muted-foreground pt-0.5">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section>
        <div className="container py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-hairline shadow-lg">
              <CardHeader className="border-b border-hairline">
                <div className="flex items-center gap-2.5">
                  <span className="flex-shrink-0 h-10 w-10 rounded-xl bg-copper/10 border border-copper/20 flex items-center justify-center">
                    <ClipboardList className="h-5 w-5 text-copper" />
                  </span>
                  <div>
                    <CardTitle>Request a Health Check</CardTitle>
                    <CardDescription>Fill out this brief form and we will be in touch within 24 hours to schedule a preliminary call.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                      <input
                        id="name"
                        className="flex h-11 w-full rounded-lg border border-hairline bg-panel/30 px-3 py-2 text-sm transition-colors focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper/30 placeholder:text-muted-foreground/50"
                        placeholder="Full name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-sm font-medium">Company Name</label>
                      <input
                        id="company"
                        className="flex h-11 w-full rounded-lg border border-hairline bg-panel/30 px-3 py-2 text-sm transition-colors focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper/30 placeholder:text-muted-foreground/50"
                        placeholder="Scrap yard or recycling business name"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-11 w-full rounded-lg border border-hairline bg-panel/30 px-3 py-2 text-sm transition-colors focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper/30 placeholder:text-muted-foreground/50"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                      <input
                        id="phone"
                        type="tel"
                        className="flex h-11 w-full rounded-lg border border-hairline bg-panel/30 px-3 py-2 text-sm transition-colors focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper/30 placeholder:text-muted-foreground/50"
                        placeholder="Contact number"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium">What is your biggest finance frustration right now?</label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-lg border border-hairline bg-panel/30 px-3 py-2 text-sm transition-colors focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper/30 placeholder:text-muted-foreground/50 resize-none"
                      placeholder="Stock discrepancies? Late reporting? Fred not giving real numbers?"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-copper hover:bg-copper/90 text-white h-11 gap-2">
                    Request My Health Check
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Or email directly:{" "}
              <a href="mailto:hello@scrapfinancepartners.co.uk" className="text-copper hover:underline font-medium">
                hello@scrapfinancepartners.co.uk
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}