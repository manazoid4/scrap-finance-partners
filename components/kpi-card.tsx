import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function KpiCard({ 
  title, 
  value, 
  change, 
  trend 
}: { 
  title: string, 
  value: string, 
  change?: string, 
  trend?: 'up' | 'down' | 'neutral' 
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className={`text-xs ${trend === 'up' ? 'text-green-500' : trend === 'down' ? 'text-red-500' : 'text-muted-foreground'}`}>
            {change} from last month
          </p>
        )}
      </CardContent>
    </Card>
  )
}
