import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

// Indexation fermée tant que le site est servi sur l'alias Vercel.
// Pour réactiver l'indexation quand le vrai nom de domaine sera en place :
// 1. Ici : passer robots à { index: true, follow: true } (ou supprimer la clé).
// 2. Dans next.config.ts : retirer le header X-Robots-Tag.
// 3. Dans app/robots.ts : retirer Disallow: / (et éventuellement ajouter la ligne Sitemap).
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
