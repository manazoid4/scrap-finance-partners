import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, FileSpreadsheet, ShieldCheck, Search, TrendingUp, Server } from "lucide-react"

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-hairline">
        <div className="container py-12 md:py-16 px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Real results from real yards
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              These are anonymised examples from over two decades inside scrap and recycling finance. Every figure is real. Every outcome is measurable.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="border-b border-hairline">
        <div className="container py-12 px-4">
          <div className="grid gap-6 md:grid-cols-2 max-w-5xl">
            <Card className="border-hairline">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <FileSpreadsheet className="h-5 w-5 text-copper" />
                  <span className="text-sm font-medium text-copper">Manual Reporting Reduction</span>
                </div>
                <CardTitle className="text-xl">£120k saved by killing redundant spreadsheets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Problem</p>
                  <p className="text-sm">A multi-site scrap operator was running 40+ manual spreadsheets to produce monthly management accounts. Three people spent a week each month copying, pasting and reconciling. Errors were common. Nobody trusted the numbers.</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-copper mb-1">Action</p>
                  <p className="text-sm">Audited every spreadsheet, identified redundant data flows, and digitised reporting into a single connected system. Built automated feeds from Fred and Xero directly into management packs.</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-green mb-1">Impact</p>
                  <p className="text-sm">£120,000 annual saving in labour cost. Reporting time dropped from 7 days to 2 days. Errors reduced by 80%. The finance team started focusing on analysis instead of data entry.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-hairline">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="h-5 w-5 text-copper" />
                  <span className="text-sm font-medium text-copper">Audit Validation Control</span>
                </div>
                <CardTitle className="text-xl">£20k overpayment caught before it left</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Problem</p>
                  <p className="text-sm">During a routine month-end review, a duplicate invoice was spotted — same supplier, same amount, two weeks apart. The second invoice had been approved and was queued for payment.</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-copper mb-1">Action</p>
                  <p className="text-sm">Stopped the payment immediately. Traced the root cause to a broken PO workflow where approvals were happening without invoice matching. Implemented validation controls and a three-way match process.</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-green mb-1">Impact</p>
                  <p className="text-sm">£20,000 overpayment prevented. New controls caught three further duplicates in the next six months. The supplier relationship improved because the yard was seen as precise, not chaotic.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-hairline">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Search className="h-5 w-5 text-copper" />
                  <span className="text-sm font-medium text-copper">Supplier Reconciliation</span>
                </div>
                <CardTitle className="text-xl">£90k recovered from 250+ suppliers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Problem</p>
                  <p className="text-sm">A large scrap processor had not reconciled supplier statements in 18 months. Credits, rebates and overpayments were sitting on supplier accounts unclaimed. The finance team did not have time to chase them.</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-copper mb-1">Action</p>
                  <p className="text-sm">Systematically reconciled 250+ supplier accounts over a six-week sprint. Identified unclaimed credits, duplicate payments and pricing errors. Built a monthly reconciliation rhythm to prevent recurrence.</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-green mb-1">Impact</p>
                  <p className="text-sm">£90,000 recovered and reinvested into the business. Monthly reconciliation process now takes 2 hours instead of being ignored. Supplier terms improved because statements were accurate.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-hairline">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-copper" />
                  <span className="text-sm font-medium text-copper">Transport Scorecards</span>
                </div>
                <CardTitle className="text-xl">Transport cost visibility the board finally trusted</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Problem</p>
                  <p className="text-sm">A recycling group with 50+ vehicles had no consolidated view of transport costs. Fuel, maintenance, driver wages and VOR were scattered across five systems. Directors made pricing decisions without knowing true transport cost per tonne.</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-copper mb-1">Action</p>
                  <p className="text-sm">Built monthly transport scorecards consolidating fuel (Jigsaw Fuel/Geotab), maintenance (MRO), wages and VOR data. Added trend commentary and route-level cost-per-tonne analysis.</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-green mb-1">Impact</p>
                  <p className="text-sm">Board-level visibility for the first time. Identified two routes that were loss-making and renegotiated. Transport P&L accuracy improved from estimated to within 3% of actual.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-hairline md:col-span-2">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Server className="h-5 w-5 text-copper" />
                  <span className="text-sm font-medium text-copper">Systems Integration</span>
                </div>
                <CardTitle className="text-xl">Sage to D365 migration — data preserved, reporting rebuilt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Problem</p>
                  <p className="text-sm">A £40m scrap group was migrating from Sage Line 50 to Microsoft D365. The project was six months behind. Supplier records were corrupted. P&L balances did not match. The finance team was working on both systems simultaneously and morale was low.</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-copper mb-1">Action</p>
                  <p className="text-sm">Led data validation and reconciliation workstream. Reconciled supplier and debtor balances between systems. Built P&L mapping and variance analysis. Supported machine-level fuel posting setup across 800+ assets. Trained the team on new reporting structures.</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-green mb-1">Impact</p>
                  <p className="text-sm">Migration completed on revised timeline. No material balances lost. Month-one reporting in D365 matched Sage within 1%. Fuel posting automated for trucks, balers, shredders and forklifts. User adoption exceeded targets.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Want results like these?</h2>
            <p className="text-muted-foreground mb-8">
              Every yard is different. The health check tells us exactly where your gaps are — and what fixing them is worth.
            </p>
            <Button asChild size="lg" className="bg-copper hover:bg-copper/90 text-white">
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
