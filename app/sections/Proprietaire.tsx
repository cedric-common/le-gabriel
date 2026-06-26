'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

type ProprietaireProps = {
  data?: {
    name?: string
    generation?: string
    cardTitle?: string
    quote?: string
    secondQuote?: string
    sectionTitle?: string
    sectionSubtitle?: string
    photoLeftUrl?: string
    photoRightUrl?: string
  } | null
}

export function Proprietaire({ data }: ProprietaireProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const name = data?.name || 'Jean-Pierre Prunello'
  const generation = data?.generation || 'Propriétaire · 2 générations'
  const cardTitle = data?.cardTitle || 'D\'espace & de passion'
  const quote = data?.quote || 'Ce domaine, c\'est avant tout une histoire de famille. Mon grand-père l\'a créé avec ses mains, mon père l\'a fait grandir, et moi, j\'ai à cœur de l\'ouvrir au monde tout en préservant son âme.'
  const secondQuote = data?.secondQuote || 'Nous ouvrons nos portes aux visiteurs qui souhaitent comprendre notre métier, déguster nos produits et ressentir cette connexion profonde avec la terre corse.'
  const sectionTitle = data?.sectionTitle || 'Préambule Agricole'
  const sectionSubtitle = data?.sectionSubtitle || 'Domaine familial · Produits authentiques & terroir corse'
  const photoLeftUrl = data?.photoLeftUrl || 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=90'
  const photoRightUrl = data?.photoRightUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=90'

  return (
    <section id="proprietaire" ref={ref} className="bg-[#FAF8F3] overflow-hidden">

      {/* Desktop : double photo + carte flottante */}
      <div className="hidden md:block relative h-[85vh] overflow-hidden">
        <div className="grid grid-cols-2 h-full">
          <div className="overflow-hidden">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 2, ease: 'easeOut' }}
              src={photoLeftUrl}
              alt="Domaine"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 2, delay: 0.1, ease: 'easeOut' }}
              src={photoRightUrl}
              alt={name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-[#1A1A14]/25" />

        {/* Carte blanche flottante centrée */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.3, delay: 0.5, ease }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm w-[420px] p-14 text-center"
        >
          <p className="text-[0.55rem] tracking-[0.45em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#6B7240] mb-4">
            Mot du propriétaire
          </p>
          <h3 className="text-[2rem] font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] tracking-[0.05em] uppercase italic leading-[1.2] mb-4">
            {cardTitle}
          </h3>
          <div className="ornament text-[#6B7240] mb-6">
            <span className="text-sm">◆</span>
          </div>
          <p className="text-[0.58rem] tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#1A1A14]/60 leading-[2.3] mb-6">
            {quote}
          </p>
          <p className="text-[0.58rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#6B7240]">
            {name}
          </p>
          <p className="text-[0.5rem] tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#1A1A14]/35 mt-1">
            {generation}
          </p>
        </motion.div>
      </div>

      {/* Mobile : photo droite + texte en dessous */}
      <div className="md:hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, ease }}
          className="h-[55vh] overflow-hidden"
        >
          <motion.img
            initial={{ scale: 1.1 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 2, ease: 'easeOut' }}
            src={photoRightUrl}
            alt={name}
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="bg-white p-10 text-center"
        >
          <p className="text-[0.55rem] tracking-[0.45em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#6B7240] mb-4">
            Mot du propriétaire
          </p>
          <h3 className="text-[1.6rem] font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] tracking-[0.05em] uppercase italic leading-[1.2] mb-4">
            {cardTitle}
          </h3>
          <div className="ornament text-[#6B7240] mb-6">
            <span className="text-sm">◆</span>
          </div>
          <p className="text-[0.58rem] tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#1A1A14]/60 leading-[2.3] mb-6">
            {quote}
          </p>
          <p className="text-[0.58rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#6B7240]">
            {name}
          </p>
          <p className="text-[0.5rem] tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#1A1A14]/35 mt-1">
            {generation}
          </p>
        </motion.div>
      </div>

      {/* Titre section sous la photo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3, ease }}
        className="text-center py-16 px-6"
      >
        <h3 className="text-[1.8rem] md:text-[2.5rem] font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] tracking-[0.1em] uppercase mb-3">
          {sectionTitle}
        </h3>
        <p className="text-[0.6rem] tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#1A1A14]/40">
          {sectionSubtitle}
        </p>
      </motion.div>

      {/* Grande citation pleine largeur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.4, ease }}
        className="border-t border-[#E8E4DC] py-16 px-6 text-center max-w-3xl mx-auto"
      >
        <p className="text-[1.4rem] md:text-[1.8rem] font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] italic leading-[1.7]">
          &ldquo;{secondQuote}&rdquo;
        </p>
      </motion.div>
    </section>
  )
}
