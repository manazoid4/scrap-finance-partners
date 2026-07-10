import Link from "next/link";

const footerSections = [
  {
    title: "Services",
    links: [
      { href: "/services", label: "What You Get" },
      { href: "/health-check", label: "Health Check" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/founder", label: "Founder" },
      { href: "/case-studies", label: "Results" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-graphite">
      <div className="container max-w-screen-2xl">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-4">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group">
              <span className="h-2 w-2 rounded-sm bg-copper transition-colors group-hover:bg-copper-bright" />
              <span className="font-bold text-sm tracking-tight text-ink">
                Scrap Finance Partners
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-secondary">
              26 years in UK scrap metal finance. Built for yards, not
              boardrooms. We fix the gap between what your system reports and
              what is actually happening.
            </p>
          </div>

          {/* Link sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                {section.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-secondary transition-colors duration-200 hover:text-copper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal bar */}
        <div className="border-t border-hairline py-6">
          <p className="text-xs leading-relaxed text-ink-muted text-balance">
            This website is for consultancy positioning and does not provide
            legal, tax, audit or regulated financial advice. Formal
            accountancy, tax, audit, AML or compliance services should be
            provided only through appropriately qualified and supervised
            professionals.
          </p>
          <p className="mt-3 text-xs text-ink-muted">
            &copy; {new Date().getFullYear()} Scrap Finance Partners. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}