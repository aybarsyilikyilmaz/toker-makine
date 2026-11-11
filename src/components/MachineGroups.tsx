import { MACHINE_GROUPS } from '@/lib/machines';
import type { Dictionary } from '@/i18n/dictionaries';
import styles from './MachineGroups.module.css';

type Props = {
  machines: Dictionary['machines'];
  /** Kategori başlığının seviyesi: ana sayfada 3 (h2 altında), Makine Parkuru sayfasında 2 (h1 altında). */
  headingLevel?: 2 | 3;
};

export default function MachineGroups({ machines, headingLevel = 3 }: Props) {
  const GroupTitle = `h${headingLevel}` as 'h2' | 'h3';
  const CardTitle = `h${headingLevel + 1}` as 'h3' | 'h4';

  return (
    <div className={styles.mGroups}>
      {MACHINE_GROUPS.map((group, i) => (
        <div key={group.id} className={styles.mGroup}>
          <div className={styles.mHead}>
            <span className={styles.mIndex}>{String(i + 1).padStart(2, '0')}</span>
            <GroupTitle className={styles.mGroupTitle}>{machines.categories[group.id]}</GroupTitle>
          </div>
          <div className={styles.mGrid}>
            {group.items.map((item) => {
              const text = machines.items[item.id];
              return (
                <article key={item.id} className={styles.mCard}>
                  <div className={styles.mMedia}>
                    <img src={item.image} alt={text.name} loading="lazy" width={800} height={600} />
                  </div>
                  <div className={styles.mBody}>
                    <CardTitle className={styles.mName}>{text.name}</CardTitle>
                    <p className={styles.mSpec}>{text.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
