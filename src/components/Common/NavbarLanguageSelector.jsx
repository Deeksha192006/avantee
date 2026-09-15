import React, { useRef, useState, useEffect } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from '../../context/LanguageContext';
import { FlagIcon } from '../i18n/FlagIcons';
import styles from './NavbarLanguageSelector.module.css';

export const NavbarLanguageSelector = ({ isMobile = false }) => {
  const { currentLang, LANGUAGES, switchLanguage } = useTranslation();
  const scrollContainerRef = useRef(null);

  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTopPos, setScrollTopPos] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  // Monitor scroll limits for arrow indicators
  const updateScrollState = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    setCanScrollUp(scrollTop > 4);
    setCanScrollDown(scrollTop + clientHeight < scrollHeight - 4);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', updateScrollState);
      updateScrollState();

      // Scroll active language into view on render
      const activeElement = el.querySelector(`.${styles.activeSideLang}`);
      if (activeElement) {
        activeElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }

      return () => el.removeEventListener('scroll', updateScrollState);
    }
  }, [currentLang]);

  // Page travel scroll effect: moves the navbar smoothly along with full webpage sections
  useEffect(() => {
    if (isMobile) return;

    let ticking = false;

    const updatePosition = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const maxScroll = docHeight - winHeight;

      if (maxScroll > 0) {
        const progress = Math.min(1, Math.max(0, scrollY / maxScroll));
        // Glide calculation: starts centered in hero, glides smoothly through all page sections
        const glideOffset = (progress - 0.5) * 160;
        setOffsetY(scrollY + glideOffset);
      } else {
        setOffsetY(scrollY);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updatePosition();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [isMobile]);

  const handleScrollBy = (amount) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: amount,
        behavior: 'smooth',
      });
    }
  };

  // Cursor Drag to Scroll logic
  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartY(e.pageY - scrollContainerRef.current.offsetTop);
    setScrollTopPos(scrollContainerRef.current.scrollTop);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const y = e.pageY - scrollContainerRef.current.offsetTop;
    const walk = (y - startY) * 1.5;
    scrollContainerRef.current.scrollTop = scrollTopPos - walk;
  };

  if (isMobile) {
    return (
      <div className={styles.mobileLangGrid}>
        {LANGUAGES.map((lang) => {
          const isActive = currentLang === lang.code;
          const displayCode = lang.code === 'en' ? 'EN' : (lang.label || lang.code.toUpperCase());
          return (
            <button
              key={lang.code}
              className={`${styles.mobileItem} ${isActive ? styles.mobileActiveItem : ''}`}
              onClick={() => switchLanguage(lang.code)}
            >
              <div className={styles.flagCircle}>
                <FlagIcon code={lang.code} size={22} />
              </div>
              <span className={styles.mobileLabel}>{lang.name || displayCode}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <aside
      className={styles.sideLangBar}
      style={{ transform: `translateY(-50%) translate3d(0, ${offsetY}px, 0)` }}
      aria-label="Language selector"
    >
      {/* Top Scroll Arrow Button */}
      <button
        className={`${styles.scrollArrowBtn} ${canScrollUp ? styles.visibleArrow : styles.hiddenArrow}`}
        onClick={() => handleScrollBy(-90)}
        aria-label="Scroll Up Languages"
      >
        <FaChevronUp />
      </button>

      {/* Main Vertical Scroll Container */}
      <div
        className={`${styles.sideLangContainer} ${isDragging ? styles.dragging : ''}`}
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {LANGUAGES.map((lang) => {
          const isActive = currentLang === lang.code;
          const displayCode = lang.code === 'en' ? 'EN' : (lang.label || lang.code.toUpperCase());
          return (
            <button
              key={lang.code}
              className={`${styles.sideLangBtn} ${isActive ? styles.activeSideLang : ''}`}
              onClick={() => switchLanguage(lang.code)}
              title={lang.name}
              aria-label={`Switch language to ${lang.name}`}
            >
              <span className={styles.langCodeText}>{displayCode}</span>
              <div className={styles.flagCircle}>
                <FlagIcon code={lang.code} size={20} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Bottom Scroll Arrow Button */}
      <button
        className={`${styles.scrollArrowBtn} ${canScrollDown ? styles.visibleArrow : styles.hiddenArrow}`}
        onClick={() => handleScrollBy(90)}
        aria-label="Scroll Down Languages"
      >
        <FaChevronDown />
      </button>
    </aside>
  );
};
