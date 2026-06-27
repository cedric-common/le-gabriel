import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { housings, services, regionHighlights } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export const revalidate = 60

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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero
          data={{
            eyebrow: 'Appart-Hôtel · Solenzara, Corse',
            titleLine1: 'Le Gabriel.',
            titleLine2: 'Votre séjour en Corse.',
            subtitle: '12 studios et 11 appartements au cœur de Solenzara',
            imageUrl: '/hero-homepage.jpg',
          }}
        />

        {/* Intro */}
        <section id="domaine" className="bg-[#FAF8F3] py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <SectionTitle surtitle="Bienvenue" title="Un art de vivre corse" />
            <p className="text-[#1A1A14]/70 font-[family-name:var(--font-cormorant)] text-xl md:text-2xl font-light leading-relaxed mb-8">
              Niché au cœur de Solenzara, Le Gabriel vous propose 23 logements pensés pour le confort,
              entre studios intimistes et appartements familiaux. Piscine chauffée, parking privé, à deux
              pas des plages et des aiguilles de Bavella.
            </p>
            <Link
              href="/appartements"
              className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#6B7240] border border-[#6B7240]/40 hover:bg-[#6B7240] hover:text-white px-8 py-3.5 transition-all duration-500"
            >
              Découvrir les logements <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Appartements teaser */}
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionTitle surtitle="Logements" title="Studios & Appartements" />
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden aspect-[4/3]">
                <img
                  src={housings[0].image}
                  alt="Studios"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0A]/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-white/60 text-[0.55rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] mb-2">12 logements · jusqu'à 4 pers.</p>
                  <h3 className="text-2xl font-[family-name:var(--font-cormorant)] text-white uppercase tracking-wide">Studios</h3>
                </div>
                <Link href="/appartements" className="absolute inset-0" />
              </div>
              <div className="group relative overflow-hidden aspect-[4/3]">
                <img
                  src={housings[12].image}
                  alt="Appartements"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0A]/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-white/60 text-[0.55rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] mb-2">11 logements · jusqu'à 5 pers.</p>
                  <h3 className="text-2xl font-[family-name:var(--font-cormorant)] text-white uppercase tracking-wide">Appartements 1 chambre</h3>
                </div>
                <Link href="/appartements" className="absolute inset-0" />
              </div>
            </div>
          </div>
        </section>

        {/* Services teaser */}
        <section className="bg-[#FAF8F3] py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionTitle surtitle="Services" title="Pour un séjour sans souci" />
            <div className="grid md:grid-cols-4 gap-8">
              {services.slice(0, 4).map((s, i) => (
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
                Tous les services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Région teaser */}
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionTitle surtitle="Environnement" title="Solenzara et ses trésors" />
            <div className="grid md:grid-cols-2 gap-8">
              {regionHighlights.slice(0, 2).map((r, i) => (
                <Link key={i} href="/region" className="group block relative overflow-hidden aspect-[16/10]">
                  <img src={r.image} alt={r.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0A]/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-white/60 text-[0.55rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] mb-1">{r.subtitle}</p>
                    <h3 className="text-2xl font-[family-name:var(--font-cormorant)] text-white uppercase tracking-wide">{r.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Réserver */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          <img
            src="/riviere-solenzara.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0D0D0A]/60" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <p className="text-white/60 text-[0.6rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] mb-4">Réserver votre séjour</p>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] font-light text-white uppercase tracking-wide mb-8">
              Prêt à vivre la Corse ?
            </h2>
            <Link
              href="/reserver"
              className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-white border border-white/40 hover:border-white hover:bg-white/10 px-10 py-4 transition-all duration-500"
            >
              Réserver maintenant <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
