import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Preloader.module.css';

import { AvanteeLogo } from './AvanteeLogo';

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
        {/* Exact User-Provided Logo Image */}
        <motion.div
          className={styles.logoWrapper}
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <AvanteeLogo width={360} />
        </motion.div>

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
