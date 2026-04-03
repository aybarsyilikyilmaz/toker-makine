'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MapPin, Phone, Mail, Smartphone, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const pathname = usePathname();

  const kurumsalLinks = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/hizmetler', label: 'Hizmetler' },
    { href: '/makine-parkuru', label: 'Makine Parkuru' },
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/iletisim', label: 'İletişim' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.colLogo}>
          <div className={styles.logo}>
            <img src="/toker-logo.png" alt="Toker Teknik Logo" className={styles.logoImage} />
          </div>
          <p className={styles.aboutText}>
            TOKER TEKNİK MAKİNA VE BAKIM HİZMETLERİ LTD.ŞTİ. olarak uzman kadromuz ve geniş makine parkurumuz ile güvenilir çözüm ortağınızız.
          </p>
          <div className={styles.socials}>
            <a href="https://wa.me/905325721261" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={22} /></a>
            <a href="mailto:info@tokerteknikmakina.com" aria-label="Email"><Mail size={22} /></a>
            <a href="https://www.linkedin.com/company/toker-teknik-makina-ve-bak%C4%B1m-hizmetleri-ltd-%C5%9Fti/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>

        <div className={styles.colLinks}>
          <h3>Kurumsal</h3>
          <ul className={styles.links}>
            {kurumsalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={pathname === link.href ? styles.active : ''}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.colLinks}>
          <h3>Hizmetler</h3>
          <ul className={styles.links}>
            <li><Link href="/hizmetler" className={pathname === '/hizmetler' ? styles.active : ''}>Talaşlı İmalat</Link></li>
            <li><Link href="/hizmetler" className={pathname === '/hizmetler' ? styles.active : ''}>Bakım Onarım</Link></li>
            <li><Link href="/hizmetler" className={pathname === '/hizmetler' ? styles.active : ''}>Revizyon</Link></li>
          </ul>
        </div>

        <div className={styles.colContact}>
          <h3>İletişim Bilgileri</h3>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={22} className="text-red" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sultan+Orhan+Mah.+Hasköy+Sanayi+Sitesi+NO:11A/15+Gebze+Kocaeli"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Sultan Orhan Mah. Hasköy Sanayi Sitesi NO:11A/15 Gebze / Kocaeli
              </a>
            </li>
            <li>
              <Phone size={20} className="text-red" />
              <span>0262 646 56 39</span>
            </li>
            <li>
              <MessageCircle size={20} className="text-red" />
              <a href="https://wa.me/905325721261" target="_blank" rel="noreferrer" className={styles.wpLabel}>0532 572 12 61</a>
            </li>
            <li>
              <Mail size={20} className="text-red" />
              <span style={{ fontSize: '0.85rem' }}>info@tokerteknikmakina.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomContent}`}>
          <p>&copy; {new Date().getFullYear()} Toker Teknik. Tüm hakları saklıdır.</p>
          <p className={styles.developerCredit}>
            Developed and Designed by{' '}
            <a href="https://wetase.com" target="_blank" rel="noreferrer">
              Wetase Yazılım
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
