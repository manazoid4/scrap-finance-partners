import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function FounderPage() {
  return (
    <div className="flex flex-col">
      {/* Hero — massive statement */}
      <section className="border-b border-hairline bg-graphite">
        <div className="container px-4 py-20 md:py-28">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-ink">
              I have seen this
              <br />
              exact problem
              <br />
              <span className="text-copper">40 times.</span>
            </h1>
            <p className="mt-10 text-xl md:text-2xl text-ink-secondary max-w-3xl leading-relaxed font-light">
              Fast-moving yards, stock pressure, manual workarounds, transport issues, commercial urgency — and finance that arrives six weeks too late to do anything about it.
            </p>
            <div className="mt-8 inline-block bg-copper/10 text-copper px-4 py-1.5 text-xs font-mono uppercase tracking-wider">
              26 Years in UK Scrap Metal, Recycling & Finance
            </div>
          </div>
        </div>
      </section>

      {/* Proof Strip — inline stats, no cards */}
      <section className="border-b border-hairline bg-panel">
        <div className="container px-4 py-10 md:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {[
              { num: "£120k", label: "Annual savings from digitised reporting" },
              { num: "£20k", label: "Overpayment caught through audit checks" },
              { num: "£90k", label: "Recovered from supplier reconciliation" },
              { num: "7→2 days", label: "Reporting cycle reduction" },
            ].map((stat, i) => (
              <div key={i} className={`${i > 0 ? 'lg:border-l lg:border-hairline lg:pl-8' : ''}`}>
                <p className="text-3xl md:text-4xl font-bold font-mono text-copper tracking-tight">{stat.num}</p>
                <p className="mt-1 text-sm text-ink-secondary leading-snug max-w-[180px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do — split layout */}
      <section className="border-b border-hairline">
        <div className="container px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-ink">
                What I actually do
              </h2>
            </div>
            <div className="space-y-0">
              {[
                { title: "Finance & Accountancy", desc: "Two decades managing the financial engine of scrap and recycling operations. Actual month-end, year-end, VAT, and management accounts for yards doing £5m–£50m turnover." },
                { title: "Commercial & Transport", desc: "Translating transport modules and manual deal sheets into commercial data the owner can use. I have checked weighbridge tickets, know what transport cost per tonne means, and have built monthly transport scorecards with commentary." },
                { title: "Operations & Yard Reality", desc: "Bridging the gap between what happens in the yard and what appears on the balance sheet. I have counted stock in the rain, investigated discrepancies, and know why the system says one thing and the ground says another." },
              ].map((item, i) => (
                <div key={i} className="py-8 border-t border-hairline first:border-t-0">
                  <h3 className="text-xl font-bold text-ink mb-3">{item.title}</h3>
                  <p className="text-ink-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Systems — stacked list */}
      <section className="border-b border-hairline bg-graphite">
        <div className="container px-4 py-20 md:py-28">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-copper mb-12">Systems I Know Inside Out</p>

          <div className="grid md:grid-cols-2 gap-0">
            {[
              { title: "Fred Systems", desc: "Deep practical experience with Fred reporting, new site setups, EWC code maintenance, and transport module workflows. Configured for yards processing 500 tonnes a day." },
              { title: "Xero & Cloud Accounting", desc: "Advanced Xero configuration, product code automation, nominal coding structures that make sense for scrap, PO workflow implementation, and integrations that actually work." },
              { title: "D365 & ERP Systems", desc: "Supported Sage to D365 migration, supplier/debtor data transfer, P&L reconciliation, and machine-level fuel posting across 800+ assets including trucks, balers, shredders and forklifts." },
              { title: "Power BI & Reporting", desc: "Building management packs that tell the story of the business — not just lists of numbers. Dashboards connected directly to Fred, Xero and D365." },
            ].map((sys, i) => (
              <div key={i} className="py-8 border-t border-hairline md:odd:pr-8 md:even:pl-8 md:even:border-l">
                <h3 className="text-lg font-bold text-ink mb-2">{sys.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{sys.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-b border-hairline">
        <div className="container px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-ink">
                Where this comes from
              </h2>
            </div>
            <div className="space-y-0">
              {[
                { title: "Countrywide Metals & European Metal Recycling", desc: "Deep exposure to transport finance, haulage data, depot reporting, commercial reporting and stock reconciliation across multi-site UK operations." },
                { title: "Mobile Balers, Trailers & Fleet", desc: "Understanding the full cost picture beyond just the yard — off-road fleet, garage operations, and mobile baler division economics." },
                { title: "Cross-Functional Business Support", desc: "Single point of contact for budgetary and transport finance queries across Operations, Commercial, Transport and Finance teams." },
                { title: "Systems & Data at Scale", desc: "Machine-level fuel posting in D365 across 800+ assets, coordinating with auditors during year-end, and building in-house financial reporting tools." },
              ].map((item, i) => (
                <div key={i} className="py-7 border-t border-hairline first:border-t-0 flex items-start gap-4">
                  <span className="mt-1.5 h-2 w-2 bg-copper flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-ink mb-1">{item.title}</h3>
                    <p className="text-ink-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story — full-width text */}
      <section className="border-b border-hairline bg-graphite">
        <div className="container px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-ink mb-10">
              Why I started this
            </h2>
            <div className="space-y-6 text-lg text-ink-secondary leading-relaxed">
              <p>
                I spent 26 years in scrap yard finance. I have worked for family-run yards with two employees and for multi-site groups doing £50m turnover. The pattern is always the same.
              </p>
              <p>
                The owner knows the business. They can look at a pile of copper and tell you the value within £50. But when they ask "what is my gross margin this month?" the answer takes three weeks, two spreadsheets, and a guess.
              </p>
              <p>
                By the time the numbers arrive, the decision has already been made. Or worse — the wrong decision has been made, and nobody knows until the year-end accountant points it out.
              </p>
              <p className="text-ink font-medium">
                I started Scrap Finance Partners because I got tired of watching good operators lose money to bad numbers. Not because they were bad at business. Because their finance function was too slow, too generic, and too far from the yard.
              </p>
            </div>
            <div className="mt-10">
              <Button asChild className="bg-copper hover:bg-copper-bright text-white border-0 rounded-sm">
                <Link href="/services">
                  See What We Do <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
