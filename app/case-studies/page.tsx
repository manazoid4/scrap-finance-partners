import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const caseStudies = [
  {
    title: "The Missing £20k",
    type: "Audit & Recovery",
    yardSize: "Medium (2 sites)",
    problem: "The yard felt busy, tonnage was up, but cash flow was tight. Month-end accounts showed a margin drop that nobody could explain. The owner suspected theft or scale issues.",
    action: "We audited the purchasing ledger against Fred weighbridge tickets. By digitising the supplier reconciliation process, we found a recurring manual input error on high-grade non-ferrous purchases.",
    result: "Caught and recovered £20k in supplier overpayments within 3 weeks. Implemented a 3-way match control that prevents the error permanently.",
    metrics: [
      { label: "RECOVERED", value: "£20k" },
      { label: "TIME TO FIX", value: "3 Weeks" },
    ]
  },
  {
    title: "Stock Reporting Overhaul",
    type: "Process & Systems",
    yardSize: "Large (Multi-site)",
    problem: "It took the finance team 7 days every month to produce the management accounts. By the time the directors saw the margin, the data was too old to act on. Stock sheets were manipulated in Excel for hours.",
    action: "We mapped the flow of data from the weighbridge to Xero. We cleaned the EWC codes in Fred, built a direct Power BI feed, and eliminated 4 manual spreadsheets.",
    result: "Reduced the reporting cycle from 7 days to 2 days. The board now reviews true stock positions by day 3, with zero manual spreadsheet massaging.",
    metrics: [
      { label: "CYCLE CUT", value: "7→2 Days" },
      { label: "ADMIN SAVED", value: "£120k/yr" },
    ]
  },
  {
    title: "The Hidden Margin Leak",
    type: "Diagnostic Sprint",
    yardSize: "Small (Owner-managed)",
    problem: "The yard was trading well but the owner didn't know which materials were actually making money. Pricing decisions were made on gut feel. Ferrous looked profitable, non-ferrous felt tight.",
    action: "We ran a 2-week Finance Health Check. We built a gross margin model by material category, factoring in accurate transport and processing costs per tonne.",
    result: "Revealed that transport costs were eating 40% of the ferrous margin on specific routes. The owner renegotiated haulage rates and dropped three unprofitable collection routes.",
    metrics: [
      { label: "MARGIN LIFT", value: "+4.5%" },
      { label: "ROUTES CUT", value: "3" },
    ]
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative border-b border-hairline bg-graphite overflow-hidden">
        <div className="absolute inset-0 bg-grid-fine opacity-40 pointer-events-none" />
        <div className="absolute inset-0 noise opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] hero-glow pointer-events-none" />
        
        <div className="container px-4 py-24 md:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1] text-ink uppercase mb-8">
              Real yards.<br />
              <span className="text-copper">Real numbers.</span>
            </h1>
            <p className="text-xl text-ink-secondary leading-relaxed font-light">
              We don&apos;t sell software. We sell clarity. Here is what happens when you fix the gap between the weighbridge and the balance sheet.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-panel">
        {caseStudies.map((study, index) => (
          <div key={index} className="border-b border-hairline group">
            <div className="container px-4 py-16 md:py-24">
              <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
                
                {/* Meta Column */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-graphite border border-hairline mb-6 font-mono text-[10px] uppercase tracking-widest text-copper">
                    {study.type}
                  </div>
                  <h2 className="text-3xl font-bold uppercase tracking-tight text-ink mb-8">
                    {study.title}
                  </h2>
                  <div className="border border-hairline bg-graphite p-6">
                    <p className="font-mono text-[10px] text-ink-muted uppercase tracking-widest mb-4">Profile</p>
                    <p className="text-sm text-ink font-medium">{study.yardSize}</p>
                    
                    <div className="mt-6 pt-6 border-t border-hairline grid grid-cols-2 gap-4">
                      {study.metrics.map((metric, i) => (
                        <div key={i}>
                          <p className="font-mono text-xl text-copper font-bold">{metric.value}</p>
                          <p className="font-mono text-[9px] text-ink-muted uppercase mt-1">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Narrative Column */}
                <div className="space-y-12">
                  <div className="relative pl-6 md:pl-8 border-l-2 border-hairline group-hover:border-copper transition-colors">
                    <h3 className="font-mono text-xs text-ink-muted uppercase tracking-widest mb-4">The Pain</h3>
                    <p className="text-lg text-ink-secondary font-light leading-relaxed">
                      {study.problem}
                    </p>
                  </div>
                  
                  <div className="relative pl-6 md:pl-8 border-l-2 border-hairline group-hover:border-copper transition-colors">
                    <h3 className="font-mono text-xs text-ink-muted uppercase tracking-widest mb-4">The Fix</h3>
                    <p className="text-lg text-ink-secondary font-light leading-relaxed">
                      {study.action}
                    </p>
                  </div>

                  <div className="relative pl-6 md:pl-8 border-l-2 border-copper bg-copper/5 py-4 pr-4">
                    <h3 className="font-mono text-xs text-copper uppercase tracking-widest mb-4">The Control</h3>
                    <p className="text-lg text-ink font-medium leading-relaxed">
                      {study.result}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-graphite py-24">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink uppercase mb-8">
            Stop losing margin to bad data.
          </h2>
          <Button asChild size="lg" className="bg-copper hover:bg-copper-bright text-white border-0 rounded-none text-base px-12 uppercase font-mono tracking-wide">
            <Link href="/health-check">Get a Health Check <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
