import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { FadeIn } from '../../components/FadeIn'
import Image from 'next/image'
import { localeAlternates } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.legal' })
  return { title: t('title'), description: t('description'), alternates: localeAlternates(locale, '/mentions-legales') }
}

export default async function MentionsLegalesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('legal')

  const rows = [
    ['nameLabel', 'nameValue'],
    ['formLabel', 'formValue'],
    ['sirenLabel', 'sirenValue'],
    ['siretLabel', 'siretValue'],
    ['vatLabel', 'vatValue'],
    ['rcsLabel', 'rcsValue'],
    ['rcsNumberLabel', 'rcsNumberValue'],
    ['capitalLabel', 'capitalValue'],
    ['directorLabel', 'directorValue'],
    ['hqLabel', 'hqValue'],
    ['nafLabel', 'nafValue'],
    ['createdLabel', 'createdValue'],
  ] as const

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[35vh] min-h-[320px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/photos/riviere-solenzara.jpg" alt="" fill unoptimized sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0A]/80 via-[#0D0D0A]/40 to-[#0D0D0A]/30" />
          </div>
          <div className="relative z-10 w-full pb-16 max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-white/60 text-[0.6rem] tracking-[0.45em] uppercase font-[family-name:var(--font-montserrat)] mb-4">{t('eyebrow')}</p>
            <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] font-light text-white leading-[0.95] tracking-[0.08em] uppercase">{t('title')}</h1>
          </div>
        </section>

        <section className="bg-[#FAF8F3] py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="space-y-10 text-[#1A1A14]/80">
                <div>
                  <h2 className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14] uppercase tracking-wide mb-4">{t('publisherTitle')}</h2>
                  <div className="text-sm font-[family-name:var(--font-montserrat)] leading-relaxed space-y-1">
                    {rows.map(([label, value]) => (
                      <p key={label}><span className="text-[#1A1A14]/50">{t(label)}</span> {t(value)}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14] uppercase tracking-wide mb-4">{t('publicationTitle')}</h2>
                  <p className="text-sm font-[family-name:var(--font-montserrat)] leading-relaxed">{t('publicationText')}</p>
                </div>
                <div>
                  <h2 className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14] uppercase tracking-wide mb-4">{t('hostingTitle')}</h2>
                  <p className="text-sm font-[family-name:var(--font-montserrat)] leading-relaxed">{t('hostingText')}</p>
                </div>
                <div>
                  <h2 className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14] uppercase tracking-wide mb-4">{t('privacyTitle')}</h2>
                  <div className="text-sm font-[family-name:var(--font-montserrat)] leading-relaxed space-y-3">
                    <p>{t('privacyP1')}</p>
                    <p><span className="text-[#1A1A14]/50">{t('privacyContactLabel')}</span> contact@legabriel.fr</p>
                    <p><span className="text-[#1A1A14]/50">{t('privacyPurposesLabel')}</span> {t('privacyPurposes')}</p>
                    <p>{t('privacyRights')}</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14] uppercase tracking-wide mb-4">{t('cookiesTitle')}</h2>
                  <p className="text-sm font-[family-name:var(--font-montserrat)] leading-relaxed">{t('cookiesText')}</p>
                </div>
                <div>
                  <h2 className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14] uppercase tracking-wide mb-4">{t('ipTitle')}</h2>
                  <p className="text-sm font-[family-name:var(--font-montserrat)] leading-relaxed">{t('ipText')}</p>
                </div>
                <div>
                  <h2 className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14] uppercase tracking-wide mb-4">{t('creditsTitle')}</h2>
                  <p className="text-sm font-[family-name:var(--font-montserrat)] leading-relaxed">{t('creditsText')}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
