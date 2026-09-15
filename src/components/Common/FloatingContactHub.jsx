import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaPaperPlane, FaTimes } from 'react-icons/fa';
import styles from './FloatingContactHub.module.css';

export const FloatingContactHub = () => {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close expanded hub on route change
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  const handleToggle = (e) => {
    e.preventDefault();
    setExpanded((prev) => !prev);
  };

  if (!mounted || typeof document === 'undefined') return null;

  const actions = [
    {
      id: 'phone',
      label: 'Call Direct',
      icon: <FaPhoneAlt />,
      href: 'tel:+919876543210',
      className: styles.phone,
      isExternal: true,
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp Chat',
      icon: <FaWhatsapp />,
      href: 'https://wa.me/919876543210?text=Hello%20Avantee%20Team',
      className: styles.whatsapp,
      isExternal: true,
    },
    {
      id: 'email',
      label: 'Send Email',
      icon: <FaEnvelope />,
      href: 'mailto:info@avantee.com',
      className: styles.email,
      isExternal: true,
    },
    {
      id: 'contactPage',
      label: 'Contact Page',
      icon: <FaPaperPlane />,
      href: '/contact',
      className: styles.inquiry,
      isExternal: false,
    },
  ];

  return ReactDOM.createPortal(
    <div className={styles.floatingWrapper} id="floating-contact-symbol">
      {/* Expandable Action Items */}
      <AnimatePresence>
        {expanded && (
          <div className={styles.expandedHub}>
            {actions.map((act, index) => (
              <motion.div
                key={act.id}
                initial={{ opacity: 0, y: 15, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.8 }}
                transition={{ delay: index * 0.05, type: 'spring', stiffness: 350, damping: 25 }}
              >
                {act.isExternal ? (
                  <a
                    href={act.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.actionBtn} ${act.className}`}
                    aria-label={act.label}
                  >
                    {act.icon}
                    <span className={styles.tooltip}>{act.label}</span>
                  </a>
                ) : (
                  <Link
                    to={act.href}
                    className={`${styles.actionBtn} ${act.className}`}
                    aria-label={act.label}
                    onClick={() => setExpanded(false)}
                  >
                    {act.icon}
                    <span className={styles.tooltip}>{act.label}</span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main Animated Floating Call Action Button */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.92 }}
        className={styles.bubbleMotion}
      >
        <button
          onClick={handleToggle}
          className={`${styles.contactBubble} ${expanded ? styles.bubbleActive : ''}`}
          aria-label="Call Action Menu"
          title="Contact & Call Actions"
        >
          {/* Outer Ripple Pulse Rings */}
          <span className={styles.pulseRing} />
          <span className={styles.pulseRingSecondary} />

          {/* Toggle Icon */}
          {expanded ? (
            <FaTimes className={styles.bubbleIcon} style={{ transform: 'rotate(90deg)' }} />
          ) : (
            <FaPhoneAlt className={styles.bubbleIcon} />
          )}

          {/* Tooltip */}
          {!expanded && <span className={styles.bubbleTooltip}>Call & Contact</span>}
        </button>
      </motion.div>
    </div>,
    document.body
  );
};
