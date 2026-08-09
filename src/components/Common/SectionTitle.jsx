import React from 'react';
import { motion } from 'framer-motion';
import styles from './SectionTitle.module.css';

export const SectionTitle = ({ label, title, subtitle, align = 'center', light = false }) => {
  return (
    <div className={`${styles.sectionTitleGroup} ${styles[align]} ${light ? styles.lightTheme : styles.darkTheme}`}>
      {label && (
        <motion.div
          className={styles.labelWrapper}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.accentDot} />
          <span className={styles.label}>{label}</span>
          <span className={styles.accentLine} />
        </motion.div>
      )}

      {title && (
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
