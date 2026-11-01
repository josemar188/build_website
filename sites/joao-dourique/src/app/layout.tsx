import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});
const jost = Jost({ variable: "--font-jost", subsets: ["latin"], weight: ["300", "400", "500"], display: "swap" });

export const metadata: Metadata = {
  title: "Restaurante João d'Ourique · Amora, Seixal",
  description:
    "Cozinha portuguesa de sempre com vista para a Baía do Seixal. Almoço e jantar em Amora. Reservas pelo 212 222 059.",
  openGraph: {
    title: "Restaurante João d'Ourique · Amora, Seixal",
    description: "Cozinha portuguesa de sempre com vista para a Baía do Seixal. Reservas pelo 212 222 059.",
    images: ["/petiscos.webp"],
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-PT" className={`${cormorant.variable} ${jost.variable} antialiased`}>
      <body className="min-h-dvh font-sans font-light">{children}</body>
    </html>
  );
}
