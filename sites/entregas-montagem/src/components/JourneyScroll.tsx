"use client";

// Animação controlada pelo scroll: loja → carrinha → estrada → casa → montagem.
// Tudo é desenhado em SVG e movido pelo progresso do scroll (Motion).

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef, useState } from "react";
import { journey } from "@/content";
import { VAN_WHEELS, VanBody } from "./Van";

// ---------- linha temporal (0 → 1 ao longo da secção) ----------
const T = {
  loadEnd: 0.22, // fim do carregamento
  driveEnd: 0.62, // chegada a casa
  unloadEnd: 0.78, // fim da descarga
  // de 0.78 a 1: montagem
};

const VAN_START = 290;
const VAN_END = 2560;
const CAMERA_MAX = 2000; // mundo com 3000 de largura, câmara com 1000
const STORE_DOOR = 250;
const HOUSE_DOOR = 2510;
const GROUND = 400;

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a));
const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const vanX = (p: number) => lerp(VAN_START, VAN_END, ease(seg(p, T.loadEnd, T.driveEnd)));

// ---------- peças do cenário ----------
const sx = { transformBox: "fill-box", transformOrigin: "center" } as const;

function Store() {
  return (
    <g>
      <rect x="60" y="220" width="380" height="180" fill="#3d5a6c" />
      <rect x="60" y="200" width="380" height="26" fill="#2f4858" />
      <rect x="150" y="164" width="200" height="44" rx="6" fill="var(--color-orange)" />
      <text x="250" y="195" textAnchor="middle" fontSize="26" fontWeight="800" fill="#fff" fontFamily="var(--font-display)">
        MÓVEIS
      </text>
      {/* toldo */}
      {Array.from({ length: 10 }).map((_, i) => (
        <rect key={i} x={70 + i * 36} y="238" width="36" height="20" fill={i % 2 ? "#fff" : "var(--color-orange)"} />
      ))}
      <rect x="80" y="276" width="110" height="80" rx="4" fill="#a9d6cf" opacity="0.85" />
      <rect x="310" y="276" width="110" height="80" rx="4" fill="#a9d6cf" opacity="0.85" />
      <rect x={STORE_DOOR - 30} y="320" width="60" height="80" fill="#cfe9e4" stroke="#2f4858" strokeWidth="4" />
      <path d={`M${STORE_DOOR} 320v80`} stroke="#2f4858" strokeWidth="3" />
    </g>
  );
}

function House() {
  return (
    <g>
      <rect x="2380" y="250" width="380" height="150" fill="#f3e3c3" />
      <rect x="2380" y="250" width="380" height="14" fill="#2f6f8f" opacity="0.25" />
      {/* azulejos */}
      {Array.from({ length: 19 }).map((_, i) => (
        <rect key={i} x={2380 + i * 20} y="372" width="18" height="18" fill={i % 2 ? "#2f6f8f" : "#dbe9f0"} opacity="0.55" />
      ))}
      <path d="M2360 252l210-90 210 90z" fill="#c2410c" />
      <rect x="2610" y="290" width="70" height="56" fill="#cfe9e4" stroke="#fff" strokeWidth="5" />
      <rect x="2600" y="290" width="10" height="56" fill="var(--color-leaf)" />
      <rect x="2680" y="290" width="10" height="56" fill="var(--color-leaf)" />
      <rect x={HOUSE_DOOR - 32} y="306" width="64" height="94" rx="32" ry="0" fill="var(--color-forest)" />
      <circle cx={HOUSE_DOOR + 18} cy="356" r="4" fill="#f6c14b" />
      <rect x="2420" y="370" width="26" height="30" rx="4" fill="var(--color-orange)" />
      <circle cx="2433" cy="356" r="18" fill="var(--color-leaf)" />
      <rect x="2560" y="200" width="40" height="34" fill="#cfe9e4" stroke="#fff" strokeWidth="4" />
    </g>
  );
}

function Tree({ x }: { x: number }) {
  return (
    <g>
      <rect x={x - 5} y={GROUND - 50} width="10" height="50" fill="#7b5a3c" />
      <circle cx={x} cy={GROUND - 70} r="30" fill="var(--color-leaf)" />
      <circle cx={x - 18} cy={GROUND - 55} r="20" fill="#4a9c85" />
    </g>
  );
}

