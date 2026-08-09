import React, { useState, useEffect } from 'react';
import styles from './TypingText.module.css';

export const TypingText = ({ phrases = [], speed = 80, delay = 2200, className = '' }) => {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;

    const fullText = phrases[phraseIdx];

    const handleType = () => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), delay);
          return;
        }
      } else {
        // Deleting backward
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setPhraseIdx((prev) => (prev + 1) % phrases.length);
          return;
        }
      }
    };

    const timer = setTimeout(handleType, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIdx, phrases, speed, delay]);

  return (
    <span className={`${styles.typingWrapper} ${className}`}>
      <span>{currentText}</span>
      <span className={styles.cursorBlink}>|</span>
    </span>
  );
};
