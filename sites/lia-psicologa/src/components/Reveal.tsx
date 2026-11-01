"use client";

import { MotionConfig, motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

// Curva de desaceleração suave: elementos "chegam" devagar, sem ressalto.
const ease = [0.22, 1, 0.36, 1] as const;

/** Respeita a preferência do sistema "reduzir movimento" em todo o site. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Distância (px) que o elemento sobe ao aparecer. */
  y?: number;
  as?: "div" | "li" | "section" | "p" | "span";
};

/** Aparece com fade + leve subida quando entra no ecrã (uma só vez). */
export function Reveal({ children, className, delay = 0, y = 24, as = "div" }: RevealProps) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </Tag>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

/** Lista cujos itens aparecem um a seguir ao outro. */
export function Stagger({ children, className, as = "ul" }: { children: ReactNode; className?: string; as?: "ul" | "ol" | "div" }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, className, as = "li" }: { children: ReactNode; className?: string; as?: "li" | "div" }) {
  const Tag = motion[as];
  return (
    <Tag className={className} variants={item}>
      {children}
    </Tag>
  );
}

/** Retrato do topo: revela-se de baixo para cima com um zoom lento. */
export function HeroImageReveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { clipPath: "inset(100% 0% 0% 0%)", scale: 1.08 }}
      animate={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
      transition={{ clipPath: { duration: 1.2, ease, delay: 0.2 }, scale: { duration: 1.8, ease, delay: 0.2 } }}
    >
      {children}
    </motion.div>
  );
}

/** Entrada do texto do topo ao carregar a página (sem esperar pelo scroll). */
export function HeroText({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}
