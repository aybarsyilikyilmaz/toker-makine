import JsonLd from '@/components/JsonLd';
import MachineGroups from '@/components/MachineGroups';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import styles from './makine-parkuru.module.css';

export const metadata = pageMetadata({
  title: "Makine Parkurumuz - Talaşlı İmalat Kapasitesi",
  description: "CNC dik işleme merkezleri, universal torna ve freze tezgahları ile donatılmış geniş makine parkurumuzun detaylı galerisi.",
  path: "/makine-parkuru",
});

export default function MakineParkuru() {
  return (
    <div className={styles.main}>
      <JsonLd data={breadcrumbJsonLd("Makine Parkuru", "/makine-parkuru")} />
      <section className={`section bg-white ${styles.page}`}>
        <div className="container">
          <div className="section-title tight">
            <h1 className="text-red section-heading">Makine Parkurumuz</h1>
            <div className="title-line"></div>
            <p className="text-gray">Geniş ve teknolojik makine parkurumuzla her kapasitede üretim ve bakım çözümleri.</p>
          </div>

          <MachineGroups headingLevel={2} />
        </div>
      </section>
    </div>
  );
}
