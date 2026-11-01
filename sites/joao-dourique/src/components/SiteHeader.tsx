"use client";

import { useEffect, useState } from "react";
import { hero, nav, site } from "@/content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "bg-night/90 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-6 lg:px-8">
        <a href="#inicio" className="group flex flex-col leading-none">
          <span className="text-[10px] font-normal uppercase tracking-[0.4em] text-gold">{site.kind}</span>
          <span className="mt-1 font-serif text-2xl italic text-cream transition-colors duration-300 group-hover:text-gold-soft">
            {site.name}
          </span>
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-9 text-[13px] font-normal uppercase tracking-[0.2em] text-cream/80">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="py-2 transition-colors duration-300 hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={site.phoneHref}
          className="hidden min-h-11 items-center border border-gold/60 px-5 text-[13px] font-normal uppercase tracking-[0.2em] text-gold transition-colors duration-300 hover:bg-gold hover:text-night md:inline-flex"
        >
          {hero.primary}
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-movel"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex size-11 items-center justify-center text-cream md:hidden"
        >
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 9h16M4 15h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div id="menu-movel" className="border-t border-line bg-night px-6 pb-10 pt-4 md:hidden">
          <nav aria-label="Principal">
            <ul>
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block border-b border-line py-5 font-serif text-3xl text-cream">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={site.phoneHref}
            className="mt-8 inline-flex min-h-12 items-center bg-gold px-6 text-sm uppercase tracking-[0.2em] text-night"
          >
            {hero.primary} · {site.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}
