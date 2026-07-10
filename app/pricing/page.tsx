import { PricingCard } from "@/components/pricing-card"

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-hairline">
        <div className="container py-12 md:py-16 px-4">
          <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Fixed monthly pricing
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              No hourly rates. No surprise invoices. No "scope creep". You pay a fixed monthly fee and get the full service. Cancel any time.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="border-b border-hairline">
        <div className="container py-12 px-4">
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-16">
            <PricingCard 
              title="Level 1"
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
              price="£1,000 /mo"
              description="For growing operators that need rhythm, forecasting, and commercial clarity."
              isPopular={true}
              features={[
                "Everything in Level 1",
                "Cash flow forecast you can plan around",
                "Monthly business partner meeting",
                "Margin and stock movement analysis",
                "Transport and commercial KPI pack",
                "Action tracker — what to do, by when"
              ]}
            />
            <PricingCard 
              title="Level 3"
              price="£2,000+ /mo"
              description="For companies that need an experienced Finance Director without the full-time cost."
              features={[
                "Everything in Level 2",
                "Strategic support and planning",
                "Board-style management pack",
                "KPI review and challenge meetings",
                "System and process improvement roadmap",
                "Payroll, commission and coding advisory",
                "Direct owner decision support"
              ]}
            />
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">What this replaces:</span> A full-time Finance Director costs £80,000–£120,000 plus benefits. A part-time bookkeeper gives you numbers six weeks late with no context. We sit in the middle — experienced, fast, and focused on scrap.
            </p>
          </div>
        </div>
      </section>

      {/* Diagnostic Sprints */}
      <section>
        <div className="container py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-center md:text-left">One-off diagnostic sprints</h2>
            <p className="text-muted-foreground mb-8 text-center md:text-left">
              Not ready for a monthly commitment? Get a targeted diagnostic that tells you exactly what is broken.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-hairline p-6 rounded-sm">
                <h3 className="font-bold text-xl mb-2">Scrap Yard Finance Health Check</h3>
                <p className="text-muted-foreground mb-4">Review reporting, stock, margin, processes and systems. Deliver a red/amber/green improvement report with priorities and costed fixes.</p>
                <div className="font-semibold text-copper">£750 – £1,500</div>
              </div>
              <div className="border border-hairline p-6 rounded-sm">
                <h3 className="font-bold text-xl mb-2">Stock Accuracy Sprint</h3>
                <p className="text-muted-foreground mb-4">Deep dive into stock discrepancies. Find what is missing, why it is missing, and how to stop it happening. Typically recovers £20k–£100k in "lost" stock value.</p>
                <div className="font-semibold text-copper">£1,500 – £3,000</div>
              </div>
              <div className="border border-hairline p-6 rounded-sm">
                <h3 className="font-bold text-xl mb-2">Fred System Setup</h3>
                <p className="text-muted-foreground mb-4">New site configuration, EWC code overhaul, transport module activation, stock sheet build. Done properly so it works from day one.</p>
                <div className="font-semibold text-copper">£1,000 – £2,500</div>
              </div>
              <div className="border border-hairline p-6 rounded-sm">
                <h3 className="font-bold text-xl mb-2">Commission Model Fix</h3>
                <p className="text-muted-foreground mb-4">Audit existing commission calculations, fix errors, build a model that matches your deal sheets, and train your team to run it.</p>
                <div className="font-semibold text-copper">£750 – £1,500</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
