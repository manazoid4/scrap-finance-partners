"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, EyeOff, TrendingDown, Gauge } from "lucide-react"

export default function HealthCheckPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-hairline">
        <div className="container py-12 md:py-16 px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Find out what your numbers are hiding.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A one-off diagnostic of your reporting, stock visibility, margin control, and system accuracy. We deliver a red/amber/green report showing exactly what is broken and what it is costing you.
            </p>
            <div className="mt-6 inline-block bg-copper/10 text-copper px-4 py-1.5 rounded-sm font-medium text-sm">
              £750 – £1,500 · One-off · No ongoing commitment
            </div>
          </div>
        </div>
      </section>

      {/* What We Review */}
      <section className="border-b border-hairline">
        <div className="container py-12 px-4">
          <h2 className="text-2xl font-bold mb-8">What we review</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
            <Card className="border-hairline">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <EyeOff className="h-4 w-4 text-copper" />
                  <CardTitle className="text-base">Stock Visibility</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Are your stock sheets accurate? Do you trust your monthly stock position reporting? We check stock by category, location, and system alignment.
              </CardContent>
            </Card>
            <Card className="border-hairline">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-4 w-4 text-copper" />
                  <CardTitle className="text-base">Margin Reporting</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Can you see true gross margin by material category without manual spreadsheet acrobatics? We trace margin from deal sheet to balance sheet.
              </CardContent>
            </Card>
            <Card className="border-hairline">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Gauge className="h-4 w-4 text-copper" />
                  <CardTitle className="text-base">Transport Performance</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Is transport costing you more than you think? Are manual deal sheets slowing you down? We analyse cost per tonne and route efficiency.
              </CardContent>
            </Card>
            <Card className="border-hairline">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-copper" />
                  <CardTitle className="text-base">System Data Risk</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Are Fred EWC codes, Xero product codes, and nominal structures aligned and automated? We find the gaps that cause miscoding and missed reporting.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Deliverable */}
      <section className="border-b border-hairline">
        <div className="container py-12 px-4">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">What you get</h2>
            <div className="space-y-4">
              {[
                "Red/amber/green scoring across all four areas",
                "Specific issues identified — not generic 'opportunities for improvement'",
                "Costed priority list: what to fix first, what it costs, and what you gain",
                "Recommended next steps: whether that is a monthly retainer, a sprint, or internal fixes",
                "A 60-minute walkthrough call where we explain every finding"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 bg-copper rounded-full flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section>
        <div className="container py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-panel border-hairline">
              <CardHeader>
                <CardTitle>Request a Health Check</CardTitle>
                <CardDescription>Fill out this brief form and we will be in touch within 24 hours to schedule a preliminary call.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                    <input 
                      id="name" 
                      className="flex h-10 w-full rounded-sm border border-hairline bg-background px-3 py-2 text-sm" 
                      placeholder="Full name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">Company Name</label>
                    <input 
                      id="company" 
                      className="flex h-10 w-full rounded-sm border border-hairline bg-background px-3 py-2 text-sm" 
                      placeholder="Scrap yard or recycling business name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input 
                      id="email" 
                      type="email" 
                      className="flex h-10 w-full rounded-sm border border-hairline bg-background px-3 py-2 text-sm" 
                      placeholder="you@example.com" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                    <input 
                      id="phone" 
                      type="tel" 
                      className="flex h-10 w-full rounded-sm border border-hairline bg-background px-3 py-2 text-sm" 
                      placeholder="Contact number" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">What is your biggest finance frustration right now?</label>
                    <textarea 
                      id="message" 
                      className="flex min-h-[120px] w-full rounded-sm border border-hairline bg-background px-3 py-2 text-sm" 
                      placeholder="Stock discrepancies? Late reporting? Fred not giving real numbers?"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-copper hover:bg-copper/90 text-white">
                    Request My Health Check
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
