"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { dictionaries, site, type Locale } from "@/content";

export function SiteHeader({ lang }: { lang: Locale }) {
  const t = dictionaries[lang];
  const other: Locale = lang === "pt" ? "uk" : "pt";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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

  const links = [
    { href: "#sobre", label: t.nav.about },
    { href: "#consultas", label: t.nav.services },
    { href: "#temas", label: t.nav.topics },
    { href: "#como-funciona", label: t.nav.process },
    { href: "#perguntas", label: t.nav.faq },
  ];

  const langSwitch = (
    <Link
      href={`/${other}`}
      hrefLang={other}
      lang={other}
      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm text-ink transition-colors duration-200 hover:border-wine hover:text-wine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
    >
      <span aria-hidden="true" className="text-xs font-semibold uppercase tracking-widest text-muted">
        {other}
      </span>
      {t.switchLabel}
    </Link>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-cream/95 shadow-[0_1px_0_var(--color-line)] backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a
          href="#inicio"
          className="font-serif text-2xl italic tracking-tight text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
        >
          {site.name}
          <span className="text-wine">.</span>
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm text-ink-soft">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="py-2 transition-colors duration-200 hover:text-wine focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {langSwitch}
          <a
            href="#contacto"
            className="inline-flex min-h-11 items-center rounded-full bg-wine px-5 text-sm font-medium text-cream transition-colors duration-200 hover:bg-wine-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
          >
            {t.cta}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-movel"
          aria-label={open ? t.close : t.menu}
          className="inline-flex size-11 items-center justify-center rounded-full text-ink focus-visible:outline-2 focus-visible:outline-wine lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div id="menu-movel" className="border-t border-line bg-cream px-5 pb-8 pt-4 lg:hidden">
          <nav aria-label="Principal">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-4 font-serif text-2xl text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {langSwitch}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-11 items-center rounded-full bg-wine px-5 text-sm font-medium text-cream"
            >
              {t.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
