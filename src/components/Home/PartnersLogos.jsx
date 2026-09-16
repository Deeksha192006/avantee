import React from 'react';
import { FaShieldAlt, FaAward } from 'react-icons/fa';
import styles from './PartnersLogos.module.css';

export const PartnersLogos = () => {
  const certifications = [
    { title: 'Global Recycled Standard', code: 'GRS v4.0 Certified', icon: <FaAward /> },
    { title: 'Recycling Claim Standard', code: 'RCS Certified', icon: <FaShieldAlt /> },
  ];

  return (
    <section className={styles.partnersWrapper}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.title}>INTERNATIONAL COMPLIANCE & QUALITY CERTIFICATIONS</span>
        </div>

        <div className={styles.certGrid}>
          {certifications.map((item, idx) => (
            <div key={idx} className={styles.certCard}>
              <div className={styles.iconCircle}>{item.icon}</div>
              <div>
                <h4 className={styles.certTitle}>{item.title}</h4>
                <span className={styles.certCode}>{item.code}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
