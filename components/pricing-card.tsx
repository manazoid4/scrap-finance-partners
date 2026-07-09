import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PricingCard({ 
  title, 
  price, 
  description, 
  features,
  isPopular
}: { 
  title: string, 
  price: string, 
  description: string, 
  features: string[],
  isPopular?: boolean
}) {
  return (
    <Card className={`h-full flex flex-col ${isPopular ? 'border-primary shadow-lg' : ''}`}>
      <CardHeader>
        {isPopular && <div className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">Most Popular</div>}
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="text-4xl font-bold mb-6">{price}</div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <svg
                className="mr-2 h-4 w-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={isPopular ? "default" : "outline"}>
          Get Started
        </Button>
      </CardFooter>
    </Card>
  )
}
