import JsonLd from '@/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { MapPin, Phone, Mail, MessageCircle, Clock, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import styles from './iletisim.module.css';

export const metadata = pageMetadata({
  title: "İletişim - Bize Ulaşın",
  description: "Toker Teknik Makina iletişim bilgileri, Hasköy Sanayi Sitesi'ndeki konumuz ve çalışma saatlerimiz. Talaşlı imalat çözümleri için bizimle iletişime geçin.",
  path: "/iletisim",
});

const MAP_EMBED_URL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1509.6!2d29.414!3d40.822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb21694a3d38e3%3A0xb94445842eb25dc3!2sToker%20Teknik%20Makina!5e0!3m2!1str!2str!4v1712011234567!5m2!1str!2str`;

type ContactRow = {
  icon: LucideIcon;
  label: string;
  value: string[];
  action?: { label: string; href: string; external?: boolean };
};

const CONTACT_ROWS: ContactRow[] = [
  {
    icon: MapPin,
    label: 'Merkez Ofis & Atölye',
    value: ['Sultan Orhan Mah. Hasköy Sanayi Sitesi NO:11A/15 Gebze / Kocaeli'],
    action: { label: 'Konum', href: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x14cb21694a3d38e3:0xb94445842eb25dc3", external: true },
  },
  {
    icon: Phone,
    label: 'Sabit Telefon',
    value: ['0262 646 56 39'],
    action: { label: 'Ara', href: 'tel:02626465639' },
  },
  {
    icon: MessageCircle,
    label: 'GSM / WhatsApp',
    value: ['0532 572 12 61'],
    action: { label: 'WhatsApp', href: 'https://wa.me/905325721261', external: true },
  },
  {
    icon: Mail,
    label: 'E-posta',
    value: ['info@tokerteknikmakina.com'],
    action: { label: 'Mail', href: 'mailto:info@tokerteknikmakina.com' },
  },
  {
    icon: Clock,
    label: 'Çalışma Saatleri',
    value: ['Hafta İçi: 08:00 - 17:30', 'Cumartesi: 08:00 - 14:00'],
  },
];

export default function IletisimPage() {
  return (
    <div className={styles.main}>
      <JsonLd data={breadcrumbJsonLd("İletişim", "/iletisim")} />
      <section className={`section bg-white ${styles.page}`}>
        <div className="container">
          <div className="section-title tight">
            <h1 className="text-red section-heading">İletişim</h1>
            <div className="title-line"></div>
            <p className={`text-gray ${styles.company}`}>TOKER TEKNİK MAKİNA VE BAKIM HİZMETLERİ LTD.ŞTİ.</p>
          </div>

          <div className={styles.layout}>
            <ul className={styles.card}>
              {CONTACT_ROWS.map(({ icon: Icon, label, value, action }) => (
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
                src={MAP_EMBED_URL}
                title="Toker Teknik Makina konumu"
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
