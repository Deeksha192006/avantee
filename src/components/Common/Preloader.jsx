import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Preloader.module.css';

import { AvanteeLogoMark } from './AvanteeLogo';

export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        const step = Math.floor(Math.random() * 12) + 5;
        return Math.min(prev + step, 100);
      });
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className={styles.preloaderScreen}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className={styles.loaderContent}>
        {/* Animated Brand Emblem */}
        <motion.div
          className={styles.logoBadgeWrapper}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.emblemCircle}>
            <svg viewBox="0 0 100 100" className={styles.svgCircle}>
              <circle
                cx="50"
                cy="50"
                r="45"
                className={styles.bgCircle}
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                className={styles.progressCircle}
                style={{
                  strokeDashoffset: 283 - (283 * progress) / 100,
                }}
              />
            </svg>
            <div className={styles.logoLetter}>
              <AvanteeLogoMark size={54} />
            </div>
          </div>
        </motion.div>

        {/* Corporate Title & Tagline */}
        <motion.h1
          className={styles.brandTitle}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          AVANTEE
        </motion.h1>

        <p className={styles.subtitle}>WHERE VARIETY MEETS EXCELLENCE</p>

        {/* Counter Percentage */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBarTrack}>
            <motion.div
              className={styles.progressBarFill}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className={styles.counterText}>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
