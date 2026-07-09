import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HealthCheckPage() {
  return (
    <div className="container py-12 px-4 md:px-6 max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Scrap Yard Finance Health Check</h1>
        <p className="mt-4 text-muted-foreground text-lg">
          A rapid diagnostic of your reporting, stock visibility, margin control, and system accuracy.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">What we review:</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Stock Visibility</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Are your stock sheets accurate? Do you trust your monthly stock position reporting?
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Margin Reporting</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Can you see true gross margin by material category without manual spreadsheet acrobatics?
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Transport Performance</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Is transport costing you more than you think? Are manual deal sheets slowing you down?
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">System Data Risk</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Are Fred EWC codes, Xero product codes, and nominal structures aligned and automated?
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="bg-muted/50 border-primary/20">
        <CardHeader>
          <CardTitle>Request a Diagnostic</CardTitle>
          <CardDescription>Fill out this brief form and we'll be in touch to schedule a preliminary call.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input id="name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">Company</label>
                <input id="company" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Acme Metals" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input id="email" type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="biggest-challenge" className="text-sm font-medium">Biggest Current Finance/Data Challenge</label>
              <textarea id="biggest-challenge" className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="E.g., We don't trust our monthly stock figures..."></textarea>
            </div>
            <Button type="button" className="w-full">Submit Request</Button>
            <p className="text-xs text-center text-muted-foreground mt-4">
                This is a mock form for demonstration purposes.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
