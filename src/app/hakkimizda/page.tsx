import JsonLd from '@/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import styles from './hakkimizda.module.css';

export const metadata = pageMetadata({
  title: "Hakkımızda - Deneyim ve Güven",
  description: "Talaşlı imalat ve makine bakım onarım sektöründe yılların deneyimi, hassas üretim kabiliyeti ve güçlü makine parkurumuz ile çözüm ortağınız Toker Teknik.",
  path: "/hakkimizda",
});

const ABOUT_BLOCKS = [
  {
    title: "Biz Kimiz?",
    paragraphs: [
      "Firmamız, talaşlı imalat alanında kaliteli, güvenilir ve çözüm odaklı hizmet sunmak amacıyla faaliyet göstermektedir. Sahip olduğumuz tecrübe ve güçlü makine parkurumuz ile farklı sektörlere yönelik hassas ve yüksek standartlarda üretim gerçekleştirmekteyiz. Geniş makine altyapımız sayesinde büyük çaplı ve uzun parça işleme kabiliyetine sahip olup hem konvansiyonel hem de CNC tezgahlarımızla müşteri taleplerine esnek ve hızlı çözümler sunmaktayız.",
      "Üretim süreçlerimizde kalite, süreklilik ve müşteri memnuniyeti önceliğimizdir. Makine bakım ve onarım hizmetlerimizle, sadece üretim değil aynı zamanda işletmelerin sürdürülebilirliği için de destek sağlamaktayız. Her projede titizlikle çalışarak, zamanında teslim ve yüksek kalite prensibinden ödün vermeden ilerlemekteyiz.",
    ],
  },
  {
    title: "Vizyonumuz & Misyonumuz",
    paragraphs: [
      "Firmamız, talaşlı imalat ve makine bakım-onarım alanlarında, sektördeki deneyimiyle güvenilir ve kaliteli hizmet sunmaktadır. Geniş makine parkurumuz ile farklı ölçü ve özelliklerde parçaların hassas üretimini gerçekleştirmekteyiz. Konvansiyonel ve CNC tezgahlarımız sayesinde müşteri taleplerine hızlı ve esnek çözümler sunarken, bakım ve onarım hizmetlerimizle makinelerin verimli ve uzun ömürlü çalışmasına katkı sağlıyoruz.",
      "Her projeye titizlikle yaklaşarak, yüksek kalite standartlarında üretim yapmayı ve müşteri beklentilerini en iyi şekilde karşılamayı hedefliyoruz. Alanında deneyimli ekibimiz ve teknolojik altyapımız ile, talaşlı imalat ihtiyaçlarınıza güvenilir bir çözüm ortağı olmayı hedefliyoruz.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className={styles.main}>
      <JsonLd data={breadcrumbJsonLd("Hakkımızda", "/hakkimizda")} />
      <section className={`section bg-white ${styles.page}`}>
        <div className="container">
          <div className="section-title tight">
            <h1 className="text-red section-heading">Hakkımızda</h1>
            <div className="title-line"></div>
            <p className="text-gray">Deneyim, Hassasiyet ve Güven ile Endüstriyel Üretim Yolculuğumuz.</p>
          </div>

          <div className={styles.blocks}>
            {ABOUT_BLOCKS.map((block, i) => (
              <section key={block.title} className={styles.block}>
                <div className={styles.head}>
                  <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
                  <h2 className={styles.title}>{block.title}</h2>
                </div>
                <div className={styles.body}>
                  {block.paragraphs.map((text) => (
                    <p key={text.slice(0, 24)}>{text}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
