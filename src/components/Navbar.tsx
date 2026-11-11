'use client';

import { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/makine-parkuru', label: 'Makine Parkuru' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim', label: 'İletişim' },
];

// Sunucuda useLayoutEffect uyarı verdiği için tarayıcıda layout, sunucuda normal effect kullanılır.
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

type Indicator = { x: number; w: number; visible: boolean };

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [indicator, setIndicator] = useState<Indicator>({ x: 0, w: 0, visible: false });
  const [indicatorReady, setIndicatorReady] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const activeHref = NAV_LINKS.find((l) => l.href === pathname)?.href ?? null;
  const target = hovered ?? activeHref;

  // Kırmızı alt çizgiyi hedef bağlantının altına taşır.
  const placeIndicator = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const el = target ? wrap.querySelector<HTMLElement>(`[data-href="${target}"]`) : null;
    if (!el) {
      setIndicator((i) => ({ ...i, visible: false }));
      return;
    }
    const wrapRect = wrap.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    setIndicator({ x: rect.left - wrapRect.left, w: rect.width, visible: true });
  }, [target]);

  useIsoLayoutEffect(() => {
    placeIndicator();
  }, [placeIndicator]);

  // İlk konum yerleşmeden kayma animasyonu oynamasın; yazı tipi yüklenince de yeniden ölç.
  useEffect(() => {
    const id = requestAnimationFrame(() => setIndicatorReady(true));
    document.fonts?.ready.then(() => placeIndicator());
    window.addEventListener('resize', placeIndicator);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('resize', placeIndicator);
    };
  }, [placeIndicator]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Sayfa değişince (geri tuşu dahil) mobil menüyü kapat.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    if (menuOpen) window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <nav className={`${styles.root} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logoLink} aria-label="Toker Teknik ana sayfa">
          <img
            src="/toker-logo.webp"
            alt="Toker Teknik Logo"
            width={517}
            height={115}
            className={styles.logo}
          />
        </Link>

        <div ref={wrapRef} className={styles.menuWrap} onMouseLeave={() => setHovered(null)}>
          <ul id="site-menu" className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
            {NAV_LINKS.map((link, i) => {
              const isActive = link.href === activeHref;
              const isLit = hovered ? hovered === link.href : isActive;
              return (
                <li key={link.href} style={{ '--i': i } as CSSProperties}>
                  <Link
                    href={link.href}
                    data-href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`${styles.link} ${isActive ? styles.active : ''} ${isLit ? styles.lit : ''}`}
                    onMouseEnter={() => setHovered(link.href)}
                    onFocus={() => setHovered(link.href)}
                    onBlur={() => setHovered(null)}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <span
            aria-hidden="true"
            className={`${styles.indicator} ${indicatorReady ? styles.indicatorReady : ''}`}
            style={{
              transform: `translateX(${indicator.x}px)`,
              width: indicator.w,
              opacity: indicator.visible ? 1 : 0,
            }}
          />
        </div>

        <button
          type="button"
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        className={`${styles.backdrop} ${menuOpen ? styles.backdropOpen : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </nav>
  );
}
