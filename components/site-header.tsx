"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/health-check", label: "Health Check" },
  { href: "/case-studies", label: "Case Study" },
  { href: "/insights", label: "Insights" },
  { href: "/founder", label: "About" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    firstLink.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return <header className="sticky top-0 z-50 border-b-2 border-black bg-graphite text-white">
    <div className="hidden border-b border-[#4d534e] md:block">
      <div className="editorial-shell flex min-h-8 items-center justify-between px-5 font-mono text-[10px] uppercase tracking-[.08em] text-[#b9beb9]">
        <span>UK scrap &amp; recycling</span><span>Commercial finance insight</span>
      </div>
    </div>
    <div className="editorial-shell flex h-16 items-stretch justify-between">
      <Link href="/" className="flex min-w-0 items-center border-r border-[#4d534e] px-4 sm:px-5" onClick={() => setOpen(false)}>
        <span className="font-serif text-[1.05rem] font-bold leading-none tracking-[-.025em] sm:text-xl">Scrap Finance Partners</span>
      </Link>
      <nav className="hidden items-stretch lg:flex" aria-label="Primary navigation">
        {links.map((link) => <Link key={link.href} href={link.href} className="flex items-center border-r border-[#4d534e] px-4 text-sm font-semibold hover:bg-[#f0f0ed] hover:text-ink">{link.label}</Link>)}
      </nav>
      <div className="ml-auto flex shrink-0 items-stretch">
        <Link href="/health-check" className="hidden items-center border-l-2 border-black bg-copper px-5 text-sm font-bold text-graphite hover:bg-[#f0f0ed] sm:flex">Request Health Check</Link>
        <button ref={trigger} className="flex w-16 items-center justify-center border-l border-[#4d534e] lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
      </div>
    </div>
    {open && <nav id="mobile-navigation" className="border-t border-[#4d534e] bg-graphite lg:hidden" aria-label="Mobile navigation">
      <div className="editorial-shell">
        {links.map((link, index) => <Link key={link.href} ref={index === 0 ? firstLink : undefined} href={link.href} className="flex min-h-14 items-center border-b border-[#4d534e] px-4 text-lg font-semibold last:border-b-0 hover:bg-copper hover:text-graphite" onClick={() => setOpen(false)}>{link.label}</Link>)}
        <Link href="/health-check" className="flex min-h-14 items-center justify-between bg-copper px-4 font-bold text-graphite sm:hidden" onClick={() => setOpen(false)}>Request Health Check <span aria-hidden>→</span></Link>
      </div>
    </nav>}
  </header>;
}