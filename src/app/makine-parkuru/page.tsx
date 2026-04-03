import Image from 'next/image';
import type { Metadata } from 'next';
import styles from './makine-parkuru.module.css';

export const metadata: Metadata = {
  title: "Makine Parkurumuz | Toker Teknik - Talaşlı İmalat Kapasitesi",
  description: "CNC dik işleme merkezleri, universal torna ve freze tezgahları ile donatılmış geniş makine parkurumuzun detaylı galerisi.",
};

const ALL_IMAGES = [
  { src: "/images/cnc.jpg", title: "CNC Dik İşleme Merkezi", category: "CNC Sistemleri" },
  { src: "/images/torna2.jpeg", title: "HAAS VF2 CNC İşleme", category: "CNC Sistemleri" },
  { src: "/images/torna.jpg", title: "CNC Torna Ünitesi", category: "CNC Sistemleri" },
  { src: "/images/makine1.jpg", title: "Çap 1200 x 5000 Torna", category: "Torna Tezgahları" },
  { src: "/images/torna-universal.png", title: "Universal Torna", category: "Torna Tezgahları" },
  { src: "/images/freze-yeni.jpg", title: "Universal Freze Tezgahı", category: "Freze & Planya" },
  { src: "/images/planya-1.jpg", title: "Dik Planya - 200'lük", category: "Freze & Planya" },
  { src: "/images/planya-2.jpg", title: "Dik Planya - 320'lik", category: "Freze & Planya" },
  { src: "/images/dik-planya-200.png", title: "Dik Planya Detay", category: "Freze & Planya" },
  { src: "/images/easy-laser.png", title: "Easy-Laser Hizalama", category: "Ölçüm ve Kontrol" },
  { src: "/images/makina3.jpg", title: "Üretim Sahası", category: "Genel Saha" }
];

export default function MakineParkuru() {
  return (
    <div className={styles.main}>
      <section className={styles.header}>
        <div className="container">
          <h1>Makine <span>Parkurumuz</span></h1>
          <div className={styles.line}></div>
          <p>Yüksek kapasiteli ve hassas üretim kabiliyetimizin arkasındaki teknolojik altyapımız.</p>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.grid}>
            {ALL_IMAGES.map((img, i) => (
              <div key={i} className={styles.imageCard}>
                <div className={styles.imgWrapper}>
                  <Image 
                    src={img.src} 
                    alt={img.title} 
                    width={800} 
                    height={600} 
                    className={styles.image}
                  />
                  <div className={styles.overlay}>
                    <span className={styles.tag}>{img.category}</span>
                    <h3>{img.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
