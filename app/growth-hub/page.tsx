import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GrowthHubPage() {
  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Growth Hub Command Centre</h1>
        <p className="text-muted-foreground mt-2">Internal strategic planning and execution.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* NOW Column */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold border-b pb-2">Now</h2>
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm">Finalise Positioning</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 text-xs text-muted-foreground">
              Confirm exact wording for founder authority block and main hero.
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm">Create Lead Magnet</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 text-xs text-muted-foreground">
              Draft the Scrap Yard Finance Health Check PDF.
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm">Dummy Dashboards</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 text-xs text-muted-foreground">
              Build 3 variants of the KPI dashboard for the demo page.
            </CardContent>
          </Card>
        </div>

        {/* NEXT Column */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold border-b pb-2">Next</h2>
          <Card className="border-l-4 border-l-amber-500">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm">Outreach List</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 text-xs text-muted-foreground">
              Build list of 50 UK scrap/recycling firms targeting £5M-£50M turnover.
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-amber-500">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm">LinkedIn Content</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 text-xs text-muted-foreground">
              Draft first 10 posts focusing on margin leaks and stock visibility.
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-amber-500">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm">Proposal Template</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 text-xs text-muted-foreground">
              Design the standard proposal flow mapping pain to retainer tier.
            </CardContent>
          </Card>
        </div>

        {/* LATER Column */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold border-b pb-2">Later</h2>
          <Card className="border-l-4 border-l-slate-300">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm">CRM Integration</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 text-xs text-muted-foreground">
              Connect contact forms to a lightweight CRM (e.g., Notion or HubSpot).
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-slate-300">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm">Client Portal</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 text-xs text-muted-foreground">
              Secure area for clients to view their dashboards and action logs.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
