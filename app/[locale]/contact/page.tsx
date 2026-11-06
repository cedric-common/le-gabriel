import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { FadeIn } from '../../components/FadeIn'
import { contactInfo } from '@/lib/data'
import { FaqItem } from '../../components/FaqItem'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { ContactForm } from './ContactForm'
import { localeAlternates } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.contact' })
  return { title: t('title'), description: t('description'), alternates: localeAlternates(locale, '/contact') }
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('contactPage')
  const faq = (await getTranslations()).raw('faq') as { question: string; answer: string }[]

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[45vh] min-h-[380px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/photos/riviere-solenzara.jpg" alt="" fill unoptimized sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0A]/70 via-[#0D0D0A]/20 to-transparent" />
          </div>
          <div className="relative z-10 w-full pb-16 max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-white/60 text-[0.6rem] tracking-[0.45em] uppercase font-[family-name:var(--font-montserrat)] mb-4">{t('eyebrow')}</p>
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-cormorant)] font-light text-white leading-[0.95] tracking-[0.08em] uppercase">{t('title')}</h1>
          </div>
        </section>

        <section className="bg-[#FAF8F3] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] uppercase tracking-wide mb-8">{t('heading')}</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-4 h-4 text-[#6B7240] mt-1" strokeWidth={1.5} />
                    <p className="text-[0.85rem] font-[family-name:var(--font-montserrat)] text-[#1A1A14]/70">{contactInfo.address}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-4 h-4 text-[#6B7240] mt-1" strokeWidth={1.5} />
                    <p className="text-[0.85rem] font-[family-name:var(--font-montserrat)] text-[#1A1A14]/70">{contactInfo.email}</p>
                  </div>
                  {contactInfo.phone && (
                  <div className="flex items-start gap-4">
                    <Phone className="w-4 h-4 text-[#6B7240] mt-1" strokeWidth={1.5} />
                    <p className="text-[0.85rem] font-[family-name:var(--font-montserrat)] text-[#1A1A14]/70">{contactInfo.phone}</p>
                  </div>
                  )}
                  <div className="flex items-start gap-4">
                    <Clock className="w-4 h-4 text-[#6B7240] mt-1" strokeWidth={1.5} />
                    <p className="text-[0.85rem] font-[family-name:var(--font-montserrat)] text-[#1A1A14]/70">{t('hours')}</p>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-normal text-[#1A1A14] uppercase tracking-wide mb-4">{t('faqTitle')}</h2>
                <div className="flex items-center justify-center gap-3">
                  <span className="w-12 h-px bg-[#6B7240]" />
                  <span className="text-[#6B7240] text-xs">◆</span>
                  <span className="w-12 h-px bg-[#6B7240]" />
                </div>
              </div>
            </FadeIn>
            <div className="divide-y divide-[#E8E4DC]">
              {faq.map((item, i) => (
                <FaqItem key={item.question} question={item.question} answer={item.answer} delay={0.1 + i * 0.05} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
