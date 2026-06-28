import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { FadeIn } from '../components/FadeIn'
import Image from 'next/image'
import { housings } from '@/lib/data'
import { Users, BedDouble, Ruler } from 'lucide-react'

export const metadata = {
  title: 'Appartements · Le Gabriel',
  description: 'Découvrez nos 12 studios et 11 appartements à Solenzara.',
}

export default function AppartementsPage() {
  const studios = housings.filter((h) => h.type === 'studio')
  const apts = housings.filter((h) => h.type === 'appartement')

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
              Nos logements
            </p>
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-cormorant)] font-light text-white leading-[0.95] tracking-[0.08em] uppercase">
              Studios <span className="italic">&</span> Appartements
            </h1>
          </div>
        </section>

        <section className="bg-[#FAF8F3] py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] uppercase tracking-wide">
                Studios
              </h2>
              <div className="h-px flex-1 bg-[#1A1A14]/10" />
              <span className="text-[0.6rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240]">
                12 logements · 4 pers. max
              </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studios.map((s, i) => (
                <FadeIn key={s.id} delay={i * 0.05} className="bg-white group">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image src={s.image} alt={s.name} fill unoptimized sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60">
                      <span className="flex items-center gap-1.5"><Users className="w-3 h-3" /> {s.guests} pers.</span>
                      <span className="flex items-center gap-1.5"><Ruler className="w-3 h-3" /> {s.sizeSqm} m²</span>
                      <span className="flex items-center gap-1.5"><BedDouble className="w-3 h-3" /> {s.beds}</span>
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14] uppercase tracking-wide mb-2">{s.name}</h3>
                    <p className="text-sm font-[family-name:var(--font-cormorant)] text-[#1A1A14]/60 font-light leading-relaxed mb-4">{s.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.features.map((f) => (
                        <span key={f} className="text-[0.55rem] tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240] border border-[#6B7240]/20 px-2.5 py-1">{f}</span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] uppercase tracking-wide">
                Appartements 1 chambre
              </h2>
              <div className="h-px flex-1 bg-[#1A1A14]/10" />
              <span className="text-[0.6rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240]">
                11 logements · 5 pers. max
              </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apts.map((a, i) => (
                <FadeIn key={a.id} delay={i * 0.05} className="bg-[#FAF8F3] group">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image src={a.image} alt={a.name} fill unoptimized sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60">
                      <span className="flex items-center gap-1.5"><Users className="w-3 h-3" /> {a.guests} pers.</span>
                      <span className="flex items-center gap-1.5"><Ruler className="w-3 h-3" /> {a.sizeSqm} m²</span>
                      <span className="flex items-center gap-1.5"><BedDouble className="w-3 h-3" /> {a.beds}</span>
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14] uppercase tracking-wide mb-2">{a.name}</h3>
                    <p className="text-sm font-[family-name:var(--font-cormorant)] text-[#1A1A14]/60 font-light leading-relaxed mb-4">{a.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {a.features.map((f) => (
                        <span key={f} className="text-[0.55rem] tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240] border border-[#6B7240]/20 px-2.5 py-1">{f}</span>
                      ))}
                    </div>
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
