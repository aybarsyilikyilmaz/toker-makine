import Image from 'next/image';
import type { Metadata } from 'next';
import styles from './makine-parkuru.module.css';

export const metadata: Metadata = {
  title: "Makine Parkurumuz | Toker Teknik - Talaşlı İmalat Kapasitesi",
  description: "CNC dik işleme merkezleri, universal torna ve freze tezgahları ile donatılmış geniş makine parkurumuzun detaylı galerisi.",
};

const MACHINE_PARKS = [
  {
    category: "Universal Freze, Planya ve Ekipman",
    items: [
      { name: "Universal Freze Tezgahı", image: "/images/freze-yeni.jpg", detail: "Dişli ve kanal açma işlemleri" },
      { name: "200'lük Dik Planya", image: "/images/planya-1.jpg", detail: "Hassas kama kanalı açma" },
      { name: "320'lik Dik Planya", image: "/images/planya-2.jpg", detail: "Geniş kapasite kama kanalı açma" },
      { name: "Easy-Laser Kaplin Ayar Cihazı", image: "/images/easy-laser.png", detail: "Profesyonel kaplin ayar ve ölçüm sistemi" }
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
