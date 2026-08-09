import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useTranslation } from '../../context/LanguageContext';
import { FlagIcon } from '../i18n/FlagIcons';
import styles from './NavbarLanguageSelector.module.css';

export const NavbarLanguageSelector = ({ isMobile = false }) => {
  const { currentLang, selectedLangObj, LANGUAGES, switchLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (isMobile) {
    return (
      <div className={styles.mobileLangGrid}>
        {LANGUAGES.map((lang) => {
          const isActive = currentLang === lang.code;
          return (
            <button
              key={lang.code}
              className={`${styles.dropdownItem} ${isActive ? styles.activeItem : ''}`}
              onClick={() => switchLanguage(lang.code)}
            >
              <div className={styles.flagCircle}>
                <FlagIcon code={lang.code} size={22} />
              </div>
              <span className={styles.itemLabel}>{lang.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={styles.langWrapper} ref={containerRef}>
      {/* Sleek Trigger Pill */}
      <button
        className={styles.triggerPill}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select Language"
        aria-expanded={isOpen}
      >
        <div className={styles.flagCircle}>
          <FlagIcon code={selectedLangObj.code} size={22} />
        </div>
        <span>{selectedLangObj.label}</span>
        <FaChevronDown
          className={`${styles.chevronIcon} ${isOpen ? styles.openChevron : ''}`}
        />
      </button>

      {/* Luxury Dropdown Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.dropdownMenu}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.dropdownHeader}>Select Region / Language</div>
            <div className={styles.flagGrid}>
              {LANGUAGES.map((lang) => {
                const isActive = currentLang === lang.code;
                return (
                  <button
                    key={lang.code}
                    className={`${styles.dropdownItem} ${
                      isActive ? styles.activeItem : ''
                    }`}
                    onClick={() => {
                      switchLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    title={lang.name}
                  >
                    <div className={styles.flagCircle}>
                      <FlagIcon code={lang.code} size={22} />
                    </div>
                    <span className={styles.itemLabel}>{lang.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
