import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { FadeIn } from '../../components/FadeIn'
import Image from 'next/image'
import { localeAlternates } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.services' })
  return { title: t('title'), description: t('description'), alternates: localeAlternates(locale, '/services') }
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('servicesPage')
  const categories = (await getTranslations()).raw('serviceCategories') as {
    surtitle: string; title: string; items: { title: string; description: string }[]
  }[]

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/photos/heroe-services.jpg" alt="" fill unoptimized sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0A]/70 via-[#0D0D0A]/20 to-transparent" />
          </div>
          <div className="relative z-10 w-full pb-16 max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-white/60 text-[0.6rem] tracking-[0.45em] uppercase font-[family-name:var(--font-montserrat)] mb-4">{t('eyebrow')}</p>
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-cormorant)] font-light text-white leading-[0.95] tracking-[0.08em] uppercase">{t('title')}</h1>
          </div>
        </section>

        {categories.map((cat, ci) => (
          <section key={cat.title} className={ci % 2 === 0 ? 'bg-[#FAF8F3] py-20 md:py-28' : 'bg-white py-20 md:py-28'}>
            <div className="max-w-5xl mx-auto px-6 lg:px-12">
              <FadeIn>
                <div className="text-center mb-14">
                  <p className="text-[0.6rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240] mb-3">{cat.surtitle}</p>
                  <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] uppercase tracking-wide">{cat.title}</h2>
                  <div className="mt-5 flex justify-center"><div className="h-px w-16 bg-[#6B7240]/40" /></div>
                </div>
              </FadeIn>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                {cat.items.map((s, i) => (
                  <FadeIn key={s.title} delay={i * 0.06} className="flex gap-5">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-[#6B7240]/30 text-[#6B7240] rounded-full text-[0.6rem] tracking-widest font-[family-name:var(--font-montserrat)]">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-[0.8rem] tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14] mb-2">{s.title}</h3>
                      <p className="text-base font-[family-name:var(--font-cormorant)] text-[#1A1A14]/60 font-light leading-relaxed">{s.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  )
}
