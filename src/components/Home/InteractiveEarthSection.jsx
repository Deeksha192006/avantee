import React from 'react';
import { motion } from 'framer-motion';
import { FaTint, FaCloud, FaBolt, FaRecycle, FaGlobe } from 'react-icons/fa';
import { useTranslation } from '../../context/LanguageContext';
import { SectionTitle } from '../Common/SectionTitle';
import { GridBackground } from '../Common/GridBackground';
import { AnimatedCounter } from '../Common/AnimatedCounter';
import styles from './InteractiveEarthSection.module.css';

export const InteractiveEarthSection = () => {
  const { t } = useTranslation();

  return (
    <section className={`section-padding ${styles.earthWrapper}`}>
      <GridBackground variant="grid" dark={true} opacity={0.08} />

      {/* Background Animated Particles */}
      <div className={styles.bgGlow} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <SectionTitle
          label={t('sustainability.badge', 'Impact Metrics')}
          title={t('sustainability.title', 'Measurable Environmental Stewardship')}
          subtitle={t('sustainability.subtitle')}
          dark={true}
        />

        <div className={styles.earthGrid}>
          {/* Left Interactive Animated Earth Canvas / Sphere */}
          <motion.div
            className={styles.earthSphereContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.earthOrb}>
              <motion.div
                className={styles.earthTexture}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />
              <div className={styles.atmosphereGlow} />
              <div className={styles.centerBadge}>
                <FaGlobe className={styles.globeCenterIcon} />
                <span>CIRCULAR ECONOMY</span>
              </div>
            </div>
          </motion.div>

          {/* Right Live Counter Stats */}
          <div className={styles.statsGrid}>
            <motion.div
              className={styles.statCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.1 }}
            >
              <div className={styles.iconWrapper}><FaTint /></div>
              <div className={styles.statVal}>
                <AnimatedCounter value="480" suffix="M+" duration={2.5} />
              </div>
              <div className={styles.statName}>{t('sustainability.waterSaved', 'Gallons Water Saved')}</div>
            </motion.div>

            <motion.div
              className={styles.statCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.2 }}
            >
              <div className={styles.iconWrapperGold}><FaCloud /></div>
              <div className={styles.statVal}>
                <AnimatedCounter value="950" suffix="K+" duration={2.2} />
              </div>
              <div className={styles.statName}>{t('sustainability.co2Reduced', 'Kg CO2 Emissions Prevented')}</div>
            </motion.div>

            <motion.div
              className={styles.statCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.3 }}
            >
              <div className={styles.iconWrapper}><FaBolt /></div>
              <div className={styles.statVal}>
                <AnimatedCounter value="320" suffix="M" duration={2} />
              </div>
              <div className={styles.statName}>{t('sustainability.energySaved', 'kWh Clean Energy Utilized')}</div>
            </motion.div>

            <motion.div
              className={styles.statCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.4 }}
            >
              <div className={styles.iconWrapperGold}><FaRecycle /></div>
              <div className={styles.statVal}>
                <AnimatedCounter value="5.2" suffix="B+" duration={2.8} />
              </div>
              <div className={styles.statName}>{t('sustainability.wasteRecycled', 'Billion Plastic Bottles Recycled')}</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

