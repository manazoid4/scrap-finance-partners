"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/health-check", label: "Health Check" },
  { href: "/case-studies", label: "Case Study" },
  { href: "/insights", label: "Insights" },
  { href: "/founder", label: "About" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-hairline bg-panel/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-7xl min-w-0 items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="group flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="h-3 w-3 shrink-0 bg-copper transition-colors group-hover:bg-copper-bright" />
          <span className="truncate text-sm font-semibold tracking-tight text-ink sm:text-lg">Scrap Finance <span className="hidden font-normal text-ink-secondary sm:inline">Partners</span></span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => <Link key={link.href} href={link.href} className="text-ink-secondary transition-colors hover:text-copper">{link.label}</Link>)}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Link href="/health-check" className="hidden h-11 items-center justify-center bg-copper px-5 text-sm font-semibold text-white transition-colors hover:bg-copper-bright sm:inline-flex">Request a Health Check</Link>
          <button ref={triggerRef} className="inline-flex h-11 w-11 items-center justify-center text-ink-secondary hover:text-ink lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
        </div>
      </div>
      {open && (
        <nav id="mobile-navigation" className="border-t border-hairline bg-panel lg:hidden" aria-label="Mobile navigation">
          <ul className="mx-auto w-full max-w-7xl px-4 py-2 sm:px-6">
            {navLinks.map((link, index) => <li key={link.href}><Link ref={index === 0 ? firstLinkRef : undefined} href={link.href} className="block min-h-11 border-b border-hairline py-3 text-base text-ink-secondary last:border-0 hover:text-copper" onClick={() => setOpen(false)}>{link.label}</Link></li>)}
            <li className="py-3 sm:hidden"><Link href="/health-check" className="flex min-h-11 items-center justify-center bg-copper px-4 font-semibold text-white" onClick={() => setOpen(false)}>Request a Health Check</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}