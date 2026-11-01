"use client";

import { useEffect, useState } from "react";
import { hero, nav, site } from "@/content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const link = "text-[13px] uppercase tracking-[0.18em] text-ink-soft transition-colors duration-300 hover:text-ink";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-stone/95 backdrop-blur transition-shadow duration-300 ${
        scrolled || open ? "shadow-[0_1px_0_var(--color-line)]" : ""
      }`}
    >
      <div className="mx-auto grid h-18 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-6 px-6 lg:px-10">
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={link}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#inicio" className="col-start-1 justify-self-start text-center md:col-start-2 md:justify-self-center">
          <span className="block font-serif text-xl leading-none tracking-[0.02em] text-ink">{site.name}</span>
          <span className="mt-1 block text-[10px] uppercase tracking-[0.35em] text-muted">{site.tagline}</span>
        </a>

        <div className="col-start-3 flex justify-end">
          <a
            href={site.phoneHref}
            className="hidden border-b border-ink pb-0.5 text-[13px] uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:border-wine hover:text-wine md:inline-block"
          >
            {hero.cta}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movel"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex size-11 items-center justify-center text-ink md:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 9h16M4 15h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-movel" className="border-t border-line px-6 pb-10 pt-2 md:hidden">
          <nav aria-label="Principal">
            <ul>
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block border-b border-line py-5 font-serif text-3xl text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href={site.phoneHref} className="mt-8 inline-flex min-h-12 items-center bg-ink px-6 text-sm uppercase tracking-[0.18em] text-stone">
            {hero.cta}
          </a>
        </div>
      )}
    </header>
  );
}
