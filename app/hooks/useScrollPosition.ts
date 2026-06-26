'use client'

import { useState, useEffect } from 'react'

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)

      // Détecter la section active
      const sections = ['hero', 'domaine', 'proprietaire', 'activites', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (position >= offsetTop - 200 && position < offsetTop + offsetHeight - 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrollPosition, activeSection }
}
