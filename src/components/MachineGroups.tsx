import { MACHINE_PARKS } from '@/lib/machines';
import styles from './MachineGroups.module.css';

type Props = {
  /** Kategori başlığının seviyesi: ana sayfada 3 (h2 altında), Makine Parkuru sayfasında 2 (h1 altında). */
  headingLevel?: 2 | 3;
};

export default function MachineGroups({ headingLevel = 3 }: Props) {
  const GroupTitle = `h${headingLevel}` as 'h2' | 'h3';
  const CardTitle = `h${headingLevel + 1}` as 'h3' | 'h4';

  return (
    <div className={styles.mGroups}>
      {MACHINE_PARKS.map((group, i) => (
        <div key={group.category} className={styles.mGroup}>
          <div className={styles.mHead}>
            <span className={styles.mIndex}>{String(i + 1).padStart(2, '0')}</span>
            <GroupTitle className={styles.mGroupTitle}>{group.category}</GroupTitle>
          </div>
          <div className={styles.mGrid}>
            {group.items.map((item) => (
              <article key={item.name} className={styles.mCard}>
                <div className={styles.mMedia}>
                  <img src={item.image} alt={item.name} loading="lazy" width={800} height={600} />
                </div>
                <div className={styles.mBody}>
                  <CardTitle className={styles.mName}>{item.name}</CardTitle>
                  <p className={styles.mSpec}>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
