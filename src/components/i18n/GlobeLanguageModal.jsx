import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobe, FaTimes, FaCheck } from 'react-icons/fa';
import { useTranslation } from '../../context/LanguageContext';
import styles from './GlobeLanguageModal.module.css';

export const GlobeLanguageButton = () => {
  const { selectedLangObj, setIsGlobeModalOpen } = useTranslation();

  return (
    <motion.button
      className={styles.globeFloatingBtn}
      onClick={() => setIsGlobeModalOpen(true)}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      aria-label="Change Language"
    >
      <span className={styles.globeGlowRing} />
      <motion.div
        className={styles.globeIconWrapper}
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        <FaGlobe className={styles.globeIcon} />
      </motion.div>
      <span className={styles.flagBadge}>{selectedLangObj.flag}</span>
      <span className={styles.codeText}>{selectedLangObj.code.toUpperCase()}</span>
    </motion.button>
  );
};

export const GlobeLanguageModal = () => {
  const {
    isGlobeModalOpen,
    setIsGlobeModalOpen,
    LANGUAGES,
    currentLang,
    switchLanguage,
    t,
  } = useTranslation();

  return (
    <AnimatePresence>
      {isGlobeModalOpen && (
        <div className={styles.modalOverlay}>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsGlobeModalOpen(false)}
          />

          <motion.div
            className={styles.modalContainer}
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className={styles.header}>
              <div className={styles.headerTitleGroup}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className={styles.modalGlobeIcon}
                >
                  <FaGlobe />
                </motion.div>
                <div>
                  <h3 className={styles.modalTitle}>{t('nav.selectLanguage', 'Select Language')}</h3>
                  <p className={styles.modalSubtitle}>Avantee Global Internationalization</p>
                </div>
              </div>
              <button
                className={styles.closeBtn}
                onClick={() => setIsGlobeModalOpen(false)}
                aria-label="Close language selector"
              >
                <FaTimes />
              </button>
            </div>

            <div className={styles.gridContainer}>
              {LANGUAGES.map((lang, idx) => {
                const isSelected = lang.code === currentLang;
                return (
                  <motion.button
                    key={lang.code}
                    className={`${styles.langCard} ${isSelected ? styles.selectedCard : ''}`}
                    onClick={() => switchLanguage(lang.code)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    whileHover={{ scale: 1.03, translateY: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className={styles.flagIcon}>{lang.flag}</span>
                    <span className={styles.langName}>{lang.name}</span>
                    {isSelected && (
                      <motion.span
                        className={styles.checkBadge}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      >
                        <FaCheck />
                      </motion.span>
                    )}
                  </motion.button>
                );
              })}
            </div>

            <div className={styles.footerNote}>
              <span>✨ Content updates instantly across all modules with native typography</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
