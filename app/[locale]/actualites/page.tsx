import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { FadeIn } from '../../components/FadeIn'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ARTICLE_SLUGS } from '@/lib/articles'
import { localeAlternates } from '@/lib/seo'

const images: Record<string, string> = {
  'ouverture-appart-hotel-solenzara': '/photos/solenzara.jpg',
  'guide-plages-solenzara': '/photos/plage-canella.jpg',
  'nouvelle-salle-sport': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.news' })
  return { title: t('title'), description: t('description'), alternates: localeAlternates(locale, '/actualites') }
}

export default async function ActualitesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('news')
  const ta = await getTranslations('articles')

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=1920&q=80" alt="" fill unoptimized sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0A]/70 via-[#0D0D0A]/20 to-transparent" />
          </div>
          <div className="relative z-10 w-full pb-16 max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-white/60 text-[0.6rem] tracking-[0.45em] uppercase font-[family-name:var(--font-montserrat)] mb-4">{t('eyebrow')}</p>
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-cormorant)] font-light text-white leading-[0.95] tracking-[0.08em] uppercase">{t('title')}</h1>
          </div>
        </section>

        <section className="bg-[#FAF8F3] py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ARTICLE_SLUGS.map((slug, i) => (
                <FadeIn key={slug} delay={i * 0.08} className="group bg-white">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image src={images[slug]} alt={ta(`${slug}.title`)} fill unoptimized sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240]">
                      <span>{ta(`${slug}.category`)}</span>
                      <span className="w-1 h-1 rounded-full bg-[#6B7240]/40" />
                      <span className="text-[#1A1A14]/50">{ta(`${slug}.date`)}</span>
                    </div>
                    <h2 className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14] uppercase tracking-wide mb-3 leading-tight">{ta(`${slug}.title`)}</h2>
                    <p className="text-sm font-[family-name:var(--font-cormorant)] text-[#1A1A14]/60 font-light leading-relaxed mb-5">{ta(`${slug}.excerpt`)}</p>
                    <Link href={`/actualites/${slug}`} className="inline-flex items-center gap-2 text-[0.6rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14] hover:text-[#6B7240] transition-colors">
                      {t('readMore')}
                      <span aria-hidden="true">-&gt;</span>
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
