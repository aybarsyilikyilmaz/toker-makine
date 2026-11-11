import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale } from '@/i18n/routes';
import MachineGroups from '@/components/MachineGroups';
import styles from './makine-parkuru.module.css';

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getDictionary(lang).machinesPage;
  return pageMetadata({ locale: lang, page: 'machines', title: meta.title, description: meta.description });
}

export default async function MakineParkuru({ params }: Params) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const t = dict.machinesPage;

  return (
    <div className={styles.main}>
      <JsonLd data={breadcrumbJsonLd(lang, 'machines', dict.nav.machines)} />
      <section className={`section bg-white ${styles.page}`}>
        <div className="container">
          <div className="section-title tight">
            <h1 className="text-red section-heading">{t.title}</h1>
            <div className="title-line"></div>
            <p className="text-gray">{t.subtitle}</p>
          </div>

          <MachineGroups machines={dict.machines} headingLevel={2} />
        </div>
      </section>
    </div>
  );
}
