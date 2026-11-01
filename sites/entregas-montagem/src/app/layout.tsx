import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "Entrega e montagem de móveis IKEA · Grande Lisboa e Setúbal",
  description:
    "Recolha das tuas compras do IKEA, entrega em casa e montagem de móveis em Lisboa, Margem Sul e Setúbal. Orçamento grátis pelo WhatsApp.",
  openGraph: {
    title: "Entrega e montagem de móveis · Grande Lisboa e Setúbal",
    description: "Recolho, entrego e monto os teus móveis. Orçamento grátis pelo WhatsApp.",
    images: ["/retrato.webp"],
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-PT" className={`${inter.variable} ${manrope.variable} antialiased`}>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
