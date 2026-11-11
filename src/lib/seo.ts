import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL, LEGAL_NAME, LINKEDIN_URL } from './site';
import { ACTIVE_LOCALES, DEFAULT_LOCALE, LOCALE_INFO, localizedPath, type Locale, type PageKey } from '@/i18n/routes';
import { getDictionary } from '@/i18n/dictionaries';

// Paylaşım görseli: her dil için public/og/<dil>.jpg (yoksa Türkçe görsel kullanılır)
const OG_IMAGES: Partial<Record<Locale, string>> = { tr: '/og/tr.jpg', en: '/og/en.jpg', de: '/og/de.jpg' };

export function ogImage(locale: Locale) {
  return {
    url: OG_IMAGES[locale] ?? OG_IMAGES[DEFAULT_LOCALE]!,
    width: 1200,
    height: 630,
    alt: getDictionary(locale).meta.ogImageAlt,
  };
}

// Bir sayfanın bütün dillerdeki adresleri (hreflang). x-default: Türkçe sürüm
export function languageAlternates(page: PageKey): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of ACTIVE_LOCALES) languages[LOCALE_INFO[locale].bcp47] = localizedPath(locale, page);
  languages['x-default'] = localizedPath(DEFAULT_LOCALE, page);
  return languages;
}

type PageSeo = { locale: Locale; page: PageKey; title: string; description: string };

// Alt sayfalar için meta bilgisi: başlık, açıklama, canonical, hreflang ve paylaşım önizlemesi.
export function pageMetadata({ locale, page, title, description }: PageSeo): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const path = localizedPath(locale, page);
  const image = ogImage(locale);
  return {
    title,
    description,
    alternates: { canonical: path, languages: languageAlternates(page) },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: LOCALE_INFO[locale].og,
      type: 'website',
      images: [image],
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [image] },
  };
}

// Ana sayfadaki kurum ve site bilgisi (JSON-LD).
export function organizationJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: LEGAL_NAME,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/toker-logo.png`,
          width: 1000,
          height: 200,
        },
        sameAs: [LINKEDIN_URL],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: ACTIVE_LOCALES.map((l) => LOCALE_INFO[l].bcp47),
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  };
}

// Alt sayfalar için konum zinciri: Ana Sayfa > Sayfa (JSON-LD).
export function breadcrumbJsonLd(locale: Locale, page: PageKey, name: string) {
  const home = localizedPath(locale, 'home');
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: getDictionary(locale).breadcrumbHome, item: `${SITE_URL}${home === '/' ? '' : home}` },
      { '@type': 'ListItem', position: 2, name, item: `${SITE_URL}${localizedPath(locale, page)}` },
    ],
  };
}
