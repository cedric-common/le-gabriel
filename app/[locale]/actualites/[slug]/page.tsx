import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { FadeIn } from '../../../components/FadeIn'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { notFound } from 'next/navigation'
import { ARTICLE_SLUGS, type ArticleSlug } from '@/lib/articles'
import { routing } from '@/i18n/routing'
import { localeAlternates } from '@/lib/seo'

const images: Record<string, string> = {
  'ouverture-appart-hotel-solenzara': '/photos/solenzara.jpg',
  'guide-plages-solenzara': '/photos/plage-canella.jpg',
  'nouvelle-salle-sport': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80',
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ARTICLE_SLUGS.map((slug) => ({ locale, slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  if (!ARTICLE_SLUGS.includes(slug as ArticleSlug)) {
    return { title: 'Le Gabriel' }
  }
  const t = await getTranslations({ locale, namespace: `articles.${slug}` })
  return {
    title: `${t('title')} · Le Gabriel`,
    description: t('excerpt'),
    alternates: localeAlternates(locale, `/actualites/${slug}`),
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  if (!ARTICLE_SLUGS.includes(slug as ArticleSlug)) notFound()

  const t = await getTranslations(`articles.${slug}`)
  const tn = await getTranslations('news')
  const ta = await getTranslations('articles')
  const content = t.raw('content') as string[]
  const related = ARTICLE_SLUGS.filter((s) => s !== slug).slice(0, 2)

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src={images[slug]} alt="" fill unoptimized sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0A]/80 via-[#0D0D0A]/30 to-transparent" />
          </div>
          <div className="relative z-10 w-full pb-16 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-4 text-[0.6rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] text-white/70">
              <span>{t('category')}</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>{t('date')}</span>
            </div>
            <h1 className="max-w-4xl text-3xl md:text-5xl font-[family-name:var(--font-cormorant)] font-light text-white leading-[0.95] tracking-[0.08em] uppercase">
              {t('title')}
            </h1>
          </div>
        </section>

        <article className="bg-[#FAF8F3] py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            {content.map((paragraph, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <p className="text-lg md:text-xl font-[family-name:var(--font-cormorant)] text-[#1A1A14]/80 font-light leading-relaxed mb-6">{paragraph}</p>
              </FadeIn>
            ))}
          </div>
        </article>

        {related.length > 0 && (
          <aside className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <FadeIn>
                <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] uppercase tracking-wide mb-10">{tn('related')}</h2>
              </FadeIn>
              <div className="grid md:grid-cols-2 gap-8">
                {related.map((relatedSlug, i) => (
                  <FadeIn key={relatedSlug} delay={i * 0.08}>
                    <Link href={`/actualites/${relatedSlug}`} className="group flex gap-6 items-start">
                      <div className="relative w-32 h-24 md:w-40 md:h-28 flex-shrink-0 overflow-hidden">
                        <Image src={images[relatedSlug]} alt={ta(`${relatedSlug}.title`)} fill unoptimized sizes="200px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2 text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240]">
                          <span>{ta(`${relatedSlug}.category`)}</span>
                          <span className="w-1 h-1 rounded-full bg-[#6B7240]/40" />
                          <span className="text-[#1A1A14]/50">{ta(`${relatedSlug}.date`)}</span>
                        </div>
                        <h3 className="text-base font-[family-name:var(--font-cormorant)] text-[#1A1A14] uppercase tracking-wide leading-tight group-hover:text-[#6B7240] transition-colors">
                          {ta(`${relatedSlug}.title`)}
                        </h3>
                      </div>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </aside>
        )}
      </main>
      <Footer />
    </>
  )
}
