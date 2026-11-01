import Image from "next/image";
import { HeroImageReveal, HeroText, MotionProvider, Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { AssemblyIllustration, DeliveryIllustration, OrderIllustration } from "@/components/Illustrations";
import { QuoteForm } from "@/components/QuoteForm";
import { SiteHeader } from "@/components/SiteHeader";
import { about, area, faq, footer, hero, process, quickMessage, quote, services, site, whatsappLink } from "@/content";
import portrait from "../../public/retrato.webp";

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] ${
        light ? "bg-white/10 text-mint" : "bg-mint text-green-dark"
      }`}
    >
      {children}
    </p>
  );
}

const h2 = "mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl";
const wa = whatsappLink(quickMessage);

// Ilustração de cada cartão de serviço, pela mesma ordem de services.items
const serviceArt = [
  { Art: DeliveryIllustration, label: "Ilustração de uma carrinha de entregas com caixas e um colchão embrulhado", bg: "" },
  { Art: AssemblyIllustration, label: "Ilustração de uma cómoda a ser montada, com ferramentas e instruções", bg: "" },
  { Art: OrderIllustration, label: "Ilustração de um telemóvel com a rota da entrega, uma carrinha e caixas", bg: "bg-mint" },
];

export default function Home() {
  return (
    <MotionProvider>
      <a
        href="#conteudo"
        className="sr-only z-[60] rounded bg-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Saltar para o conteúdo
      </a>
      <SiteHeader />

      <main id="conteudo">
        {/* HERO */}
        <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-32">
          <div
            aria-hidden="true"
            className="absolute -right-40 -top-40 size-[34rem] rounded-full bg-mint/70 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28">
            <div>
              <HeroText>
                <p className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-sm font-semibold text-green-dark ring-1 ring-line">
                  <Icon name="pin" className="size-4" />
                  {hero.eyebrow}
                </p>
              </HeroText>
              <HeroText delay={0.1}>
                <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-forest text-balance sm:text-6xl">
                  {hero.title} <span className="text-green">{hero.titleAccent}</span>
                </h1>
              </HeroText>
              <HeroText delay={0.22}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{hero.lead}</p>
              </HeroText>
              <HeroText delay={0.34} className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 items-center gap-3 rounded-full bg-whatsapp px-7 text-base font-semibold text-white shadow-lg shadow-whatsapp/25 transition-colors duration-200 hover:bg-green-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                >
                  <Icon name="whatsapp" className="size-6" />
                  {hero.primary}
                </a>
                <a
                  href="#servicos"
                  className="inline-flex min-h-14 items-center gap-2 rounded-full px-5 font-semibold text-forest ring-1 ring-line transition-colors duration-200 hover:bg-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                >
                  {hero.secondary}
                </a>
              </HeroText>
              <HeroText delay={0.46}>
                <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-medium text-ink-soft sm:max-w-lg">
                  {hero.trust.map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-green text-white">
                        <Icon name="check" className="size-3.5" />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </HeroText>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-line">
                <HeroImageReveal className="absolute inset-0">
                  <Image
                    src={portrait}
                    alt={hero.photoAlt}
                    fill
                    preload
                    placeholder="blur"
                    sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 90vw"
                    className="object-cover object-[60%_30%]"
                  />
                </HeroImageReveal>
              </div>
              <HeroText delay={0.9} className="absolute -bottom-6 left-4 sm:-left-6">
                <div className="flex items-center gap-3 rounded-2xl bg-card px-5 py-4 shadow-xl ring-1 ring-line">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-orange-soft text-orange">
                    <Icon name="truck" />
                  </span>
                  <div>
                    <p className="font-display font-bold text-forest">{hero.badge}</p>
                    <p className="text-sm text-muted">Resposta rápida no WhatsApp</p>
                  </div>
                </div>
              </HeroText>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="bg-card">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
            <Reveal className="max-w-2xl">
              <Label>{services.label}</Label>
              <h2 className={`${h2} text-forest`}>{services.title}</h2>
            </Reveal>

            <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
              {services.items.map((s, i) => {
                const featured = "highlight" in s;
                const { Art, label, bg } = serviceArt[i];
                return (
                  <StaggerItem
                    key={s.name}
                    className={`relative flex flex-col rounded-3xl p-8 ring-1 transition-shadow duration-300 hover:shadow-xl ${
                      featured ? "bg-forest text-white ring-forest" : "bg-paper ring-line"
                    }`}
                  >
                    {featured && (
                      <span className="absolute right-6 top-6 z-10 rounded-full bg-orange px-3 py-1 text-xs font-bold text-white">
                        {s.highlight}
                      </span>
                    )}
                    <div className={`-mx-8 -mt-8 overflow-hidden rounded-t-3xl ${bg}`}>
                      <Art label={label} className="block aspect-[3/2] w-full" />
                    </div>
                    <h3 className={`mt-7 flex items-center gap-3 font-display text-2xl font-bold ${featured ? "" : "text-forest"}`}>
                      <Icon name={s.icon} className={`size-6 ${featured ? "text-mint" : "text-green"}`} />
                      {s.name}
                    </h3>
                    <p className={`mt-3 leading-relaxed ${featured ? "text-white/80" : "text-muted"}`}>{s.text}</p>
                    <ul className="mt-6 space-y-2.5 text-sm font-medium">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-2.5">
                          <Icon name="check" className={`size-4 ${featured ? "text-mint" : "text-green"}`} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </StaggerItem>
                );
              })}
            </Stagger>

            <Reveal className="mt-16">
              <h3 className="font-display text-xl font-bold text-forest">{services.extrasTitle}</h3>
              <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                {services.extras.map((x) => (
                  <li key={x.name} className="flex gap-4 rounded-2xl border border-line p-5">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-orange-soft text-orange">
                      <Icon name={x.icon} className="size-6" />
                    </span>
                    <div>
                      <p className="font-semibold text-forest">{x.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{x.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
            <Reveal className="text-center">
              <Label>{process.label}</Label>
              <h2 className={`${h2} text-forest`}>{process.title}</h2>
            </Reveal>
            <Stagger as="ol" className="mt-14 grid gap-6 md:grid-cols-3">
              {process.steps.map((step, i) => (
                <StaggerItem key={step.title} className="relative rounded-3xl bg-card p-8 ring-1 ring-line">
                  <span className="flex size-12 items-center justify-center rounded-full bg-green font-display text-xl font-extrabold text-white">{i + 1}</span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-forest">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal className="mt-12 text-center">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center gap-3 rounded-full bg-whatsapp px-7 font-semibold text-white transition-colors duration-200 hover:bg-green-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
              >
                <Icon name="whatsapp" className="size-6" />
                {hero.primary}
              </a>
            </Reveal>
          </div>
        </section>

        {/* ZONA */}
        <section id="zona" className="bg-forest text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-28">
            <Reveal>
              <Label light>{area.label}</Label>
              <h2 className={h2}>{area.title}</h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80">{area.text}</p>
            </Reveal>
            <Stagger as="div" className="grid gap-5 sm:grid-cols-2">
              {[area.north, area.south].map((side) => (
                <StaggerItem as="div" key={side.name} className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
                  <p className="flex items-center gap-2 font-display text-lg font-bold text-mint">
                    <Icon name="pin" className="size-5" />
                    {side.name}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {side.places.map((p) => (
                      <li key={p} className="rounded-full bg-white/10 px-3 py-1.5 text-sm">
                        {p}
                      </li>
                    ))}
                  </ul>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* SOBRE */}
        <section className="bg-card">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-28">
            <Reveal>
              <Label>{about.label}</Label>
              <h2 className={`${h2} text-forest`}>
                {site.ownerName ? `Olá, sou o ${site.ownerName}.` : about.title}
              </h2>
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 20)} className="mt-5 text-lg leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </Reveal>
            <Stagger as="div" className="grid gap-4">
              {about.stats.map((s) => (
                <StaggerItem as="div" key={s.value} className="flex items-center gap-5 rounded-2xl bg-paper p-6 ring-1 ring-line">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-green text-white">
                    <Icon name="check" className="size-6" />
                  </span>
                  <div>
                    <p className="font-display text-xl font-bold text-forest">{s.value}</p>
                    <p className="text-muted">{s.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* FAQ */}
        <section id="perguntas">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
            <Reveal>
              <Label>{faq.label}</Label>
              <h2 className={`${h2} text-forest`}>{faq.title}</h2>
            </Reveal>
            <Reveal delay={0.1} className="space-y-3">
              {faq.items.map((item) => (
                <details key={item.q} className="group rounded-2xl bg-card ring-1 ring-line open:ring-green/40">
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 px-6 py-4 font-semibold text-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span
                      aria-hidden="true"
                      className="flex size-8 shrink-0 items-center justify-center rounded-full bg-mint text-lg text-green-dark transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="px-6 pb-6 leading-relaxed text-muted">{item.a}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>

        {/* PEDIDO */}
        <section id="pedido" className="relative overflow-hidden bg-mint/60">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
            <Reveal>
              <Label>{quote.label}</Label>
              <h2 className={`${h2} text-forest`}>{quote.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">{quote.text}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <QuoteForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-forest text-white/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 text-sm sm:px-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-lg font-extrabold text-white">{site.brand}</p>
            <p className="mt-1">Entrega e montagem de móveis · {area.title}</p>
          </div>
          <p className="max-w-md md:text-right">{footer.disclaimer}</p>
        </div>
      </footer>

      {/* Botão flutuante de WhatsApp no telemóvel */}
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-whatsapp/30 transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green md:hidden"
      >
        <Icon name="whatsapp" className="size-7" />
      </a>
    </MotionProvider>
  );
}
