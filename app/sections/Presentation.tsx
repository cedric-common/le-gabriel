'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedCounter } from '../components/AnimatedCounter'

const ease = [0.22, 1, 0.36, 1] as const

const defaultStats = [
  { value: 40, suffix: '+', label: "Années d'histoire" },
  { value: 35, suffix: ' ha', label: 'Hectares cultivés' },
  { value: 2, suffix: '', label: 'Générations' },
]

type PresentationProps = {
  data?: {
    surtitle?: string
    sectionTitle?: string
    subtitle?: string
    cardTitle?: string
    cardText?: string
    mainImageUrl?: string
    photo1Url?: string
    photo1Label?: string
    photo2Url?: string
    photo2Label?: string
    gridTitle?: string
    gridSubtitle?: string
    stats?: { value: number; suffix: string; label: string }[]
  } | null
}

export function Presentation({ data }: PresentationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const surtitle = data?.surtitle || 'Domaine agricole familial · Corse'
  const sectionTitle = data?.sectionTitle || 'Une Terre, La Mer, Le Maquis & Vous'
  const subtitle = data?.subtitle || 'Domaine agricole authentique proche de Sarrola-Carcopino'
  const cardTitle = data?.cardTitle || 'À l\'état sauvage'
  const cardText = data?.cardText || 'Niché au cœur de la Corse, le Domaine du Prunello est le fruit d\'une histoire familiale qui s\'écrit depuis plus de 40 ans. Fondé par notre grand-père, il incarne l\'alliance de la tradition et d\'une vision moderne.'
  const mainImageUrl = data?.mainImageUrl || 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=90'
  const photo1Url = data?.photo1Url || 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=900&q=90'
  const photo1Label = data?.photo1Label || 'Authenticité'
  const photo2Url = data?.photo2Url || 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=90'
  const photo2Label = data?.photo2Label || 'Excellence'
  const gridTitle = data?.gridTitle || 'Écrin de Nature'
  const gridSubtitle = data?.gridSubtitle || 'Terres agricoles · Corse intérieure'
  const stats = data?.stats?.length ? data.stats : defaultStats
  const showStats = false

  return (
    <section id="domaine" ref={ref}>

      {/* — Titre section style Oliviers — */}
      <div className="py-20 md:py-28 bg-[#FAF8F3] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, ease }}
            className="text-[0.6rem] tracking-[0.45em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#6B7240] mb-5"
          >
            {surtitle}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.1, ease }}
            className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] tracking-[0.1em] uppercase leading-[1.1] mb-6"
          >
            {sectionTitle}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="ornament text-[#6B7240] mb-5"
          >
            <span className="text-lg">◆</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="text-[0.65rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#1A1A14]/50"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>

      {/* — Grande photo avec carte blanche flottante style Oliviers — */}
      <div className="relative">
        {/* Photo plein écran */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, ease }}
          className="relative h-[70vh] md:h-[80vh] overflow-hidden"
        >
          <img
            src={mainImageUrl}
            alt="Vue sur la Corse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A1A14]/20" />
        </motion.div>

        {/* Carte blanche flottante — style Oliviers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.4, ease }}
          className="absolute top-1/2 right-12 md:right-24 -translate-y-1/2 bg-white/92 backdrop-blur-sm w-80 md:w-96 p-10 md:p-12 text-center"
        >
          <p className="text-[0.6rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#6B7240] mb-4">
            Un lieu
          </p>
          <h3 className="text-[1.8rem] md:text-[2.2rem] font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] tracking-[0.05em] uppercase italic leading-[1.15] mb-5">
            {cardTitle}
          </h3>
          <div className="ornament text-[#6B7240] mb-6">
            <span className="text-sm">◆</span>
          </div>
          <p className="text-[0.6rem] tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#1A1A14]/65 leading-[2.2] mb-8">
            {cardText}
          </p>
          <button
            onClick={() => document.getElementById('proprietaire')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-[0.6rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#1A1A14] border-b border-[#1A1A14]/30 hover:border-[#6B7240] hover:text-[#6B7240] pb-1 transition-all duration-300"
          >
            Découvrir
          </button>
        </motion.div>
      </div>

      {/* — Chiffres clés temporairement masqués — */}
      {showStats && (
      <div className="py-20 bg-[#1A1A14]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease }}
                className="text-center px-8 py-4"
              >
                <div className="text-[3rem] md:text-[4.5rem] font-[family-name:var(--font-cormorant)] font-light text-white tracking-[0.05em] leading-none mb-3">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="w-6 h-px bg-[#6B7240] mx-auto mb-3" />
                <p className="text-[0.55rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-white/35">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      )}

      {/* — Section valeurs — deux colonnes photo + texte style Oliviers — */}
      <div className="bg-[#FAF8F3]">

        {/* Deux photos : empilées sur mobile, côte à côte sur desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.2, ease }}
            className="relative h-[55vh] overflow-hidden"
          >
            <img
              src={photo1Url}
              alt={photo1Label}
              className="w-full h-full object-cover object-right md:object-center hover:scale-105 transition-transform duration-[2s] ease-out"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#1A1A14]/60 to-transparent">
              <p className="text-[0.6rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-white">{photo1Label}</p>
              <div className="w-8 h-px bg-white/40 mt-2" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.35, ease }}
            className="relative h-[55vh] overflow-hidden"
          >
            <img
              src={photo2Url}
              alt={photo2Label}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#1A1A14]/60 to-transparent">
              <p className="text-[0.6rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-white">{photo2Label}</p>
              <div className="w-8 h-px bg-white/40 mt-2" />
            </div>
          </motion.div>
        </div>

        {/* Titre sous les photos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="text-center py-16 px-6"
        >
          <h3 className="text-[2rem] md:text-[2.5rem] font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] tracking-[0.1em] uppercase mb-4">
            {gridTitle}
          </h3>
          <p className="text-[0.6rem] tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#1A1A14]/40">
            {gridSubtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
