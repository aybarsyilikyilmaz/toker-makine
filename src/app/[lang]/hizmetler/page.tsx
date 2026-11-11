import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale } from '@/i18n/routes';
import { Check } from 'lucide-react';
import styles from './hizmetler.module.css';

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getDictionary(lang).servicesPage;
  return pageMetadata({ locale: lang, page: 'services', title: meta.title, description: meta.description });
}

// Hizmet görselleri (sırası dil dosyasındaki hizmet sırasıyla aynı)
const SERVICE_IMAGES = ['/images/universal-freze-tezgah.webp', '/service-maintenance.webp'];

export default async function ServicesPage({ params }: Params) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const t = dict.servicesPage;

  return (
    <div className={styles.main}>
      <JsonLd data={breadcrumbJsonLd(lang, 'services', dict.nav.services)} />
      <section className={`section bg-white ${styles.page}`}>
        <div className="container">
          <div className="section-title tight">
            <h1 className="text-red section-heading">{t.title}</h1>
            <div className="title-line"></div>
            <p className="text-gray">{t.subtitle}</p>
          </div>

          <div className={styles.services}>
            {t.services.map((service, i) => (
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
                  <img src={SERVICE_IMAGES[i]} alt={service.title} loading={i === 0 ? 'eager' : 'lazy'} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
