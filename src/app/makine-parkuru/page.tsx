import Image from 'next/image';
import type { Metadata } from 'next';
import styles from './makine-parkuru.module.css';

export const metadata: Metadata = {
  title: "Makine Parkurumuz | Toker Teknik - Talaşlı İmalat Kapasitesi",
  description: "CNC dik işleme merkezleri, universal torna ve freze tezgahları ile donatılmış geniş makine parkurumuzun detaylı galerisi.",
};

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

export default function MakineParkuru() {
  return (
    <div className={styles.main}>
      <section className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <h1>Makine <span>Parkurumuz</span></h1>
            <div className={styles.line}></div>
            <p>Geniş ve teknolojik makine parkurumuzla her kapasitede üretim ve bakım çözümleri.</p>
          </div>
        </div>
      </section>

      <section className={styles.galleryWrapper}>
        <div className="container">
          {MACHINE_PARKS.map((group, i) => (
            <div key={i} className={styles.machineGroup}>
              <h3 className={styles.groupTitle}>{group.category}</h3>
              <div className={styles.machineGrid}>
                {group.items.map((item, idx) => (
                  <div key={idx} className={styles.machineCard}>
                    <div className={styles.machineImageWrapper}>
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        width={600}
                        height={400}
                        className={styles.machineImage}
                        loading="lazy"
                      />
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
      </section>
    </div>
  );
}
