import React from 'react';
import styles from './GridBackground.module.css';

export const GridBackground = ({ variant = 'grid', dark = false, opacity = 0.08 }) => {
  const themeClass = dark ? styles.darkTheme : styles.lightTheme;

  return (
    <div
      className={`${styles.gridPattern} ${styles[variant]} ${themeClass}`}
      style={{ opacity }}
    />
  );
};
