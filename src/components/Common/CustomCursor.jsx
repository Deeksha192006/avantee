import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './CustomCursor.module.css';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        const text = target.getAttribute('data-cursor-text') || '';
        setCursorVariant(type || 'hover');
        setCursorText(text);
      } else if (e.target.closest('a, button, input, select, textarea, [role="button"]')) {
        setCursorVariant('hover');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Do not render on mobile touch devices
  if (typeof window !== 'undefined' && window.innerWidth <= 1024) {
    return null;
  }

  const variants = {
    default: {
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      width: 36,
      height: 36,
      backgroundColor: 'transparent',
      borderColor: 'rgba(217, 182, 93, 0.6)',
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 28,
      y: mousePosition.y - 28,
      width: 56,
      height: 56,
      backgroundColor: 'rgba(27, 127, 91, 0.15)',
      borderColor: '#D9B65D',
      scale: 1.15,
    },
    view: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      width: 80,
      height: 80,
      backgroundColor: '#0E3B2E',
      borderColor: '#D9B65D',
      scale: 1,
    },
    drag: {
      x: mousePosition.x - 35,
      y: mousePosition.y - 35,
      width: 70,
      height: 70,
      backgroundColor: '#1B7F5B',
      borderColor: '#FFFFFF',
      scale: 1,
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1.5,
      backgroundColor: '#D9B65D',
    },
    view: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 0,
    },
    drag: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 0,
    }
  };

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className={styles.cursorRing}
        animate={variants[cursorVariant] || variants.default}
        transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.5 }}
      >
        {cursorText && <span className={styles.cursorText}>{cursorText}</span>}
      </motion.div>

      {/* Inner Center Dot */}
      <motion.div
        className={styles.cursorDot}
        animate={dotVariants[cursorVariant] || dotVariants.default}
        transition={{ type: 'spring', damping: 35, stiffness: 450, mass: 0.2 }}
      />
    </>
  );
};
