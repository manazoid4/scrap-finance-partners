"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/services", label: "What You Get" },
  { href: "/case-studies", label: "Results" },
  { href: "/pricing", label: "Pricing" },
  { href: "/founder", label: "Founder" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-hairline bg-panel/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span className="h-3 w-3 bg-copper group-hover:bg-copper-bright transition-colors" />
          <span className="font-semibold text-lg tracking-tight text-ink">
            Scrap Finance <span className="text-ink-secondary font-normal">Partners</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-ink-secondary hover:text-copper transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/health-check"
            className="inline-flex items-center justify-center h-10 px-4 sm:px-5 bg-copper hover:bg-copper-bright text-white font-semibold text-sm transition-colors"
          >
            Get a Health Check
          </Link>
          <button
            className="lg:hidden inline-flex items-center justify-center h-11 w-11 text-ink-secondary hover:text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-hairline bg-panel">
          <ul className="container mx-auto max-w-7xl px-4 py-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block py-3 text-base text-ink-secondary hover:text-copper border-b border-hairline last:border-0"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
