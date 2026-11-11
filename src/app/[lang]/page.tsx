import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { preload } from 'react-dom';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import MachineGroups from '@/components/MachineGroups';
import { organizationJsonLd } from '@/lib/seo';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale, localizedPath } from '@/i18n/routes';
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

const TRUST_BADGE_IDS = ['precision', 'engineering', 'quality', 'service'] as const;

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const t = dict.home;

  preload(HERO_POSTER, { as: 'image', fetchPriority: 'high' });

  return (
    <>
      <JsonLd data={organizationJsonLd(lang)} />
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
                  {t.hero.line1} <span className={styles.accent}>{t.hero.accent1}</span>
                </span>
              </span>{' '}
              <span className={styles.line}>
                <span className={styles.lineInner}>
                  {t.hero.line2} <span className={styles.accent}>{t.hero.accent2}</span>
                </span>
              </span>
            </h1>
            <p className={styles.heroText}>
              {t.hero.text}
            </p>

            <div className={styles.heroCta}>
              <Link href={localizedPath(lang, 'services')} className="btn-primary">
                {t.hero.ctaPrimary} <ArrowRight size={18} className="btn-arrow" aria-hidden="true" />
              </Link>
              <Link href={localizedPath(lang, 'contact')} className="btn-outline btn-on-dark">
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>

        {/* Öne çıkan yetkinlikler: masaüstünde hero içinde, mobilde hero altında */}
        <div className={styles.trust}>
          <div className="container">
            <ul className={styles.trustGrid} aria-label={t.trustLabel}>
              {TRUST_BADGE_IDS.map((id) => (
                <li key={id} className={styles.trustItem}>
                  <span className={styles.trustIcon}>
                    <img src={`/icons/${id}.webp`} alt="" width={192} height={192} />
                  </span>
                  <div>
                    <h3 className={styles.trustTitle}>{t.trust[id].title}</h3>
                    <p className={styles.trustText}>{t.trust[id].text}</p>
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
            <h2 className="text-red">{t.about.title}</h2>
            <div className="title-line"></div>
          </div>
          <div className={styles.aboutText}>
            {t.about.paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Makine Parkuru: kategori satırları (solda başlık, sağda 2 sütun kart) */}
      <section className={`section bg-white ${styles.tightTitle} ${styles.machinesSection}`}>
        <div className="container">
          <div className="section-title">
            <h2 className="text-red">{t.machines.title}</h2>
            <div className="title-line"></div>
            <p>{t.machines.text}</p>
          </div>

          <MachineGroups machines={dict.machines} headingLevel={3} />
        </div>
      </section>

      {/* Referanslar Section - Updated with Logos and lazy loading */}
      <section className={`section bg-light ${styles.tightTitle}`}>
        <div className="container">
          <div className="section-title">
            <h2>{t.references.title}</h2>
            <div className="title-line"></div>
            <p>{t.references.text}</p>
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

      <a href="https://wa.me/905325721261" className="whatsapp-float" target="_blank" rel="noreferrer" aria-label={t.whatsappAria}>
        <MessageCircle size={32} />
      </a>
    </>
  );
}
