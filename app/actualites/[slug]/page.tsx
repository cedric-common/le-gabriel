import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { FadeIn } from '../../components/FadeIn'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles } from '../data'

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return { title: 'Article · Le Gabriel' }
  return {
    title: `${article.title} · Le Gabriel`,
    description: article.content[0],
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) {
    notFound()
  }

  const relatedArticles = articles
    .filter((a) => a.slug !== slug)
    .slice(0, 2)

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={article.image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0A]/80 via-[#0D0D0A]/30 to-transparent" />
          </div>
          <div className="relative z-10 w-full pb-16 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-4 text-[0.6rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] text-white/70">
              <span>{article.category}</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>{article.date}</span>
            </div>
            <h1 className="max-w-4xl text-3xl md:text-5xl font-[family-name:var(--font-cormorant)] font-light text-white leading-[0.95] tracking-[0.08em] uppercase">
              {article.title}
            </h1>
          </div>
        </section>

        <article className="bg-[#FAF8F3] py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            {article.content.map((paragraph, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <p className="text-lg md:text-xl font-[family-name:var(--font-cormorant)] text-[#1A1A14]/80 font-light leading-relaxed mb-6">
                  {paragraph}
                </p>
              </FadeIn>
            ))}
          </div>
        </article>

        {relatedArticles.length > 0 && (
          <aside className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <FadeIn>
                <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] uppercase tracking-wide mb-10">
                  À lire aussi
                </h2>
              </FadeIn>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedArticles.map((related, i) => (
                  <FadeIn key={related.slug} delay={i * 0.08}>
                    <Link
                      href={`/actualites/${related.slug}`}
                      className="group flex gap-6 items-start"
                    >
                      <div className="w-32 h-24 md:w-40 md:h-28 flex-shrink-0 overflow-hidden">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2 text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] text-[#6B7240]">
                          <span>{related.category}</span>
                          <span className="w-1 h-1 rounded-full bg-[#6B7240]/40" />
                          <span className="text-[#1A1A14]/50">{related.date}</span>
                        </div>
                        <h3 className="text-base font-[family-name:var(--font-cormorant)] text-[#1A1A14] uppercase tracking-wide leading-tight group-hover:text-[#6B7240] transition-colors">
                          {related.title}
                        </h3>
                      </div>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </aside>
        )}
      </main>
      <Footer />
    </>
  )
}
