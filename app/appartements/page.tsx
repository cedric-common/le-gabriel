import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { FadeIn } from '../components/FadeIn'
import Image from 'next/image'
import Link from 'next/link'
import { Users, BedDouble, Ruler, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Appartements · Le Gabriel',
  description: 'Découvrez nos studios et appartements 1 chambre à Solenzara.',
}

type Category = {
  title: string
  count: string
  guests: number
  sizeFrom: number
  beds: string
  description: string
  features: string[]
  image: string
}

const categories: Category[] = [
  {
    title: 'Studios',
    count: '12 logements',
    guests: 4,
    sizeFrom: 28,
    beds: 'Lit double + canapé-lit',
    description:
      'Studios lumineux avec terrasse ou balcon, coin nuit séparé par un paravent, cuisine équipée et salle de douche. Idéal pour un couple ou une petite famille.',
    features: ['Clim réversible', 'Cuisine équipée', 'TV', 'Wifi fibre', 'Terrasse / balcon', 'Linge de maison'],
    image: '/photos/appart-studio.jpg',
  },
  {
    title: 'Appartements 1 chambre',
    count: '11 logements',
    guests: 5,
    sizeFrom: 45,
    beds: 'Chambre lit double + salon canapé-lit 3pl',
    description:
      'Appartements spacieux avec chambre séparée, salon, cuisine américaine et grand balcon vue jardin ou piscine. Parfait pour les familles et les longs séjours.',
    features: [
      'Clim réversible',
      'Cuisine équipée',
      'TV',
      'Wifi fibre',
      'Grand balcon',
      'Linge de maison',
      'Espace de travail',
    ],
    image: '/photos/appart-T2.jpg',
  },
]

export default function AppartementsPage() {
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
          <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-12 md:space-y-16">
            {categories.map((c, i) => (
              <FadeIn key={c.title} delay={0.05 * i} className="bg-white group">
                <div
                  className={`grid md:grid-cols-2 items-stretch ${
                    i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[420px]">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] uppercase tracking-wide">
                        {c.title}
                      </h2>
                      <span className="text-[0.6rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240]">
                        {c.count}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-5 text-[0.6rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" /> Jusqu'à {c.guests} pers.
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Ruler className="w-3.5 h-3.5" /> À partir de {c.sizeFrom} m²
                      </span>
                      <span className="flex items-center gap-1.5">
                        <BedDouble className="w-3.5 h-3.5" /> {c.beds}
                      </span>
                    </div>
                    <p className="text-base md:text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14]/70 font-light leading-relaxed mb-6">
                      {c.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {c.features.map((f) => (
                        <span
                          key={f}
                          className="text-[0.55rem] tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240] border border-[#6B7240]/20 px-2.5 py-1"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                    <div>
                      <Link
                        href="/reserver"
                        className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14] border border-[#1A1A14]/20 px-6 py-3 hover:bg-[#1A1A14] hover:text-[#FAF8F3] transition-colors duration-300"
                      >
                        Réserver
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
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
