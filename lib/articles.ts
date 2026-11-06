export const ARTICLE_SLUGS = [
  'ouverture-appart-hotel-solenzara',
  'guide-plages-solenzara',
  'nouvelle-salle-sport',
] as const

export type ArticleSlug = (typeof ARTICLE_SLUGS)[number]
