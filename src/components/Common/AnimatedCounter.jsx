import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const AnimatedCounter = ({ value = '100', suffix = '', prefix = '', duration = 2 }) => {
  const [displayVal, setDisplayVal] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Extract number and suffix if string like "50K+"
  const numericMatch = value.toString().match(/\d+(\.\d+)?/);
  const targetNum = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const unitSuffix = value.toString().replace(/[\d.]/g, '') + suffix;

  useEffect(() => {
    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // Ease out expo formula
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * targetNum);

      setDisplayVal(current);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setDisplayVal(targetNum);
      }
    };

    if (hasAnimated) {
      animationFrameId = window.requestAnimationFrame(step);
    }

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [hasAnimated, targetNum, duration]);

  return (
    <motion.span
      className="animated-counter-val"
      onViewportEnter={() => setHasAnimated(true)}
      viewport={{ once: true }}
      initial={{ scale: 0.9, opacity: 0.8 }}
      animate={{ scale: hasAnimated ? 1 : 0.9, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        display: 'inline-block',
        textShadow: '0 0 20px rgba(217, 182, 93, 0.4)',
      }}
    >
      {prefix}
      {displayVal}
      {unitSuffix}
    </motion.span>
  );
};
