import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Smartphone, MessageCircle, Clock, ArrowRight } from 'lucide-react';
import styles from './iletisim.module.css';

export const metadata: Metadata = {
  title: "İletişim | Toker Teknik - Bize Ulaşın",
  description: "Toker Teknik Makina iletişim bilgileri, Hasköy Sanayi Sitesi'ndeki konumuz ve çalışma saatlerimiz. Talaşlı imalat çözümleri için bizimle iletişime geçin.",
};

export default function IletisimPage() {
  const address = "Sultan Orhan Mah. Hasköy Sanayi Sitesi NO:11A/15 Gebze / Kocaeli";
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.2319084224734!2d29.414436976646!3d40.8227653294719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb22c4f6b216a9%3A0xe5ed809b02a24aa7!2sSultan%20Orhan%2C%20Hask%C3%B6y%20Sanayi%20Sitesi!5e0!3m2!1str!2str!4v1712011234567!5m2!1str!2str`;

  return (
    <main className={styles.main}>
      {/* Header */}
      <section className="section bg-white" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div className="section-title">
            <h1 className={styles.centeredTitle}>İletişim</h1>
            <div className="title-line"></div>
            <p className="text-navy" style={{ fontWeight: 800, fontSize: '1.4rem', marginTop: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                TOKER TEKNİK MAKİNA VE BAKIM HİZMETLERİ LTD.ŞTİ.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section bg-white" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className={styles.contactSplit}>
            <div className={styles.contactSides}>
                {/* Contact Detail Blocks */}
                <div className={styles.contactBlock}>
                    <div className={styles.redBar}></div>
                    <div className={styles.blockContent}>
                        <h3>Merkez Ofis & Atölye</h3>
                        <div className={styles.inlineAction}>
                            <p>{address}</p>
                            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noreferrer" className={styles.linkAction}>
                                KONUM <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.contactBlock}>
                    <div className={styles.redBar}></div>
                    <div className={styles.blockContent}>
                        <h3>Telefon & GSM</h3>
                        <div className={styles.inlineAction}>
                            <p>Sabit: 0262 646 56 39</p>
                            <a href="tel:02626465639" className={styles.linkAction}>ARA <ArrowRight size={16} /></a>
                        </div>
                        <div className={styles.inlineAction}>
                            <p>GSM: 0532 572 12 61</p>
                            <a href="https://wa.me/905325721261" target="_blank" rel="noreferrer" className={styles.linkAction}>WHATSAPP <ArrowRight size={16} /></a>
                        </div>
                    </div>
                </div>

                <div className={styles.contactBlock}>
                    <div className={styles.redBar}></div>
                    <div className={styles.blockContent}>
                        <h3>Dijital İletişim</h3>
                        <div className={styles.inlineAction}>
                            <p>Mail: info@tokerteknikmakina.com</p>
                            <a href="mailto:info@tokerteknikmakina.com" className={styles.linkAction}>MAIL <ArrowRight size={16} /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.mapWrapper}>
                <div className={styles.mapBorder}>
                    <iframe 
                        src={mapUrl}
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                {/* Working Hours */}
                <div className={styles.hoursInfo}>
                    <Clock size={20} className="text-red" />
                    <span>Hafta İçi: 08:00 - 17:30 | Cumartesi: 08:00 - 14:00</span>
                </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
