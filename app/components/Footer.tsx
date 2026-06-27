'use client'

import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'

function Logo({ className = '', variant = 'dark' }: { className?: string; variant?: 'light' | 'dark' }) {
  const src = variant === 'light' ? '/logos/logo-white.png' : '/logos/logo-noir.png'
  return <img src={src} alt="Le Gabriel" className={className} />
}

const footerLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/appartements', label: 'Appartements' },
  { href: '/services', label: 'Services' },
  { href: '/region', label: 'La Région' },
  { href: '/reserver', label: 'Réserver' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="bg-[#1A1A14]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="flex flex-col items-center mb-14">
          <Logo variant="light" className="h-14 w-auto mb-4" />
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 mb-12">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.55rem] tracking-[0.35em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-white hover:text-white/80 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px flex-1 max-w-[80px] bg-white/40" />
          <span className="text-white text-xs">◆</span>
          <div className="h-px flex-1 max-w-[80px] bg-white/40" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[0.5rem] tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-white/70">
            Solenzara · Corse · contact@legabriel.fr
          </p>

          <div className="flex gap-5">
            <a href="#" className="text-white hover:text-white/80 transition-colors duration-300">
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors duration-300">
              <Facebook className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>

          <p className="text-[0.5rem] tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)] font-normal text-white/50">
            © {new Date().getFullYear()} Le Gabriel
          </p>
        </div>
      </div>
    </footer>
  )
}
