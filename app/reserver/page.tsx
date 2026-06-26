import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

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
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80"
              alt=""
              className="w-full h-full object-cover"
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
            <p className="text-center text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14]/70 font-light leading-relaxed mb-12">
              Envoyez-nous votre demande de réservation. Notre équipe reviendra vers vous dans les plus brefs délais pour confirmer les disponibilités et les tarifs.
            </p>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60 mb-2">Prénom</label>
                  <input type="text" className="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-[0.85rem] font-[family-name:var(--font-cormorant)] text-[#1A1A14] focus:outline-none focus:border-[#6B7240] transition-colors" />
                </div>
                <div>
                  <label className="block text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60 mb-2">Nom</label>
                  <input type="text" className="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-[0.85rem] font-[family-name:var(--font-cormorant)] text-[#1A1A14] focus:outline-none focus:border-[#6B7240] transition-colors" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60 mb-2">Email</label>
                  <input type="email" className="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-[0.85rem] font-[family-name:var(--font-cormorant)] text-[#1A1A14] focus:outline-none focus:border-[#6B7240] transition-colors" />
                </div>
                <div>
                  <label className="block text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60 mb-2">Téléphone</label>
                  <input type="tel" className="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-[0.85rem] font-[family-name:var(--font-cormorant)] text-[#1A1A14] focus:outline-none focus:border-[#6B7240] transition-colors" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60 mb-2">Arrivée</label>
                  <input type="date" className="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-[0.85rem] font-[family-name:var(--font-montserrat)] text-[#1A1A14] focus:outline-none focus:border-[#6B7240] transition-colors" />
                </div>
                <div>
                  <label className="block text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60 mb-2">Départ</label>
                  <input type="date" className="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-[0.85rem] font-[family-name:var(--font-montserrat)] text-[#1A1A14] focus:outline-none focus:border-[#6B7240] transition-colors" />
                </div>
                <div>
                  <label className="block text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60 mb-2">Voyageurs</label>
                  <select className="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-[0.85rem] font-[family-name:var(--font-montserrat)] text-[#1A1A14] focus:outline-none focus:border-[#6B7240] transition-colors">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60 mb-2">Type de logement souhaité</label>
                <select className="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-[0.85rem] font-[family-name:var(--font-montserrat)] text-[#1A1A14] focus:outline-none focus:border-[#6B7240] transition-colors">
                  <option>Studio</option>
                  <option>Appartement 1 chambre</option>
                  <option>Indifférent</option>
                </select>
              </div>

              <div>
                <label className="block text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-[0.85rem] font-[family-name:var(--font-cormorant)] text-[#1A1A14] focus:outline-none focus:border-[#6B7240] transition-colors resize-none" />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-white bg-[#6B7240] hover:bg-[#1A1A14] px-10 py-4 transition-all duration-500"
                >
                  Envoyer la demande
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
