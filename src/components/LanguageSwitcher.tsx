'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Check, ChevronDown } from 'lucide-react';
import Flag from './Flag';
import { LOCALE_INFO, localizedPath, type Locale, type PageKey } from '@/i18n/routes';
import styles from './LanguageSwitcher.module.css';

type Props = {
  locale: Locale;
  locales: Locale[];
  page: PageKey;
  label: string;
  onNavigate?: () => void;
};

// Masaüstünde bayraklı açılır menü, mobil menüde bayraklı hap düğmeler
export default function LanguageSwitcher({ locale, locales, page, label, onNavigate }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Dışarı tıklayınca ya da Esc ile kapanır
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const choose = () => {
    setOpen(false);
    onNavigate?.();
  };

  const linkProps = (code: Locale) => ({
    href: localizedPath(code, page),
    hrefLang: LOCALE_INFO[code].bcp47,
    lang: code,
    'aria-current': code === locale ? ('true' as const) : undefined,
    onClick: choose,
  });

  return (
    <div ref={rootRef} className={styles.root}>
      {/* Masaüstü: açılır menü */}
      <div className={styles.dropdown}>
        <button
          type="button"
          className={`${styles.trigger} ${open ? styles.triggerOpen : ''}`}
          aria-haspopup="true"
          aria-expanded={open}
          aria-label={`${label}: ${LOCALE_INFO[locale].label}`}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={styles.flag}>
            <Flag locale={locale} />
          </span>
          <span className={styles.code}>{LOCALE_INFO[locale].short}</span>
          <ChevronDown size={14} strokeWidth={2.5} className={styles.chevron} aria-hidden="true" />
        </button>

        <ul className={`${styles.panel} ${open ? styles.panelOpen : ''}`} aria-label={label}>
          {locales.map((code) => (
            <li key={code}>
              <Link {...linkProps(code)} className={`${styles.option} ${code === locale ? styles.optionActive : ''}`} tabIndex={open ? 0 : -1}>
                <span className={styles.flag}>
                  <Flag locale={code} />
                </span>
                <span className={styles.name}>{LOCALE_INFO[code].label}</span>
                {code === locale && <Check size={16} strokeWidth={2.5} className={styles.check} aria-hidden="true" />}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobil menü: hap düğmeler */}
      <div className={styles.pills} role="group" aria-label={label}>
        {locales.map((code) => (
          <Link key={code} {...linkProps(code)} className={`${styles.pill} ${code === locale ? styles.pillActive : ''}`}>
            <span className={styles.flag}>
              <Flag locale={code} />
            </span>
            {LOCALE_INFO[code].short}
          </Link>
        ))}
      </div>
    </div>
  );
}
