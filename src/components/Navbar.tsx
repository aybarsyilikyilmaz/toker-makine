'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/hizmetler', label: 'Hizmetler' },
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/iletisim', label: 'İletişim' }
  ];

  return (
    <nav className={`${styles.root} ${scrolled ? styles.hidden : styles.show}`}>
      <div className={styles.container}>
        {/* Left Side: Logo only */}
        <div className={styles.navMain}>
          <Link href="/" className={styles.logoLink}>
            <img src="/toker-logo.png" alt="Toker Teknik Logo" className={styles.logo} />
          </Link>
        </div>

        {/* Right Side: Menu + CTA */}
        <div className={styles.navRight}>
          <ul className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={`${styles.link} ${pathname === link.href ? styles.active : ''}`} 
                  onClick={() => setMenuOpen(false)}
                >
                  <span className={styles.linkText}>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menüyü aç/kapat"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
