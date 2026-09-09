import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaBuilding,
  FaIndustry,
  FaStore,
  FaGlobe,
  FaClock,
  FaCheck,
  FaMapMarkerAlt,
  FaFileInvoiceDollar,
  FaYarn,
  FaLayerGroup
} from 'react-icons/fa';
import { useTranslation } from '../context/LanguageContext';
import { TypingText } from '../components/Common/TypingText';
import { AnimatedCounter } from '../components/Common/AnimatedCounter';
import { GridBackground } from '../components/Common/GridBackground';
import styles from './ContactPage.module.css';

export const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: 'Recycled Yarns',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const contactTypingPhrases = [
    'Instant Global Inquiry Response within 24 Hours.',
    'Exporting to 5+ International Destinations.',
    'Custom OEM & Technical Spec Quotations.',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const departmentPhones = [
    {
      dept: 'Recycled Yarns',
      phone: '+91 9442455885',
      href: 'tel:+919442455885',
      icon: '🧶',
      badge: 'Yarn Sales'
    },
    {
      dept: 'Recycled Fabrics',
      phone: '+91 9345655885',
      href: 'tel:+919345655885',
      icon: '🧵',
      badge: 'Fabric Sales'
    },
    {
      dept: 'Brand Sales / International',
      phone: '+91 9840855885',
      href: 'tel:+919840855885',
      icon: '🌐',
      badge: 'Global Sales'
    },
    {
      dept: 'Headquarters',
      phone: '+91 4268290885',
      href: 'tel:+914268290885',
      icon: '🏢',
      badge: 'Main Office'
    }
  ];

  return (
    <div className={styles.contactPageWrapper}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <GridBackground variant="blueprint" dark={true} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className={styles.headerBadge}>{t('contact.badge', 'Connect With Us')}</span>
          <h1 className={styles.headerTitle}>Get in Touch</h1>
          <p className={styles.headerSubtitle}>
            Partner with Avantee Industries Private Limited for GRS certified recycled yarns, fabrics, and technical textiles.
            <span className={styles.typingSub}>
              <TypingText phrases={contactTypingPhrases} speed={60} delay={2200} />
            </span>
          </p>
        </div>
      </section>

      {/* Metric Counters Banner */}
      <section className={styles.contactMetricBar}>
        <GridBackground variant="grid" dark={true} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.metricGrid}>
            <div className={styles.mItem}>
              <FaClock className={styles.mIcon} />
              <span className={styles.mNum}>
                <AnimatedCounter value="24" suffix=" Hours" duration={2} />
              </span>
              <span className={styles.mLabel}>Guaranteed Response</span>
            </div>
            <div className={styles.mItemGold}>
              <FaGlobe className={styles.mIconGold} />
              <span className={styles.mNum}>
                <AnimatedCounter value="5" suffix="+" duration={2.2} />
              </span>
              <span className={styles.mLabel}>Export Destinations</span>
            </div>
            <div className={styles.mItem}>
              <FaCheck className={styles.mIcon} />
              <span className={styles.mNum}>
                <AnimatedCounter value="100" suffix="%" duration={1.8} />
              </span>
              <span className={styles.mLabel}>Custom OEM Matching</span>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch - Office Locations & GSTIN Section */}
      <section className={styles.getInTouchSection}>
        <div className="container">
          <div className={styles.sectionHeaderTitle}>
            <span className={styles.sectionSubBadge}>Official Corporate Locations</span>
            <h2>Get in Touch</h2>
            <p>Connect directly with our manufacturing headquarters or domestic sales offices</p>
          </div>

          <div className={styles.officesGrid}>
            {/* Head Office & Factory Card */}
            <motion.div
              className={styles.locationCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.cardHeaderBar}>
                <div className={styles.cardIconBox}>
                  <FaIndustry />
                </div>
                <div>
                  <span className={styles.cardCategory}>Manufacturing Hub</span>
                  <h3 className={styles.cardMainTitle}>Head Office & Factory Address</h3>
                </div>
              </div>

              <h4 className={styles.companyName}>Avantee Industries Private Limited</h4>

              <div className={styles.addressBlock}>
                <FaMapMarkerAlt className={styles.mapIcon} />
                <p>
                  Door No. 2/133, Senjudaiyampalayam, Irukkur,<br />
                  Paramathi Velur, Namakkal – 637204,<br />
                  Tamil Nadu, India.
                </p>
              </div>

              <div className={styles.gstinBadge}>
                <FaFileInvoiceDollar />
                <span>GSTIN: <strong>33AAZCA8582H1ZZ</strong></span>
              </div>
            </motion.div>

            {/* Domestic Sales Office Card */}
            <motion.div
              className={styles.locationCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className={styles.cardHeaderBar}>
                <div className={`${styles.cardIconBox} ${styles.salesIconBox}`}>
                  <FaStore />
                </div>
                <div>
                  <span className={styles.cardCategory}>Sales & Commercial Hub</span>
                  <h3 className={styles.cardMainTitle}>Domestic Sales Office</h3>
                </div>
              </div>

              <h4 className={styles.companyName}>Avantee Industries Private Limited</h4>

              <div className={styles.addressBlock}>
                <FaMapMarkerAlt className={styles.mapIcon} />
                <p>
                  SF No. 269/2, Thandagoundenputhur, Kalipalayam,<br />
                  Avinashi, Kalipalayam, Tiruppur – 641666,<br />
                  Tamil Nadu, India.
                </p>
              </div>

              <div className={styles.gstinBadge}>
                <FaFileInvoiceDollar />
                <span>GSTIN: <strong>33AAZCA8582H1ZZ</strong></span>
              </div>
            </motion.div>
          </div>

          {/* Department Direct Call Directory Grid */}
          <div className={styles.deptPhoneSection}>
            <h3 className={styles.deptSectionHeading}>Department Direct Desk Directory</h3>
            <div className={styles.phoneGrid}>
              {departmentPhones.map((item, idx) => (
                <motion.a
                  key={item.phone}
                  href={item.href}
                  className={styles.phoneCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.03, translateY: -4 }}
                >
                  <div className={styles.phoneCardHeader}>
                    <span className={styles.emojiIcon}>{item.icon}</span>
                    <span className={styles.deptBadge}>{item.badge}</span>
                  </div>
                  <span className={styles.deptTitle}>{item.dept}</span>
                  <div className={styles.phoneNumberRow}>
                    <FaPhoneAlt className={styles.callIcon} />
                    <span className={styles.phoneNumText}>{item.phone}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Form & Map */}
      <section className={`section-padding ${styles.mainSection}`}>
        <GridBackground variant="dots" dark={false} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.contactGrid}>
            {/* Form Column */}
            <motion.div
              className={styles.formCard}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className={styles.formHeading}>{t('contact.formTitle', 'Send An Inquiry')}</h3>

              {submitted ? (
                <div className={styles.successAlert}>
                  <span className={styles.successIcon}>✓</span>
                  <p>{t('contact.success')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.inputGroup}>
                    <label>{t('contact.name', 'Full Name')}</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.rowTwo}>
                    <div className={styles.inputGroup}>
                      <label>{t('contact.email', 'Business Email')}</label>
                      <input
                        type="email"
                        required
                        placeholder="alexander@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>{t('contact.phone', 'Phone Number')}</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>{t('contact.productInterest', 'Product of Interest')}</label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className={styles.select}
                    >
                      <option value="Recycled Yarns">Recycled Ring-Spun Yarns (+91 9442455885)</option>
                      <option value="Recycled Fabrics">Recycled Fabrics (+91 9345655885)</option>
                      <option value="Brand Sales / International">Brand Sales / International (+91 9840855885)</option>
                      <option value="Headquarters">Headquarters (+91 4268290885)</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>{t('contact.message', 'Message / Volume Requirement')}</label>
                    <textarea
                      rows="5"
                      required
                      placeholder="Please specify count, denier requirements, or monthly volume in MT..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={styles.textarea}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <FaPaperPlane />
                    <span>{t('contact.submit', 'Send Message')}</span>
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info Column & Map */}
            <motion.div
              className={styles.infoCol}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.officeCard}>
                <FaBuilding className={styles.officeIcon} />
                <h4 className={styles.officeTitle}>Headquarters Contact Desk</h4>
                <p className={styles.officeText}>Avantee Industries Private Limited, Namakkal, Tamil Nadu, India.</p>
                <div className={styles.contactDetails}>
                  <div><FaPhoneAlt /> +91 4268290885</div>
                  <div><FaEnvelope /> info@avanteeindustries.com</div>
                </div>
              </div>

              {/* Map Card */}
              <div className={styles.mapCard}>
                <iframe
                  title="Avantee Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.47775619379!2d76.90100412852233!3d11.016844482068711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '16px' }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
