import { PricingCard } from "@/components/pricing-card"

export default function PricingPage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Retainer Packages</h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Predictable pricing for clarity and growth.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-16">
        <PricingCard 
          title="Bronze"
          price="£500 /mo"
          description="For owner-managed scrap yards that need basic visibility."
          features={[
            "Monthly KPI dashboard",
            "Stock position report",
            "Basic management commentary",
            "One monthly email summary",
            "Simple improvement log"
          ]}
        />
        <PricingCard 
          title="Silver"
          price="£1,000 /mo"
          description="For growing operators that need finance & commercial rhythm."
          isPopular={true}
          features={[
            "Everything in Bronze",
            "Forecasting & cashflow view",
            "Monthly business partner meeting",
            "Margin & stock movement analysis",
            "Transport & commercial KPI pack",
            "Action tracker"
          ]}
        />
        <PricingCard 
          title="Gold"
          price="£2,000+ /mo"
          description="For companies that need an outsourced Finance Director."
          features={[
            "Everything in Silver",
            "Strategic support & planning",
            "Board-style management pack",
            "KPI review meetings",
            "System/process improvement roadmap",
            "Payroll, commission & coding advisory",
            "Direct owner decision support"
          ]}
        />
      </div>

      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">High-Value Diagnostic Sprints</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border rounded-lg p-6">
            <h3 className="font-bold text-xl mb-2">Scrap Yard Finance Health Check</h3>
            <p className="text-muted-foreground mb-4">Review reporting, stock, margin, processes and systems. Deliver a red/amber/green improvement report.</p>
            <div className="font-semibold">£750 – £1,500</div>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-bold text-xl mb-2">Stock Accuracy Sprint</h3>
            <p className="text-muted-foreground mb-4">Investigate stock discrepancies and reporting weaknesses. Build a corrected stock visibility process.</p>
            <div className="font-semibold">£1,500 – £3,000</div>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-bold text-xl mb-2">Fred Reporting Improvement Sprint</h3>
            <p className="text-muted-foreground mb-4">Improve Fred reports, stock sheets, EWC codes, new site setup and transport reporting.</p>
            <div className="font-semibold">£1,500 – £5,000</div>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-bold text-xl mb-2">Outsourced FD Setup Month</h3>
            <p className="text-muted-foreground mb-4">Build dashboard, reporting cadence, monthly management pack and meeting rhythm.</p>
            <div className="font-semibold">£2,500 – £5,000</div>
          </div>
        </div>
      </div>
    </div>
  )
}
