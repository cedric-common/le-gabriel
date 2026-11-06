import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { FadeIn } from '../../components/FadeIn'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { housingCategoryMeta } from '@/lib/data'
import { Users, BedDouble, Ruler, ArrowRight, Check } from 'lucide-react'
import { localeAlternates } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.appartements' })
  return { title: t('title'), description: t('description'), alternates: localeAlternates(locale, '/appartements') }
}

export default async function AppartementsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('appartementsPage')
  const th = await getTranslations('housing')
  const tn = await getTranslations('nav')
  const services = (await getTranslations()).raw('housingServices') as { title: string; description: string }[]

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
          <div className="absolute inset-0 scale-[1.05]">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
              alt=""
              fill
              unoptimized
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0A]/70 via-[#0D0D0A]/20 to-transparent" />
          </div>
          <div className="relative z-10 w-full pb-16 max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-white/60 text-[0.6rem] tracking-[0.45em] uppercase font-[family-name:var(--font-montserrat)] mb-4">
              {t('eyebrow')}
            </p>
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-cormorant)] font-light text-white leading-[0.95] tracking-[0.08em] uppercase">
              {t('title')}
            </h1>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20 border-b border-[#E8E4DC]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <FadeIn>
              <p className="text-[0.6rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240] mb-4">
                {t('introSurtitle')}
              </p>
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] uppercase tracking-wide mb-6">
                {t('introTitle')}
              </h2>
              <p className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14]/70 font-light leading-relaxed">
                {t('introText')}
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="bg-[#FAF8F3] py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-12 md:space-y-16">
            {housingCategoryMeta.map((c, i) => {
              const features = th.raw(`${c.type}.features`) as string[]
              return (
              <FadeIn key={c.type} delay={0.05 * i} className="bg-white group">
                <div className={`grid md:grid-cols-2 items-stretch ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[420px]">
                    <Image src={c.image} alt={th(`${c.type}.title`)} fill unoptimized sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] uppercase tracking-wide">
                        {th(`${c.type}.title`)}
                      </h2>
                      <span className="text-[0.6rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240]">
                        {t('countLabel', { count: c.count })}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-5 text-[0.6rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" /> {t('upToGuests', { guests: c.guests })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Ruler className="w-3.5 h-3.5" /> {t('fromSize', { size: c.sizeFrom })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <BedDouble className="w-3.5 h-3.5" /> {th(`${c.type}.beds`)}
                      </span>
                    </div>
                    <p className="text-base md:text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14]/70 font-light leading-relaxed mb-6">
                      {th(`${c.type}.description`)}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {features.map((f) => (
                        <span key={f} className="text-[0.55rem] tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240] border border-[#6B7240]/20 px-2.5 py-1">
                          {f}
                        </span>
                      ))}
                    </div>
                    <div>
                      <Link href="/reserver" className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14] border border-[#1A1A14]/20 px-6 py-3 hover:bg-[#1A1A14] hover:text-[#FAF8F3] transition-colors duration-300">
                        {tn('reserver')}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )})}
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="text-center mb-14">
                <p className="text-[0.6rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240] mb-3">{t('servicesSurtitle')}</p>
                <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] tracking-wide uppercase">{t('servicesTitle')}</h2>
                <div className="mt-5 flex justify-center"><div className="h-px w-16 bg-[#6B7240]/40" /></div>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.08}>
                  <div className="flex flex-col items-start">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#6B7240]/30 text-[#6B7240] rounded-full mb-4">
                      <Check className="w-4 h-4" />
                    </div>
                    <h3 className="text-[0.8rem] tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14] mb-2">{s.title}</h3>
                    <p className="text-base font-[family-name:var(--font-cormorant)] text-[#1A1A14]/60 font-light leading-relaxed">{s.description}</p>
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
