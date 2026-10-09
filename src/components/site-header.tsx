"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";
import { navItems } from "@/data/site";
import { BrandMark } from "@/components/brand-mark";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  function isCurrentPage(href: string) {
    return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  }

  function handleMenuKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape" && menuOpen) {
      setMenuOpen(false);
      menuToggleRef.current?.focus();
    }
  }

  return (
    <header className="site-header" onKeyDown={handleMenuKeyDown}>
      <div className="site-header__inner container-shell">
        <Link aria-label="UltraX Solutions home" className="site-header__brand" href="/" onClick={() => setMenuOpen(false)}>
          <BrandMark priority />
        </Link>

        <nav aria-label="Main navigation" className="desktop-nav">
          {navItems.map((item) => (
            <Link
              aria-current={isCurrentPage(item.href) ? "page" : undefined}
              className="nav-link"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="header-cta" href="/contact">
          Start a conversation <span aria-hidden="true">↗</span>
        </Link>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className={`menu-toggle${menuOpen ? " menu-toggle--open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          ref={menuToggleRef}
          type="button"
        >
          <span />
          <span />
        </button>
      </div>

      <nav
        aria-label="Mobile navigation"
        className={`mobile-nav${menuOpen ? " mobile-nav--open" : ""}`}
        id="mobile-navigation"
        inert={!menuOpen}
      >
        {navItems.map((item, index) => (
          <Link
            aria-current={isCurrentPage(item.href) ? "page" : undefined}
            className="mobile-nav__link"
            href={item.href}
            key={item.href}
            onClick={() => setMenuOpen(false)}
          >
            <span className="mobile-nav__index">0{index + 1}</span>
            <span>{item.label}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
