import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { FadeIn } from '../components/FadeIn'
import { ReserverForm } from './ReserverForm'
import { FaqItem } from '../components/FaqItem'
import Image from 'next/image'

export const metadata = {
  title: 'Réserver · Le Gabriel',
  description: 'Réservez votre studio ou appartement à Solenzara en Corse.',
}

export default function ReserverPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative h-[45vh] min-h-[380px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/photos/plage-canella.jpg"
              alt=""
              fill
              unoptimized
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0A]/70 via-[#0D0D0A]/20 to-transparent" />
          </div>
          <div className="relative z-10 w-full pb-16 max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-white/60 text-[0.6rem] tracking-[0.45em] uppercase font-[family-name:var(--font-montserrat)] mb-4">Votre séjour</p>
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-cormorant)] font-light text-white leading-[0.95] tracking-[0.08em] uppercase">Réserver</h1>
          </div>
        </section>

        <section className="bg-[#FAF8F3] py-20 md:py-28">
          <div className="max-w-2xl mx-auto px-6 lg:px-12">
          <ReserverForm />
          </div>
        </section>
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-normal text-[#1A1A14] uppercase tracking-wide mb-4">
                  Questions fréquentes
                </h2>
                <div className="flex items-center justify-center gap-3">
                  <span className="w-12 h-px bg-[#6B7240]" />
                  <span className="text-[#6B7240] text-xs">◆</span>
                  <span className="w-12 h-px bg-[#6B7240]" />
                </div>
              </div>
            </FadeIn>

            <div className="divide-y divide-[#E8E4DC]">
              <FaqItem
                question="Quelles sont les heures d'arrivée et de départ ?"
                answer="L'arrivée se fait à partir de 15h00 et le départ avant 11h00. En cas d'arrivée anticipée ou de départ tardif, merci de nous contacter : nous ferons au mieux en fonction de la disponibilité."
                delay={0.1}
              />
              <FaqItem
                question="Les animaux sont-ils acceptés ?"
                answer="Les animaux de compagnie sont acceptés sur demande préalable et avec un supplément de nettoyage de 30 €. Nous vous prions de nous informer au moment de la réservation."
                delay={0.15}
              />
              <FaqItem
                question="Le linge de maison est-il fourni ?"
                answer="Oui, draps, serviettes de toilette et torchons sont fournis et renouvelés chaque semaine pour les séjours de plus de 7 nuits."
                delay={0.2}
              />
              <FaqItem
                question="Y a-t-il un parking sur place ?"
                answer="Oui, un parking privé et sécurisé est à disposition de tous nos hôtes sans frais supplémentaire."
                delay={0.25}
              />
              <FaqItem
                question="Comment modifier ou annuler ma réservation ?"
                answer="Vous pouvez modifier ou annuler votre réservation jusqu'à 14 jours avant votre arrivée pour un remboursement intégral. Passé ce délai, le séjour reste dû sauf conditions exceptionnelles. Contactez-nous directement à contact@legabriel.fr."
                delay={0.3}
              />
              <FaqItem
                question="La salle de sport est-elle incluse ?"
                answer="L'accès à la salle de sport est gratuit pour tous les résidents. Les visiteurs extérieurs peuvent également en profiter avec un pass journalier à 15 €."
                delay={0.35}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
