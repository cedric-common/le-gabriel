import type { MetadataRoute } from "next";

// Pas de ligne Sitemap : le sitemap reste accessible mais n'est pas annoncé.
// Pour réactiver l'indexation quand le vrai nom de domaine sera en place,
// retirer `disallow: "/"` et, si besoin, ajouter `sitemap`.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
