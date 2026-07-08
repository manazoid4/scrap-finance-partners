import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-grid border-b border-[--color-hairline]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[--color-background]" />
      <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32 text-center">
        <p className="text-xs uppercase tracking-widest text-[--color-copper] font-medium mb-6">
          Scrap metal & recycling finance specialists
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          Finance clarity for scrap metal and recycling businesses.
        </h1>
        <p className="mt-6 text-lg text-[--color-blue-grey] max-w-2xl mx-auto leading-relaxed">
          Specialist reporting, finance business partner and operational insight support for scrap yards, recyclers and circular businesses that need better visibility across stock, transport, commercial performance and cashflow.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/health-check"
            className="inline-flex items-center gap-2 rounded-md bg-[--color-copper] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            Book a Finance Health Check <ArrowRight size={16} />
          </Link>
          <Link
            href="/dashboard-demo"
            className="inline-flex items-center gap-2 rounded-md border border-[--color-hairline] px-6 py-3 text-sm font-medium hover:bg-[--color-panel] transition-colors"
          >
            View Dashboard Demo
          </Link>
        </div>
        <p className="mt-10 text-sm text-[--color-blue-grey]">
          Built from over two decades inside finance, transport, logistics and UK metal recycling operations.
        </p>
      </div>
    </section>
  );
}
