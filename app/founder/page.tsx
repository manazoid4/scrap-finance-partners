import { Card, CardContent } from "@/components/ui/card"

export default function FounderPage() {
  return (
    <div className="container py-12 px-4 md:px-6 max-w-4xl mx-auto">
      <div className="mb-12 text-center md:text-left flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="w-48 h-48 rounded-full bg-muted flex-shrink-0 border-4 border-background shadow-lg overflow-hidden flex items-center justify-center">
            {/* Placeholder for founder image */}
            <span className="text-muted-foreground text-sm">Founder Photo</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About the Founder</h1>
          <p className="mt-4 text-xl text-muted-foreground leading-relaxed">
            I know the reality of scrap businesses: fast-moving yards, stock pressure, manual workarounds, transport issues, commercial urgency and finance needing to keep up.
          </p>
          <div className="mt-4 inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-medium text-sm">
            26 Years UK Scrap Metal Experience
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Deep Industry Expertise</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold text-lg">Finance & Accountancy</h3>
              <p className="text-muted-foreground text-sm">Over two decades managing the financial engine of scrap and recycling operations.</p>
            </li>
            <li>
              <h3 className="font-semibold text-lg">Commercial & Transport</h3>
              <p className="text-muted-foreground text-sm">Translating transport modules and manual deal sheets into actionable commercial data.</p>
            </li>
            <li>
              <h3 className="font-semibold text-lg">Operations & Yard Reality</h3>
              <p className="text-muted-foreground text-sm">Bridging the gap between what happens in the yard and what appears on the balance sheet.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Systems & Data Mastery</h2>
          <div className="space-y-4">
             <Card>
                <CardContent className="p-4">
                    <h3 className="font-semibold">Fred Systems Support</h3>
                    <p className="text-sm text-muted-foreground mt-1">Deep practical experience with Fred reporting, new site setups, EWC code maintenance, and transport module workflows.</p>
                </CardContent>
             </Card>
             <Card>
                <CardContent className="p-4">
                    <h3 className="font-semibold">Stock Integrity</h3>
                    <p className="text-sm text-muted-foreground mt-1">Specialist in stock reporting, stock position discrepancy investigation, and creating reliable stock sheets.</p>
                </CardContent>
             </Card>
             <Card>
                <CardContent className="p-4">
                    <h3 className="font-semibold">Process Automation</h3>
                    <p className="text-sm text-muted-foreground mt-1">Automating Xero product codes by machine, refining nominal coding structures, and calculating complex commissions.</p>
                </CardContent>
             </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
