'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function StickyReserveButton() {
  const pathname = usePathname()
  if (pathname === '/reserver') return null

  return (
    <>
      {/* Desktop — vertical sticky right */}
      <Link
        href="/reserver"
        className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-[#6B7240] hover:bg-[#1A1A14] text-white transition-colors duration-300 px-3 py-8 text-[0.55rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-medium shadow-lg"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        Réserver
      </Link>

      {/* Mobile — bottom-right pill */}
      <Link
        href="/reserver"
        className="md:hidden fixed bottom-5 right-5 z-50 bg-[#6B7240] hover:bg-[#1A1A14] text-white transition-colors duration-300 px-7 py-3.5 text-[0.6rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-medium shadow-lg"
      >
        Réserver
      </Link>
    </>
  )
}
