import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/LanguageContext';
import { TypingText } from '../components/Common/TypingText';
import { AnimatedCounter } from '../components/Common/AnimatedCounter';
import { SectionTitle } from '../components/Common/SectionTitle';
import { GridBackground } from '../components/Common/GridBackground';
import styles from './FacilitiesPage.module.css';

export const FacilitiesPage = () => {
  const { t } = useTranslation();

  const facilityTypingPhrases = [
    '500,000 Sq. Ft. Eco Industrial Complex.',
    'Swiss Rieter Ring Spinning Technology.',
    'Uster Quality Control & Spectrophotometry.',
  ];

  const machines = [
    {
      name: 'Automated Loom Weaving Complex',
      specs: 'High-Precision Automated Looms',
      desc: 'Swiss-engineered weaving machinery producing high-density wool, silk, and recycled cotton suit fabric materials.',
      image: '/images/textile_weave_loom.png',
    },
    {
      name: 'Trützschler High-Production Carding',
      specs: 'TC-19i Smart Carding Units',
      desc: 'Automatic nep-control sensors and continuous web monitoring ensure micro-denier staple fibre alignment for suiting cloth.',
      image: '/images/suit_materials_showcase.png',
    },
    {
      name: 'Uster Spectro-Quality Testing Lab',
      specs: 'Uster Tester 6 & Tensorapid 5',
      desc: 'Climate-controlled analytical lab conducting 100% online capacitive quality testing for fabric unevenness and tensile strength.',
      image: '/images/tailored_blazer_material.png',
    }
  ];

  const galleryImages = [
    { src: '/images/textile_weave_loom.png', title: 'Automated Weaving Loom Complex' },
    { src: '/images/luxury_cloth_emerald.png', title: 'Recycled Emerald Wool-Silk Cloth Storage' },
    { src: '/images/eco_material_rolls.png', title: 'Stacked Wool & Velvet Fabric Material Storage' },
    { src: '/images/folded_cotton_fabrics.png', title: 'Dress Shirt Fabric Quality Testing Lab' },
  ];

  return (
    <div className={styles.facilitiesWrapper}>
      {/* Header */}
      <section className={styles.pageHeader}>
        <GridBackground variant="blueprint" dark={true} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className={styles.headerBadge}>{t('facilities.badge', 'Industrial Infrastructure')}</span>
          <h1 className={styles.headerTitle}>
            {t('facilities.title', 'World-Class Automated Manufacturing Facilities')}
          </h1>
          <p className={styles.headerSubtitle}>
            Spanning over 500,000 sq. ft. of eco-zone industrial space equipped with European automated spinning and carding lines.{' '}
            <span className={styles.typingSub}>
              <TypingText phrases={facilityTypingPhrases} speed={60} delay={2200} />
            </span>
          </p>
        </div>
      </section>

      {/* Machine Cards Section */}
      <section className={`section-padding ${styles.machinesSection}`}>
        <GridBackground variant="grid" dark={false} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <SectionTitle
            label="AUTOMATED MACHINERY"
            light={true}
            title={
              <>
                High-Precision Manufacturing (<AnimatedCounter value="50" suffix="K+" duration={2} /> Spindles)
              </>
            }
          />

          <div className={styles.machineGrid}>
            {machines.map((m, idx) => (
              <motion.div
                key={m.name}
                className={styles.machineCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
              >
                <div className={styles.imgBox}>
                  <img src={m.image} alt={m.name} className={styles.img} />
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.specsBadge}>{m.specs}</span>
                  <h3 className={styles.mName}>{m.name}</h3>
                  <p className={styles.mDesc}>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Photo Gallery */}
      <section className={`section-padding ${styles.gallerySection}`}>
        <GridBackground variant="dots" dark={true} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <SectionTitle
            label="FACTORY GALLERY"
            title="Inside Avantee Facilities"
          />

          <div className={styles.galleryGrid}>
            {galleryImages.map((g, idx) => (
              <motion.div
                key={idx}
                className={styles.galleryItem}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.03 }}
                data-cursor="view"
                data-cursor-text="View"
              >
                <img src={g.src} alt={g.title} className={styles.gImg} />
                <div className={styles.gOverlay}>
                  <span className={styles.gTitle}>{g.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
