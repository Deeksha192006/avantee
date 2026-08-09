import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDumpster, FaWater, FaMicrochip, FaSyncAlt, FaFillDrip, FaMicroscope } from 'react-icons/fa';
import { useTranslation } from '../../context/LanguageContext';
import { SectionTitle } from '../Common/SectionTitle';
import { GridBackground } from '../Common/GridBackground';
import styles from './ProcessTimelineSection.module.css';

export const ProcessTimelineSection = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Waste Collection & Sorting',
      desc: 'Ethically recovering PET plastic bottles and pre-consumer industrial fabric scraps.',
      icon: <FaDumpster />
    },
    {
      num: '02',
      title: 'Eco-Friendly Shredding',
      desc: 'Purifying polymer chips using non-toxic closed-loop water treatment.',
      icon: <FaWater />
    },
    {
      num: '03',
      title: 'Recycled Staple Fibres',
      desc: 'Extruding clean polymer into micro-denier staple staple fibres.',
      icon: <FaMicrochip />
    },
    {
      num: '04',
      title: 'Ring Spinning Yarns',
      desc: 'Spinning consistent, uniform yarns across diverse count ranges.',
      icon: <FaSyncAlt />
    },
    {
      num: '05',
      title: 'Sustainable Weaving & Dyeing',
      desc: 'Creating soft, durable fabrics with zero-water dope-dyeing technology.',
      icon: <FaFillDrip />
    },
    {
      num: '06',
      title: 'Quality Check & Delivery',
      desc: 'Spectrophotometer testing for ultimate tensile strength & global export dispatch.',
      icon: <FaMicroscope />
    }
  ];

  return (
    <section className={`section-padding ${styles.processWrapper}`}>
      <GridBackground variant="grid" dark={true} opacity={0.08} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <SectionTitle
          label={t('process.badge', 'Circular Workflow')}
          title={t('process.title', 'Our 6-Step Manufacturing Process')}
          subtitle="From waste PET bottles to high-tenacity yarns, witness our closed-loop transformation."
          dark={true}
        />

        {/* Timeline Desktop & Mobile Grid */}
        <div className={styles.timelineGrid}>
          {steps.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <motion.div
                key={step.num}
                className={`${styles.stepCard} ${isActive ? styles.activeCard : ''}`}
                onClick={() => setActiveStep(idx)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                data-cursor="hover"
                data-cursor-text="Select"
              >
                <div className={styles.cardHeader}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <div className={styles.iconCircle}>{step.icon}</div>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
                <div className={styles.glowLine} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
