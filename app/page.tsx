import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] space-y-8 text-center px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
        Finance clarity for scrap metal <br className="hidden sm:inline" />
        and recycling businesses.
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
        Outsourced finance intelligence for scrap yards, recyclers and circular businesses. Turn stock, transport and commercial data into better decisions.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/services">View Services</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/health-check">Get a Health Check</Link>
        </Button>
      </div>
      <div className="pt-8">
        <p className="text-sm font-medium text-muted-foreground">Built by a founder with 26 years in UK scrap metal finance.</p>
      </div>
    </div>
  )
}
