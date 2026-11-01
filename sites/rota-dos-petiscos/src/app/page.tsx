import Image, { type StaticImageData } from "next/image";
import { HeroText, MotionProvider, Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { celebrate, drinks, gallery, hero, intro, menu, nav, reviews, site, space, visit } from "@/content";
import batataDoce from "../../public/fotos/batata-doce.webp";
import bitoque from "../../public/fotos/bitoque.webp";
import camarao from "../../public/fotos/camarao.webp";
import cheesecake from "../../public/fotos/cheesecake.webp";
import espetadaCamarao from "../../public/fotos/espetada-camarao.webp";
import espetadaPendurada from "../../public/fotos/espetada-pendurada.webp";
import esplanada from "../../public/fotos/esplanada.webp";
import lulas from "../../public/fotos/lulas.webp";
import moelas from "../../public/fotos/moelas.webp";
import nacoVazia from "../../public/fotos/naco-vazia.webp";
import sangriaCaipirinha from "../../public/fotos/sangria-caipirinha.webp";
import sangriaMaracuja from "../../public/fotos/sangria-maracuja.webp";
import tabuaMarisco from "../../public/fotos/tabua-marisco.webp";

const photos: Record<string, StaticImageData> = {
  "batata-doce": batataDoce,
  bitoque,
  camarao,
  cheesecake,
  "espetada-camarao": espetadaCamarao,
  "espetada-pendurada": espetadaPendurada,
  lulas,
  moelas,
  "naco-vazia": nacoVazia,
  "sangria-caipirinha": sangriaCaipirinha,
  "sangria-maracuja": sangriaMaracuja,
};

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] uppercase tracking-[0.3em] text-muted">{children}</p>;
}

