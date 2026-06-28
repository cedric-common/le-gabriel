import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { FadeIn } from '../components/FadeIn'

export const metadata = {
  title: 'Salle de sport · Le Gabriel',
  description:
    'Salle de sport moderne à Solenzara, ouverte aux résidents et au public : cardio, musculation, cours collectifs.',
}

const equipments = [
  {
    title: 'Cardio',
    description:
      'Tapis de course, vélos elliptiques et rameurs pour des séances d\'endurance dans un espace lumineux et climatisé.',
  },
  {
    title: 'Musculation libre',
    description:
      'Haltères, barres, bancs et postes guidés pour travailler chaque groupe musculaire en toute autonomie.',
  },
  {
    title: 'Cours collectifs',
    description:
      'Séances encadrées de stretching, renforcement musculaire et café-gym selon un calendrier hebdomadaire.',
  },
]

export default function SalleDeSportPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0A]/70 via-[#0D0D0A]/20 to-transparent" />
          </div>
          <div className="relative z-10 w-full pb-16 max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-white/60 text-[0.6rem] tracking-[0.45em] uppercase font-[family-name:var(--font-montserrat)] mb-4">
              Bien-être
            </p>
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-cormorant)] font-light text-white leading-[0.95] tracking-[0.08em] uppercase">
              Salle de sport
            </h1>
          </div>
        </section>

        <section className="bg-[#FAF8F3] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="max-w-2xl mx-auto text-center mb-16">
                <p className="text-[0.6rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240] mb-4">
                  Présentation
                </p>
                <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] uppercase tracking-wide mb-6">
                  Un espace fitness au rez-de-chaussée
                </h2>
                <p className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14]/70 font-light leading-relaxed">
                  La salle de sport du Gabriel est située au rez-de-chaussée de
                  l\'appart-hôtel. Lumineuse et entièrement équipée, elle est
                  accessible aux résidents de l\'établissement ainsi qu\'aux
                  visiteurs extérieurs sur réservation.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {equipments.map((eq, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#6B7240]/30 text-[#6B7240] rounded-full text-[0.6rem] tracking-widest font-[family-name:var(--font-montserrat)] mb-4">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-[0.8rem] tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14] mb-3">
                      {eq.title}
                    </h3>
                    <p className="text-base font-[family-name:var(--font-cormorant)] text-[#1A1A14]/60 font-light leading-relaxed">
                      {eq.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <FadeIn>
                <div>
                  <p className="text-[0.6rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240] mb-4">
                    Horaires
                  </p>
                  <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] uppercase tracking-wide mb-6">
                    Horaires d\'ouverture
                  </h2>
                  <div className="border border-[#1A1A14]/10 divide-y divide-[#1A1A14]/10">
                    <div className="flex items-center justify-between py-4 px-5">
                      <span className="text-sm font-[family-name:var(--font-montserrat)] tracking-wide text-[#1A1A14]">
                        Lundi — Vendredi
                      </span>
                      <span className="text-sm font-[family-name:var(--font-montserrat)] text-[#1A1A14]/70">
                        6h — 22h
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-4 px-5">
                      <span className="text-sm font-[family-name:var(--font-montserrat)] tracking-wide text-[#1A1A14]">
                        Samedi — Dimanche
                      </span>
                      <span className="text-sm font-[family-name:var(--font-montserrat)] text-[#1A1A14]/70">
                        8h — 20h
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div>
                  <p className="text-[0.6rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240] mb-4">
                    Tarifs
                  </p>
                  <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] uppercase tracking-wide mb-6">
                    Accès & abonnements
                  </h2>
                  <div className="border border-[#1A1A14]/10 divide-y divide-[#1A1A14]/10">
                    <div className="flex items-center justify-between py-4 px-5">
                      <span className="text-sm font-[family-name:var(--font-montserrat)] tracking-wide text-[#1A1A14]">
                        Résidents Le Gabriel
                      </span>
                      <span className="text-sm font-[family-name:var(--font-montserrat)] text-[#6B7240]">
                        Gratuit
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-4 px-5">
                      <span className="text-sm font-[family-name:var(--font-montserrat)] tracking-wide text-[#1A1A14]">
                        Journée — public
                      </span>
                      <span className="text-sm font-[family-name:var(--font-montserrat)] text-[#1A1A14]/70">
                        15 €
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-4 px-5">
                      <span className="text-sm font-[family-name:var(--font-montserrat)] tracking-wide text-[#1A1A14]">
                        Abonnement mensuel
                      </span>
                      <span className="text-sm font-[family-name:var(--font-montserrat)] text-[#1A1A14]/70">
                        39 €/mois
                      </span>
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
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-[0.6rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240] mb-4">
                  Accès
                </p>
                <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] uppercase tracking-wide mb-6">
                  Comment nous trouver
                </h2>
                <p className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14]/70 font-light leading-relaxed mb-8">
                  La salle de sport se trouve au rez-de-chaussée de
                  l\'appart-hôtel Le Gabriel. Un parking privé est à votre
                  disposition à l\'entrée de la résidence. Rendez-vous à
                  l\'accueil pour votre première visite.
                </p>
                <p className="text-[0.65rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60">
                  Le Gabriel · 20145 Solenzara · Corse
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
