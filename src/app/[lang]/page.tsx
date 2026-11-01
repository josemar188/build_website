import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroImageReveal, HeroText, MotionProvider, Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { dictionaries, isLocale, site } from "@/content";
import portrait from "../../../public/lia-portrait.webp";

function Label({ index, children, light = false }: { index: string; children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] ${
        light ? "text-gold" : "text-wine"
      }`}
    >
      <span className="tabular-nums">{index}</span>
      <span aria-hidden="true" className={`h-px w-10 ${light ? "bg-gold/60" : "bg-wine/50"}`} />
      {children}
    </p>
  );
}

const mail = `mailto:${site.email}`;

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = dictionaries[lang];

  return (
    <MotionProvider>
      <a
        href="#conteudo"
        className="sr-only z-[60] rounded bg-ink px-4 py-2 text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {t.skip}
      </a>
      <SiteHeader lang={lang} />

      <main id="conteudo">
        {/* HERO */}
        <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-28">
            <div>
              <HeroText>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-wine">{t.hero.eyebrow}</p>
              </HeroText>
              <HeroText delay={0.12}>
              <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.05] tracking-tight text-ink text-balance sm:text-6xl lg:text-7xl">
                {t.hero.titleStart} <em className="text-wine">{t.hero.titleEmphasis}</em> {t.hero.titleEnd}
              </h1>
              </HeroText>
              <HeroText delay={0.28}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">{t.hero.lead}</p>
              </HeroText>
              <HeroText delay={0.42} className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#contacto"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-wine px-7 font-medium text-cream transition-colors duration-200 hover:bg-wine-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
                >
                  {t.cta}
                  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a
                  href="#consultas"
                  className="inline-flex min-h-12 items-center border-b border-ink/30 px-1 text-ink transition-colors duration-200 hover:border-wine hover:text-wine focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
                >
                  {t.hero.secondary}
                </a>
              </HeroText>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div aria-hidden="true" className="absolute -right-3 -top-3 bottom-6 left-6 rounded-t-full border border-wine/40 sm:-right-5 sm:-top-5" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-sand">
                <HeroImageReveal className="absolute inset-0">
                <Image
                  src={portrait}
                  alt={t.hero.photoAlt}
                  fill
                  preload
                  sizes="(min-width: 1024px) 45vw, (min-width: 640px) 28rem, 90vw"
                  className="object-cover object-[50%_30%]"
                  placeholder="blur"
                />
                </HeroImageReveal>
              </div>
              <HeroText delay={1.1} className="absolute -bottom-5 left-4 sm:left-[-1.5rem]">
                <p className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-cream shadow-lg">
                  <span aria-hidden="true" className="size-2 rounded-full bg-gold" />
                  {t.hero.badge}
                </p>
              </HeroText>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="border-t border-line bg-sand/60">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-32">
            <Reveal>
              <Label index="01">{t.about.label}</Label>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-ink sm:text-5xl">{t.about.title}</h2>
            </Reveal>
            <Reveal delay={0.15}>
              {t.about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="mb-6 text-lg leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
              <blockquote className="mt-10 border-l-2 border-wine pl-6 font-serif text-2xl italic leading-snug text-wine sm:text-3xl">
                {t.about.quote}
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* CONSULTAS */}
        <section id="consultas" className="bg-ink text-cream">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
            <Reveal className="grid gap-8 lg:grid-cols-2 lg:items-end">
              <div>
                <Label index="02" light>
                  {t.services.label}
                </Label>
                <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">{t.services.title}</h2>
              </div>
              <p className="max-w-lg text-lg leading-relaxed text-cream/75 lg:justify-self-end">{t.services.intro}</p>
            </Reveal>

            <Stagger className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 md:grid-cols-3">
              {t.services.items.map((s, i) => (
                <StaggerItem key={s.name} className="flex flex-col bg-ink p-8 transition-colors duration-300 hover:bg-ink-soft sm:p-10">
                  <span className="font-serif text-5xl italic text-gold/80">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-8 font-serif text-2xl">{s.name}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gold">{s.duration}</p>
                  <p className="mt-5 leading-relaxed text-cream/75">{s.description}</p>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <p className="text-cream/70">{t.services.priceNote}</p>
              <a
                href="#contacto"
                className="inline-flex min-h-12 items-center rounded-full border border-gold/60 px-6 text-gold transition-colors duration-200 hover:bg-gold hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {t.cta}
              </a>
            </div>
          </div>
        </section>

        {/* TEMAS */}
        <section id="temas">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
            <Reveal>
              <Label index="03">{t.topics.label}</Label>
              <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-5xl">{t.topics.title}</h2>
            </Reveal>
            <Stagger className="mt-16 grid border-t border-line sm:grid-cols-2 lg:grid-cols-3">
              {t.topics.items.map((item) => (
                <StaggerItem key={item.name} className="border-b border-line py-8 sm:pr-10">
                  <h3 className="font-serif text-2xl text-ink">{item.name}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* PSICOLOGIA NO ECRÃ */}
        <section aria-labelledby="ecra-titulo" className="bg-wine text-cream">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-28">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-cream/80">{t.screen.label}</p>
              <h2 id="ecra-titulo" className="mt-6 font-serif text-4xl italic leading-tight sm:text-5xl">
                {t.screen.title}
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/85">{t.screen.text}</p>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex min-h-12 items-center gap-3 rounded-full bg-cream px-6 font-medium text-wine transition-colors duration-200 hover:bg-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
              >
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
                {t.screen.link} · {site.instagramHandle}
              </a>
            </Reveal>
            <Stagger className="grid grid-cols-2 gap-4">
              {t.screen.examples.map((title, i) => (
                <StaggerItem
                  key={title}
                  className={`flex aspect-[3/4] flex-col justify-between rounded-xl border border-cream/25 bg-wine-dark/60 p-5 ${
                    i % 2 === 1 ? "translate-y-8" : ""
                  }`}
                >
                  <span aria-hidden="true" className="flex gap-1.5">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <span key={k} className="h-2 w-3 rounded-[2px] bg-cream/20" />
                    ))}
                  </span>
                  <span className="font-serif text-2xl italic sm:text-3xl">“{title}”</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
            <Reveal>
              <Label index="04">{t.process.label}</Label>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-ink sm:text-5xl">{t.process.title}</h2>
            </Reveal>
            <Stagger as="ol" className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
              {t.process.steps.map((step, i) => (
                <StaggerItem key={step.title} className="relative">
                  <span className="flex size-14 items-center justify-center rounded-full border border-wine font-serif text-xl italic text-wine">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 font-serif text-2xl text-ink">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* FAQ */}
        <section id="perguntas" className="bg-sand/60">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-32">
            <Reveal>
              <Label index="05">{t.faq.label}</Label>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-ink sm:text-5xl">{t.faq.title}</h2>
            </Reveal>
            <Reveal delay={0.15} className="border-t border-line">
              {t.faq.items.map((item) => (
                <details key={item.q} className="group border-b border-line">
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 font-serif text-xl text-ink transition-colors duration-200 hover:text-wine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span
                      aria-hidden="true"
                      className="flex size-8 shrink-0 items-center justify-center rounded-full border border-line text-wine transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-6 pr-12 leading-relaxed text-muted">{item.a}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="relative overflow-hidden bg-ink text-cream">
          <Reveal className="mx-auto max-w-4xl px-5 py-28 text-center sm:px-8 lg:py-36">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">{t.contact.label}</p>
            <h2 className="mt-6 font-serif text-5xl italic leading-tight sm:text-7xl">{t.contact.title}</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/75">{t.contact.text}</p>
            <a
              href={mail}
              className="mt-10 inline-flex min-h-14 items-center gap-3 rounded-full bg-cream px-8 text-lg font-medium text-wine transition-colors duration-200 hover:bg-gold hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              {t.contact.button}
            </a>
            <p className="mt-5">
              <a href={mail} className="text-cream/80 underline decoration-cream/30 underline-offset-4 hover:text-gold">
                {site.email}
              </a>
            </p>
            <p className="mt-12 text-sm text-cream/60">{t.contact.note}</p>
          </Reveal>
        </section>
      </main>

      <footer className="bg-ink text-cream/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-cream/10 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            <span className="font-serif text-lg italic text-cream">{site.name}.</span> © {t.footer.rights}
          </p>
          <p>{t.footer.disclaimer}</p>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            {site.instagramHandle}
          </a>
        </div>
      </footer>
    </MotionProvider>
  );
}
