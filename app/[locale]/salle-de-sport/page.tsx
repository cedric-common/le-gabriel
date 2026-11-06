import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { FadeIn } from '../../components/FadeIn'
import Image from 'next/image'
import { localeAlternates } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.gym' })
  return { title: t('title'), description: t('description'), alternates: localeAlternates(locale, '/salle-de-sport') }
}

export default async function SalleDeSportPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('gym')
  const equipments = t.raw('equipments') as { title: string; description: string }[]
  const wellness = t.raw('wellnessItems') as { title: string; description: string }[]

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80" alt="" fill unoptimized sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0A]/70 via-[#0D0D0A]/20 to-transparent" />
          </div>
          <div className="relative z-10 w-full pb-16 max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-white/60 text-[0.6rem] tracking-[0.45em] uppercase font-[family-name:var(--font-montserrat)] mb-4">{t('eyebrow')}</p>
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-cormorant)] font-light text-white leading-[0.95] tracking-[0.08em] uppercase">{t('title')}</h1>
          </div>
        </section>

        <section className="bg-[#FAF8F3] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="max-w-2xl mx-auto text-center mb-16">
                <p className="text-[0.6rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240] mb-4">{t('introSurtitle')}</p>
                <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] uppercase tracking-wide mb-6">{t('introTitle')}</h2>
                <p className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14]/70 font-light leading-relaxed">{t('introText')}</p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {equipments.map((eq, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#6B7240]/30 text-[#6B7240] rounded-full text-[0.6rem] tracking-widest font-[family-name:var(--font-montserrat)] mb-4">{String(i + 1).padStart(2, '0')}</div>
                    <h3 className="text-[0.8rem] tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14] mb-3">{eq.title}</h3>
                    <p className="text-base font-[family-name:var(--font-cormorant)] text-[#1A1A14]/60 font-light leading-relaxed">{eq.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <FadeIn>
                <div>
                  <p className="text-[0.6rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240] mb-4">{t('hoursSurtitle')}</p>
                  <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] uppercase tracking-wide mb-6">{t('hoursTitle')}</h2>
                  <div className="border border-[#1A1A14]/10 divide-y divide-[#1A1A14]/10">
                    <div className="flex items-center justify-between py-4 px-5">
                      <span className="text-sm font-[family-name:var(--font-montserrat)] tracking-wide text-[#1A1A14]">{t('weekdays')}</span>
                      <span className="text-sm font-[family-name:var(--font-montserrat)] text-[#1A1A14]/70">{t('weekdaysHours')}</span>
                    </div>
                    <div className="flex items-center justify-between py-4 px-5">
                      <span className="text-sm font-[family-name:var(--font-montserrat)] tracking-wide text-[#1A1A14]">{t('weekend')}</span>
                      <span className="text-sm font-[family-name:var(--font-montserrat)] text-[#1A1A14]/70">{t('weekendHours')}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div>
                  <p className="text-[0.6rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240] mb-4">{t('ratesSurtitle')}</p>
                  <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] uppercase tracking-wide mb-6">{t('ratesTitle')}</h2>
                  <div className="border border-[#1A1A14]/10 divide-y divide-[#1A1A14]/10">
                    <div className="flex items-center justify-between py-4 px-5">
                      <span className="text-sm font-[family-name:var(--font-montserrat)] tracking-wide text-[#1A1A14]">{t('residents')}</span>
                      <span className="text-sm font-[family-name:var(--font-montserrat)] text-[#6B7240]">{t('free')}</span>
                    </div>
                    <div className="flex items-center justify-between py-4 px-5">
                      <span className="text-sm font-[family-name:var(--font-montserrat)] tracking-wide text-[#1A1A14]">{t('dayPass')}</span>
                      <span className="text-sm font-[family-name:var(--font-montserrat)] text-[#1A1A14]/70">{t('dayPrice')}</span>
                    </div>
                    <div className="flex items-center justify-between py-4 px-5">
                      <span className="text-sm font-[family-name:var(--font-montserrat)] tracking-wide text-[#1A1A14]">{t('monthly')}</span>
                      <span className="text-sm font-[family-name:var(--font-montserrat)] text-[#1A1A14]/70">{t('monthlyPrice')}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="max-w-2xl mx-auto text-center mb-14">
                <p className="text-[0.6rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240] mb-4">{t('wellnessSurtitle')}</p>
                <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] uppercase tracking-wide mb-6">{t('wellnessTitle')}</h2>
                <p className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14]/70 font-light leading-relaxed">{t('wellnessText')}</p>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {wellness.map((w, i) => (
                <FadeIn key={w.title} delay={i * 0.06}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#6B7240]/30 text-[#6B7240] rounded-full text-[0.6rem] tracking-widest font-[family-name:var(--font-montserrat)] mb-4">{String(i + 1).padStart(2, '0')}</div>
                    <h3 className="text-[0.8rem] tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14] mb-2">{w.title}</h3>
                    <p className="text-sm font-[family-name:var(--font-cormorant)] text-[#1A1A14]/60 font-light leading-relaxed">{w.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FAF8F3] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-[0.6rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240] mb-4">{t('accessSurtitle')}</p>
                <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] uppercase tracking-wide mb-6">{t('accessTitle')}</h2>
                <p className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14]/70 font-light leading-relaxed mb-8">{t('accessText')}</p>
                <p className="text-[0.65rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60">{t('addressLine')}</p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
