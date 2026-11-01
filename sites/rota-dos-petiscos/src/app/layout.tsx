import type { Metadata } from "next";
import { Karla, Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});
const karla = Karla({ variable: "--font-karla", subsets: ["latin"], weight: ["300", "400", "500"], display: "swap" });

export const metadata: Metadata = {
  title: "Rota dos Petiscos · Terra & Mar · Amora",
  description:
    "Petiscos de terra e mar em Amora, Seixal: naco da vazia, espetadas, marisco e as famosas sangrias da casa. Esplanada aquecida, aberto até à meia-noite.",
  openGraph: {
    title: "Rota dos Petiscos · Terra & Mar",
    description: "Petiscos de terra e mar em Amora. Esplanada aquecida e sangrias da casa.",
    images: ["/fotos/esplanada.webp"],
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-PT" className={`${newsreader.variable} ${karla.variable} antialiased`}>
      <body className="min-h-dvh font-sans font-light">{children}</body>
    </html>
  );
}
