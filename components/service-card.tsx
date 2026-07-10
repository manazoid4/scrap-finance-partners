import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function ServiceCard({
  title,
  description,
  items,
  number,
}: {
  title: string
  description: string
  items?: string[]
  number?: number
}) {
  return (
    <Card className="h-full border-hairline transition-all duration-300 hover:border-copper/40 hover:shadow-md hover:-translate-y-0.5 group">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          {number !== undefined && (
            <span className="flex-shrink-0 h-8 w-8 rounded-lg bg-copper/10 border border-copper/20 flex items-center justify-center text-sm font-bold text-copper tabular-nums transition-colors group-hover:bg-copper group-hover:text-white">
              {String(number).padStart(2, "0")}
            </span>
          )}
          <div>
            <CardTitle className="text-lg leading-tight">{title}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      {items && items.length > 0 && (
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-copper/60 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  )
}