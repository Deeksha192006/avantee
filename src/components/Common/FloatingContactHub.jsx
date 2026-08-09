import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaCommentAlt, FaTimes } from 'react-icons/fa';
import styles from './FloatingContactHub.module.css';

export const FloatingContactHub = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.floatingWrapper}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.expandedHub}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className={`${styles.actionBtn} ${styles.whatsapp}`}
              data-cursor="hover"
              data-cursor-text="Chat"
            >
              <FaWhatsapp />
              <span className={styles.tooltip}>WhatsApp Chat</span>
            </a>

            <a
              href="tel:+914229876543"
              className={`${styles.actionBtn} ${styles.phone}`}
              data-cursor="hover"
              data-cursor-text="Call"
            >
              <FaPhoneAlt />
              <span className={styles.tooltip}>Direct Call</span>
            </a>

            <a
              href="mailto:info@avanteeindustries.com"
              className={`${styles.actionBtn} ${styles.email}`}
              data-cursor="hover"
              data-cursor-text="Email"
            >
              <FaEnvelope />
              <span className={styles.tooltip}>Send Email</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={styles.mainTriggerBtn}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Contact Options"
      >
        <span className={styles.pulseRing} />
        {isOpen ? <FaTimes /> : <FaCommentAlt />}
      </motion.button>
    </div>
  );
};
