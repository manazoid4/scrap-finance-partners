"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/health-check", label: "Health Check" },
  { href: "/services", label: "How We Help" },
  { href: "/case-studies", label: "Case Study" },
  { href: "/about", label: "About" },
  { href: "/ways-to-work-together", label: "Ways to Work Together" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);

  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    const node = panel.current;
    node?.querySelector<HTMLAnchorElement>("a")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        trigger.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !node) return;

      // Contain focus within the open panel and its trigger.
      const focusables = [
        trigger.current,
        ...Array.from(node.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")),
      ].filter(Boolean) as HTMLElement[];
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isCurrent = (href: string) =>
    pathname === href || (href !== "/" && Boolean(pathname?.startsWith(`${href}/`)));

  return (
    <header className="sticky top-0 z-50 border-b-2 border-black bg-graphite text-white">
      <div className="hidden border-b border-[#4d534e] md:block">
        <div className="editorial-shell flex min-h-8 items-center justify-between px-5 font-mono text-[10px] uppercase tracking-[.08em] text-[#b9beb9]">
          <span>UK scrap &amp; recycling</span>
          <span>Commercial finance insight</span>
        </div>
      </div>

      <div className="editorial-shell flex h-16 items-stretch justify-between">
        <Link
          href="/"
          className="flex min-w-0 items-center border-r border-[#4d534e] px-4 sm:px-5"
          onClick={() => setOpen(false)}
        >
          <span className="font-serif text-[1.05rem] font-bold leading-none tracking-[-.025em] sm:text-xl">
            Scrap Finance Partners
          </span>
        </Link>

        <nav className="hidden items-stretch xl:flex" aria-label="Primary">
          {links.slice(0, 5).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              className="flex items-center border-r border-[#4d534e] px-4 text-sm font-semibold hover:bg-[#f0f0ed] hover:text-ink aria-[current=page]:bg-[#2b302c] aria-[current=page]:text-copper"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-stretch">
          {/* Always reachable, at every width, without opening the menu. */}
          <Link
            href="/health-check"
            className="flex min-w-[7.5rem] items-center justify-center border-l-2 border-black bg-copper px-3 text-center text-[13px] font-bold leading-tight text-graphite hover:bg-[#f0f0ed] sm:px-5 sm:text-sm"
          >
            Request Health Check
          </Link>
          <button
            ref={trigger}
            type="button"
            className="flex w-14 items-center justify-center border-l border-[#4d534e] sm:w-16 xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => (open ? close() : setOpen(true))}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          ref={panel}
          className="border-t border-[#4d534e] bg-graphite xl:hidden"
          aria-label="Site"
        >
          <div className="editorial-shell">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent(link.href) ? "page" : undefined}
                className="flex min-h-14 items-center justify-between border-b border-[#4d534e] px-4 text-lg font-semibold last:border-b-0 hover:bg-copper hover:text-graphite aria-[current=page]:text-copper"
                onClick={() => setOpen(false)}
              >
                {link.label}
                <span aria-hidden>→</span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
