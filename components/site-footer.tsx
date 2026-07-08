import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[--color-hairline] bg-[--color-panel]">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <p className="font-semibold">SCRAP FINANCE PARTNERS</p>
          <p className="mt-2 text-[--color-blue-grey]">
            Finance clarity for scrap metal and recycling businesses.
          </p>
        </div>
        <div>
          <p className="font-medium mb-2">Company</p>
          <ul className="space-y-1 text-[--color-blue-grey]">
            <li><Link href="/founder" className="hover:text-[--color-foreground]">Founder</Link></li>
            <li><Link href="/case-studies" className="hover:text-[--color-foreground]">Case Studies</Link></li>
            <li><Link href="/contact" className="hover:text-[--color-foreground]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Offers</p>
          <ul className="space-y-1 text-[--color-blue-grey]">
            <li><Link href="/health-check" className="hover:text-[--color-foreground]">Health Check</Link></li>
            <li><Link href="/pricing" className="hover:text-[--color-foreground]">Pricing</Link></li>
            <li><Link href="/services" className="hover:text-[--color-foreground]">Services</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Resources</p>
          <ul className="space-y-1 text-[--color-blue-grey]">
            <li><Link href="/agents" className="hover:text-[--color-foreground]">Agent Library</Link></li>
            <li><Link href="/knowledge" className="hover:text-[--color-foreground]">Knowledge Vault</Link></li>
            <li><Link href="/growth-hub" className="hover:text-[--color-foreground]">Growth Hub</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[--color-hairline]">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs text-[--color-blue-grey]">
          This website is for consultancy positioning and does not provide legal, tax, audit or regulated financial advice. Formal accountancy, tax, audit, AML or compliance services should be provided only through appropriately qualified and supervised professionals.
        </p>
      </div>
    </footer>
  );
}
