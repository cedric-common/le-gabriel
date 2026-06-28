import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { FadeIn } from '../components/FadeIn'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales · Le Gabriel',
  description: 'Mentions légales, informations sur la société SCI AZUR et conditions d\'utilisation du site Le Gabriel.',
}

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative h-[35vh] min-h-[320px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/photos/riviere-solenzara.jpg"
              alt=""
              fill
              unoptimized
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0A]/80 via-[#0D0D0A]/40 to-[#0D0D0A]/30" />
          </div>
          <div className="relative z-10 w-full pb-16 max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-white/60 text-[0.6rem] tracking-[0.45em] uppercase font-[family-name:var(--font-montserrat)] mb-4">
              Informations légales
            </p>
            <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] font-light text-white leading-[0.95] tracking-[0.08em] uppercase">
              Mentions légales
            </h1>
          </div>
        </section>

        <section className="bg-[#FAF8F3] py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="space-y-10 text-[#1A1A14]/80">
                <div>
                  <h2 className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14] uppercase tracking-wide mb-4">
                    Éditeur du site
                  </h2>
                  <div className="text-sm font-[family-name:var(--font-montserrat)] leading-relaxed space-y-1">
                    <p><span className="text-[#1A1A14]/50">Dénomination :</span> SCI AZUR (S.C.I AZUR)</p>
                    <p><span className="text-[#1A1A14]/50">Forme juridique :</span> SCI, société civile immobilière</p>
                    <p><span className="text-[#1A1A14]/50">SIREN :</span> 451 528 913</p>
                    <p><span className="text-[#1A1A14]/50">SIRET siège :</span> 451 528 913 00010</p>
                    <p><span className="text-[#1A1A14]/50">TVA intracommunautaire :</span> FR84 451 528 913</p>
                    <p><span className="text-[#1A1A14]/50">RCS :</span> inscrit au greffe d&apos;Ajaccio le 05/01/2004</p>
                    <p><span className="text-[#1A1A14]/50">Numéro RCS :</span> 451 528 913 R.C.S. Ajaccio</p>
                    <p><span className="text-[#1A1A14]/50">Capital social :</span> 1 525,00 €</p>
                    <p><span className="text-[#1A1A14]/50">Dirigeant :</span> Didier Gulli, gérant</p>
                    <p><span className="text-[#1A1A14]/50">Siège social :</span> Solenzara, Résidence Belle Image, 20145 Sari Solenzara</p>
                    <p><span className="text-[#1A1A14]/50">Code NAF/APE :</span> 68.20B (Location de terrains et d&apos;autres biens immobiliers)</p>
                    <p><span className="text-[#1A1A14]/50">Date de création :</span> 23/12/2003</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14] uppercase tracking-wide mb-4">
                    Directeur de la publication
                  </h2>
                  <p className="text-sm font-[family-name:var(--font-montserrat)] leading-relaxed">
                    Didier Gulli, gérant de la SCI AZUR.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14] uppercase tracking-wide mb-4">
                    Hébergement
                  </h2>
                  <p className="text-sm font-[family-name:var(--font-montserrat)] leading-relaxed">
                    Vercel Inc., 340 S Lemon Ave, Walnut, CA 91789, USA.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14] uppercase tracking-wide mb-4">
                    Données personnelles
                  </h2>
                  <div className="text-sm font-[family-name:var(--font-montserrat)] leading-relaxed space-y-3">
                    <p>
                      La SCI AZUR s&apos;engage à respecter la confidentialité des informations personnelles collectées sur le site.
                    </p>
                    <p>
                      <span className="text-[#1A1A14]/50">Délégué à la protection des données / contact :</span>{' '}
                      contact@legabriel.fr
                    </p>
                    <p>
                      <span className="text-[#1A1A14]/50">Finalités des traitements :</span> gestion des réservations,
                      relation client et, le cas échéant, mesure d&apos;audience sous réserve de votre consentement.
                    </p>
                    <p>
                      Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;opposition et de suppression sur les données vous concernant.
                      Pour exercer ces droits, envoyez votre demande à contact@legabriel.fr.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14] uppercase tracking-wide mb-4">
                    Cookies
                  </h2>
                  <p className="text-sm font-[family-name:var(--font-montserrat)] leading-relaxed">
                    Le site utilise des cookies techniques nécessaires à son bon fonctionnement ainsi que des cookies de mesure
                    d&apos;audience via Vercel Analytics. Aucun cookie tiers publicitaire n&apos;est déposé sans votre consentement explicite.
                    Vous pouvez modifier vos préférences à tout moment en contactant contact@legabriel.fr.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14] uppercase tracking-wide mb-4">
                    Propriété intellectuelle
                  </h2>
                  <p className="text-sm font-[family-name:var(--font-montserrat)] leading-relaxed">
                    L&apos;ensemble des contenus présents sur ce site (textes, photographies, illustrations, logos, charte graphique)
                    est la propriété exclusive de la SCI AZUR, sauf crédits Unsplash indiqués. Toute reproduction, représentation,
                    modification ou adaptation, totale ou partielle, sans autorisation écrite préalable est strictement interdite.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14] uppercase tracking-wide mb-4">
                    Crédits
                  </h2>
                  <p className="text-sm font-[family-name:var(--font-montserrat)] leading-relaxed">
                    Conception et développement : Comm&apos;On Agency.
                  </p>
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
