import React from 'react';
import styles from './MarqueeSection.module.css';

export const MarqueeSection = () => {
  const brandLogos = [
    { name: 'GLOBAL APPAREL CORP', code: 'GAC' },
    { name: 'ECO TEXTILES EUROPE', code: 'ETE' },
    { name: 'AUTOMOTIVE FABRICS INC', code: 'AFI' },
    { name: 'LUXURY YARN LABS', code: 'LYL' },
    { name: 'NORDIC SUSTAINABLE WEAVE', code: 'NSW' },
    { name: 'PACIFIC ECO FIBRES', code: 'PEF' },
    { name: 'INDIAN APPAREL LEADERS', code: 'IAL' },
    { name: 'MIDDLE EAST INDUSTRIAL', code: 'MEI' }
  ];

  return (
    <section className={styles.marqueeWrapper}>
      <div className={styles.marqueeHeader}>
        <span className={styles.marqueeTitle}>TRUSTED BY GLOBAL INDUSTRIAL & FASHION LEADERS</span>
      </div>

      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeContent}>
          {brandLogos.concat(brandLogos).map((brand, idx) => (
            <div key={idx} className={styles.logoBadge}>
              <div className={styles.badgeMark}>{brand.code}</div>
              <span className={styles.badgeName}>{brand.name}</span>
              <span className={styles.goldDot}>✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
