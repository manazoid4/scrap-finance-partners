import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, FileSpreadsheet, ShieldCheck, Search, TrendingUp, Server } from "lucide-react"

interface CaseStudy {
  tag: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  problem: string
  action: string
  impact: string
}

const studies: CaseStudy[] = [
  {
    tag: "Manual Reporting Reduction",
    icon: FileSpreadsheet,
    title: "£120k saved by killing redundant spreadsheets",
    problem: "A multi-site scrap operator was running 40+ manual spreadsheets to produce monthly management accounts. Three people spent a week each month copying, pasting and reconciling. Errors were common. Nobody trusted the numbers.",
    action: "Audited every spreadsheet, identified redundant data flows, and digitised reporting into a single connected system. Built automated feeds from Fred and Xero directly into management packs.",
    impact: "£120,000 annual saving in labour cost. Reporting time dropped from 7 days to 2 days. Errors reduced by 80%. The finance team started focusing on analysis instead of copy-paste.",
  },
  {
    tag: "Audit Validation Control",
    icon: ShieldCheck,
    title: "£20k overpayment caught before it left",
    problem: "During a routine month-end review, a duplicate invoice was spotted — same supplier, same amount, two weeks apart. The second invoice had been approved and was queued for payment.",
    action: "Stopped the payment immediately. Traced the root cause to a broken PO workflow where approvals were happening without invoice matching. Implemented validation controls and a three-way match process.",
    impact: "£20,000 overpayment prevented. New controls caught three further duplicates in the next six months. The supplier relationship improved because the yard was seen as precise, not chaotic.",
  },
  {
    tag: "Supplier Reconciliation",
    icon: Search,
    title: "£90k recovered from 250+ suppliers",
    problem: "A large scrap processor had not reconciled supplier statements in 18 months. Credits, rebates and overpayments were sitting on supplier accounts unclaimed. The finance team did not have time to chase them.",
    action: "Systematically reconciled 250+ supplier accounts over a six-week sprint. Identified unclaimed credits, duplicate payments and pricing errors. Built a monthly reconciliation rhythm to prevent recurrence.",
    impact: "£90,000 recovered and reinvested into the business. Monthly reconciliation process now takes 2 hours instead of being ignored. Supplier terms improved because statements were accurate.",
  },
  {
    tag: "Transport Scorecards",
    icon: TrendingUp,
    title: "Transport cost visibility the board finally trusted",
    problem: "A recycling group with 50+ vehicles had no consolidated view of transport costs. Fuel, maintenance, driver wages and VOR were scattered across five systems. Directors made pricing decisions without knowing true transport cost per tonne.",
    action: "Built monthly transport scorecards consolidating fuel (Jigsaw Fuel/Geotab), maintenance (MRO), wages and VOR data. Added trend commentary and route-level cost-per-tonne analysis.",
    impact: "Board-level visibility for the first time. Identified two routes that were loss-making and renegotiated. Transport P&L accuracy improved from estimated to within 3% of actual.",
  },
  {
    tag: "Systems Integration",
    icon: Server,
    title: "Sage to D365 migration — data preserved, reporting rebuilt",
    problem: "A £40m scrap group was migrating from Sage Line 50 to Microsoft D365. The project was six months behind. Supplier records were corrupted. P&L balances did not match. The finance team was working on both systems simultaneously and morale was low.",
    action: "Led data validation and reconciliation workstream. Reconciled supplier and debtor balances between systems. Built P&L mapping and variance analysis. Supported machine-level fuel posting setup across 800+ assets. Trained the team on new reporting structures.",
    impact: "Migration completed on revised timeline. No material balances lost. Month-one reporting in D365 matched Sage within 1%. Fuel posting automated for trucks, balers, shredders and forklifts. User adoption exceeded targets.",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="border-b border-hairline bg-graphite">
        <div className="container px-4 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-copper mb-6">Case Studies</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-ink">
              Real results from
              <br />
              <span className="text-copper">real yards</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-ink-secondary max-w-3xl leading-relaxed font-light">
              These are anonymised examples from over two decades inside scrap and recycling finance. Every figure is real. Every outcome is measurable.
            </p>
          </div>
        </div>
      </section>

      {/* Studies — stacked editorial rows */}
      <section>
        {studies.map((study, i) => {
          const Icon = study.icon
          const isDark = i % 2 === 1
          return (
            <div key={i} className={`border-b border-hairline ${isDark ? 'bg-panel/50' : ''}`}>
              <div className="container px-4 py-16 md:py-20">
                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16">
                  {/* Left: tag + title */}
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <Icon className="h-5 w-5 text-copper" />
                      <span className="text-sm font-mono uppercase tracking-wider text-copper">{study.tag}</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-[1.15] text-ink">
                      {study.title}
                    </h2>
                  </div>

                  {/* Right: problem → action → impact */}
                  <div className="space-y-0">
                    <div className="py-5 border-t border-hairline first:border-t-0">
                      <p className="text-xs font-mono uppercase tracking-wider text-ink-tertiary mb-2">Problem</p>
                      <p className="text-ink-secondary leading-relaxed">{study.problem}</p>
                    </div>
                    <div className="py-5 border-t border-hairline">
                      <p className="text-xs font-mono uppercase tracking-wider text-copper mb-2">Action</p>
                      <p className="text-ink-secondary leading-relaxed">{study.action}</p>
                    </div>
                    <div className="py-5 border-t border-hairline">
                      <p className="text-xs font-mono uppercase tracking-wider text-green mb-2">Impact</p>
                      <p className="text-ink leading-relaxed font-medium">{study.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      {/* CTA */}
      <section className="bg-graphite">
        <div className="container px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-ink mb-6">
              Want results like these?
            </h2>
            <p className="text-lg text-ink-secondary leading-relaxed mb-8 max-w-2xl">
              Every yard is different. The health check tells us exactly where your gaps are — and what fixing them is worth.
            </p>
            <Button asChild size="lg" className="bg-copper hover:bg-copper-bright text-white border-0 rounded-sm">
              <Link href="/health-check">
                Book a Health Check <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
