import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { ARTICLE_SLUGS } from "@/lib/articles";
import { getSiteUrl } from "@/lib/site";
import { localeAlternates, localizedPath } from "@/lib/seo";

const paths = [
  "/",
  "/appartements",
  "/services",
  "/salle-de-sport",
  "/region",
  "/actualites",
  "/reserver",
  "/contact",
  "/mentions-legales",
  ...ARTICLE_SLUGS.map((slug) => `/actualites/${slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteUrl();
  return paths.flatMap((path) =>
    routing.locales.map((locale) => {
      const alternates = localeAlternates(locale, path);
      return {
        url: `${site}${localizedPath(locale, path)}`,
        alternates: { languages: alternates.languages },
      };
    })
  );
}
