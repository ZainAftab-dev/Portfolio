"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";

/** Fixed, blurred nav. `base` prefixes the in-page anchors when used off the homepage. */
export function Nav({ base = "" }: { base?: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <div className="wrap">
        <a href={base ? "/" : "#top"} className="logo">
          <i></i>Zain Aftab
        </a>
        <nav className="nav-links" aria-label="Sections">
          {navLinks.map((l) => (
            <a key={l.href} href={`${base}${l.href}`}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href={`${base}#contact`} className="nav-cta">
          Hire me
        </a>
      </div>
    </header>
  );
}