function Stars({ n }: { n: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${n} de 5 estrelas`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="size-3.5 fill-wine" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}

const btnDark =
  "inline-flex min-h-12 items-center justify-center bg-ink px-7 text-[13px] uppercase tracking-[0.18em] text-stone transition-colors duration-300 hover:bg-wine";
const btnLine =
  "inline-flex min-h-12 items-center justify-center border border-ink px-7 text-[13px] uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-ink hover:text-stone";

function DishColumn({ col }: { col: typeof menu.terra }) {
  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-2">
        <Image src={photos[col.image]} alt={col.imageAlt} fill placeholder="blur" sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
      </div>
      <h3 className="mt-8 font-serif text-5xl font-light italic">{col.name}</h3>
      <ul className="mt-6 border-t border-line">
        {col.dishes.map((d) => (
          <li key={d.name} className="border-b border-line py-4">
            <p className="font-serif text-xl">{d.name}</p>
            {d.note && <p className="mt-1 text-sm text-muted">{d.note}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <MotionProvider>
      <a href="#conteudo" className="sr-only z-[60] bg-ink px-4 py-2 text-stone focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Saltar para o conteúdo
      </a>
      <SiteHeader />

      <main id="conteudo">
        {/* ABERTURA */}
        <section id="inicio" className="pt-32 lg:pt-40">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-12 lg:grid-cols-[1.6fr_1fr] lg:items-end lg:px-10 lg:pb-16">
            <HeroText>
              <h1 className="font-serif text-[2.9rem] font-light leading-[1.02] tracking-[-0.02em] sm:text-7xl lg:text-[6.2rem]">
                {hero.title} <em className="text-wine">{hero.titleItalic}</em>
              </h1>
            </HeroText>
            <HeroText delay={0.2} className="lg:pb-3">
              <Label>{hero.kicker}</Label>
              <p className="mt-4 flex items-center gap-3 text-sm text-ink-soft">
                <Stars n={4} />
                {site.rating} no Google · {site.reviews} avaliações
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={site.phoneHref} className={btnDark}>
                  {hero.cta}
                </a>
                <a href="#ementa" className={btnLine}>
                  {menu.label}
                </a>
              </div>
            </HeroText>
          </div>
          <HeroText delay={0.35}>
            <figure className="relative h-[62vh] min-h-[22rem] w-full overflow-hidden lg:h-[78vh]">
              <Image src={esplanada} alt={hero.imageAlt} fill preload placeholder="blur" sizes="100vw" className="object-cover object-[50%_85%] lg:object-[50%_65%]" />
            </figure>
          </HeroText>
        </section>

        {/* A CASA */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
          <div className="grid gap-10 lg:grid-cols-[1fr_2.2fr]">
            <Reveal>
              <Label>{intro.label}</Label>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-serif text-3xl font-light leading-[1.35] text-ink lg:text-[2.6rem]">{intro.text}</p>
              <dl className="mt-14 grid gap-px border-y border-line sm:grid-cols-3">
                {intro.facts.map((f) => (
                  <div key={f.label} className="py-5 sm:pr-6">
                    <dt className="text-[11px] uppercase tracking-[0.25em] text-muted">{f.label}</dt>
                    <dd className="mt-2 font-serif text-xl">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* EMENTA: TERRA & MAR */}
        <section id="ementa" className="border-t border-line bg-paper">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <Reveal className="text-center">
              <Label>{menu.label}</Label>
              <h2 className="mt-5 font-serif text-5xl font-light tracking-[-0.02em] lg:text-7xl">{menu.title}</h2>
            </Reveal>
            <Stagger as="div" className="mt-20 grid gap-16 md:grid-cols-2 md:gap-12 lg:gap-20">
              <StaggerItem as="div">
                <DishColumn col={menu.terra} />
              </StaggerItem>
              <StaggerItem as="div" className="md:mt-32">
                <DishColumn col={menu.mar} />
              </StaggerItem>
            </Stagger>
            <p className="mt-16 text-center text-sm text-muted">{menu.note}</p>
          </div>
        </section>

        {/* PARA CELEBRAR */}
        <section className="grid bg-ink text-stone lg:grid-cols-2">
          <div className="relative min-h-[28rem] lg:min-h-[44rem]">
            <Image src={tabuaMarisco} alt={celebrate.imageAlt} fill placeholder="blur" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <Reveal className="flex flex-col justify-center px-6 py-20 lg:px-20">
            <p className="text-[11px] uppercase tracking-[0.3em] text-stone/60">{celebrate.label}</p>
            <h2 className="mt-6 max-w-lg font-serif text-4xl font-light italic leading-[1.1] lg:text-6xl">{celebrate.title}</h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-stone/75">{celebrate.text}</p>
            <a href={site.phoneHref} className="mt-10 inline-flex min-h-12 w-fit items-center border border-stone/60 px-7 text-[13px] uppercase tracking-[0.18em] transition-colors duration-300 hover:bg-stone hover:text-ink">
              {hero.cta}
            </a>
          </Reveal>
        </section>

        {/* SANGRIAS */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.5fr] lg:items-center">
            <Reveal>
              <Label>{drinks.label}</Label>
              <h2 className="mt-5 font-serif text-5xl font-light leading-[1.05] tracking-[-0.02em] lg:text-6xl">{drinks.title}</h2>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">{drinks.text}</p>
            </Reveal>
            <Stagger as="div" className="grid grid-cols-2 gap-4 lg:gap-6">
              {drinks.items.map((d, i) => (
                <StaggerItem as="div" key={d.name} className={i === 1 ? "mt-16" : ""}>
                  <figure>
                    <div className="relative aspect-[3/4] overflow-hidden bg-stone-2">
                      <Image src={photos[d.image]} alt={d.alt} fill placeholder="blur" sizes="(min-width: 1024px) 28vw, 50vw" className="object-cover" />
                    </div>
                    <figcaption className="mt-3 font-serif text-lg italic text-ink-soft">{d.name}</figcaption>
                  </figure>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* GALERIA */}
        <section className="border-t border-line bg-paper">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
            <Reveal>
              <Label>{gallery.label}</Label>
            </Reveal>
            <Stagger as="div" className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-5">
              {gallery.items.map((g) => (
                <StaggerItem as="div" key={g.image} className="group relative aspect-square overflow-hidden bg-stone-2">
                  <Image
                    src={photos[g.image]}
                    alt={g.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 768px) 30vw, 50vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* O ESPAÇO */}
        <section id="espaco" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-20">
            <Reveal>
              <Label>{space.label}</Label>
              <h2 className="mt-5 font-serif text-5xl font-light leading-[1.05] tracking-[-0.02em] lg:text-6xl">{space.title}</h2>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">{space.text}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-2 lg:aspect-[5/6]">
                <Image src={photos[space.image]} alt={space.imageAlt} fill placeholder="blur" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-top" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* AVALIAÇÕES */}
        <section aria-label="Avaliações de clientes" className="border-y border-line bg-stone-2">
          <Stagger as="div" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 lg:px-10 lg:py-28">
            {reviews.map((r) => (
              <StaggerItem as="div" key={r.author}>
                <figure>
                  <Stars n={r.stars} />
                  <blockquote className="mt-6 font-serif text-3xl font-light italic leading-snug lg:text-4xl">“{r.quote}”</blockquote>
                  <figcaption className="mt-6 text-[11px] uppercase tracking-[0.25em] text-muted">{r.author} · Google</figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* VISITA */}
        <section id="visita" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
          <Reveal>
            <Label>{visit.label}</Label>
            <h2 className="mt-5 max-w-4xl font-serif text-5xl font-light leading-[1.02] tracking-[-0.02em] lg:text-8xl">{visit.title}</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-16 grid gap-10 border-t border-line pt-10 md:grid-cols-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-muted">Onde</p>
              <address className="mt-3 font-serif text-2xl not-italic leading-snug">
                {site.address}
                <br />
                {site.postal}
              </address>
              <a href={site.mapsHref} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block border-b border-ink pb-0.5 text-sm hover:border-wine hover:text-wine">
                {visit.directions}
              </a>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-muted">Horário</p>
              <dl className="mt-3 font-serif text-2xl leading-snug">
                {site.hours.map((h) => (
                  <div key={h.label}>
                    <dt className="inline">{h.label}, </dt>
                    <dd className="inline">{h.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-sm text-muted">{site.priceRange}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-muted">Reservas</p>
              <a href={site.phoneHref} className="mt-3 block font-serif text-2xl hover:text-wine">
                {site.phoneDisplay}
              </a>
              <p className="mt-3 text-sm text-muted">{visit.text}</p>
            </div>
          </Reveal>
          <div className="mt-14">
            <a href={site.phoneHref} className={btnDark}>
              {visit.cta}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-sm text-muted md:flex-row lg:px-10">
          <p>
            <span className="font-serif text-lg text-ink">{site.name}</span> · {site.tagline} · {site.place}
          </p>
          <nav aria-label="Rodapé">
            <ul className="flex gap-6 text-[12px] uppercase tracking-[0.18em]">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </MotionProvider>
  );
}