/** Camada do fundo (move-se mais devagar): colinas, prédios e uma ponte vermelha. */
function Skyline() {
  return (
    <g>
      <path d="M0 330 Q200 250 420 310 T900 300 T1400 290 T1900 320 V420 H0z" fill="#e6e8e7" />
      {[60, 140, 520, 600, 1500, 1590, 1680].map((x, i) => (
        <rect key={x} x={x} y={260 - (i % 3) * 30} width="60" height={160 + (i % 3) * 30} fill="#d9dcdb" />
      ))}
      {/* ponte suspensa */}
      <g stroke="#b5452f" fill="none">
        <path d="M820 205v200M1180 205v200" strokeWidth="12" />
        <path d="M700 330h600" strokeWidth="10" />
        <path d="M700 300 Q760 330 820 210 Q1000 330 1180 210 Q1240 330 1300 300" strokeWidth="4" />
        {[860, 900, 940, 980, 1020, 1060, 1100, 1140].map((x) => (
          <path key={x} d={`M${x} ${x < 1000 ? 250 + (x - 860) * 0.3 : 250 + (1140 - x) * 0.3}V330`} strokeWidth="2" opacity="0.7" />
        ))}
      </g>
    </g>
  );
}

function Van({ x, wheel, bob }: { x: MotionValue<number>; wheel: MotionValue<number>; bob: MotionValue<number> }) {
  return (
    <motion.g style={{ x, y: 350 }}>
      <ellipse cx="112" cy="121" rx="114" ry="6" fill="#000" opacity="0.12" />
      <motion.g style={{ y: bob }}>
        <VanBody />
      </motion.g>
      {VAN_WHEELS.map((cx) => (
        <g key={cx} transform={`translate(${cx} 100)`}>
          <circle r="20" fill="#1f1f1f" />
          <motion.g style={{ rotate: wheel, ...sx }}>
            <circle r="10" fill="#d6d6d6" />
            <rect x="-1.5" y="-10" width="3" height="20" fill="#9a9a9a" />
            <circle r="4" fill="#a9a9a9" />
          </motion.g>
        </g>
      ))}
    </motion.g>
  );
}

function Box({ p, i }: { p: MotionValue<number>; i: number }) {
  const loadA = 0.03 + i * 0.05;
  const loadB = loadA + 0.08;
  const unA = 0.63 + i * 0.04;
  const unB = unA + 0.07;
  const fromX = STORE_DOOR - 20 + i * 4;
  const vanBackStart = VAN_START + 6;
  const vanBackEnd = VAN_END + 6;
  const doorX = HOUSE_DOOR - 60 + i * 34;

  const x = useTransform(p, (v) => {
    if (v < loadA) return fromX;
    if (v < loadB) return lerp(fromX, vanBackStart, ease(seg(v, loadA, loadB)));
    if (v < unA) return vanBackStart;
    if (v < unB) return lerp(vanBackEnd, doorX, ease(seg(v, unA, unB)));
    return doorX;
  });
  const y = useTransform(p, (v) => {
    const hop = (t: number) => Math.sin(t * Math.PI) * 34;
    if (v >= loadA && v < loadB) return GROUND - 28 - hop(seg(v, loadA, loadB)) - 10 * seg(v, loadA, loadB);
    if (v >= unA && v < unB) return GROUND - 38 - hop(seg(v, unA, unB)) + 10 * seg(v, unA, unB);
    return GROUND - 28;
  });
  const opacity = useTransform(p, (v) => {
    if (v < loadB - 0.01) return 1;
    if (v < unA) return 0;
    if (v < 0.8) return 1;
    return clamp(1 - seg(v, 0.8, 0.84));
  });

  return (
    <motion.g style={{ x, y, opacity }}>
      <rect width="30" height="26" rx="2" fill="#d9ad74" />
      <rect width="30" height="6" fill="#b98a52" />
      <rect x="12" width="6" height="26" fill="#e8c897" opacity="0.8" />
    </motion.g>
  );
}

