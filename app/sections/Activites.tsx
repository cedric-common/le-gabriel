'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const ease = [0.22, 1, 0.36, 1] as const

const defaultActivities = [
  {
    title: 'Élevage caprin et fromagerie',
    subtitle: 'Fromagerie',
    description: "Nos chèvres corses élèvées en liberté dans le maquis. Découvrez la fabrication artisanale de nos fromages au lait cru, entre tradition et savoir-faire.",
    imageUrl: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=900&q=90',
    featured: false,
  },
  {
    title: 'Apiculture',
    subtitle: 'Miel de Corse',
    description: "Au cœur du maquis corse, nos ruches produisent un miel aux arômes uniques de ciste, romarin et arbousier. Visitez nos ruchers et dégustez nos précieux nectar.",
    imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=900&q=90',
    featured: false,
  },
  {
    title: 'Viticulture',
    subtitle: 'Vins du Terroir',
    description: "Nos vignes cultivées sur les pentes ensoleillées de San Giuliano produisent des vins d'exception. Visitez nos caves et dégustez nos cuvées typiques.",
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=900&q=90',
    featured: true,
  },
  {
    title: "Vergers de Clémentines",
    subtitle: 'Agrumes Corses',
    description: "Nos clémentiniers aux fruits d'or, cultivés sans traitement chimique. Promenez-vous dans nos vergers et goûtez ces joyaux sucrés du soleil corse.",
    imageUrl: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=900&q=90',
    featured: false,
  },
]

type Activity = {
  title: string
  subtitle?: string
  description?: string
  imageUrl?: string
  featured?: boolean
}

type ActivitesProps = {
  activities?: Activity[] | null
  surtitle?: string
  sectionTitle?: string
}

export function Activites({ activities: activitiesData, surtitle, sectionTitle }: ActivitesProps) {
  const activities = activitiesData?.length ? activitiesData : defaultActivities
  const headerSurtitle = surtitle || 'Nos expériences'
  const headerTitle = sectionTitle || 'Activités & Visites'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="activites" ref={ref} className="bg-[#FAF8F3]">

      {/* En-tête section */}
      <div className="py-20 md:py-28 text-center border-t border-[#E8E4DC]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, ease }}
            className="text-[0.6rem] tracking-[0.45em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#6B7240] mb-5"
          >
            {headerSurtitle}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.1, ease }}
            className="text-[2.5rem] md:text-[3.5rem] font-[family-name:var(--font-cormorant)] font-light text-[#1A1A14] tracking-[0.1em] uppercase leading-[1.1] mb-5"
          >
            {headerTitle}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="ornament text-[#6B7240]"
          >
            <span className="text-sm">◆</span>
          </motion.div>
        </div>
      </div>

      {/* Grille 2×2 style éditorial — photos plein bord */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {activities.map((activity, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.1 * i, ease }}
            className="group relative h-[55vh] overflow-hidden cursor-pointer"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Image
              src={activity.imageUrl || ''}
              alt={activity.title}
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
            />
            <div className="absolute inset-0 bg-[#1A1A14]/40 group-hover:bg-[#1A1A14]/55 transition-colors duration-700" />

            {/* Badge featured */}
            {activity.featured && (
              <div className="absolute top-6 right-6">
                <span className="text-[0.5rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-white border border-white/50 px-3 py-1.5">
                  Recommandé
                </span>
              </div>
            )}

            {/* Contenu en bas */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-[0.55rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-white/50 mb-2">
                {activity.subtitle}
              </p>
              <h3 className="text-[1.6rem] md:text-[1.8rem] font-[family-name:var(--font-cormorant)] font-light text-white tracking-[0.08em] uppercase mb-3">
                {activity.title}
              </h3>
              <div className="w-8 h-px bg-white/40 mb-4" />
              <p className="text-[0.58rem] tracking-[0.2em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-white/60 leading-[2] max-w-xs mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {activity.description}
              </p>
              <div className="hidden">
                <span className="text-[0.65rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-white border border-white/40 px-4 py-2 group-hover:bg-white group-hover:text-[#1A1A14] transition-all duration-500">
                  En savoir plus
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
