import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function FounderPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="border-b border-hairline">
        <div className="container py-12 md:py-16 px-4">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              I have seen this exact problem 40 times.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              I know the reality of scrap businesses: fast-moving yards, stock pressure, manual workarounds, transport issues, commercial urgency and finance that arrives six weeks too late to do anything about it.
            </p>
            <div className="mt-6 inline-block bg-copper/10 text-copper px-4 py-1.5 rounded-sm font-medium text-sm">
              26 Years in UK Scrap Metal, Recycling & Finance
            </div>
          </div>
        </div>
      </section>

      {/* Proof Points */}
      <section className="border-b border-hairline bg-panel/30">
        <div className="container py-12 md:py-16 px-4">
          <h2 className="text-2xl font-bold mb-8">Measurable impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-hairline rounded-sm">
              <p className="text-3xl font-bold text-copper">£120k</p>
              <p className="text-sm text-muted-foreground mt-2">Annual cost savings by removing redundant manual spreadsheets and digitising reporting.</p>
            </div>
            <div className="p-6 border border-hairline rounded-sm">
              <p className="text-3xl font-bold text-copper">£20k</p>
              <p className="text-sm text-muted-foreground mt-2">Overpayment uncovered through audit checks and validation controls.</p>
            </div>
            <div className="p-6 border border-hairline rounded-sm">
              <p className="text-3xl font-bold text-copper">£90k</p>
              <p className="text-sm text-muted-foreground mt-2">Recovered from supplier overpayments by reconciling 250+ suppliers.</p>
            </div>
            <div className="p-6 border border-hairline rounded-sm">
              <p className="text-3xl font-bold text-copper">7→2 days</p>
              <p className="text-sm text-muted-foreground mt-2">Reporting cycle reduced — decisions made while they still matter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column */}
      <section className="border-b border-hairline">
        <div className="container py-12 md:py-16 px-4">
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl">
            <div>
              <h2 className="text-2xl font-bold mb-6 border-b border-hairline pb-2">What I actually do</h2>
              <ul className="space-y-6">
                <li>
                  <h3 className="font-semibold text-lg">Finance & Accountancy</h3>
                  <p className="text-muted-foreground text-sm mt-1">Two decades managing the financial engine of scrap and recycling operations. Actual month-end, year-end, VAT, and management accounts for yards doing £5m–£50m turnover.</p>
                </li>
                <li>
                  <h3 className="font-semibold text-lg">Commercial & Transport</h3>
                  <p className="text-muted-foreground text-sm mt-1">Translating transport modules and manual deal sheets into commercial data the owner can use. I have checked weighbridge tickets, know what transport cost per tonne means, and have built monthly transport scorecards with commentary.</p>
                </li>
                <li>
                  <h3 className="font-semibold text-lg">Operations & Yard Reality</h3>
                  <p className="text-muted-foreground text-sm mt-1">Bridging the gap between what happens in the yard and what appears on the balance sheet. I have counted stock in the rain, investigated discrepancies, and know why the system says one thing and the ground says another.</p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 border-b border-hairline pb-2">Systems I know inside out</h2>
              <div className="space-y-4">
                <Card className="border-hairline">
                  <CardContent className="p-4">
                    <h3 className="font-semibold">Fred Systems</h3>
                    <p className="text-sm text-muted-foreground mt-1">Deep practical experience with Fred reporting, new site setups, EWC code maintenance, and transport module workflows. I have configured Fred for yards processing 500 tonnes a day.</p>
                  </CardContent>
                </Card>
                <Card className="border-hairline">
                  <CardContent className="p-4">
                    <h3 className="font-semibold">Xero & Cloud Accounting</h3>
                    <p className="text-sm text-muted-foreground mt-1">Advanced Xero configuration, product code automation, nominal coding structures that make sense for scrap, PO workflow implementation, and integrations that actually work.</p>
                  </CardContent>
                </Card>
                <Card className="border-hairline">
                  <CardContent className="p-4">
                    <h3 className="font-semibold">D365 & ERP Systems</h3>
                    <p className="text-sm text-muted-foreground mt-1">Supported Sage to D365 migration, supplier/debtor data transfer, P&L reconciliation, and machine-level fuel posting across 800+ assets including trucks, balers, shredders and forklifts.</p>
                  </CardContent>
                </Card>
                <Card className="border-hairline">
                  <CardContent className="p-4">
                    <h3 className="font-semibold">Power BI & Reporting</h3>
                    <p className="text-sm text-muted-foreground mt-1">Building management packs that tell the story of the business — not just lists of numbers. Dashboards connected directly to Fred, Xero and D365.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Detail */}
      <section className="border-b border-hairline">
        <div className="container py-12 md:py-16 px-4">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Where this experience comes from</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I have worked in and around UK scrap and metal recycling for over two decades. My background spans:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 bg-copper rounded-full flex-shrink-0" />
                  <span><strong className="text-foreground">Countrywide Metals Ltd</strong> and <strong className="text-foreground">European Metal Recycling Ltd</strong> — deep exposure to transport finance, haulage data, depot reporting, commercial reporting and stock reconciliation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 bg-copper rounded-full flex-shrink-0" />
                  <span><strong className="text-foreground">Mobile baler division, trailers, off-road fleet and garage operations</strong> — understanding the full cost picture beyond just the yard.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 bg-copper rounded-full flex-shrink-0" />
                  <span><strong className="text-foreground">Cross-functional business support</strong> — working as a single point of contact for budgetary and transport finance queries across Operations, Commercial, Transport and Finance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 bg-copper rounded-full flex-shrink-0" />
                  <span><strong className="text-foreground">Systems and data</strong> — supporting machine-level fuel posting in D365 across 800+ assets, coordinating with auditors during year-end, and building in-house financial reporting tools.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section>
        <div className="container py-12 md:py-16 px-4">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Why I started this</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I spent 26 years in scrap yard finance. I have worked for family-run yards with two employees and for multi-site groups doing £50m turnover. The pattern is always the same:
              </p>
              <p>
                The owner knows the business. They can look at a pile of copper and tell you the value within £50. But when they ask "what is my gross margin this month?" the answer takes three weeks, two spreadsheets, and a guess.
              </p>
              <p>
                By the time the numbers arrive, the decision has already been made. Or worse — the wrong decision has been made, and nobody knows until the year-end accountant points it out.
              </p>
              <p>
                I started Scrap Finance Partners because I got tired of watching good operators lose money to bad numbers. Not because they were bad at business. Because their finance function was too slow, too generic, and too far from the yard.
              </p>
              <p className="text-foreground font-medium">
                We fix that.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild className="bg-copper hover:bg-copper/90 text-white">
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
