import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "./components/CookieBanner";
import { StickyReserveButton } from "./components/StickyReserveButton";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Le Gabriel | Appart-Hôtel à Solenzara",
  description: "Appart-hôtel à Solenzara en Corse : 12 studios et 11 appartements 1 chambre pour 4 à 5 personnes.",
  keywords: ["appart-hôtel", "Solenzara", "Corse", "location", "vacances", "studio", "appartement"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${montserrat.variable} antialiased`}
      >
        {children}
        <StickyReserveButton />
        <CookieBanner />
      </body>
    </html>
  );
}
