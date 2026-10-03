import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFilter, FaArrowRight, FaLayerGroup, FaRecycle, FaAward } from 'react-icons/fa';
import { useTranslation } from '../context/LanguageContext';
import { TypingText } from '../components/Common/TypingText';
import { AnimatedCounter } from '../components/Common/AnimatedCounter';
import { GridBackground } from '../components/Common/GridBackground';
import { productCategories, productsData } from '../data/productsData';
import styles from './ProductsPage.module.css';

export const ProductsPage = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const productTypingPhrases = [
    '100% GRS Certified Recycled Yarns & Textiles.',
    'Sustainable Recycled Knit & Woven Fabrics.',
    'Zero Water Dope-Dyed Filament Technology.',
  ];

  // Group products into category sections
  const sections = productCategories.map(cat => ({
    ...cat,
    products: productsData.filter(p => p.category === cat.id)
  }));

  // Auto-handle incoming URL query params e.g. /products?category=yarns or ?item=knit-fabrics
  useEffect(() => {
    const catParam = searchParams.get('category');
    const itemParam = searchParams.get('item') || searchParams.get('type');

    if (catParam) {
      if (catParam === 'fabrics' || catParam === 'yarns') {
        setActiveFilter(catParam);
      } else {
        setActiveFilter('all');
      }
    }

    if (itemParam) {
      const match = productsData.find(
        p => p.slug === itemParam || p.id === itemParam || p.legacyId === itemParam
      );
      if (match) {
        navigate(`/products/${match.slug}`, { replace: true });
      }
    }
  }, [searchParams, navigate]);

  const visibleSections = activeFilter === 'all'
    ? sections
    : sections.filter(sec => sec.id === activeFilter);

  const handleProductClick = (slug) => {
    navigate(`/products/${slug}`);
  };

  return (
    <div className={styles.productsPageWrapper}>
      {/* Header Banner */}
      <section className={styles.pageHeader}>
        <GridBackground variant="blueprint" dark={true} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className={styles.headerBadge}>{t('products.badge', 'Engineered Performance')}</span>
          <h1 className={styles.headerTitle}>
            {t('products.title', 'Recycled Sustainable Fabrics & Yarns')}
          </h1>
          <p className={styles.headerSubtitle}>
            Browse our GRS-certified product portfolio engineered for high-tensile apparel and sustainable textile applications.{' '}
            <span className={styles.typingSub}>
              <TypingText phrases={productTypingPhrases} speed={60} delay={2000} />
            </span>
          </p>
        </div>
      </section>

      {/* Metric Counters Banner */}
      <section className={styles.metricBanner}>
        <GridBackground variant="grid" dark={true} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.metricRow}>
            <div className={styles.metricItem}>
              <FaLayerGroup className={styles.metricIcon} />
              <span className={styles.metricNum}>
                <AnimatedCounter value="2" suffix="" duration={1.5} />
              </span>
              <span className={styles.metricText}>Product Categories</span>
            </div>
            <div className={styles.metricItem}>
              <FaRecycle className={styles.metricIconGold} />
              <span className={styles.metricNum}>
                <AnimatedCounter value="100" suffix="%" duration={2.2} />
              </span>
              <span className={styles.metricText}>GRS Certified</span>
            </div>
            <div className={styles.metricItem}>
              <FaAward className={styles.metricIcon} />
              <span className={styles.metricNum}>
                <AnimatedCounter value="50" suffix="K+" duration={2.5} />
              </span>
              <span className={styles.metricText}>MT Annual Output</span>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog & Filter Section */}
      <section className={`section-padding ${styles.catalogSection}`}>
        <GridBackground variant="dots" dark={false} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.filterBar}>
            <div className={styles.filterLabel}>
              <FaFilter />
              <span>Filter Category:</span>
            </div>
            <div className={styles.tabGroup}>
              {[
                { id: 'all', label: 'ALL PRODUCTS' },
                { id: 'yarns', label: 'RECYCLED SUSTAINABLE YARNS' },
                { id: 'fabrics', label: 'RECYCLED SUSTAINABLE FABRICS' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={`${styles.filterTab} ${activeFilter === tab.id ? styles.activeFilterTab : ''}`}
                  onClick={() => setActiveFilter(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Render Categories & Products */}
          {visibleSections.map((sec) => (
            <div key={sec.id} className={styles.productCategorySection}>
              <div className={styles.categorySectionHeader}>
                <h2 className={styles.categoryTitle}>{sec.title}</h2>
                <p className={styles.categorySubtitle}>{sec.subtitle}</p>
              </div>

              <div className={styles.productsGrid}>
                {sec.products.map((prod) => (
                  <motion.div
                    key={prod.id}
                    id={prod.slug}
                    className={styles.productCard}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -6 }}
                    onClick={() => handleProductClick(prod.slug)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className={styles.cardImgBox}>
                      <img src={prod.image} alt={prod.name} className={styles.cardImg} />
                      <span className={styles.tagBadge}>{prod.tag}</span>
                    </div>

                    <div className={styles.cardBody}>
                      <span className={styles.catBadge}>{prod.categoryName.toUpperCase()}</span>
                      <h3 className={styles.cardName}>{prod.name}</h3>
                      <p className={styles.cardDesc}>{prod.desc}</p>

                      <div className={styles.cardFooter}>
                        <button
                          className="btn-primary"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProductClick(prod.slug);
                          }}
                        >
                          <span>Enquire Now</span>
                          <FaArrowRight />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
