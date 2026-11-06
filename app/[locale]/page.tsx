import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Hero } from '../sections/Hero'
import { FadeIn } from '../components/FadeIn'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { housingCategoryMeta, regionHighlightMeta } from '@/lib/data'
import { ArrowRight } from 'lucide-react'
import { localeAlternates } from '@/lib/seo'

export const revalidate = 60

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.home' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: localeAlternates(locale, '/'),
  }
}

function SectionTitle({ surtitle, title }: { surtitle: string; title: string }) {
  return (
    <div className="mb-14 text-center">
      <p className="text-[0.6rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240] mb-3">
        {surtitle}
      </p>
      <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] tracking-wide uppercase">
        {title}
      </h2>
      <div className="mt-5 flex justify-center">
        <div className="h-px w-16 bg-[#6B7240]/40" />
      </div>
    </div>
  )
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('home')
  const tc = await getTranslations('common')
  const th = await getTranslations('housing')
  const tw = await getTranslations()
  const reviews = t.raw('reviews') as { name: string; text: string }[]
  const wellnessItems = (tw.raw('serviceCategories') as { items: { title: string; description: string }[] }[])[0].items
  const regionItems = tw.raw('regionItems') as { title: string; subtitle: string }[]

  return (
    <>
      <Header />
      <main>
        <Hero
          data={{
            eyebrow: t('heroEyebrow'),
            titleLine1: t('heroTitle1'),
            titleLine2: t('heroTitle2'),
            subtitle: t('heroSubtitle'),
            imageUrl: '/photos/hero-homepage.jpg',
          }}
          discoverLabel={tc('discover')}
          contactLabel={tc('contactUs')}
          scrollLabel={tc('scroll')}
        />

        <section id="domaine" className="bg-[#FAF8F3] py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <SectionTitle surtitle={t('introSurtitle')} title={t('introTitle')} />
            <p className="text-[#1A1A14]/70 font-[family-name:var(--font-cormorant)] text-xl md:text-2xl font-light leading-relaxed mb-6">
              {t('introP1')}
            </p>
            <p className="text-[#1A1A14]/60 font-[family-name:var(--font-cormorant)] text-lg md:text-xl font-light leading-relaxed mb-8 italic">
              {t('introP2')}
            </p>
            <p className="text-[#1A1A14]/70 font-[family-name:var(--font-cormorant)] text-lg md:text-xl font-light leading-relaxed mb-8">
              {t('introP3')}
            </p>
            <Link
              href="/appartements"
              className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#6B7240] border border-[#6B7240]/40 hover:bg-[#6B7240] hover:text-white px-8 py-3.5 transition-all duration-500"
            >
              {t('introCta')} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        <section className="bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionTitle surtitle={t('housingSurtitle')} title={t('housingTitle')} />
            <div className="grid md:grid-cols-2 gap-8">
              {housingCategoryMeta.map((c) => (
                <div key={c.type} className="group relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={c.image}
                    alt={th(`${c.type}.title`)}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0A]/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-white/60 text-[0.55rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] mb-2">
                      {tc('housingStats', { count: c.count, guests: c.guests, size: c.sizeFrom })}
                    </p>
                    <h3 className="text-2xl font-[family-name:var(--font-cormorant)] text-white uppercase tracking-wide">{th(`${c.type}.title`)}</h3>
                  </div>
                  <Link href="/appartements" className="absolute inset-0" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FAF8F3] py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionTitle surtitle={t('wellnessSurtitle')} title={t('wellnessTitle')} />
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {wellnessItems.map((s, i) => (
                <Link key={i} href="/services" className="text-center group">
                  <div className="w-12 h-12 mx-auto mb-5 flex items-center justify-center border border-[#6B7240]/30 text-[#6B7240] rounded-full group-hover:bg-[#6B7240] group-hover:text-white transition-all duration-500">
                    <span className="text-xs font-[family-name:var(--font-montserrat)] tracking-widest">0{i + 1}</span>
                  </div>
                  <h4 className="text-[0.75rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14] mb-2">{s.title}</h4>
                  <p className="text-sm font-[family-name:var(--font-cormorant)] text-[#1A1A14]/60 font-light leading-relaxed">{s.description}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-3 text-[0.6rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#6B7240] hover:text-[#1A1A14] transition-colors duration-300"
              >
                {t('allServices')} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionTitle surtitle={t('regionSurtitle')} title={t('regionTitle')} />
            <div className="grid md:grid-cols-2 gap-8">
              {regionHighlightMeta.slice(0, 2).map((r, i) => (
                <Link key={i} href="/region" className="group block relative overflow-hidden aspect-[16/10]">
                  <Image
                    src={r.image}
                    alt={regionItems[i].title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0A]/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-white/60 text-[0.55rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] mb-1">{regionItems[i].subtitle}</p>
                    <h3 className="text-2xl font-[family-name:var(--font-cormorant)] text-white uppercase tracking-wide">{regionItems[i].title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FAF8F3] py-24 md:py-32 border-t border-[#E8E4DC]">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="mb-14 text-center">
                <p className="text-[0.6rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240] mb-3">
                  {t('reviewsSurtitle')}
                </p>
                <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] tracking-wide uppercase">
                  {t('reviewsTitle')}
                </h2>
                <div className="mt-5 flex justify-center">
                  <div className="h-px w-16 bg-[#6B7240]/40" />
                </div>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white p-8 shadow-sm h-full flex flex-col">
                    <div className="mb-4 text-[#6B7240] text-sm tracking-[0.15em]">★★★★★</div>
                    <p className="flex-1 text-base font-[family-name:var(--font-cormorant)] text-[#1A1A14]/70 font-light leading-relaxed mb-6">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <p className="text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]">
                      {review.name}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-28 md:py-36 overflow-hidden">
          <Image
            src="/photos/riviere-solenzara.jpg"
            alt=""
            fill
            unoptimized
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0D0D0A]/60" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <p className="text-white/60 text-[0.6rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] mb-4">{t('ctaSurtitle')}</p>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] font-light text-white uppercase tracking-wide mb-8">
              {t('ctaTitle')}
            </h2>
            <Link
              href="/reserver"
              className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-white border border-white/40 hover:border-white hover:bg-white/10 px-10 py-4 transition-all duration-500"
            >
              {t('ctaButton')} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
