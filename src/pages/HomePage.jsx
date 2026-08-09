import React from 'react';
import { HeroSection } from '../components/Home/HeroSection';
import { MarqueeSection } from '../components/Home/MarqueeSection';
import { CircularInfinitySection } from '../components/Home/CircularInfinitySection';
import { AboutPreviewSection } from '../components/Home/AboutPreviewSection';
import { ProductsShowcaseSection } from '../components/Home/ProductsShowcaseSection';
import { DataVisualizationSection } from '../components/Home/DataVisualizationSection';
import { TestimonialsSection } from '../components/Home/TestimonialsSection';
import { PartnersLogos } from '../components/Home/PartnersLogos';
import { CTASection } from '../components/Home/CTASection';

export const HomePage = () => {
  return (
    <div className="home-page-container">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Certifications Ticker Marquee */}
      <MarqueeSection />

      {/* 3. Interactive Infinity Loop Circular Economy (Matching Reference Diagram) */}
      <CircularInfinitySection />

      {/* 4. Company Heritage & Vision */}
      <AboutPreviewSection />

      {/* 5. Product Portfolio Showcase & Where Our Fabrics Are Used */}
      <ProductsShowcaseSection />

      {/* 6. Manufacturing Data Visualization & Infographics */}
      <DataVisualizationSection />

      {/* 7. Client Testimonials */}
      <TestimonialsSection />

      {/* 8. Global Brand & Industry Certification Partners */}
      <PartnersLogos />

      {/* 9. Full-Width CTA Banner */}
      <CTASection />
    </div>
  );
};
