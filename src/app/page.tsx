import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import styles from './page.module.css';

const LOGO_REFERENCES = [
  { name: "Marshall Boya", logo: "/logos/marshall-boya.png" },
  { name: "Polisan", logo: "/logos/logo-polisan-home-cosmetics.png" },
  { name: "Dyo", logo: "/logos/dyo.png" },
  { name: "Farplas", logo: "/logos/logo-farplas-black.svg" },
  { name: "Pulver Kimya", logo: "/logos/pulver-kimya.svg" },
  { name: "Beckers Boya", logo: "/logos/beckers_logo.svg" },
  { name: "Alfa Kimya", logo: "/logos/alfa-teknikyeni.png" },
  { name: "Belgin Madeni Yağlar", logo: "/logos/logo-belgin.png" },
  { name: "Belkim Kimya", logo: "/logos/belkim-logo.png" },
  { name: "Işık Plastik", logo: "/logos/isik-plastik.png" },
  { name: "Dizayn Mühendislik", logo: "/logos/logo-dizaynmüh.png" },
  { name: "Deka Teknik", logo: "/logos/ldeka-logo.png" },
  { name: "Burgmann Packings", logo: "/logos/bugman-packingslogo.svg" },
  { name: "CMS Makine", logo: "/logos/cms.png" },
  { name: "AkzoNobel", logo: "/logos/logo-akzonobel.webp" }
];

const MACHINE_PARKS = [
  {
    category: "CNC Dik İşleme Merkezleri",
    items: [
      { name: "NEWAY CNC Dik İşleme", image: "/images/cnc-dik-işleme-neway.jpeg", detail: "X:1100 mm / Y:600 mm / Z:600 mm" },
      { name: "HAAS VF2 CNC İşleme", image: "/images/cnc-dik-işleme-haas.jpeg", detail: "X:800 mm / Y:400 mm / Z:500 mm" }
    ]
  },
  {
    category: "Universal Torna Tezgahları",
    items: [
      { name: "Çap 1200 x 5000 Torna", image: "/images/cap-1200*5000-torna-.jpeg", detail: "Büyük çaplı ve uzun parça işleme" },
      { name: "Çap 660 x 3000 Torna", image: "/images/cap-600*3000-torna.jpeg", detail: "Universal işleme kapasitesi" }
    ]
  },
  {
    category: "Universal Freze, Planya ve Ekipman",
    items: [
      { name: "Universal Freze Tezgahı", image: "/images/universal-freze-tezgah.jpeg", detail: "Dişli ve kanal açma işlemleri" },
      { name: "200'lük Dik Planya", image: "/images/dikplanya-200.jpeg", detail: "Hassas kama kanalı açma" },
      { name: "320'lik Dik Planya", image: "/images/dikplanya-320.jpeg", detail: "Geniş kapasite kama kanalı açma" },
      { name: "Easy-Laser Kaplin Ayar Cihazı", image: "/images/easylaserkaplin.jpeg", detail: "Profesyonel kaplin ayar ve ölçüm sistemi" }
    ]
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section - Optimized Video Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={styles.heroVideo}
          >
            <source src="/toker-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className="animate-fade-in">
            Endüstriyel <span>Çözümler</span>,<br />Teknik <span>Üstünlük</span>
          </h1>
          <p className="animate-fade-in delay-1">
            Toker Teknik Makina ve Bakım Hizmetleri Ltd. Şti. ile projelerinizde yüksek hassasiyet ve güvenilir mühendislik.
          </p>

          <div className={`${styles.heroCta} animate-fade-in delay-2`}>
            <Link href="/hizmetler" className="btn-primary">
              Hizmetleri Keşfet <ArrowRight size={20} />
            </Link>
            <Link href="/iletisim" className="btn-outline" style={{ color: '#FFF', borderColor: '#FFF' }}>
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges - Optimized with Priority image fetching for near-fold */}
      <section className={styles.trustSection}>
        <div className="container">
          <div className={styles.trustGrid}>
            {[
              { id: 'precision', title: "Hassas Üretim", text: "Yüksek kalite standartlarında" },
              { id: 'engineering', title: "Mühendislik", text: "Yenilikçi teknik çözümler" },
              { id: 'quality', title: 'Endüstriyel Kalite', text: 'ISO standartlarında üretim' },
              { id: 'service', title: "Bakım & Onarım", text: "Kesintisiz işletme desteği" }
            ].map((badge) => (
              <div key={badge.id} className={styles.trustItem}>
                <div className={styles.symbolWrapper}>
                  <img
                    src={`/icons/${badge.id}.png`}
                    alt={badge.title}
                    width={80}
                    height={80}
                    loading="eager"
                  />
                </div>
                <div className={styles.textWrapper}>
                  <h3 className={styles.trustTitle}>{badge.title}</h3>
                  <p className={styles.trustText}>{badge.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hakkımızda Section */}
      <section className="section bg-light" id="hakkimizda">
        <div className="container">
          <div className="section-title">
            <h2 className="text-red">Hakkımızda</h2>
            <div className="title-line"></div>
          </div>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <p className="text-gray" style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Toker Teknik Makina, talaşlı imalat alanında kaliteli, güvenilir ve çözüm odaklı hizmet sunmak amacıyla faaliyet göstermektedir. Sahip olduğumuz tecrübe ve güçlü makine parkurumuz ile farklı sektörlere yönelik hassas ve yüksek standartlarda üretim gerçekleştirmekteyiz.
            </p>
            <p className="text-gray" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Geniş makine altyapımız sayesinde büyük çaplı ve uzun parça işleme kabiliyetine sahip olup hem konvansiyonel hem de CNC tezgahlarımızla müşteri taleplerine esnek ve hızlı çözümler sunmaktayız. Bakım ve onarım hizmetlerimizle de makinelerin verimli çalışmasına katkı sağlıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Makine Parkuru Section - New Visual Layout */}
      <section className="section bg-white" style={{ paddingTop: '100px' }}>
        <div className="container">
          <div className="section-title">
            <h2 className="text-red">Makine Parkurumuz</h2>
            <div className="title-line"></div>
            <p>Geniş ve teknolojik makine parkurumuzla her kapasitede üretim ve bakım çözümleri.</p>
          </div>

          <div className={styles.machineGallery}>
            {MACHINE_PARKS.map((group, i) => (
              <div key={i} className={styles.machineGroup}>
                <h3 className={styles.groupTitle}>{group.category}</h3>
                <div className={styles.machineGrid}>
                  {group.items.map((item, idx) => (
                    <div key={idx} className={styles.machineCard}>
                      <div className={styles.machineImageWrapper}>
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className={styles.machineImage} 
                            loading="lazy" 
                          />
                        ) : (
                          <div className={styles.noImage}>
                            <span>GÖRSEL HAZIRLANIYOR</span>
                          </div>
                        )}
                        <div className={styles.cardOverlay}>
                          <p>{item.detail}</p>
                        </div>
                      </div>
                      <div className={styles.machineInfo}>
                        <h4>{item.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referanslar Section - Updated with Logos and lazy loading */}
      <section className="section bg-light">
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
