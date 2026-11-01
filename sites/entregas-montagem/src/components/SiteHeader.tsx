"use client";

import { useEffect, useState } from "react";
import { nav, quickMessage, site, whatsappLink } from "@/content";
import { Icon } from "./Icon";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/95 shadow-[0_1px_0_var(--color-line)] backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2.5 whitespace-nowrap font-display text-base font-semibold tracking-tight text-forest sm:text-lg">
          <span className="flex size-9 items-center justify-center rounded-xl bg-forest text-mint">
            <Icon name="box" className="size-5" />
          </span>
          {site.brand}
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-ink-soft">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="py-2 transition-colors duration-200 hover:text-green">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={whatsappLink(quickMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="hidden min-h-11 items-center gap-2 rounded-full bg-whatsapp px-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-green-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green sm:px-5 md:inline-flex"
        >
          <Icon name="whatsapp" className="size-5" />
          <span aria-hidden="true">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
