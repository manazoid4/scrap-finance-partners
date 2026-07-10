import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function PricingCard({
  title,
  price,
  description,
  features,
  isPopular,
}: {
  title: string
  price: string
  description: string
  features: string[]
  isPopular?: boolean
}) {
  return (
    <Card
      className={cn(
        "h-full flex flex-col border-hairline transition-all duration-300 relative",
        isPopular
          ? "border-copper shadow-lg shadow-copper/10 -translate-y-2"
          : "hover:border-copper/40 hover:shadow-md hover:-translate-y-1"
      )}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-copper text-white text-xs font-semibold tracking-wider uppercase px-4 py-1 rounded-full whitespace-nowrap shadow-md">
            Most Yards Start Here
          </span>
        </div>
      )}
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="text-4xl font-bold mb-6 tracking-tight">{price}</div>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex-shrink-0 h-4 w-4 rounded-full bg-copper/10 flex items-center justify-center">
                <Check className="h-3 w-3 text-copper" strokeWidth={3} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-4">
        <Button
          asChild
          className={cn(
            "w-full transition-all",
            isPopular
              ? "bg-copper hover:bg-copper/90 text-white shadow-sm hover:shadow-md"
              : "hover:border-copper hover:text-copper"
          )}
          variant={isPopular ? "default" : "outline"}
        >
          <Link href="/contact">Get Started</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}