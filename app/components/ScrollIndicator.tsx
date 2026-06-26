'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function ScrollIndicator() {
  return (
    <button
      onClick={() => document.getElementById('domaine')?.scrollIntoView({ behavior: 'smooth' })}
      className="flex flex-col items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors group"
    >
      <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </button>
  )
}
