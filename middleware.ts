import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  // /robots.txt, /sitemap.xml, /icon.png et les fichiers statiques
  // ne doivent pas passer par la route [locale].
  if (
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/icon.png' ||
    pathname === '/favicon.ico' ||
    /\.[a-z0-9]+$/i.test(pathname)
  ) {
    return NextResponse.next()
  }
  return intlMiddleware(request)
}

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|robots\\.txt|sitemap\\.xml|icon\\.png|.*\\..*).*)',
  ],
}
