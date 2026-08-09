import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { FaPhoneAlt, FaEnvelope, FaPaperPlane, FaBuilding, FaGlobe, FaClock, FaCheck } from 'react-icons/fa';
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
    'Exporting to 45+ International Destinations.',
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

  return (
    <div className={styles.contactPageWrapper}>
      {/* Header */}
      <section className={styles.pageHeader}>
        <GridBackground variant="blueprint" dark={true} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className={styles.headerBadge}>{t('contact.badge', 'Connect With Us')}</span>
          <h1 className={styles.headerTitle}>{t('contact.title', 'Partner With Avantee Industries')}</h1>
          <p className={styles.headerSubtitle}>
            {t('contact.subtitle')}{' '}
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
                <AnimatedCounter value="45" suffix="+" duration={2.2} />
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

      {/* Main Grid */}
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
                        placeholder="+1 (555) 000-0000"
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
                      <option value="Recycled Yarns">Recycled Ring-Spun Yarns</option>
                      <option value="Recycled Fibres">Eco-Staple PET Fibres</option>
                      <option value="Eco Fabrics">Upcycled Eco Fabrics</option>
                      <option value="Custom Engineering">Custom Technical Blend Requirement</option>
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
                <h4 className={styles.officeTitle}>{t('contact.headquarters', 'Global Headquarters')}</h4>
                <p className={styles.officeText}>{t('contact.address')}</p>
                <div className={styles.contactDetails}>
                  <div><FaPhoneAlt /> +91 422 9876 5430</div>
                  <div><FaEnvelope /> info@avanteeindustries.com</div>
                </div>
              </div>

              {/* Map Card */}
              <div className={styles.mapCard}>
                <iframe
                  title="Avantee Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.47775619379!2d76.90100412852233!3d11.016844482068711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="260"
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
