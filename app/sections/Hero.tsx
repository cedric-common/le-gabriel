'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

// Valeurs par défaut si Sanity n'a pas encore de contenu
const DEFAULTS = {
  eyebrow: 'Domaine Agricole · Île de Corse',
  titleLine1: 'La Terre,',
  titleLine2: 'le soin, la passion.',
  subtitle: 'Domaine agricole familial depuis trois générations',
  imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=90',
}

interface HeroData {
  eyebrow?: string
  titleLine1?: string
  titleLine2?: string
  subtitle?: string
  image?: { asset: { _ref: string } }
  imageUrl?: string
}

interface HeroProps {
  data?: HeroData | null
}

export function Hero({ data }: HeroProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const eyebrow = data?.eyebrow || DEFAULTS.eyebrow
  const titleLine1 = data?.titleLine1 || DEFAULTS.titleLine1
  const titleLine2 = data?.titleLine2 || DEFAULTS.titleLine2
  const subtitle = data?.subtitle || DEFAULTS.subtitle
  const imageUrl = data?.imageUrl || DEFAULTS.imageUrl

  return (
    <section ref={ref} id="hero" className="relative h-screen min-h-[700px] flex items-end overflow-hidden">

      {/* Background Parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-[1.15]">
        <img
          src={imageUrl}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0A]/80 via-[#0D0D0A]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0A]/30 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 w-full pb-28 md:pb-32"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease }}
              className="text-white/60 text-[0.6rem] tracking-[0.45em] uppercase font-[family-name:var(--font-montserrat)] font-normal mb-5"
            >
              {eyebrow}
            </motion.p>

            <div className="overflow-hidden mb-1">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.3, delay: 0.5, ease }}
                className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-[family-name:var(--font-cormorant)] font-light text-white leading-[0.95] tracking-[0.08em] uppercase"
              >
                {titleLine1}
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.3, delay: 0.65, ease }}
                className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-[family-name:var(--font-cormorant)] font-light text-white leading-[0.95] tracking-[0.08em] uppercase italic"
              >
                {titleLine2}
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1, ease }}
              className="text-white/50 text-[0.65rem] tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)] font-normal mb-10"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3, ease }}
              className="flex items-center gap-8"
            >
              <button
                onClick={() => scrollTo('domaine')}
                className="text-[0.65rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-white border border-white/40 hover:border-white hover:bg-white/10 px-8 py-3.5 transition-all duration-500"
              >
                Découvrir
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="text-[0.65rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-white/60 hover:text-white transition-colors duration-300"
              >
                Nous contacter
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.8 }}
        className="absolute bottom-10 right-10 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-white/30"
        />
        <span className="text-white/30 text-[0.5rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] rotate-90 origin-center mt-2">Scroll</span>
      </motion.div>
    </section>
  )
}
