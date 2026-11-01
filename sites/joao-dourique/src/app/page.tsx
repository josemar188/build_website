import Image from "next/image";
import { HeroText, MotionProvider, Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { footer, hero, house, kitchen, menu, nav, reservation, site } from "@/content";
import bitoque from "../../public/bitoque.webp";
import petiscos from "../../public/petiscos.webp";

const photos = { petiscos, bitoque };

/** Linha dourada fina com losango ao centro. */
function Ornament({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`flex items-center gap-3 text-gold ${className}`}>
      <span className="h-px w-12 bg-gold/60" />
      <span className="size-1.5 rotate-45 border border-gold" />
      <span className="h-px w-12 bg-gold/60" />
    </span>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-normal uppercase tracking-[0.45em] text-gold">{children}</p>;
}

function Star() {
  return (
    <svg viewBox="0 0 20 20" className="size-4 fill-gold" aria-hidden="true">
      <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
    </svg>
  );
}

const btnGold =
  "inline-flex min-h-12 items-center justify-center bg-gold px-8 text-[13px] font-normal uppercase tracking-[0.25em] text-night transition-colors duration-300 hover:bg-gold-soft";
const btnLine =
  "inline-flex min-h-12 items-center justify-center border border-cream/40 px-8 text-[13px] font-normal uppercase tracking-[0.25em] text-cream transition-colors duration-300 hover:border-gold hover:text-gold";

export default function Home() {
  return (
    <MotionProvider>
      <a
        href="#conteudo"
        className="sr-only z-[60] bg-gold px-4 py-2 text-night focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Saltar para o conteúdo
      </a>
      <SiteHeader />

      <main id="conteudo">
        {/* INTRODUÇÃO IMERSIVA */}
        <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden">
          <Image
            src={petiscos}
            alt={hero.photoAlt}
            fill
            preload
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-[50%_60%]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-night/80 via-night/55 to-night" />
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgb(11_10_8/0.65)_75%)]" />

          <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-32 text-center lg:px-8 lg:pb-24">
            <HeroText>
              <Eyebrow>{hero.eyebrow}</Eyebrow>
            </HeroText>
            <HeroText delay={0.15}>
              <h1 className="mt-6 font-serif text-[3.4rem] font-normal italic leading-[0.95] text-cream sm:text-7xl lg:text-[7.5rem]">
                {hero.title}
              </h1>
            </HeroText>
            <HeroText delay={0.3}>
              <Ornament className="mt-8 justify-center" />
              <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream/85">{hero.lead}</p>
            </HeroText>
            <HeroText delay={0.45} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={site.phoneHref} className={`${btnGold} w-64 sm:w-auto`}>
                {hero.primary}
              </a>
              <a href="#ementa" className={`${btnLine} w-64 sm:w-auto`}>
                {hero.secondary}
              </a>
            </HeroText>
            <HeroText delay={0.7}>
              <p className="mt-14 inline-flex items-center gap-2 text-sm text-cream/75">
                <span className="flex">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </span>
                <span>
                  <span className="text-cream">{site.rating}</span> no Google · {site.reviews} avaliações
                </span>
              </p>
            </HeroText>
          </div>
        </section>

        {/* A CASA */}
        <section id="casa" className="border-t border-line bg-night">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 py-28 lg:grid-cols-[1fr_1fr] lg:gap-24 lg:px-8 lg:py-36">
            <Reveal>
              <Eyebrow>{house.label}</Eyebrow>
              <h2 className="mt-6 font-serif text-5xl font-normal leading-[1.05] text-cream lg:text-6xl">{house.title}</h2>
              <Ornament className="mt-8" />
            </Reveal>
            <Reveal delay={0.15}>
              {house.paragraphs.map((p) => (
                <p key={p.slice(0, 20)} className="mb-6 text-lg leading-[1.8] text-muted">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
          <Stagger as="div" className="mx-auto grid max-w-6xl border-t border-line px-6 sm:grid-cols-3 lg:px-8">
            {house.highlights.map((h) => (
              <StaggerItem as="div" key={h.title} className="border-b border-line py-10 text-center sm:border-b-0 sm:border-r sm:last:border-r-0">
                <p className="font-serif text-3xl italic text-gold-soft">{h.title}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted">{h.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* A COZINHA */}
        <section id="cozinha" className="bg-coal">
          <div className="mx-auto max-w-6xl px-6 py-28 lg:px-8 lg:py-36">
            <Reveal className="mx-auto max-w-2xl text-center">
              <Eyebrow>{kitchen.label}</Eyebrow>
              <h2 className="mt-6 font-serif text-5xl font-normal italic leading-[1.05] text-cream lg:text-7xl">{kitchen.title}</h2>
              <Ornament className="mt-8 justify-center" />
              <p className="mt-8 text-lg leading-relaxed text-muted">{kitchen.lead}</p>
            </Reveal>

            <Stagger as="div" className="mt-20 grid gap-10 md:grid-cols-2 md:gap-8">
              {kitchen.items.map((item, i) => (
                <StaggerItem as="div" key={item.title} className={i === 1 ? "md:mt-24" : ""}>
                  <figure>
                    <div className="group relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={photos[item.image as keyof typeof photos]}
                        alt={item.alt}
                        fill
                        placeholder="blur"
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                      />
                      <div aria-hidden="true" className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
                    </div>
                    <figcaption className="mt-6">
                      <p className="font-serif text-3xl italic text-cream">{item.title}</p>
                      <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
                    </figcaption>
                  </figure>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal>
              <p className="mx-auto mt-20 max-w-xl text-center font-serif text-2xl italic leading-snug text-gold-soft">
                “{kitchen.fish}”
              </p>
            </Reveal>
          </div>
        </section>

        {/* A EMENTA */}
        <section id="ementa" className="border-y border-line bg-night">
          <div className="mx-auto max-w-5xl px-6 py-28 lg:px-8 lg:py-36">
            <Reveal className="text-center">
              <Eyebrow>{menu.label}</Eyebrow>
              <h2 className="mt-6 font-serif text-5xl font-normal leading-[1.05] text-cream lg:text-6xl">{menu.title}</h2>
              <Ornament className="mt-8 justify-center" />
            </Reveal>

            <div className="mt-20 grid gap-x-16 gap-y-16 md:grid-cols-2">
              {menu.categories.map((cat) => (
                <Reveal key={cat.name}>
                  <h3 className="border-b border-line pb-4 text-center font-serif text-3xl italic text-gold md:text-left">{cat.name}</h3>
                  <ul className="mt-6 space-y-6">
                    {cat.items.map((item) => (
                      <li key={item.name}>
                        <div className="flex items-baseline gap-3">
                          <span className="font-serif text-xl text-cream">{item.name}</span>
                          {item.price ? (
                            <>
                              <span aria-hidden="true" className="flex-1 border-b border-dotted border-gold/30" />
                              <span className="font-serif text-xl text-gold-soft">{item.price}</span>
                            </>
                          ) : null}
                        </div>
                        {item.description && <p className="mt-1 text-sm text-muted">{item.description}</p>}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>

            <p className="mt-16 text-center text-sm italic text-muted">{menu.note}</p>
          </div>
        </section>

        {/* RESERVA */}
        <section aria-labelledby="reserva-titulo" className="relative overflow-hidden bg-coal">
          <Image src={bitoque} alt="" fill sizes="100vw" className="object-cover opacity-20" aria-hidden="true" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-coal via-coal/70 to-coal" />
          <Reveal className="relative mx-auto max-w-3xl px-6 py-32 text-center lg:py-40">
            <Eyebrow>{reservation.label}</Eyebrow>
            <h2 id="reserva-titulo" className="mt-6 font-serif text-5xl font-normal italic leading-[1.05] text-cream lg:text-7xl">
              {reservation.title}
            </h2>
            <Ornament className="mt-8 justify-center" />
            <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-muted">{reservation.text}</p>
            <a href={site.phoneHref} className="mt-10 block font-serif text-5xl text-gold-soft transition-colors duration-300 hover:text-gold lg:text-6xl">
              {site.phoneDisplay}
            </a>
            <a href={site.phoneHref} className={`${btnGold} mt-8`}>
              {reservation.button}
            </a>
          </Reveal>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer id="contactos" className="bg-night">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">{site.kind}</p>
            <p className="mt-1 font-serif text-3xl italic text-cream">{site.name}</p>
            <p className="mt-4 text-sm text-muted">{site.priceRange}</p>
          </div>

          <div>
            <h2 className="text-[11px] uppercase tracking-[0.35em] text-gold">{footer.findTitle}</h2>
            <address className="mt-5 not-italic leading-relaxed text-cream/85">
              {site.address}
              <br />
              {site.postal}
            </address>
            <a href={site.mapsHref} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold">
              {footer.directions}
            </a>
          </div>

          <div>
            <h2 className="text-[11px] uppercase tracking-[0.35em] text-gold">{footer.hoursTitle}</h2>
            <dl className="mt-5 space-y-2 text-cream/85">
              {site.hours.map((h) => (
                <div key={h.label} className="flex gap-3">
                  <dt className="w-16 text-muted">{h.label}</dt>
                  <dd>{h.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="text-[11px] uppercase tracking-[0.35em] text-gold">{footer.contactTitle}</h2>
            <a href={site.phoneHref} className="mt-5 block font-serif text-2xl text-cream hover:text-gold">
              {site.phoneDisplay}
            </a>
            <ul className="mt-4 flex gap-4 text-sm">
              {site.instagram && (
                <li>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold">
                    Instagram
                  </a>
                </li>
              )}
              {site.facebook && (
                <li>
                  <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold">
                    Facebook
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="border-t border-line">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-muted sm:flex-row lg:px-8">
            <p>
              © {site.kind} {site.name} · {footer.rights}
            </p>
            <nav aria-label="Rodapé">
              <ul className="flex gap-6">
                {nav.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-gold">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </MotionProvider>
  );
}
