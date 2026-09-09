import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaInstagram, FaTwitter, FaFacebookF, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import { useTranslation } from '../../context/LanguageContext';
import styles from './Footer.module.css';

import { AvanteeLogo } from './AvanteeLogo';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footerWrapper}>
      {/* Wave / Curved SVG Top Divider */}
      <div className={styles.waveDivider}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
            fill="#061A14"
          />
        </svg>
      </div>

      <div className={styles.footerMain}>
        <div className={styles.container}>
          {/* Newsletter Banner */}
          <div className={styles.newsletterCard}>
            <div className={styles.newsletterText}>
              <h3>{t('footer.newsletterTitle', 'Stay Ahead in Eco-Textiles')}</h3>
              <p>{t('footer.newsletterSubtitle', 'Subscribe to our quarterly sustainability & product innovation bulletin.')}</p>
            </div>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter corporate email..."
                required
                className={styles.emailInput}
              />
              <button type="submit" className={styles.subscribeBtn}>
                <span>{t('footer.subscribe', 'Subscribe')}</span>
                <FaPaperPlane style={{ fontSize: '0.85rem' }} />
              </button>
            </form>
          </div>

          {/* Grid Footer Links */}
          <div className={styles.footerGrid}>
            {/* Col 1: Brand Info with Official Logo */}
            <div className={styles.brandCol}>
              <Link to="/" className={styles.footerLogo}>
                <AvanteeLogo width={220} variant="footer" />
              </Link>
              <p className={styles.brandTagline}>
                {t('footer.tagline', 'Architects of Sustainable Textile Engineering.')}
              </p>
              <div className={styles.socialRow}>
                <a href="#linkedin" aria-label="LinkedIn" className={styles.socialCircle}><FaLinkedinIn /></a>
                <a href="#instagram" aria-label="Instagram" className={styles.socialCircle}><FaInstagram /></a>
                <a href="#twitter" aria-label="Twitter" className={styles.socialCircle}><FaTwitter /></a>
                <a href="#facebook" aria-label="Facebook" className={styles.socialCircle}><FaFacebookF /></a>
                <a href="#youtube" aria-label="YouTube" className={styles.socialCircle}><FaYoutube /></a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>{t('footer.quickLinks', 'Quick Links')}</h4>
              <ul className={styles.linkList}>
                <li><Link to="/">{t('nav.home', 'Home')}</Link></li>
                <li><Link to="/about">{t('nav.about', 'About Us')}</Link></li>
                <li><Link to="/products">{t('nav.products', 'Products')}</Link></li>
                <li><Link to="/facilities">{t('nav.facilities', 'Our Facilities')}</Link></li>
                <li><Link to="/sustainability">{t('nav.sustainability', 'Sustainability')}</Link></li>
                <li><Link to="/contact">{t('nav.contact', 'Contact')}</Link></li>
              </ul>
            </div>

            {/* Col 3: Products */}
            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>{t('nav.products', 'Products')}</h4>
              <ul className={styles.linkList}>
                <li><Link to="/products?category=fibres">{t('products.tabFibres', 'Recycled Fibres')}</Link></li>
                <li><Link to="/products?category=yarns">{t('products.tabYarns', 'Recycled Yarns')}</Link></li>
                <li><Link to="/products?category=fabrics">{t('products.tabFabrics', 'Eco Fabrics')}</Link></li>
                <li><Link to="/products">Ring Spun Yarns</Link></li>
                <li><Link to="/products">Micro-Denier Staple</Link></li>
              </ul>
            </div>

            {/* Col 4: Contact & Location */}
            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Headquarters Contact Desk</h4>
              <ul className={styles.contactList}>
                <li>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                  <span>Door No. 2/133, Senjudaiyampalayam, Namakkal – 637204, TN, India</span>
                </li>
                <li>
                  <FaPhone className={styles.contactIcon} />
                  <span>+91 4268290885</span>
                </li>
                <li>
                  <FaEnvelope className={styles.contactIcon} />
                  <span>info@avanteeindustries.com</span>
                </li>
                <li>
                  <a
                    href="https://wa.me/919840855885"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.whatsappBadge}
                  >
                    <FaWhatsapp />
                    <span>Instant WhatsApp Support</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={styles.bottomBar}>
            <p className={styles.copyrightText}>
              © {new Date().getFullYear()} {t('footer.rights', 'All rights reserved. Avantee Industries Private Limited.')}
            </p>
            <p className={styles.legalLinks}>
              {t('footer.legal', 'Privacy Policy | Terms of Service')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
