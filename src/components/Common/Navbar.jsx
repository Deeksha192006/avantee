import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhoneAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTranslation } from '../../context/LanguageContext';
import { NavbarLanguageSelector } from './NavbarLanguageSelector';
import styles from './Navbar.module.css';

import { AvanteeLogo } from './AvanteeLogo';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(true);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const productSubmenu = [
    { name: 'Recycled Knitting Yarn', slug: 'recycled-knitting-yarn' },
    { name: 'Recycled Weaving Yarn', slug: 'recycled-weaving-yarn' },
    { name: 'Recycled Cotton Melange Yarn', slug: 'recycled-cotton-melange-yarn' },
    { name: 'Recycled Denim Yarn', slug: 'recycled-denim-yarn' },
    { name: 'Recycled Speciality Blended Yarn', slug: 'recycled-speciality-blended-yarn' },
    { name: 'Regenerated Blends & Counts', slug: 'regenerated-blends-counts' },
    { name: 'Colored Yarn Shades', slug: 'colored-yarn-shades' },
  ];

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
    setDesktopDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: t('nav.home', 'Home') },
    { path: '/about', label: t('nav.about', 'About Us') },
    { path: '/products', label: t('nav.products', 'Products'), hasDropdown: true },
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
            const isActive = location.pathname === link.path || (link.hasDropdown && location.pathname.startsWith('/products'));

            if (link.hasDropdown) {
              return (
                <div
                  key={link.path}
                  className={styles.desktopDropdownWrapper}
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  onMouseLeave={() => setDesktopDropdownOpen(false)}
                >
                  <Link to={link.path} className={styles.navLinkItem}>
                    <span className={isActive ? styles.activeText : ''}>{link.label}</span>
                    <FaChevronDown style={{ fontSize: '0.7rem', marginLeft: '5px', opacity: 0.7 }} />
                    {isActive && (
                      <motion.div
                        className={styles.activeLine}
                        layoutId="activeNavLine"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {desktopDropdownOpen && (
                      <motion.div
                        className={styles.desktopDropdownMenu}
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className={styles.dropdownHeaderBox}>
                          <span>PRODUCTS</span>
                          <FaChevronDown style={{ fontSize: '0.65rem' }} />
                        </div>
                        <div className={styles.dropdownItemList}>
                          {productSubmenu.map((prod) => {
                            const isProdActive = location.pathname === `/products/${prod.slug}`;
                            return (
                              <Link
                                key={prod.slug}
                                to={`/products/${prod.slug}`}
                                className={`${styles.dropdownItemLink} ${isProdActive ? styles.dropdownItemLinkActive : ''}`}
                              >
                                {prod.name}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

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
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            <div style={{ marginBottom: '18px' }}>
              <NavbarLanguageSelector isMobile={true} />
            </div>

            <div className={styles.mobileNavLinks}>
              {navLinks.map((link, idx) => {
                if (link.hasDropdown) {
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      className={styles.mobileProductsWrapper}
                    >
                      {/* Products Accordion Box matching Screenshot 2 */}
                      <div className={styles.productsAccordionBox}>
                        <div
                          className={styles.productsAccordionHeader}
                          onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span>PRODUCTS</span>
                            {mobileProductsOpen ? (
                              <FaChevronUp style={{ fontSize: '0.65rem' }} />
                            ) : (
                              <FaChevronDown style={{ fontSize: '0.65rem' }} />
                            )}
                          </div>
                          <Link
                            to="/products"
                            onClick={() => setMobileMenuOpen(false)}
                            style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: 700, textTransform: 'none' }}
                          >
                            View All
                          </Link>
                        </div>

                        {mobileProductsOpen && (
                          <div className={styles.productsAccordionList}>
                            {productSubmenu.map((prod) => {
                              const isItemActive =
                                location.pathname === `/products/${prod.slug}` ||
                                prod.slug === 'recycled-cotton-melange-yarn';
                              return (
                                <Link
                                  key={prod.slug}
                                  to={`/products/${prod.slug}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`${styles.productsAccordionItem} ${
                                    isItemActive ? styles.productsAccordionItemActive : ''
                                  }`}
                                >
                                  {prod.name}
                                </Link>
                              );
                            })}

                            {/* Close icon at bottom right of list matching Screenshot 2 */}
                            <div className={styles.productsAccordionFooter}>
                              <button
                                className={styles.productsCloseMiniBtn}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setMobileProductsOpen(false);
                                }}
                                aria-label="Collapse products"
                              >
                                <FaTimes />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`${styles.mobileNavLink} ${
                        location.pathname === link.path ? styles.mobileActive : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className={styles.mobileFooterActions}>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
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