/** Painel "dentro de casa": a caixa transforma-se num roupeiro montado. */
function Assembly({ p }: { p: MotionValue<number> }) {
  const opacity = useTransform(p, [0.76, 0.8], [0, 1]);
  const backdrop = useTransform(p, [0.76, 0.8], [0, 0.35]);
  const scale = useTransform(p, [0.76, 0.82], [0.92, 1]);
  const boxOpacity = useTransform(p, [0.82, 0.88], [1, 0]);
  const wardrobe = useTransform(p, [0.84, 0.94], [0, 1]);
  const doors = useTransform(p, [0.9, 0.95], [0, 1]);
  const wrench = useTransform(p, [0.8, 0.96], [-30, 330]);
  const check = useTransform(p, [0.95, 0.98], [0, 1]);

  return (
    <>
    <motion.rect width="1000" height="560" fill="var(--color-forest)" style={{ opacity: backdrop }} />
    <motion.g style={{ opacity, scale, ...sx }}>
      <clipPath id="sala">
        <rect x="250" y="60" width="500" height="380" rx="28" />
      </clipPath>
      <g clipPath="url(#sala)">
      <rect x="250" y="60" width="500" height="380" fill="#fdfcf8" />
      <rect x="250" y="340" width="500" height="100" fill="#eadfca" />
      <path d="M250 340h500" stroke="var(--color-line)" strokeWidth="3" />
      {/* quadro e janela */}
      <rect x="290" y="110" width="90" height="70" rx="4" fill="#cfe9e4" stroke="#fff" strokeWidth="6" />
      <rect x="600" y="120" width="56" height="44" rx="3" fill="var(--color-orange-soft)" stroke="#d9ad74" strokeWidth="4" />

      {/* caixa fechada */}
      <motion.g style={{ opacity: boxOpacity }}>
        <rect x="430" y="270" width="140" height="70" rx="4" fill="#d9ad74" />
        <rect x="430" y="270" width="140" height="14" fill="#b98a52" />
        <rect x="490" y="270" width="20" height="70" fill="#e8c897" opacity="0.8" />
      </motion.g>

      {/* roupeiro a crescer de baixo para cima */}
      <motion.g style={{ scaleY: wardrobe, transformBox: "fill-box", transformOrigin: "bottom" }}>
        <rect x="425" y="150" width="150" height="190" rx="4" fill="#fff" stroke="var(--color-line)" strokeWidth="3" />
        <rect x="419" y="142" width="162" height="12" rx="3" fill="#c99a6b" />
      </motion.g>
      <motion.g style={{ opacity: doors }}>
        <path d="M500 156v180" stroke="var(--color-line)" strokeWidth="3" />
        <rect x="488" y="230" width="5" height="34" rx="2" fill="#a97b4f" />
        <rect x="507" y="230" width="5" height="34" rx="2" fill="#a97b4f" />
      </motion.g>

      {/* ferramenta */}
      <motion.g style={{ x: 640, y: 300, rotate: wrench, ...sx, opacity: boxOpacity }}>
        <rect x="-4" y="-26" width="8" height="40" rx="3" fill="var(--color-orange)" />
        <circle cy="-28" r="10" fill="none" stroke="var(--color-orange)" strokeWidth="7" />
      </motion.g>

      {/* visto final */}
      <motion.g style={{ opacity: check, scale: check, ...sx }}>
        <circle cx="640" cy="180" r="34" fill="var(--color-leaf)" />
        <path d="M624 181l11 11 22-24" stroke="#fff" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
      </g>
      <rect x="250" y="60" width="500" height="380" rx="28" fill="none" stroke="#fff" strokeWidth="6" />
    </motion.g>
    </>
  );
}

