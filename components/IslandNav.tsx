"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/shastra", label: "Shastra" },
  { href: "/dharma", label: "Dharma" },
  { href: "/karma", label: "Karma" },
  { href: "/daana", label: "Daana" },
] as const;

function navActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function IslandNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const pathname = usePathname();

  return (
    <header className="island-nav" aria-label="Primary">
      <div className="island-nav__shell">
        <div className="island-nav__inner">
          <Link
            href="/"
            className="brand island-nav__brand"
            aria-label="mySwadharma home"
            onClick={close}
          >
            <span className="brand-mark" aria-hidden />
            <span>
              <div className="brand-title">mySwadharma</div>
              <div className="brand-sub">Learn · Observe · Perform · Give</div>
            </span>
          </Link>

          <button
            type="button"
            className="mobile-menu island-nav__menu-btn"
            aria-expanded={open}
            aria-controls="islandNavLinks"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>

          <nav
            id="islandNavLinks"
            className={cn("nav-links island-nav__links", open && "open")}
            aria-label="Sections"
          >
            {NAV.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(navActive(pathname, href) && "island-nav__link--active")}
                onClick={close}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/karma#annual-homa"
            className="nav-cta island-nav__cta"
            onClick={close}
          >
            11 Homas in Your Name
          </Link>
        </div>
      </div>
    </header>
  );
}
