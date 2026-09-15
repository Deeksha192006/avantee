import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import { useTranslation } from '../../context/LanguageContext';
import { NavbarLanguageSelector } from './NavbarLanguageSelector';
import { GlobeLanguageButton } from '../i18n/GlobeLanguageModal';
import styles from './Navbar.module.css';

import { AvanteeLogo, AvanteeLogoMark } from './AvanteeLogo';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: t('nav.home', 'Home') },
    { path: '/about', label: t('nav.about', 'About Us') },
    { path: '/products', label: t('nav.products', 'Products') },
    { path: '/facilities', label: t('nav.facilities', 'Our Facilities') },
    { path: '/sustainability', label: t('nav.sustainability', 'Sustainability') },
    { path: '/contact', label: t('nav.contact', 'Contact') },
  ];

  return (
    <header className={`${styles.headerNavbar} ${isScrolled ? styles.scrolledNavbar : ''}`}>
      <div className={styles.navContainer}>
        {/* Brand Logo with Official Vector SVG */}
        <Link to="/" className={styles.brandLogo} aria-label="Avantee Home">
          <AvanteeLogo width={205} showTagline={true} />
        </Link>

        {/* Center Desktop Links */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link key={link.path} to={link.path} className={styles.navLinkItem}>
                <span className={isActive ? styles.activeText : ''}>{link.label}</span>
                {isActive && (
                  <motion.div
                    className={styles.activeLine}
                    layoutId="activeNavLine"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className={styles.rightActions}>
          {/* Multi-Language Globe Button */}
          <GlobeLanguageButton />

          {/* Mobile Hamburger Toggle */}
          <button
            className={styles.hamburgerBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileDrawer}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          >
            <div className={styles.mobileDrawerHeader}>
              <Link to="/" className={styles.brandLogo} onClick={() => setMobileMenuOpen(false)}>
                <AvanteeLogo width={180} showTagline={true} />
              </Link>
              <button
                className={styles.closeDrawerBtn}
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaTimes />
              </button>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <NavbarLanguageSelector isMobile={true} />
            </div>

            <div className={styles.mobileNavLinks}>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`${styles.mobileNavLink} ${location.pathname === link.path ? styles.mobileActive : ''
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className={styles.mobileFooterActions}>
              <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <FaPhoneAlt />
                <span>{t('nav.letsTalk', "Let's Talk")}</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
