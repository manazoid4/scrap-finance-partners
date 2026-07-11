import { PricingCard } from "@/components/pricing-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check, Minus } from "lucide-react"

const comparisonRows = [
  { feature: "Monthly numbers matching your yard", l1: true, l2: true, l3: true },
  { feature: "Stock position report", l1: true, l2: true, l3: true },
  { feature: "Plain-English management commentary", l1: true, l2: true, l3: true },
  { feature: "Monthly email summary", l1: true, l2: true, l3: true },
  { feature: "Improvement tracker", l1: true, l2: true, l3: true },
  { feature: "Cash flow forecast", l1: false, l2: true, l3: true },
  { feature: "Monthly business partner meeting", l1: false, l2: true, l3: true },
  { feature: "Margin & stock movement analysis", l1: false, l2: true, l3: true },
  { feature: "Transport & commercial KPI pack", l1: false, l2: true, l3: true },
  { feature: "Action tracker (what to do, by when)", l1: false, l2: true, l3: true },
  { feature: "Strategic support & planning", l1: false, l2: false, l3: true },
  { feature: "Board-style management pack", l1: false, l2: false, l3: true },
  { feature: "KPI review & challenge meetings", l1: false, l2: false, l3: true },
  { feature: "System & process improvement roadmap", l1: false, l2: false, l3: true },
  { feature: "Payroll, commission & coding advisory", l1: false, l2: false, l3: true },
  { feature: "Direct owner decision support", l1: false, l2: false, l3: true },
]

const sprintData = [
  {
    title: "Scrap Yard Finance Health Check",
    price: "£750 – £1,500",
    description: "Review reporting, stock, margin, processes and systems. Deliver a red/amber/green improvement report with priorities and costed fixes."
  },
  {
    title: "Stock Accuracy Sprint",
    price: "£1,500 – £3,000",
    description: "Deep dive into stock discrepancies. Find what is missing, why it is missing, and how to stop it happening. Typically recovers £20k–£100k in lost stock value."
  },
  {
    title: "Fred System Setup",
    price: "£1,000 – £2,500",
    description: "New site configuration, EWC code overhaul, transport module activation, stock sheet build. Done properly so it works from day one."
  },
  {
    title: "Commission Model Fix",
    price: "£750 – £1,500",
    description: "Audit existing commission calculations, fix errors, build a model that matches your deal sheets, and train your team to run it."
  },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative border-b border-hairline bg-graphite overflow-hidden">
        <div className="absolute inset-0 bg-grid-fine opacity-40 pointer-events-none" />
        <div className="absolute inset-0 noise opacity-20 pointer-events-none" />
        <div className="container px-4 py-24 md:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1] text-ink uppercase mb-8">
              Fixed monthly pricing.
            </h1>
            <p className="text-xl text-ink-secondary leading-relaxed font-light">
              No hourly rates. No surprise invoices. No scope creep. You pay a fixed monthly fee and get the full service. Cancel any time.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-panel relative">
        <div className="container px-4 py-24">
          <div className="grid lg:grid-cols-3 gap-0 border border-hairline bg-graphite">
            <PricingCard
              title="Level 1"
              level={1}
              price="£500 /mo"
              description="For owner-managed yards that need to see their numbers clearly for the first time."
              features={[
                "Monthly numbers that match your yard",
                "Stock position report — ground truth",
                "What the numbers mean — in plain English",
                "One monthly email summary",
                "Improvement tracker — what we fixed and what is next"
              ]}
            />
            <PricingCard
              title="Level 2"
              level={2}
              price="£1,000 /mo"
              isPopular
              description="For growing yards that need margin control, transport analysis, and active cash management."
              features={[
                "Everything in Level 1",
                "Margin & stock movement analysis",
                "Transport & commercial KPI pack",
                "Cash flow forecast",
                "Monthly business partner meeting",
                "Action tracker (what to do, by when)"
              ]}
            />
            <PricingCard
              title="Level 3"
              level={3}
              price="£2,000 /mo"
              description="For multi-site groups needing strategic financial direction and board-level reporting."
              features={[
                "Everything in Level 2",
                "Board-style management pack",
                "Strategic support & planning",
                "KPI review & challenge meetings",
                "System & process improvement roadmap",
                "Direct owner decision support"
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-graphite">
        <div className="container px-4 py-24">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink uppercase">Compare Features</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse border border-hairline bg-panel">
              <thead className="bg-panel-alt border-b border-hairline font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                <tr>
                  <th className="px-6 py-4 font-normal border-r border-hairline">Deliverable</th>
                  <th className="px-6 py-4 font-normal text-center border-r border-hairline">Level 1</th>
                  <th className="px-6 py-4 font-normal text-center border-r border-hairline text-copper">Level 2</th>
                  <th className="px-6 py-4 font-normal text-center">Level 3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline bg-graphite">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-panel transition-colors">
                    <td className="px-6 py-4 font-medium text-ink border-r border-hairline">{row.feature}</td>
                    <td className="px-6 py-4 text-center border-r border-hairline">
                      {row.l1 ? <Check className="w-4 h-4 mx-auto text-copper" /> : <Minus className="w-4 h-4 mx-auto text-hairline-bright" />}
                    </td>
                    <td className="px-6 py-4 text-center border-r border-hairline">
                      {row.l2 ? <Check className="w-4 h-4 mx-auto text-copper" /> : <Minus className="w-4 h-4 mx-auto text-hairline-bright" />}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.l3 ? <Check className="w-4 h-4 mx-auto text-copper" /> : <Minus className="w-4 h-4 mx-auto text-hairline-bright" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-panel relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-1/3 industrial-stripes opacity-20 pointer-events-none" />
        <div className="container px-4 py-24 relative">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink uppercase">One-off Sprints</h2>
            <p className="mt-4 text-ink-secondary max-w-2xl text-lg font-light">
              Don&apos;t need a monthly service? We run targeted diagnostic and fix projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
            {sprintData.map((sprint, i) => (
              <div key={i} className="bg-graphite p-8 hover:bg-panel-alt transition-colors group relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-copper scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <h3 className="text-xl font-bold text-ink uppercase mb-2">{sprint.title}</h3>
                <p className="font-mono text-copper text-lg mb-6">{sprint.price}</p>
                <p className="text-ink-secondary leading-relaxed">{sprint.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-graphite py-24">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink uppercase mb-8">Not sure which level you need?</h2>
          <Button asChild size="lg" className="bg-copper hover:bg-copper-bright text-white border-0 rounded-none text-base px-12 uppercase font-mono tracking-wide">
            <Link href="/health-check">Get a Health Check <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
