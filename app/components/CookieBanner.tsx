'use client'

import { useEffect, useState } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = typeof window !== 'undefined' ? window.localStorage.getItem('cookie-consent') : null
    if (consent !== 'accepted' && consent !== 'declined') {
      setVisible(true)
    }
  }, [])

  const handleChoice = (choice: 'accepted' | 'declined') => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('cookie-consent', choice)
    }
    setVisible(false)

    if (choice === 'accepted' && typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      })
    }
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#FAF8F3] border-t border-[#E8E4DC]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-5 md:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-[0.65rem] md:text-[0.7rem] font-[family-name:var(--font-montserrat)] text-[#1A1A14]/80 leading-relaxed text-center md:text-left">
            Ce site utilise des cookies pour améliorer votre expérience et mesurer l&apos;audience.
          </p>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => handleChoice('declined')}
              className="text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-[#1A1A14]/70 hover:text-[#1A1A14] border border-[#E8E4DC] px-5 py-2.5 transition-colors duration-300"
            >
              Continuer sans accepter
            </button>
            <button
              onClick={() => handleChoice('accepted')}
              className="text-[0.55rem] tracking-[0.25em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-white bg-[#6B7240] hover:bg-[#505535] px-5 py-2.5 transition-colors duration-300"
            >
              Tout accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
