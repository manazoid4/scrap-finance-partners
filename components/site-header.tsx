"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/services", label: "What You Get" },
  { href: "/case-studies", label: "Results" },
  { href: "/pricing", label: "Pricing" },
  { href: "/founder", label: "Founder" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-hairline bg-graphite/80 backdrop-blur-md supports-[backdrop-filter]:bg-graphite/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        {/* Logo + desktop nav */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="h-2 w-2 rounded-sm bg-copper transition-colors group-hover:bg-copper-bright" />
            <span className="font-bold text-sm tracking-tight text-ink">
              Scrap Finance Partners
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ink-secondary transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-hairline bg-transparent text-ink-secondary hover:text-ink hover:bg-panel-alt"
          >
            <Link href="/health-check">Health Check</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-copper text-white hover:bg-copper-bright border border-copper/50"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-sm border border-hairline bg-panel text-ink transition-colors hover:bg-panel-alt"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-hairline bg-graphite">
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-sm px-3 py-2.5 text-sm font-medium text-ink-secondary transition-colors hover:bg-panel-alt hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 px-3">
              <Button
                asChild
                size="sm"
                variant="outline"
                className="w-full border-hairline bg-transparent text-ink-secondary hover:text-ink hover:bg-panel-alt"
              >
                <Link href="/health-check" onClick={() => setMenuOpen(false)}>
                  Health Check
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="w-full bg-copper text-white hover:bg-copper-bright"
              >
                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}