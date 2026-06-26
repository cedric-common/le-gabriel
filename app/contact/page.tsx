import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { contactInfo } from '@/lib/data'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact · Le Gabriel',
  description: 'Contactez Le Gabriel à Solenzara pour vos réservations et questions.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative h-[45vh] min-h-[380px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1920&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0A]/70 via-[#0D0D0A]/20 to-transparent" />
          </div>
          <div className="relative z-10 w-full pb-16 max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-white/60 text-[0.6rem] tracking-[0.45em] uppercase font-[family-name:var(--font-montserrat)] mb-4">Restons en contact</p>
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-cormorant)] font-light text-white leading-[0.95] tracking-[0.08em] uppercase">Contact</h1>
          </div>
        </section>

        <section className="bg-[#FAF8F3] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Infos */}
              <div>
                <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] uppercase tracking-wide mb-8">
                  Le Gabriel
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-4 h-4 text-[#6B7240] mt-1" strokeWidth={1.5} />
                    <p className="text-[0.85rem] font-[family-name:var(--font-montserrat)] text-[#1A1A14]/70">{contactInfo.address}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-4 h-4 text-[#6B7240] mt-1" strokeWidth={1.5} />
                    <p className="text-[0.85rem] font-[family-name:var(--font-montserrat)] text-[#1A1A14]/70">{contactInfo.email}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-4 h-4 text-[#6B7240] mt-1" strokeWidth={1.5} />
                    <p className="text-[0.85rem] font-[family-name:var(--font-montserrat)] text-[#1A1A14]/70">{contactInfo.phone}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-4 h-4 text-[#6B7240] mt-1" strokeWidth={1.5} />
                    <p className="text-[0.85rem] font-[family-name:var(--font-montserrat)] text-[#1A1A14]/70">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>

              {/* Formulaire */}
              <form className="space-y-6">
                <div>
                  <label className="block text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60 mb-2">Nom</label>
                  <input type="text" className="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-[0.85rem] font-[family-name:var(--font-cormorant)] text-[#1A1A14] focus:outline-none focus:border-[#6B7240] transition-colors" />
                </div>
                <div>
                  <label className="block text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60 mb-2">Email</label>
                  <input type="email" className="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-[0.85rem] font-[family-name:var(--font-cormorant)] text-[#1A1A14] focus:outline-none focus:border-[#6B7240] transition-colors" />
                </div>
                <div>
                  <label className="block text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14]/60 mb-2">Message</label>
                  <textarea rows={5} className="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-[0.85rem] font-[family-name:var(--font-cormorant)] text-[#1A1A14] focus:outline-none focus:border-[#6B7240] transition-colors resize-none" />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-white bg-[#6B7240] hover:bg-[#1A1A14] px-10 py-4 transition-all duration-500"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
