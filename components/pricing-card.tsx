import Link from "next/link"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  level: number
  price: string
  description: string
  features: string[]
  isPopular?: boolean
}

export function PricingCard({
  title,
  level,
  price,
  description,
  features,
  isPopular,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col bg-panel border-hairline border rounded-none transition-colors group ${
        isPopular ? "border-copper" : ""
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-0 right-0 flex justify-center">
          <span className="bg-copper text-white text-[10px] font-mono tracking-widest uppercase px-3 py-1">
            Most Common
          </span>
        </div>
      )}
      <div className="p-8">
        <h3 className="font-mono text-sm uppercase tracking-widest text-copper mb-2">{title}</h3>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-4xl font-bold font-mono tracking-tight text-ink">{price}</span>
        </div>
        <p className="text-sm text-ink-secondary leading-relaxed">{description}</p>
      </div>
      <div className="flex-1 px-8 pb-8">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-4 w-4 text-copper flex-shrink-0 mt-0.5" />
              <span className="text-sm text-ink-secondary">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-8 pt-0 mt-auto">
        <Link
          href="/contact"
          className={`inline-flex w-full items-center justify-center h-11 font-semibold text-sm transition-colors ${
            isPopular ? 'bg-copper text-white hover:bg-copper-bright' : 'bg-panel-alt text-ink hover:bg-copper hover:text-white border border-hairline'
          }`}
        >
          Start with {title}
        </Link>
      </div>
    </div>
  )
}
