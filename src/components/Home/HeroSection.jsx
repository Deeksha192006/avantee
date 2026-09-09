import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPlay, FaLeaf, FaRecycle, FaAward, FaGlobeAmericas } from 'react-icons/fa';
import { useTranslation } from '../../context/LanguageContext';
import { TypingText } from '../Common/TypingText';
import { AnimatedCounter } from '../Common/AnimatedCounter';
import { GridBackground } from '../Common/GridBackground';
import styles from './HeroSection.module.css';

export const HeroSection = () => {
  const { t } = useTranslation();
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const heroImages = [
    {
      url: '/images/avantee_mint_hoodie_spool.jpg',
      caption: 'AVANTEE Signature — Recycled Mint Eco Hoodie & Spool',
      badge: '100% GRS Certified Recycled Cotton & Viscose'
    },
    {
      url: '/images/avantee_ocean_sweater_spool.jpg',
      caption: 'AVANTEE Ocean — Recycled PET Bottle Sweater & Spool',
      badge: 'Upcycled Ocean Plastics & Recycled Cotton Blend'
    },
    {
      url: '/images/avantee_hero_bale_spool.png',
      caption: 'AVANTEE Vintage — Recycled Cotton Spool & Polo',
      badge: '80% Natural / 20% Recycled Cotton Blend'
    },
    {
      url: '/images/tailored_blazer_material.png',
      caption: 'AVANTEE Suiting — Luxury Emerald Tailored Suit',
      badge: 'Italian-Grade Luxury Suiting Weave'
    },
    {
      url: '/images/luxury_cloth_emerald.png',
      caption: 'AVANTEE Circular Fabrics — Wool-Silk Eco Cloth',
      badge: 'Zero Water Waste Dyeing Tech'
    }
  ];

  // Auto-play image slider every 4.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIdx((prev) => (prev + 1) % heroImages.length);
    }, 4200);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const titleText = t('hero.titleLine1', 'Crafting High-Performance');
  const titleHighlight = t('hero.titleHighlight', 'Recycled Yarns & Fibres');
  const titleText2 = t('hero.titleLine2', 'For Global Industries');

  const typingPhrases = [
    'Zero Water Dyeing Technology.',
    '100% GRS Certified Recycled Materials.',
    'Circular Textile Engineering Excellence.',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.2 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  };

  return (
    <section className={styles.heroWrapper}>
      {/* Subtle Animated Blueprint Engineering Grid */}
      <GridBackground variant="blueprint" dark={true} opacity={0.08} />

      {/* Full-screen Cross-Fading Background Image Slider Layer */}
      <div className={styles.fullBgSliderTrack}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImgIdx}
            className={styles.fullBgSlide}
            style={{ backgroundImage: `url(${heroImages[currentImgIdx].url})` }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.12, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </div>

      {/* Background Gradient Mesh & Floating Orbs */}
      <div className={styles.heroBackground}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
      </div>

      <div className={styles.heroContainer}>
        {/* Main Left Content */}
        <div className={styles.heroContent}>
          {/* Badge */}
          <motion.div
            className={styles.badgeGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.badgeIcon}><FaLeaf /></span>
            <span>{t('hero.badge', 'Pioneering Sustainable Textile Manufacturing')}</span>
          </motion.div>

          {/* Animated Headline Character Reveal */}
          <motion.h1
            className={styles.heroTitle}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {titleText.split(' ').map((word, wIdx) => (
              <span key={wIdx} style={{ display: 'inline-block', marginRight: '0.3em' }}>
                {word.split('').map((char, cIdx) => (
                  <motion.span key={cIdx} variants={letterVariants} style={{ display: 'inline-block' }}>
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
            <br />
            <span className="text-gold-gradient" style={{ display: 'inline-block' }}>
              {titleHighlight.split(' ').map((word, wIdx) => (
                <span key={wIdx} style={{ display: 'inline-block', marginRight: '0.3em' }}>
                  {word.split('').map((char, cIdx) => (
                    <motion.span key={cIdx} variants={letterVariants} style={{ display: 'inline-block' }}>
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </span>{' '}
            {titleText2.split(' ').map((word, wIdx) => (
              <span key={wIdx} style={{ display: 'inline-block', marginRight: '0.3em' }}>
                {word.split('').map((char, cIdx) => (
                  <motion.span key={cIdx} variants={letterVariants} style={{ display: 'inline-block' }}>
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          {/* Subtitle with Typing Text Effect */}
          <motion.div
            className={styles.typingSubtitleBox}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className={styles.heroSubtitle}>
              {t('hero.subtitle')}{' '}
              <span className={styles.typingSub}>
                <TypingText phrases={typingPhrases} speed={65} delay={2000} />
              </span>
            </p>
          </motion.div>

          {/* CTA Group with magnetic hover */}
          <motion.div
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <Link to="/products" className="btn-primary" data-cursor="hover" data-cursor-text="Explore">
              <span>{t('hero.ctaPrimary', 'Explore Products')}</span>
              <FaArrowRight />
            </Link>

            <Link to="/facilities" className="btn-secondary" data-cursor="hover" data-cursor-text="Tour">
              <FaPlay style={{ fontSize: '0.8rem', color: 'var(--gold-primary)' }} />
              <span>{t('hero.ctaSecondary', 'Virtual Facility Tour')}</span>
            </Link>
          </motion.div>

          {/* Animated Metrics with AnimatedCounter */}
          <motion.div
            className={styles.statsRow}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className={styles.statBox}>
              <span className={styles.statNumber}>
                <AnimatedCounter value="10" suffix="+" duration={2.2} />
              </span>
              <span className={styles.statLabel}>{t('hero.statYears', 'Years of Excellence')}</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statBox}>
              <span className={styles.statNumber}>
                <AnimatedCounter value="4" suffix="K+" duration={2.5} />
              </span>
              <span className={styles.statLabel}>{t('hero.statCapacity', 'MT Annual Capacity')}</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statBox}>
              <span className={styles.statNumber}>
                <AnimatedCounter value="5" suffix="+" duration={2} />
              </span>
              <span className={styles.statLabel}>{t('hero.statExport', 'Countries Exported')}</span>
            </div>
          </motion.div>
        </div>

        {/* Right Visual Card Stack with Transparent Cross-Fading Multi-Image Slider */}
        <motion.div
          className={styles.visualStack}
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className={styles.mainVisualCard} data-cursor="drag" data-cursor-text="Avantee">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImgIdx}
                src={heroImages[currentImgIdx].url}
                alt={heroImages[currentImgIdx].caption}
                className={styles.heroImage}
                onError={(e) => { e.currentTarget.src = '/images/factory_spinning.svg'; }}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </AnimatePresence>

            {/* Interactive Image Slide Dots Navigation */}
            <div className={styles.sliderDotsRow}>
              {heroImages.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  className={`${styles.sliderDot} ${dotIdx === currentImgIdx ? styles.activeDot : ''}`}
                  onClick={() => setCurrentImgIdx(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            <div className={styles.visualGlassOverlay}>
              <div className={styles.certBadge}>
                <FaAward className={styles.goldBadgeIcon} />
                <div>
                  <span className={styles.certTitle}>{heroImages[currentImgIdx].caption}</span>
                  <span className={styles.certSub}>{heroImages[currentImgIdx].badge}</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className={`${styles.floatingCard} ${styles.cardLeft}`}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaRecycle className={styles.cardIcon} />
            <div>
              <span className={styles.cardVal}>
                <AnimatedCounter value="5.2" suffix="B" duration={2.5} />
              </span>
              <span className={styles.cardSub}>PET Bottles Recycled</span>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.floatingCard} ${styles.cardRight}`}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <FaGlobeAmericas className={styles.cardIconGold} />
            <div>
              <span className={styles.cardVal}>Zero Water</span>
              <span className={styles.cardSub}>Waterless Dyeing Tech</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>SCROLL DOWN</span>
      </motion.div>
    </section>
  );
};
