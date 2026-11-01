import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock,
  House,
  MapPin,
  MessageCircle,
  ShoppingBag,
  Sparkles,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { BlurText } from "./components/BlurText";
import { FadingVideo } from "./components/FadingVideo";
import { hero, nav, services, site, videos, whatsappLink } from "./content";

const icons: Record<string, LucideIcon> = {
  pin: MapPin,
  clock: Clock,
  spark: Sparkles,
  bag: ShoppingBag,
  truck: Truck,
  house: House,
  wrench: Wrench,
};

const enter = (delay: number) => ({
  initial: { opacity: 0, y: 24, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const isExternal = (href: string) => href.startsWith("http");

function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50 flex items-center justify-between px-8 lg:px-16">
      <a
        href="#topo"
        aria-label={site.brand}
        className="liquid-glass flex h-12 w-12 items-center justify-center rounded-full font-heading text-2xl italic"
      >
        {site.logoLetter}
      </a>

      <nav aria-label="Principal" className="liquid-glass hidden items-center gap-1 rounded-full px-1.5 py-1.5 md:flex">
        {nav.map((l) => (
          <a
            key={l.label}
            href={l.href}
            {...(isExternal(l.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="rounded-full px-3 py-2 font-body text-sm font-medium text-white/90 transition-colors duration-200 hover:bg-white/10 hover:text-white"
          >
            {l.label}
          </a>
        ))}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 font-body text-sm font-semibold text-black transition-colors duration-200 hover:bg-white/85"
        >
          {hero.cta}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </nav>

      {/* No telemóvel, o espaço da direita é o botão de WhatsApp */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir orçamento no WhatsApp"
        className="liquid-glass flex h-12 w-12 items-center justify-center rounded-full md:invisible"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative h-screen min-h-[640px] overflow-hidden bg-black">
      <FadingVideo
        src={videos.hero}
        className="absolute left-1/2 top-0 z-0 -translate-x-1/2 object-cover object-top"
        style={{ width: "120%", height: "120%" }}
      />
      {/* escurece o fundo para o texto ler bem */}
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

      <div className="relative z-10 flex h-full flex-col">
        <Navbar />

        <main className="flex flex-1 flex-col items-center justify-center px-4 pt-24 text-center">
          <motion.div {...enter(0.4)} className="liquid-glass inline-flex items-center gap-2 rounded-full py-1 pl-1 pr-4">
            <span className="rounded-full bg-white px-2.5 py-0.5 font-body text-xs font-semibold text-black">{hero.badgeTag}</span>
            <span className="font-body text-sm text-white/90">{hero.badge}</span>
          </motion.div>

          <div className="mt-6 max-w-3xl">
            <BlurText
              text={hero.title}
              className="font-heading text-6xl italic leading-[0.95] tracking-[-0.03em] md:text-7xl lg:text-[5.5rem]"
            />
          </div>

          <motion.p {...enter(1.1)} className="mt-6 max-w-xl font-body text-lg font-light leading-relaxed text-white/80">
            {hero.lead}
          </motion.p>

          <motion.div {...enter(1.3)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 font-body font-semibold text-black transition-colors duration-200 hover:bg-white/85"
            >
              {hero.primary}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#servicos"
              className="liquid-glass-strong inline-flex min-h-12 items-center rounded-full px-6 font-body font-medium text-white transition-colors duration-200 hover:bg-white/10"
            >
              {hero.secondary}
            </a>
          </motion.div>
        </main>

        <motion.ul
          {...enter(1.6)}
          className="liquid-glass mx-auto mb-8 hidden w-fit items-center gap-8 rounded-full px-6 py-3 sm:flex"
        >
          {hero.stats.map((s) => {
            const Icon = icons[s.icon];
            return (
              <li key={s.label} className="flex items-center gap-2 font-body text-sm text-white/80">
                <Icon className="h-4 w-4" aria-hidden="true" />
                {s.label}
              </li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="relative min-h-screen overflow-hidden bg-black py-24">
      {videos.services ? (
        <FadingVideo
          src={videos.services}
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-60"
        />
      ) : (
        <div aria-hidden="true" className="absolute inset-0 z-0">
          <div className="absolute -left-40 top-10 h-[36rem] w-[36rem] rounded-full bg-emerald-500/20 blur-[140px]" />
          <div className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-orange-500/15 blur-[140px]" />
        </div>
      )}
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-black/40" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-12rem)] max-w-6xl flex-col justify-center px-6 lg:px-8">
        <div className="text-center">
          <p className="liquid-glass mx-auto inline-flex rounded-full px-4 py-1.5 font-body text-xs font-medium uppercase tracking-[0.2em] text-white/80">
            {services.label}
          </p>
          <BlurText
            as="h2"
            text={services.title}
            className="mt-6 font-heading text-5xl italic leading-[0.95] tracking-[-0.03em] md:text-6xl lg:text-7xl"
          />
          <p className="mx-auto mt-5 max-w-xl font-body text-lg font-light text-white/80">{services.lead}</p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="liquid-glass-strong flex flex-col rounded-3xl p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="liquid-glass flex h-11 w-11 items-center justify-center rounded-full">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-body text-sm text-white/50">0{i + 1}</span>
                </div>
                <h3 className="mt-8 font-heading text-3xl italic tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-2 font-body font-light leading-relaxed text-white/80">{item.text}</p>
              </motion.li>
            );
          })}
        </ul>

        <motion.div
          id="zona"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="liquid-glass mt-6 flex flex-col gap-5 rounded-3xl p-6 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <p className="flex items-center gap-2 font-body text-sm font-medium text-white/90">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {services.areaTitle}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {services.area.map((place) => (
                <li key={place} className="rounded-full bg-white/5 px-3 py-1 font-body text-sm text-white/80">
                  {place}
                </li>
              ))}
            </ul>
          </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 font-body font-semibold text-black transition-colors duration-200 hover:bg-white/85"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {services.cta}
          </a>
        </motion.div>

        <p className="mt-10 text-center font-body text-xs text-white/40">{services.disclaimer}</p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <Services />
    </>
  );
}
