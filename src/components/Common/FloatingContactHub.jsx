import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';
import styles from './FloatingContactHub.module.css';

export const FloatingContactHub = () => {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleContactClick = (e) => {
    if (location.pathname === '/contact') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!mounted || typeof document === 'undefined') return null;

  return ReactDOM.createPortal(
    <div className={styles.floatingWrapper} id="floating-contact-symbol">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className={styles.bubbleMotion}
      >
        <Link
          to="/contact"
          onClick={handleContactClick}
          className={styles.contactBubble}
          aria-label="Contact Us - Redirect to Contact Page"
          title="Contact Us - Click to open Contact Page"
        >
          {/* Animated Outer Pulse Ring */}
          <span className={styles.pulseRing} />

          {/* Contact Bubble Icon */}
          <FaPhoneAlt className={styles.bubbleIcon} />

          {/* Hover Tooltip Badge */}
          <span className={styles.bubbleTooltip}>Contact Us</span>
        </Link>
      </motion.div>
    </div>,
    document.body
  );
};
