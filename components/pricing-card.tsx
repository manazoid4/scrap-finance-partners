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
    <div
      className={cn(
        "h-full flex flex-col border border-hairline bg-panel transition-all duration-300 relative",
        isPopular
          ? "border-copper"
          : "hover:border-copper/40"
      )}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-copper text-white text-xs font-semibold tracking-wider uppercase px-4 py-1 whitespace-nowrap">
            Most Yards Start Here
          </span>
        </div>
      )}
      <div className="p-6 pb-4">
        <h3 className="text-2xl font-bold text-ink">{title}</h3>
        <p className="text-sm text-ink-secondary mt-1">{description}</p>
      </div>
      <div className="flex-1 px-6">
        <div className="text-4xl font-bold mb-6 tracking-tight text-ink">{price}</div>
        <ul className="space-y-3 text-sm text-ink-secondary">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex-shrink-0 h-4 w-4 bg-copper/10 flex items-center justify-center">
                <Check className="h-3 w-3 text-copper" strokeWidth={3} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 pt-4">
        <Button
          asChild
          className={cn(
            "w-full transition-all rounded-sm",
            isPopular
              ? "bg-copper hover:bg-copper-bright text-white border-0"
              : "hover:border-copper hover:text-copper"
          )}
          variant={isPopular ? "default" : "outline"}
        >
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </div>
  )
}
