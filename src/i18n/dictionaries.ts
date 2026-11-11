import tr from './dictionaries/tr.json';
import type { Locale } from './routes';

export type Dictionary = typeof tr;

// Her dilin metin dosyası. Yeni bir dilin çevirisi hazır olunca buraya eklenir.
const DICTIONARIES: Partial<Record<Locale, Dictionary>> = { tr };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale] ?? tr;
}
