import type { Metadata } from 'next';
import styles from './hakkimizda.module.css';

export const metadata: Metadata = {
  title: "Hakkımızda | Toker Teknik - Deneyim ve Güven",
  description: "Talaşlı imalat ve makine bakım onarım sektöründe yılların deneyimi, hassas üretim kabiliyeti ve güçlü makine parkurumuz ile çözüm ortağınız Toker Teknik.",
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* Introduction Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h1 className={styles.centeredTitle}>Hakkımızda</h1>
            <div className="title-line"></div>
            <p className="text-gray" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              Deneyim, Hassasiyet ve Güven ile Endüstriyel Üretim Yolculuğumuz.
            </p>
          </div>

          <div className={styles.plainContent}>
            {/* Section 1 */}
            <div className={styles.aboutBlock}>
              <div className={styles.blockInner}>
                <h2>Biz Kimiz?</h2>
                <div className={styles.textGroup}>
                  <p>
                    Firmamız, talaşlı imalat alanında kaliteli, güvenilir ve çözüm odaklı hizmet sunmak amacıyla faaliyet göstermektedir. 
                    Sahip olduğumuz tecrübe ve güçlü makine parkurumuz ile farklı sektörlere yönelik hassas ve yüksek standartlarda üretim gerçekleştirmekteyiz. 
                    Geniş makine altyapımız sayesinde büyük çaplı ve uzun parça işleme kabiliyetine sahip olup hem konvansiyonel hem de CNC tezgahlarımızla 
                    müşteri taleplerine esnek ve hızlı çözümler sunmaktayız.
                  </p>
                  <p>
                    Üretim süreçlerimizde kalite, süreklilik ve müşteri memnuniyeti önceliğimizdir. 
                    Makine bakım ve onarım hizmetlerimizle, sadece üretim değil aynı zamanda işletmelerin sürdürülebilirliği için de destek sağlamaktayız. 
                    Her projede titizlikle çalışarak, zamanında teslim ve yüksek kalite prensibinden ödün vermeden ilerlemekteyiz.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Section 2 */}
            <div className={styles.aboutBlock}>
              <div className={styles.blockInner}>
                <h2>Vizyonumuz & Misyonumuz</h2>
                <div className={styles.textGroup}>
                  <p>
                    Firmamız, talaşlı imalat ve makine bakım-onarım alanlarında, sektördeki deneyimiyle güvenilir ve kaliteli hizmet sunmaktadır. 
                    Geniş makine parkurumuz ile farklı ölçü ve özelliklerde parçaların hassas üretimini gerçekleştirmekteyiz. 
                    Konvansiyonel ve CNC tezgahlarımız sayesinde müşteri taleplerine hızlı ve esnek çözümler sunarken, 
                    bakım ve onarım hizmetlerimizle makinelerin verimli ve uzun ömürlü çalışmasına katkı sağlıyoruz.
                  </p>
                  <p>
                    Her projeye titizlikle yaklaşarak, yüksek kalite standartlarında üretim yapmayı ve 
                    müşteri beklentilerini en iyi şekilde karşılamayı hedefliyoruz. 
                    Alanında deneyimli ekibimiz ve teknolojik altyapımız ile, talaşlı imalat ihtiyaçlarınıza güvenilir bir çözüm ortağı olmayı hedefliyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
