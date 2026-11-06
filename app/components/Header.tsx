'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { usePathname, Link } from '@/i18n/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { LanguageSwitcher } from './LanguageSwitcher'

function Logo({
  className = '',
  variant = 'dark',
}: {
  className?: string
  variant?: 'light' | 'dark'
}) {
  const src = variant === 'light' ? '/logos/logo-white.png' : '/logos/logo-noir.png'
  return <Image src={src} alt="Le Gabriel" width={200} height={56} unoptimized className={className} />
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('nav')

  const navItems = [
    { href: '/appartements' as const, label: t('appartements') },
    { href: '/services' as const, label: t('services') },
    { href: '/salle-de-sport' as const, label: t('salleDeSport') },
    { href: '/region' as const, label: t('region') },
    { href: '/actualites' as const, label: t('actualites') },
    { href: '/reserver' as const, label: t('reserver') },
    { href: '/contact' as const, label: t('contact') },
  ]

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

  const switcherVariant = isScrolled || !isHome ? 'solid' : 'hero'

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
            <div
              className="invisible hidden lg:flex items-center shrink-0 mr-2 xl:mr-4 pr-3 xl:pr-4 border-l border-transparent"
              aria-hidden="true"
              inert
            >
              <LanguageSwitcher variant={switcherVariant} />
            </div>

            <nav className="hidden lg:flex items-center gap-2.5 xl:gap-5 flex-1 min-w-0">
              {navItems.slice(0, 3).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap text-[0.6rem] tracking-[0.18em] xl:tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-medium transition-all duration-300 ${
                    pathname === item.href ? textActive : textBase
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link href="/" className="flex items-center group flex-shrink-0 mx-3 xl:mx-4">
              <Logo
                variant={isScrolled || !isHome ? 'dark' : 'light'}
                className="h-14 w-auto transition-opacity duration-500"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-2.5 xl:gap-5 flex-1 justify-end min-w-0">
              {navItems.slice(3).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap text-[0.6rem] tracking-[0.18em] xl:tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-medium transition-all duration-300 ${
                    pathname === item.href ? textActive : textBase
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div
              className={`hidden lg:flex items-center shrink-0 ml-2 xl:ml-4 pl-3 xl:pl-4 border-l ${
                isScrolled || !isHome ? 'border-[#1A1A14]/15' : 'border-white/25'
              }`}
            >
              <LanguageSwitcher variant={switcherVariant} />
            </div>

            <div className="lg:hidden flex items-center gap-4">
              <LanguageSwitcher variant={switcherVariant} />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`transition-colors ${mobileIconColor}`}
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#FAF8F3] flex flex-col items-center justify-center gap-8"
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
                className={`whitespace-nowrap text-[0.75rem] tracking-[0.4em] uppercase font-[family-name:var(--font-montserrat)] font-normal transition-colors ${
                  pathname === item.href
                    ? 'text-[#6B7240]'
                    : 'text-[#1A1A14]/70 hover:text-[#6B7240]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 pt-6 border-t border-[#E8E4DC]">
              <LanguageSwitcher variant="menu" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
