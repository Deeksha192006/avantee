import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa';
import { GridBackground } from '../Common/GridBackground';
import styles from './CTASection.module.css';

export const CTASection = () => {
  const scrollAnim = { once: false, amount: 0.2 };

  return (
    <section className={styles.ctaWrapper}>
      <GridBackground variant="blueprint" dark={true} opacity={0.1} />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <motion.div
          className={styles.ctaCard}
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={scrollAnim}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.ctaBadge}>
            <span>LET'S PARTNER TOGETHER</span>
          </div>

          <h2 className={styles.ctaTitle}>
            Let's Build a Circular Textile Future Together
          </h2>

          <p className={styles.ctaSubtitle}>
            Join 500+ leading international fashion brands and industrial partners transitioning to GRS-certified zero-waste recycled yarns, fibres, and fabrics.
          </p>

          <div className={styles.btnRow}>
            <Link to="/products" className="btn-gold">
              <span>Explore Products</span>
              <FaArrowRight />
            </Link>

            <Link to="/contact" className="btn-primary">
              <FaPhoneAlt style={{ fontSize: '0.85rem' }} />
              <span>Contact Team</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
