import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const proofPoints = [
  { num: "£120k", label: "SAVED FROM REPORTING" },
  { num: "£20k", label: "OVERPAYMENT CAUGHT" },
  { num: "£90k", label: "SUPPLIER RECOVERY" },
  { num: "7→2 DAYS", label: "REPORTING CYCLE CUT" },
]

const timeline = [
  {
    period: "1998–2005",
    title: "Ground Floor",
    org: "Countrywide Metals Ltd",
    desc: "Started in the thick of UK scrap yard finance. Learned month-end, year-end, VAT, and management accounts for yards doing £5m–£50m turnover. Counted stock in the rain."
  },
  {
    period: "2005–2015",
    title: "Commercial & Transport",
    org: "European Metal Recycling Ltd",
    desc: "Deep exposure to transport finance, haulage data, depot reporting, and commercial reporting. Built monthly transport scorecards. Translated manual deal sheets into commercial data."
  },
  {
    period: "2015–2020",
    title: "Systems & Scale",
    org: "Multi-Site Scrap Group",
    desc: "Supported Sage to D365 migration. Machine-level fuel posting across 800+ assets. Built in-house financial reporting tools. Single point of contact across Operations, Commercial, Transport and Finance."
  },
  {
    period: "2020–Present",
    title: "Scrap Finance Partners",
    org: "Founder & Lead Consultant",
    desc: "Started this because good operators were losing money to bad numbers. Finance was too slow, too generic, and too far from the yard. We fix that."
  },
]

const skillBadges = [
  { name: "Fred Systems", detail: "Reporting, site setups, EWC codes, transport modules" },
  { name: "Xero", detail: "Product code automation, nominal coding, PO workflows" },
  { name: "D365 / ERP", detail: "Sage migration, fuel posting, P&L reconciliation" },
  { name: "Power BI", detail: "Management packs connected to Fred, Xero, D365" },
  { name: "Stock Integrity", detail: "Discrepancy investigation, reliable stock sheets" },
  { name: "Process Automation", detail: "Commission models, coding structures, integrations" },
  { name: "Transport Finance", detail: "Cost-per-tonne, scorecards, route analysis" },
  { name: "Audit & Controls", detail: "Validation, three-way match, supplier reconciliation" },
]

export default function FounderPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative border-b border-hairline bg-graphite overflow-hidden">
        <div className="absolute inset-0 bg-grid-fine opacity-40 pointer-events-none" />
        
        <div className="container px-4 py-24 md:py-32 relative">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1] text-ink uppercase mb-8">
              I have seen this exact problem 40 times.
            </h1>
            <p className="text-xl text-ink-secondary leading-relaxed font-light mb-8 max-w-3xl">
              I know the reality of scrap businesses: fast-moving yards, stock pressure, manual workarounds, transport issues, commercial urgency and finance that arrives six weeks too late to do anything about it.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-panel border border-hairline font-mono text-[10px] uppercase tracking-widest text-copper">
              26 Years in UK Scrap Metal, Recycling & Finance
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-panel overflow-hidden">
        <div className="container px-4 py-12 md:py-16">
          <h2 className="text-sm font-mono tracking-widest text-ink-muted uppercase mb-8">Measurable Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-hairline">
            {proofPoints.map((stat, i) => (
              <div key={i} className={`flex flex-col justify-center ${i === 0 ? '' : 'pl-8'}`}>
                <p className="text-3xl md:text-4xl font-mono text-copper font-bold">{stat.num}</p>
                <p className="text-[10px] font-mono text-ink-secondary mt-2 tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-graphite">
        <div className="container px-4 py-24 md:py-32">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
            <div className="sticky top-24">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink uppercase">Experience</h2>
              <div className="w-12 h-1 bg-copper mt-8 line-accent" />
            </div>

            <div className="border-l border-hairline pl-8 md:pl-16 space-y-16">
              {timeline.map((item, i) => (
                <div key={i} className="group relative">
                  <div className="absolute -left-[33px] md:-left-[65px] top-1 w-2 h-2 bg-panel border border-hairline group-hover:bg-copper transition-colors" />
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                    <span className="font-mono text-copper text-sm">{item.period}</span>
                    <h3 className="text-2xl font-bold text-ink uppercase">{item.title}</h3>
                  </div>
                  <p className="text-sm font-mono text-ink-muted mb-4 uppercase tracking-widest">{item.org}</p>
                  <p className="text-ink-secondary leading-relaxed font-light text-lg max-w-xl">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-panel relative">
        <div className="absolute inset-y-0 right-0 w-1/3 industrial-stripes opacity-20 pointer-events-none" />
        <div className="container px-4 py-24 md:py-32 relative">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
            <div className="sticky top-24">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink uppercase">Systems & Skills</h2>
              <div className="w-12 h-1 bg-copper mt-8 line-accent" />
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-hairline border border-hairline">
              {skillBadges.map((skill, i) => (
                <div key={i} className="bg-graphite p-6 hover:bg-panel-alt transition-colors">
                  <div className="w-2 h-2 bg-copper/50 mb-3" />
                  <h4 className="font-bold text-ink uppercase mb-2">{skill.name}</h4>
                  <p className="text-sm text-ink-secondary leading-relaxed">{skill.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-graphite py-24 md:py-32">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink uppercase mb-8">Stop running on gut feel.</h2>
          <Button asChild size="lg" className="bg-copper hover:bg-copper-bright text-white border-0 rounded-none text-base px-12 uppercase font-mono tracking-wide">
            <Link href="/health-check">Get a Health Check <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
