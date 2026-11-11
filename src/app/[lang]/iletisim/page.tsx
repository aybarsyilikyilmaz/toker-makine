import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale } from '@/i18n/routes';
import { MapPin, Phone, Mail, MessageCircle, Clock, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import styles from './iletisim.module.css';

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getDictionary(lang).contactPage;
  return pageMetadata({ locale: lang, page: 'contact', title: meta.title, description: meta.description });
}

// Harita adresi; {lang} kısımları haritanın arayüz dilidir (tr, en, de)
const MAP_EMBED_URL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1509.6!2d29.414!3d40.822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb21694a3d38e3%3A0xb94445842eb25dc3!2sToker%20Teknik%20Makina!5e0!3m2!1s{lang}!2str!4v1712011234567!5m2!1s{lang}!2str`;
const MAPS_PLACE_URL = 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x14cb21694a3d38e3:0xb94445842eb25dc3';
const ADDRESS = 'Sultan Orhan Mah. Hasköy Sanayi Sitesi NO:11A/15 Gebze / Kocaeli';

type ContactRow = {
  icon: LucideIcon;
  label: string;
  value: string[];
  action?: { label: string; href: string; external?: boolean };
};

export default async function IletisimPage({ params }: Params) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const t = dict.contactPage;

  // İletişim satırları: etiket ve eylem adları dil dosyasından, bilgiler sabit
  const rows: ContactRow[] = [
    {
      icon: MapPin,
      label: t.labels.address,
      value: [ADDRESS],
      action: { label: t.actions.location, href: MAPS_PLACE_URL, external: true },
    },
    {
      icon: Phone,
      label: t.labels.phone,
      value: ['0262 646 56 39'],
      action: { label: t.actions.call, href: 'tel:02626465639' },
    },
    {
      icon: MessageCircle,
      label: t.labels.gsm,
      value: ['0532 572 12 61'],
      action: { label: t.actions.whatsapp, href: 'https://wa.me/905325721261', external: true },
    },
    {
      icon: Mail,
      label: t.labels.email,
      value: ['info@tokerteknikmakina.com'],
      action: { label: t.actions.mail, href: 'mailto:info@tokerteknikmakina.com' },
    },
    { icon: Clock, label: t.labels.hours, value: t.hours },
  ];

  return (
    <div className={styles.main}>
      <JsonLd data={breadcrumbJsonLd(lang, 'contact', dict.nav.contact)} />
      <section className={`section bg-white ${styles.page}`}>
        <div className="container">
          <div className="section-title tight">
            <h1 className="text-red section-heading">{t.title}</h1>
            <div className="title-line"></div>
            <p className={`text-gray ${styles.company}`}>{t.company}</p>
          </div>

          <div className={styles.layout}>
            <ul className={styles.card}>
              {rows.map(({ icon: Icon, label, value, action }) => (
                <li key={label} className={styles.row}>
                  <span className={styles.icon} aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <div className={styles.info}>
                    <span className={styles.label}>{label}</span>
                    {value.map((line) => (
                      <span key={line} className={styles.value}>{line}</span>
                    ))}
                  </div>
                  {action && (
                    <a
                      href={action.href}
                      className={styles.action}
                      {...(action.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    >
                      {action.label} <ArrowRight size={15} aria-hidden="true" />
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <div className={styles.map}>
              <iframe
                src={MAP_EMBED_URL.replaceAll('{lang}', lang)}
                title={t.mapTitle}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
