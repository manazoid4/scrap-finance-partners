import { KpiCard } from "@/components/kpi-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardDemoPage() {
  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Management Dashboard</h1>
          <p className="text-muted-foreground">Mock data for demonstration purposes.</p>
        </div>
        <div className="text-sm bg-muted px-3 py-1.5 rounded-md font-medium border">
          Period: October 2026
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <KpiCard 
          title="Monthly Throughput" 
          value="4,250 T" 
          change="+5.2%" 
          trend="up" 
        />
        <KpiCard 
          title="Est. Stock Value" 
          value="£1.24M" 
          change="-2.1%" 
          trend="down" 
        />
        <KpiCard 
          title="Avg Transport Cost" 
          value="£18.50 /T" 
          change="£0.50" 
          trend="down" 
        />
        <KpiCard 
          title="Debtor Days" 
          value="42 days" 
          change="+3 days" 
          trend="down" 
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mb-8">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Gross Margin by Category</CardTitle>
            <CardDescription>Monthly trend analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full bg-muted/20 rounded-md border flex items-center justify-center relative overflow-hidden">
                {/* Mock Chart Visualization */}
                <div className="absolute bottom-0 left-8 w-12 h-[60%] bg-blue-500/80 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-24 w-12 h-[70%] bg-blue-500/80 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-40 w-12 h-[65%] bg-blue-500/80 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-56 w-12 h-[80%] bg-blue-500/80 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-72 w-12 h-[75%] bg-blue-500/80 rounded-t-sm"></div>
                
                <div className="absolute bottom-0 left-10 w-8 h-[40%] bg-green-500/80 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-26 w-8 h-[50%] bg-green-500/80 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-42 w-8 h-[45%] bg-green-500/80 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-58 w-8 h-[60%] bg-green-500/80 rounded-t-sm"></div>
                <div className="absolute bottom-0 left-74 w-8 h-[55%] bg-green-500/80 rounded-t-sm"></div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Risk & Exceptions</CardTitle>
            <CardDescription>Items requiring immediate attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
                <div>
                    <div className="flex justify-between mb-1 text-sm">
                        <span className="font-medium text-red-500">Stock Discrepancies > 5%</span>
                        <span className="font-bold">3 sites</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-1 text-sm">
                        <span className="font-medium text-amber-500">Unmapped Xero Codes</span>
                        <span className="font-bold">14 items</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-1 text-sm">
                        <span className="font-medium text-amber-500">Manual Deal Sheets Pending</span>
                        <span className="font-bold">28 sheets</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                </div>
                 <div>
                    <div className="flex justify-between mb-1 text-sm">
                        <span className="font-medium text-green-500">EWC Code Compliance</span>
                        <span className="font-bold">98.5%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '98.5%' }}></div>
                    </div>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
