import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRecycle, FaTint, FaCloud, FaBolt, FaCalculator } from 'react-icons/fa';
import { useTranslation } from '../context/LanguageContext';
import { TypingText } from '../components/Common/TypingText';
import { AnimatedCounter } from '../components/Common/AnimatedCounter';
import { SectionTitle } from '../components/Common/SectionTitle';
import { GridBackground } from '../components/Common/GridBackground';
import styles from './SustainabilityPage.module.css';

export const SustainabilityPage = () => {
  const { t } = useTranslation();
  const [tonnage, setTonnage] = useState(12000);

  const ecoTypingPhrases = [
    'Diverting 5.2 Billion PET Bottles.',
    '98% Closed-Loop Water Recycling.',
    'Zero Landfill Manufacturing Framework.',
  ];

  // Simple eco savings calculations based on yarn tonnage
  const waterSaved = Math.round(tonnage * 9600); // 9,600 liters per ton
  const co2Prevented = Math.round(tonnage * 1800); // 1,800 kg per ton
  const bottlesRecycled = Math.round(tonnage * 55000); // 55,000 PET bottles per ton

  return (
    <div className={styles.sustainabilityPageWrapper}>
      {/* Header Banner */}
      <section className={styles.pageHeader}>
        <GridBackground variant="blueprint" dark={true} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className={styles.headerBadge}>{t('sustainability.badge', 'Impact Metrics')}</span>
          <h1 className={styles.headerTitle}>
            {t('sustainability.title', 'Measurable Environmental Stewardship')}
          </h1>
          <p className={styles.headerSubtitle}>
            Our 100% closed-loop textile recycling ecosystem eliminates landfill waste and preserves precious natural resources.{' '}
            <span className={styles.typingSub}>
              <TypingText phrases={ecoTypingPhrases} speed={60} delay={2200} />
            </span>
          </p>
        </div>
      </section>

      {/* Circular Economy Infographic Section */}
      <section className={`section-padding ${styles.infographicSection}`}>
        <GridBackground variant="dots" dark={false} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <SectionTitle
            label="CLOSED-LOOP PHILOSOPHY"
            light={true}
            title="The 360° Circular Textile Framework"
          />

          {/* Infinity Loop Diagram Showcase */}
          <div className={styles.diagramWrapper}>
            <div className={styles.imageCard}>
              <img
                src="/images/circular_infinity_loop.png"
                alt="Closed-Loop Infinity Recycling Journey Diagram"
                className={styles.infinityDiagramImg}
              />
            </div>
          </div>

          <div className={styles.infographicGrid}>
            <motion.div className={styles.infoStepCard} whileHover={{ y: -6 }}>
              <div className={styles.stepNum}>01</div>
              <h3 className={styles.stepTitle}>Post-Consumer Collection</h3>
              <p className={styles.stepDesc}>Recovering PET bottles and garment cuttings before they reach landfills.</p>
            </motion.div>

            <motion.div className={styles.infoStepCard} whileHover={{ y: -6 }}>
              <div className={styles.stepNum}>02</div>
              <h3 className={styles.stepTitle}>Waterless Depolymerization</h3>
              <p className={styles.stepDesc}>Purifying synthetic and natural fibres with non-toxic closed-loop solvents.</p>
            </motion.div>

            <motion.div className={styles.infoStepCard} whileHover={{ y: -6 }}>
              <div className={styles.stepNum}>03</div>
              <h3 className={styles.stepTitle}>High-Tenacity Re-Spinning</h3>
              <p className={styles.stepDesc}>Transforming recycled micro-chips into ring-spun yarns indistinguishable from virgin cotton.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Eco Calculator */}
      <section className={`section-padding ${styles.calcSection}`}>
        <GridBackground variant="grid" dark={false} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.calcCard}>
            <div className={styles.calcHeader}>
              <FaCalculator className={styles.calcIcon} />
              <div>
                <h3 className={styles.calcTitle}>Interactive Environmental Impact Calculator</h3>
                <p className={styles.calcSub}>Estimate your annual environmental savings by sourcing Avantee Recycled Yarns.</p>
              </div>
            </div>

            <div className={styles.inputBox}>
              <label className={styles.inputLabel}>
                Target Annual Yarn Requirement: <strong>{tonnage.toLocaleString()} Metric Tons</strong>
              </label>
              <input
                type="range"
                min="100"
                max="25000"
                step="100"
                value={tonnage}
                onChange={(e) => setTonnage(Number(e.target.value))}
                className={styles.rangeSlider}
              />
            </div>

            <div className={styles.calcResultsGrid}>
              <div className={styles.resBox}>
                <FaTint className={styles.resIcon} />
                <span className={styles.resVal}>{waterSaved.toLocaleString()} L</span>
                <span className={styles.resName}>Fresh Water Saved</span>
              </div>

              <div className={styles.resBoxGold}>
                <FaCloud className={styles.resIconGold} />
                <span className={styles.resVal}>{co2Prevented.toLocaleString()} Kg</span>
                <span className={styles.resName}>CO2 Emissions Reduced</span>
              </div>

              <div className={styles.resBox}>
                <FaRecycle className={styles.resIcon} />
                <span className={styles.resVal}>{bottlesRecycled.toLocaleString()}</span>
                <span className={styles.resName}>PET Bottles Diverted</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
