'use client'

import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

type Variant = 'hero' | 'solid' | 'menu'

export function LanguageSwitcher({ variant = 'solid' }: { variant?: Variant }) {
  const locale = useLocale()
  const pathname = usePathname()
  const t = useTranslations('common')

  const active =
    variant === 'hero'
      ? 'text-white'
      : variant === 'menu'
        ? 'text-[#6B7240]'
        : 'text-[#6B7240]'
  const idle =
    variant === 'hero'
      ? 'text-white/65 hover:text-white'
      : 'text-[#1A1A14]/50 hover:text-[#6B7240]'
  const sep = variant === 'hero' ? 'text-white/30' : 'text-[#1A1A14]/25'

  return (
    <nav
      aria-label={t('language')}
      className="flex items-center gap-1.5"
    >
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1.5">
          {i > 0 && <span className={`text-[0.45rem] ${sep}`}>·</span>}
          <Link
            href={pathname}
            locale={l}
            hrefLang={l}
            className={`text-[0.55rem] tracking-[0.28em] uppercase font-[family-name:var(--font-montserrat)] font-medium transition-colors duration-300 ${
              locale === l ? active : idle
            }`}
          >
            {l.toUpperCase()}
          </Link>
        </span>
      ))}
    </nav>
  )
}
