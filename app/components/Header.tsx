'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/appartements', label: 'Appartements' },
  { href: '/services', label: 'Services' },
  { href: '/region', label: 'La Région' },
  { href: '/reserver', label: 'Réserver' },
  { href: '/contact', label: 'Contact' },
]

function Logo({
  className = '',
  variant = 'dark',
}: {
  className?: string
  variant?: 'light' | 'dark'
}) {
  const src = variant === 'light' ? '/logo-white.png' : '/logo.png'
  return <img src={src} alt="Le Gabriel" className={className} />
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerBg =
    isScrolled || !isHome
      ? 'bg-[#FAF8F3]/97 backdrop-blur-sm border-b border-[#E8E4DC] py-4'
      : 'bg-transparent py-5'

  const textBase =
    isScrolled || !isHome
      ? 'text-[#1A1A14]/60 hover:text-[#6B7240]'
      : 'text-white/65 hover:text-white'

  const textActive =
    isScrolled || !isHome ? 'text-[#6B7240]' : 'text-white'

  const mobileIconColor =
    isScrolled || !isHome ? 'text-[#1A1A14]' : 'text-white'

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${headerBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Desktop nav left */}
            <nav className="hidden lg:flex items-center gap-10 flex-1">
              {navItems.slice(0, 3).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[0.65rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-normal transition-all duration-300 ${
                    pathname === item.href ? textActive : textBase
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Logo centré */}
            <Link href="/" className="flex items-center group flex-shrink-0">
              <Logo
                variant={isScrolled || !isHome ? 'dark' : 'light'}
                className="h-14 w-auto transition-opacity duration-500"
              />
            </Link>

            {/* Desktop nav right */}
            <nav className="hidden lg:flex items-center gap-10 flex-1 justify-end">
              {navItems.slice(3).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[0.65rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-normal transition-all duration-300 ${
                    pathname === item.href ? textActive : textBase
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden transition-colors ${mobileIconColor}`}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FAF8F3] flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-5 right-6 text-[#1A1A14]"
            >
              <X className="w-5 h-5" />
            </button>
            <Logo className="h-12 w-auto mb-4" />
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-[0.75rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] font-normal transition-colors ${
                  pathname === item.href
                    ? 'text-[#6B7240]'
                    : 'text-[#1A1A14]/70 hover:text-[#6B7240]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
