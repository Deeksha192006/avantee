import React, { useState, useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import { AnimatePresence } from 'framer-motion';
import { Preloader } from '../components/Common/Preloader';
import { MouseSpotlight } from '../components/Common/MouseSpotlight';
import { BackToTopButton } from '../components/Common/BackToTopButton';
import { ScrollProgressBar } from '../components/Common/ScrollProgressBar';
import { Navbar } from '../components/Common/Navbar';
import { Footer } from '../components/Common/Footer';
import { GlobeLanguageModal } from '../components/i18n/GlobeLanguageModal';
import { FloatingContactHub } from '../components/Common/FloatingContactHub';
import { NavbarLanguageSelector } from '../components/Common/NavbarLanguageSelector';

export const MainLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  // Scroll to top on fresh page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      {/* Top Fixed Gradient Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Background Noise Texture */}
      <div className="noise-overlay" />

      {/* Mouse Follow Spotlight */}
      <MouseSpotlight />

      {/* Global Preloader */}
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Language Switcher Modal */}
      <GlobeLanguageModal />

      {/* Floating Contact Hub */}
      <FloatingContactHub />

      {/* Main App Shell */}
      <div className="app-shell" style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.6s ease', position: 'relative' }}>
        <Navbar />

        {/* Vertical Multi-Language Navigation Strip (Positions absolute inside webpage document flow, moves naturally with scroll) */}
        <NavbarLanguageSelector />

        <main>{children}</main>
        <Footer />

        {/* Back to Top Circular Progress Button (Bottom Left) */}
        <BackToTopButton />
      </div>
    </ReactLenis>
  );
};
