"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/founder", label: "Founder" },
  { href: "/health-check", label: "Health Check" },
  { href: "/dashboard-demo", label: "Dashboard Demo" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/growth-hub", label: "Growth Hub" },
  { href: "/agents", label: "Agents" },
  { href: "/knowledge", label: "Knowledge" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[--color-hairline] bg-[--color-background]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          SCRAP FINANCE <span className="text-[--color-copper]">PARTNERS</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm text-[--color-blue-grey]">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[--color-foreground] transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/health-check"
            className="rounded-md bg-[--color-copper] px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            Book a Health Check
          </Link>
        </div>

        <button
          className="lg:hidden text-[--color-foreground]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden flex flex-col gap-1 border-t border-[--color-hairline] px-6 py-4 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 text-[--color-blue-grey] hover:text-[--color-foreground]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="py-2 text-[--color-foreground]" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
