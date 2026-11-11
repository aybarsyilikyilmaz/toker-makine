import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { preload } from 'react-dom';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import MachineGroups from '@/components/MachineGroups';
import { organizationJsonLd } from '@/lib/seo';
import styles from './page.module.css';

// Videonun ilk karesi: sayfa açılır açılmaz görünür, video yüklenince oynamaya başlar.
const HERO_POSTER = '/toker-hero-poster.webp';

const LOGO_REFERENCES = [
  { name: "Marshall Boya", logo: "/logos/marshall-boya.webp" },
  { name: "Polisan", logo: "/logos/logo-polisan-home-cosmetics.png" },
  { name: "Dyo", logo: "/logos/dyo.png" },
  { name: "Farplas", logo: "/logos/logo-farplas-black.svg" },
  { name: "Pulver Kimya", logo: "/logos/pulver-kimya.svg" },
  { name: "Beckers Boya", logo: "/logos/beckers_logo.svg" },
  { name: "Alfa Kimya", logo: "/logos/alfa-teknikyeni.png" },
  { name: "Belgin Madeni Yağlar", logo: "/logos/logo-belgin.png" },
  { name: "Belkim Kimya", logo: "/logos/belkim-logo.png" },
  { name: "Işık Plastik", logo: "/logos/isik-plastik.png" },
  { name: "Dizayn Mühendislik", logo: "/logos/logo-dizaynmuh.png" },
  { name: "Deka Teknik", logo: "/logos/deka-logo.webp" },
  { name: "Burgmann Packings", logo: "/logos/bugman-packingslogo.svg" },
  { name: "CMS Makine", logo: "/logos/cms.png" },
  { name: "AkzoNobel", logo: "/logos/logo-akzonobel.webp" }
];

const TRUST_BADGES = [
  { id: 'precision', title: 'Hassas Üretim', text: 'Yüksek kalite standartlarında' },
  { id: 'engineering', title: 'Mühendislik', text: 'Yenilikçi teknik çözümler' },
  { id: 'quality', title: 'Endüstriyel Kalite', text: 'ISO standartlarında üretim' },
  { id: 'service', title: 'Bakım & Onarım', text: 'Kesintisiz işletme desteği' },
];

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  preload(HERO_POSTER, { as: 'image', fetchPriority: 'high' });

  return (
    <>
      <JsonLd data={organizationJsonLd} />
      {/* Hero Section - Optimized Video Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={HERO_POSTER}
            className={styles.heroVideo}
            aria-hidden="true"
          >
            <source src="/toker-hero-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
            <source src="/toker-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroStage}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span className={styles.line}>
                <span className={styles.lineInner}>
                  Endüstriyel <span className={styles.accent}>Çözümler,</span>
                </span>
              </span>{' '}
              <span className={styles.line}>
                <span className={styles.lineInner}>
                  Teknik <span className={styles.accent}>Üstünlük</span>
                </span>
              </span>
            </h1>
            <p className={styles.heroText}>
              Toker Teknik Makina ve Bakım Hizmetleri Ltd. Şti. ile projelerinizde yüksek hassasiyet ve güvenilir mühendislik.
            </p>

            <div className={styles.heroCta}>
              <Link href="/hizmetler" className="btn-primary">
                Hizmetleri Keşfet <ArrowRight size={18} className="btn-arrow" aria-hidden="true" />
              </Link>
              <Link href="/iletisim" className="btn-outline btn-on-dark">
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>

        {/* Öne çıkan yetkinlikler: masaüstünde hero içinde, mobilde hero altında */}
        <div className={styles.trust}>
          <div className="container">
            <ul className={styles.trustGrid} aria-label="Öne çıkan yetkinlikler">
              {TRUST_BADGES.map((badge) => (
                <li key={badge.id} className={styles.trustItem}>
                  <span className={styles.trustIcon}>
                    <img src={`/icons/${badge.id}.webp`} alt="" width={192} height={192} />
                  </span>
                  <div>
                    <h3 className={styles.trustTitle}>{badge.title}</h3>
                    <p className={styles.trustText}>{badge.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Hakkımızda Section */}
      <section className={`section bg-light ${styles.about}`} id="hakkimizda">
        <div className="container">
          <div className="section-title">
            <h2 className="text-red">Hakkımızda</h2>
            <div className="title-line"></div>
          </div>
          <div className={styles.aboutText}>
            <p>
              Toker Teknik Makina, talaşlı imalat alanında kaliteli, güvenilir ve çözüm odaklı hizmet sunmak amacıyla faaliyet göstermektedir. Sahip olduğumuz tecrübe ve güçlü makine parkurumuz ile farklı sektörlere yönelik hassas ve yüksek standartlarda üretim gerçekleştirmekteyiz.
            </p>
            <p>
              Geniş makine altyapımız sayesinde büyük çaplı ve uzun parça işleme kabiliyetine sahip olup hem konvansiyonel hem de CNC tezgahlarımızla müşteri taleplerine esnek ve hızlı çözümler sunmaktayız. Bakım ve onarım hizmetlerimizle de makinelerin verimli çalışmasına katkı sağlıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Makine Parkuru: kategori satırları (solda başlık, sağda 2 sütun kart) */}
      <section className={`section bg-white ${styles.tightTitle} ${styles.machinesSection}`}>
        <div className="container">
          <div className="section-title">
            <h2 className="text-red">Makine Parkurumuz</h2>
            <div className="title-line"></div>
            <p>Geniş ve teknolojik makine parkurumuzla her kapasitede üretim ve bakım çözümleri.</p>
          </div>

          <MachineGroups headingLevel={3} />
        </div>
      </section>

      {/* Referanslar Section - Updated with Logos and lazy loading */}
      <section className={`section bg-light ${styles.tightTitle}`}>
        <div className="container">
          <div className="section-title">
            <h2>Referanslarımız</h2>
            <div className="title-line"></div>
            <p>Bize güvenen ve birlikte değer ürettiğimiz çözüm ortaklarımız.</p>
          </div>
          <div className={styles.logoGrid}>
            {LOGO_REFERENCES.map((ref, i) => (
              <div key={i} className={styles.logoWrapper}>
                <img
                  src={ref.logo}
                  alt={ref.name}
                  title={ref.name}
                  className={styles.referenceLogo}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <a href="https://wa.me/905325721261" className="whatsapp-float" target="_blank" rel="noreferrer">
        <MessageCircle size={32} />
      </a>
    </>
  );
}
