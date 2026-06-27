import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { FadeIn } from '../components/FadeIn'
import { regionHighlights } from '@/lib/data'

export const metadata = {
  title: 'La Région · Le Gabriel',
  description: 'Solenzara, plages de sable fin, Aiguilles de Bavella et rivières corses.',
}

export default function RegionPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/solenzara.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0A]/70 via-[#0D0D0A]/20 to-transparent" />
          </div>
          <div className="relative z-10 w-full pb-16 max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-white/60 text-[0.6rem] tracking-[0.45em] uppercase font-[family-name:var(--font-montserrat)] mb-4">
              Découvrir
            </p>
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-cormorant)] font-light text-white leading-[0.95] tracking-[0.08em] uppercase">
              La région
            </h1>
          </div>
        </section>

        <section className="bg-[#FAF8F3] py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-24">
            {regionHighlights.map((r, i) => (
              <FadeIn key={i} delay={0.1}>
                <div className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`overflow-hidden aspect-[4/3] ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img src={r.image} alt={r.title} className="w-full h-full object-cover" />
                  </div>
                  <div className={`${i % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                    <p className="text-[0.6rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240] mb-3">
                      {r.subtitle}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] uppercase tracking-wide mb-5">
                      {r.title}
                    </h2>
                    <div className={`h-px w-16 bg-[#6B7240]/40 mb-6 ${i % 2 === 1 ? 'md:ml-auto' : ''}`} />
                    <p className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14]/70 font-light leading-relaxed">
                      {r.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
