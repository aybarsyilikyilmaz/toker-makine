import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { ACTIVE_LOCALES, LOCALE_INFO, PAGE_KEYS, localizedPath, type PageKey } from '@/i18n/routes'

const PRIORITY: Record<PageKey, number> = { home: 1, services: 0.8, machines: 0.8, about: 0.5, contact: 0.7 }

const absolute = (path: string) => (path === '/' ? SITE_URL : `${SITE_URL}${path}`)

// Her sayfanın her dildeki adresi; her kayıtta diğer dillerin adresleri de (hreflang) yer alır
export default function sitemap(): MetadataRoute.Sitemap {
  return ACTIVE_LOCALES.flatMap((locale) =>
    PAGE_KEYS.map((page) => ({
      url: absolute(localizedPath(locale, page)),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: PRIORITY[page],
      alternates: {
        languages: Object.fromEntries(
          ACTIVE_LOCALES.map((l) => [LOCALE_INFO[l].bcp47, absolute(localizedPath(l, page))]),
        ),
      },
    })),
  )
}
