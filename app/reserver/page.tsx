import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ReserverForm } from './ReserverForm'
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
      </main>
      <Footer />
    </>
  )
}