function Scene({ p }: { p: MotionValue<number> }) {
  const van = useTransform(p, vanX);
  const camera = useTransform(van, (v) => -clamp(v - VAN_START, 0, CAMERA_MAX));
  const far = useTransform(camera, (c) => c * 0.4);
  const wheel = useTransform(van, (v) => v * 2.9);
  const bob = useTransform(van, (v) => (v > VAN_START && v < VAN_END ? Math.sin(v / 18) * 1.6 : 0));

  return (
    <svg viewBox="0 0 1000 560" className="block h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="ceu" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f1f2f2" />
          <stop offset="1" stopColor="var(--color-paper)" />
        </linearGradient>
      </defs>
      <rect width="1000" height="560" fill="url(#ceu)" />
      <circle cx="840" cy="110" r="46" fill="#fde2c8" />

      <motion.g style={{ x: far }}>
        <Skyline />
      </motion.g>

      <motion.g style={{ x: camera }}>
        {/* passeio e estrada */}
        <rect x="0" y={GROUND} width="3000" height="22" fill="#e6e0d2" />
        <rect x="0" y={GROUND + 22} width="3000" height="140" fill="#2e2e2e" />
        {Array.from({ length: 38 }).map((_, i) => (
          <rect key={i} x={i * 80} y={GROUND + 82} width="40" height="6" rx="3" fill="#fff" opacity="0.65" />
        ))}
        {[620, 980, 1340, 1720, 2120].map((x) => (
          <Tree key={x} x={x} />
        ))}
        <Store />
        <House />
        {[0, 1, 2].map((i) => (
          <Box key={i} p={p} i={i} />
        ))}
        <Van x={van} wheel={wheel} bob={bob} />
      </motion.g>

      <Assembly p={p} />
    </svg>
  );
}

function stepFor(v: number) {
  if (v < T.loadEnd) return 0;
  if (v < T.driveEnd) return 1;
  if (v < T.unloadEnd) return 2;
  return 3;
}

export function JourneyScroll() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });
  // Com "reduzir movimento": mostra uma imagem fixa (carrinha a caminho)
  const still = useMotionValue(0.45);
  const [step, setStep] = useState(0);
  useMotionValueEvent(p, "change", (v) => {
    const s = stepFor(v);
    setStep((prev) => (prev === s ? prev : s));
  });
  const bar = useTransform(p, (v) => `${clamp(v) * 100}%`);

  const steps = (
    <ol className="grid grid-cols-4 gap-2 sm:gap-4">
      {journey.steps.map((s, i) => {
        const active = reduce || i === step;
        const done = !reduce && i < step;
        return (
          <li key={s.title} aria-current={!reduce && i === step ? "step" : undefined} className="min-w-0">
            <div className="flex items-center gap-2">
              <span
                className={`flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300 ${
                  active ? "bg-green text-white" : done ? "bg-mint text-green-dark" : "bg-card text-muted ring-1 ring-line"
                }`}
              >
                {i + 1}
              </span>
              <span className={`hidden truncate font-display text-base font-bold md:inline ${active ? "text-forest" : "text-muted"}`}>
                {s.title}
              </span>
            </div>
            <p className={`mt-2 hidden text-sm leading-snug text-muted transition-opacity duration-300 md:block ${active ? "opacity-100" : "opacity-50"}`}>
              {s.text}
            </p>
          </li>
        );
      })}
    </ol>
  );

  return (
    <section ref={ref} id="viagem" aria-labelledby="viagem-titulo" className={reduce ? "" : "relative h-[420vh]"}>
      <div className={reduce ? "py-20" : "sticky top-0 flex h-dvh flex-col justify-center pt-20 lg:justify-start"}>
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <p className="inline-flex rounded-full bg-mint px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-green-dark">
            {journey.label}
          </p>
          <h2 id="viagem-titulo" className="mt-3 font-display text-2xl font-semibold tracking-tight text-forest sm:text-4xl">
            {journey.title}
          </h2>
        </div>

        <div className="relative mx-auto my-4 w-full max-w-6xl px-5 sm:px-8 lg:min-h-0 lg:flex-1">
          <div className="aspect-[1000/560] overflow-hidden rounded-3xl ring-1 ring-line lg:aspect-auto lg:h-full">
            <Scene p={reduce ? still : p} />
          </div>
          {!reduce && (
            <p className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 rounded-full sm:block bg-forest/85 px-4 py-2 text-xs font-medium text-white sm:text-sm">
              {journey.hint}
            </p>
          )}
        </div>

        <div className="mx-auto w-full max-w-6xl px-5 pb-6 sm:px-8">
          {!reduce && (
            <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-line">
              <motion.div className="h-full rounded-full bg-green" style={{ width: bar }} />
            </div>
          )}
          {steps}
          {!reduce && (
            <div className="mt-5 min-h-28 md:hidden" aria-live="polite">
              <p className="font-display text-2xl font-semibold text-forest">
                {step + 1}. {journey.steps[step].title}
              </p>
              <p className="mt-2 text-base leading-relaxed text-muted">{journey.steps[step].text}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
