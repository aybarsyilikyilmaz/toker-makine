import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import styles from './hizmetler.module.css';

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Toker Teknik - Talaşlı İmalat ve Bakım",
  description: "Talaşlı imalat, CNC işleme, makine bakım, onarım ve revizyon hizmetlerimizle endüstriyel çözümler sunuyoruz. Toker Teknik uzman kadrosuyla yanınızda.",
};

const SERVICES_DATA = [
  {
    title: "Talaşlı İmalat",
    desc: "Talaşlı imalat kapsamında, farklı sektörlerin ihtiyaçlarına yönelik hassas ve kaliteli parça üretimi gerçekleştirmekteyiz. Geniş makine parkurumuz ve teknik altyapımız sayesinde hem tekil hem de seri üretimlerde, müşteri taleplerine uygun çözümler sunmaktayız.",
    items: [
      "Farklı ölçü ve toleranslarda parça üretimi",
      "Torna ve freze işlemleri (konvansiyonel & CNC)",
      "Büyük çaplı ve uzun parça işleme",
      "Hassas işleme ve ölçüye uygun üretim",
      "Tekil parça ve seri imalat",
      "Teknik resme uygun üretim ve revizyon işlemleri"
    ],
    img: "/images/universal-freze-tezgah.jpeg"
  },
  {
    title: "Makine Bakım ve Onarım",
    desc: "Makine bakım ve onarım hizmetlerimiz kapsamında, ekipmanların verimli, güvenli ve kesintisiz çalışmasını sağlamak amacıyla profesyonel çözümler sunmaktayız. Deneyimli ekibimiz ile arıza tespiti, bakım ve revizyon süreçlerini titizlikle yürütmekteyiz.",
    items: [
      "Periyodik bakım hizmetleri",
      "Arıza tespit ve onarım çalışmaları",
      "Parça değişimi ve revizyon işlemleri",
      "Makine performans iyileştirme çalışmaları",
      "Yerinde bakım ve servis hizmeti"
    ],
    img: "/service-maintenance.png"
  }
];

export default function ServicesPage() {
  return (
    <main className={styles.main}>
      <section className="section bg-white" style={{ paddingBottom: '80px' }}>
        <div className="container">
          <div className="section-title">
            <h2 className="text-red">Hizmetlerimiz</h2>
            <div className="title-line"></div>
            <p style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }} className="text-gray">
              Teknik mükemmeliyet ve endüstriyel uzmanlık ile çözüm ortağınız.
            </p>
          </div>

          <div className={styles.servicesContainer}>
            {SERVICES_DATA.map((service, i) => (
              <div key={i} className={`${styles.serviceBlock} ${i % 2 !== 0 ? styles.reverse : ''}`}>
                <div className={styles.serviceText}>
                  <div className={styles.titleWrapper}>
                    <div className={styles.redBar}></div>
                    <h2>{service.title}</h2>
                  </div>
                  <p>{service.desc}</p>
                  <ul className={styles.featureList}>
                    {service.items.map((item, idx) => (
                      <li key={idx}>
                        <ArrowRight size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.serviceImage}>
                  <img src={service.img} alt={service.title} className={styles.actualImage} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
