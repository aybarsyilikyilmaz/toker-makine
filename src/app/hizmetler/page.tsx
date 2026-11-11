import JsonLd from '@/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { Check } from 'lucide-react';
import styles from './hizmetler.module.css';

export const metadata = pageMetadata({
  title: "Hizmetlerimiz - Talaşlı İmalat ve Bakım",
  description: "Talaşlı imalat, CNC işleme, makine bakım, onarım ve revizyon hizmetlerimizle endüstriyel çözümler sunuyoruz. Toker Teknik uzman kadrosuyla yanınızda.",
  path: "/hizmetler",
});

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
    img: "/images/universal-freze-tezgah.webp"
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
    img: "/service-maintenance.webp"
  }
];

export default function ServicesPage() {
  return (
    <div className={styles.main}>
      <JsonLd data={breadcrumbJsonLd("Hizmetler", "/hizmetler")} />
      <section className={`section bg-white ${styles.page}`}>
        <div className="container">
          <div className="section-title tight">
            <h1 className="text-red section-heading">Hizmetlerimiz</h1>
            <div className="title-line"></div>
            <p className="text-gray">Teknik mükemmeliyet ve endüstriyel uzmanlık ile çözüm ortağınız.</p>
          </div>

          <div className={styles.services}>
            {SERVICES_DATA.map((service, i) => (
              <article key={service.title} className={`${styles.service} ${i % 2 !== 0 ? styles.reverse : ''}`}>
                <div className={styles.text}>
                  <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
                  <h2 className={styles.title}>{service.title}</h2>
                  <p className={styles.desc}>{service.desc}</p>
                  <ul className={styles.list}>
                    {service.items.map((item) => (
                      <li key={item}>
                        <span className={styles.check} aria-hidden="true">
                          <Check size={14} strokeWidth={3} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.media}>
                  <img src={service.img} alt={service.title} loading={i === 0 ? 'eager' : 'lazy'} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
