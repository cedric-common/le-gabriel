import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { FadeIn } from '../components/FadeIn'
import Image from 'next/image'
import Link from 'next/link'
import { articles } from './data'

export const metadata = {
  title: 'Actualités · Le Gabriel',
  description: 'Les dernières nouvelles de Le Gabriel, appart-hôtel à Solenzara.',
}

export default function ActualitesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=1920&q=80"
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
              Restez informé
            </p>
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-cormorant)] font-light text-white leading-[0.95] tracking-[0.08em] uppercase">
              Actualités
            </h1>
          </div>
        </section>

        <section className="bg-[#FAF8F3] py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, i) => (
                <FadeIn key={article.slug} delay={i * 0.08} className="group bg-white">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240]">
                      <span>{article.category}</span>
                      <span className="w-1 h-1 rounded-full bg-[#6B7240]/40" />
                      <span className="text-[#1A1A14]/50">{article.date}</span>
                    </div>
                    <h2 className="text-lg font-[family-name:var(--font-cormorant)] text-[#1A1A14] uppercase tracking-wide mb-3 leading-tight">
                      {article.title}
                    </h2>
                    <p className="text-sm font-[family-name:var(--font-cormorant)] text-[#1A1A14]/60 font-light leading-relaxed mb-5">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/actualites/${article.slug}`}
                      className="inline-flex items-center gap-2 text-[0.6rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#1A1A14] hover:text-[#6B7240] transition-colors"
                    >
                      Lire la suite
                      <span aria-hidden="true">-&gt;</span>
                    </Link>
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
