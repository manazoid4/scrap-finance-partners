import { ServiceCard } from "@/components/service-card"

export default function ServicesPage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Services</h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Specialised finance solutions for scrap yards, recyclers, and circular economy businesses.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <ServiceCard 
          title="KPI Dashboard & Reporting" 
          description="Turn messy data into clear decisions."
          items={[
            "Monthly throughput tracking",
            "Gross margin by category",
            "Transport cost per tonne",
            "Debtor days analysis"
          ]}
        />
        <ServiceCard 
          title="Outsourced Finance Director" 
          description="Senior financial leadership without the full-time cost."
          items={[
            "Board-style management packs",
            "Monthly strategy meetings",
            "Cashflow forecasting",
            "Owner decision support"
          ]}
        />
        <ServiceCard 
          title="Fred Reporting Improvement" 
          description="Get the most out of your Fred system."
          items={[
            "Stock sheet optimisation",
            "EWC code maintenance",
            "New site setup",
            "Transport module workflow"
          ]}
        />
        <ServiceCard 
          title="Stock Accuracy & Reconciliation" 
          description="Find hidden margin leaks."
          items={[
            "Stock discrepancy investigation",
            "Visibility process building",
            "Yard map reporting",
            "Reconciliation controls"
          ]}
        />
        <ServiceCard 
          title="Payroll & Commission" 
          description="Accurate and timely processing."
          items={[
            "Complex commission models",
            "Payroll preparation",
            "Coding advisory"
          ]}
        />
        <ServiceCard 
          title="Process & System Improvement" 
          description="Streamline operations connecting yard to finance."
          items={[
            "Manual deal sheet automation",
            "Xero product code automation",
            "Nominal coding structure"
          ]}
        />
      </div>
    </div>
  )
}
