import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Headings — Plus Jakarta Sans 600/700/800
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

// Body — Inter 400/500/600
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Technical labels / overlines — JetBrains Mono 400/500
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Foco Gestão Visual — Soluções de gestão visual para grandes indústrias",
  description:
    "Da engenharia à instalação, tudo in-house. Quadros Kanban, sinalização industrial, totens e displays sob medida para Continental, FORVIA, Hyundai, Royal Canin e outras grandes indústrias. Limeira, SP. 10+ anos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
