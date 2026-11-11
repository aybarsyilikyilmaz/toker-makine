import Link from 'next/link';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { PAGE_KEYS, localizedPath, type Locale } from '@/i18n/routes';
import type { Dictionary } from '@/i18n/dictionaries';
import styles from './Footer.module.css';

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Sultan+Orhan+Mah.+Hasköy+Sanayi+Sitesi+NO:11A/15+Gebze+Kocaeli';

type FooterProps = { locale: Locale; dict: Dictionary };

export default function Footer({ locale, dict }: FooterProps) {
  const t = dict.footer;
  const corporateLinks = PAGE_KEYS.map((key) => ({ href: localizedPath(locale, key), label: dict.nav[key] }));

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.colLogo}>
          <Link href={localizedPath(locale, 'home')} className={styles.logoLink} aria-label={dict.nav.homeAria}>
            <img src="/toker-logo.webp" alt="Toker Teknik Logo" width={517} height={115} className={styles.logoImage} />
          </Link>
          <p className={styles.aboutText}>{t.about}</p>
          <div className={styles.socials}>
            <a href="https://wa.me/905325721261" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
            <a href="mailto:info@tokerteknikmakina.com" aria-label={t.email}>
              <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/toker-teknik-makina-ve-bak%C4%B1m-hizmetleri-ltd-%C5%9Fti/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>

        <nav className={styles.colLinks} aria-label={t.corporate}>
          <h3 className={styles.heading}>{t.corporate}</h3>
          <ul className={styles.links}>
            {corporateLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles.colServices} aria-label={t.services}>
          <h3 className={styles.heading}>{t.services}</h3>
          <ul className={styles.links}>
            {t.serviceLinks.map((label) => (
              <li key={label}>
                <Link href={localizedPath(locale, 'services')}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.colContact}>
          <h3 className={styles.heading}>{t.contact}</h3>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={18} aria-hidden="true" />
              <a href={MAPS_URL} target="_blank" rel="noreferrer">
                Sultan Orhan Mah. Hasköy Sanayi Sitesi NO:11A/15 Gebze / Kocaeli
              </a>
            </li>
            <li>
              <Phone size={18} aria-hidden="true" />
              <a href="tel:02626465639">0262 646 56 39</a>
            </li>
            <li>
              <MessageCircle size={18} aria-hidden="true" />
              <a href="https://wa.me/905325721261" target="_blank" rel="noreferrer">0532 572 12 61</a>
            </li>
            <li>
              <Mail size={18} aria-hidden="true" />
              <a href="mailto:info@tokerteknikmakina.com">info@tokerteknikmakina.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomContent}`}>
          <p>&copy; {new Date().getFullYear()} {t.rights}</p>
          <a href="https://anveb.com" target="_blank" rel="noopener noreferrer" className={styles.credit}>
            {t.creditBefore && <span>{t.creditBefore}</span>}
            <span className={styles.creditLogo}>
              <span className={styles.srOnly}>anveb</span>
            </span>
            {t.creditAfter && <span>{t.creditAfter}</span>}
          </a>
        </div>
      </div>
    </footer>
  );
}
