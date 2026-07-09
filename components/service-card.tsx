import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServiceCard({ title, description, items }: { title: string, description: string, items?: string[] }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {items && items.length > 0 && (
        <CardContent>
          <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  )
}
