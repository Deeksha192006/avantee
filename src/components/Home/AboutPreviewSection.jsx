import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from '../../context/LanguageContext';
import styles from './AboutPreviewSection.module.css';

export const AboutPreviewSection = () => {
  const { t } = useTranslation();

  return (
    <section className={`section-padding ${styles.aboutWrapper}`}>
      <div className="container">
        <div className={styles.aboutGrid}>
          {/* Left Parallax Overlapping Image Stack */}
          <motion.div
            className={styles.imageStack}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.primaryImgBox}>
              <img
                src="/images/avantee_mint_hoodie_spool.jpg"
                alt="AVANTEE Signature Mint Eco Hoodie & Spool"
                className={styles.primaryImg}
              />
            </div>

            <div className={styles.secondaryImgBox}>
              <img
                src="/images/avantee_ocean_sweater_spool.jpg"
                alt="AVANTEE Ocean Recycled PET Sweater & Spool"
                className={styles.secondaryImg}
              />
            </div>

            <div className={styles.badgeExperience}>
              <span className={styles.badgeYears}>10+</span>
              <div className={styles.badgeTextGroup}>
                <span className={styles.badgeTitle}>YEARS OF</span>
                <span className={styles.badgeSub}>CIRCULAR INNOVATION</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content Column */}
          <motion.div
            className={styles.contentCol}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className={styles.sectionBadge}>{t('about.badge', 'Heritage & Vision')}</span>

            <h2 className={styles.heading}>
              {t('about.title', 'Architecting the Future of Eco-Conscious Textiles')}
            </h2>

            <p className={styles.desc}>
              {t('about.desc1')}
            </p>

            <p className={styles.desc}>
              {t('about.desc2', 'We engineer GRS-certified recycled fibres, yarns, and technical textiles trusted by luxury fashion houses, automotive giants, and industrial leaders worldwide.')}
            </p>

            {/* Core Values List */}
            <div className={styles.valuesGrid}>
              <div className={styles.valueItem}>
                <FaCheckCircle className={styles.checkIcon} />
                <span>GRS & RCS Certified</span>
              </div>
              <div className={styles.valueItem}>
                <FaCheckCircle className={styles.checkIcon} />
                <span>Zero Liquid Discharge (ZLD)</span>
              </div>
              <div className={styles.valueItem}>
                <FaCheckCircle className={styles.checkIcon} />
                <span>Automated Rieter & Trützschler Lines</span>
              </div>
              <div className={styles.valueItem}>
                <FaCheckCircle className={styles.checkIcon} />
                <span>Full Supply Chain Traceability</span>
              </div>
            </div>

            <div className={styles.ctaRow}>
              <Link to="/about" className="btn-primary" data-cursor="hover" data-cursor-text="About">
                <span>Learn More About Us</span>
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
