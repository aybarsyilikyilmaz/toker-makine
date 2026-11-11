import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL, LEGAL_NAME, LINKEDIN_URL } from './site';

type PageSeo = { title: string; description: string; path: string };

// src/app/opengraph-image.jpg dosyasından üretilen paylaşım görseli
const OG_IMAGE = {
  url: '/opengraph-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Toker Teknik - Talaşlı İmalat, Makine Bakım ve Onarım Hizmetleri',
};

// Alt sayfalar için meta bilgisi: başlık, açıklama, canonical adres ve paylaşım önizlemesi.
export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: 'tr_TR',
      type: 'website',
      images: [OG_IMAGE],
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [OG_IMAGE] },
  };
}

// Ana sayfadaki kurum ve site bilgisi (JSON-LD).
export const organizationJsonLd = {
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
      inLanguage: 'tr-TR',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

// Alt sayfalar için konum zinciri: Ana Sayfa > Sayfa (JSON-LD).
export function breadcrumbJsonLd(name: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}
