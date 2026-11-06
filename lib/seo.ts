import { getPathname } from '@/i18n/navigation'
import { routing, type Locale } from '@/i18n/routing'
import { getSiteUrl } from '@/lib/site'

export function localizedPath(locale: string, href: string) {
  return getPathname({
    locale: locale as Locale,
    href: href as '/',
  })
}

export function localeAlternates(locale: string, href: string) {
  const site = getSiteUrl()
  const languages: Record<string, string> = {}
  for (const l of routing.locales) {
    languages[l] = `${site}${localizedPath(l, href)}`
  }
  languages['x-default'] = `${site}${localizedPath(routing.defaultLocale, href)}`
  return {
    canonical: `${site}${localizedPath(locale, href)}`,
    languages,
  }
}
