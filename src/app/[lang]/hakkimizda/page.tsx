import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale } from '@/i18n/routes';
import styles from './hakkimizda.module.css';

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getDictionary(lang).aboutPage;
  return pageMetadata({ locale: lang, page: 'about', title: meta.title, description: meta.description });
}

export default async function AboutPage({ params }: Params) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const t = dict.aboutPage;

  return (
    <div className={styles.main}>
      <JsonLd data={breadcrumbJsonLd(lang, 'about', dict.nav.about)} />
      <section className={`section bg-white ${styles.page}`}>
        <div className="container">
          <div className="section-title tight">
            <h1 className="text-red section-heading">{t.title}</h1>
            <div className="title-line"></div>
            <p className="text-gray">{t.subtitle}</p>
          </div>

          <div className={styles.blocks}>
            {t.blocks.map((block, i) => (
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
