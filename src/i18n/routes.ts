// Dil ve sayfa adresi tanımları.
// Bu dosya next.config.ts tarafından da okunduğu için '@/...' kısayolu kullanılmaz.

export const LOCALES = ['tr', 'en', 'de'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'tr';

// Yayında olan diller. Bir dilin çevirisi hazır olunca buraya eklenir.
export const ACTIVE_LOCALES: Locale[] = ['tr'];

// Her sayfanın dillere göre adres adı. Türkçe ad aynı zamanda app/[lang] altındaki klasörün adıdır.
export const PAGES = {
  home: { tr: '', en: '', de: '' },
  services: { tr: 'hizmetler', en: 'services', de: 'leistungen' },
  machines: { tr: 'makine-parkuru', en: 'machine-park', de: 'maschinenpark' },
  about: { tr: 'hakkimizda', en: 'about', de: 'ueber-uns' },
  contact: { tr: 'iletisim', en: 'contact', de: 'kontakt' },
} as const satisfies Record<string, Record<Locale, string>>;

export type PageKey = keyof typeof PAGES;
export const PAGE_KEYS = Object.keys(PAGES) as PageKey[];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

// Bir sayfanın verilen dildeki adresi. Türkçe önek almaz: /hizmetler, /en/services, /de/leistungen
export function localizedPath(locale: Locale, page: PageKey): string {
  const slug = PAGES[page][locale];
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  if (!slug) return prefix || '/';
  return `${prefix}/${slug}`;
}

// app/[lang] altındaki klasör adından (Türkçe ad) sayfa anahtarını bulur.
export function pageFromSegment(segment: string | null): PageKey | null {
  if (!segment) return 'home';
  return PAGE_KEYS.find((key) => PAGES[key].tr === segment) ?? null;
}

type Rule = { source: string; destination: string };

// Ziyaretçinin gördüğü adres → sitenin iç klasörü
export function i18nRewrites(): Rule[] {
  const rules: Rule[] = [{ source: '/', destination: `/${DEFAULT_LOCALE}` }];
  for (const key of PAGE_KEYS) {
    const internal: string = PAGES[key].tr;
    if (!internal) continue;
    rules.push({ source: `/${internal}`, destination: `/${DEFAULT_LOCALE}/${internal}` });
    for (const locale of LOCALES) {
      const slug: string = PAGES[key][locale];
      if (locale === DEFAULT_LOCALE || slug === internal) continue;
      rules.push({ source: `/${locale}/${slug}`, destination: `/${locale}/${internal}` });
    }
  }
  return rules;
}

// Aynı içeriğin ikinci bir adresi oluşmasın: /tr/... ve /en/hizmetler gibi adresler asıl adrese yönlenir
export function i18nRedirects(): (Rule & { permanent: true })[] {
  const rules: (Rule & { permanent: true })[] = [
    { source: `/${DEFAULT_LOCALE}`, destination: '/', permanent: true },
    { source: `/${DEFAULT_LOCALE}/:path*`, destination: '/:path*', permanent: true },
  ];
  for (const key of PAGE_KEYS) {
    const internal: string = PAGES[key].tr;
    if (!internal) continue;
    for (const locale of LOCALES) {
      const slug: string = PAGES[key][locale];
      if (locale === DEFAULT_LOCALE || slug === internal) continue;
      rules.push({ source: `/${locale}/${internal}`, destination: `/${locale}/${slug}`, permanent: true });
    }
  }
  return rules;
}

// Dillere ait gösterim ve SEO bilgileri
export const LOCALE_INFO: Record<Locale, { label: string; short: string; og: string; bcp47: string }> = {
  tr: { label: 'Türkçe', short: 'TR', og: 'tr_TR', bcp47: 'tr-TR' },
  en: { label: 'English', short: 'EN', og: 'en_US', bcp47: 'en-US' },
  de: { label: 'Deutsch', short: 'DE', og: 'de_DE', bcp47: 'de-DE' },
};
