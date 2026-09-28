import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCheckCircle,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaRecycle,
  FaCogs,
  FaShieldAlt,
  FaGlobe,
  FaIndustry,
  FaLeaf,
  FaTimes,
} from 'react-icons/fa';
import { SectionTitle } from '../Common/SectionTitle';
import { GridBackground } from '../Common/GridBackground';
import styles from './ProductsShowcaseSection.module.css';

export const ProductsShowcaseSection = () => {
  const [activeGalleryTab, setActiveGalleryTab] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Exactly 6 products focused on Recycled Yarns & Sustainable Fabrics
  const carouselProducts = [
    {
      id: 'recycled-knit-yarn',
      name: 'Recycled Knit Yarn',
      category: 'Recycled Sustainable Yarns',
      slug: 'recycled-knit-yarn',
      tag: '100% GRS Certified • Soft & Elastic',
      image: '/images/recycled_knit_yarn.jpg',
      description: 'Recycled yarn designed for knitting applications, combining performance, consistency and sustainable production.',
    },
    {
      id: 'recycled-wearing-yarn',
      name: 'Recycled Wearing Yarn',
      category: 'Recycled Sustainable Yarns',
      slug: 'recycled-wearing-yarn',
      tag: 'High Tensile Strength • Apparel Spin',
      image: '/images/recycled_weaving_yarn.jpg',
      description: 'Recycled yarn suitable for wearing and apparel applications, offering reliable performance with a sustainable approach.',
    },
    {
      id: 'knit-fabrics',
      name: 'Knit Fabrics',
      category: 'Recycled Sustainable Fabrics',
      slug: 'knit-fabrics',
      tag: '100% GRS Certified • Stretch Recovery',
      image: '/images/fabric_stack_dark.png',
      description: 'Recycled knit fabrics designed for comfortable, durable and sustainable textile applications.',
    },
    {
      id: 'woven-fabrics',
      name: 'Woven Fabrics',
      category: 'Recycled Sustainable Fabrics',
      slug: 'woven-fabrics',
      tag: 'High Tensile • Precision Loom Weave',
      image: '/images/eco_material_rolls.png',
      description: 'Recycled woven fabrics developed for durable and versatile textile applications with a focus on sustainability.',
    },
    {
      id: 'recycled-melange-yarn',
      name: 'Recycled Melange Yarn',
      category: 'Recycled Sustainable Yarns',
      slug: 'recycled-melange-yarn',
      tag: 'Multi-Tonal Heather • Pre-Dyed Blends',
      image: '/images/recycled_melange_yarn.jpg',
      description: 'Recycled melange yarn produced with blended colour effects for versatile and sustainable textile applications.',
    },
    {
      id: 'recycled-denim-yarn',
      name: 'Recycled Denim Yarn',
      category: 'Recycled Sustainable Yarns',
      slug: 'recycled-denim-yarn',
      tag: 'Upcycled Denim Waste • Vintage Slub',
      image: '/images/recycled_denim_yarn.jpg',
      description: 'Recycled yarn developed for denim applications, supporting sustainable textile production through the reuse of materials.',
    },
  ];

  // Auto-slide effect every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselProducts.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, carouselProducts.length]);

  const activeProduct = carouselProducts[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % carouselProducts.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + carouselProducts.length) % carouselProducts.length);
  };

  // Why Choose Our Products - 6 Key Propositions
  const whyProps = [
    {
      icon: <FaShieldAlt />,
      title: '100% Quality Checked',
      desc: 'Tested on Uster capacitive testing lines for count consistency, tensile strength, and zero shade variation.',
    },
    {
      icon: <FaRecycle />,
      title: 'Global Recycled Standard',
      desc: '100% GRS certified recycled input materials offering complete supply chain traceability from waste to fabric.',
    },
    {
      icon: <FaCogs />,
      title: 'Precision Swiss Technology',
      desc: 'State-of-the-art European carding and spinning lines producing micro-denier staple yarns.',
    },
    {
      icon: <FaGlobe />,
      title: 'Exported to 5+ Nations',
      desc: 'Trusted by major international apparel brands, weavers, and knitters across 5 continents.',
    },
    {
      icon: <FaIndustry />,
      title: '4,000 MT Annual Capacity',
      desc: 'Integrated large-scale manufacturing infrastructure ensuring reliable volume supply year-round.',
    },
    {
      icon: <FaLeaf />,
      title: 'Eco Friendly',
      desc: 'Zero-water dope-dyeing masterbatch processes reducing environmental carbon footprint.',
    },
  ];

  // Gallery items
  const galleryItems = [
    {
      id: 'g0-hoodie',
      category: 'yarns',
      catLabel: 'AVANTEE SIGNATURE',
      title: 'AVANTEE Mint Eco Hoodie & Signature Spool',
      image: '/images/avantee_mint_hoodie_spool.jpg',
    },
    {
      id: 'g0-ocean',
      category: 'yarns',
      catLabel: 'OCEAN RECYCLED',
      title: 'AVANTEE Ocean Recycled PET Sweater & Yarn Spool',
      image: '/images/avantee_ocean_sweater_spool.jpg',
    },
    {
      id: 'g1',
      category: 'yarns',
      catLabel: 'AVANTEE BRAND',
      title: 'AVANTEE Vintage — Recycled Cotton Spool, Polo Shirt & Fabric Bale',
      image: '/images/avantee_hero_bale_spool.png',
    },
    {
      id: 'g2',
      category: 'yarns',
      catLabel: 'AVANTEE BRAND',
      title: 'AVANTEE Signature — Recycled Cotton & Cellulosic Viscose Spool',
      image: '/images/avantee_brand_spool.png',
    },
    {
      id: 'g3',
      category: 'fabrics',
      catLabel: 'RECYCLED FIBERS',
      title: 'AVANTEE Recycled Fiber Bales & Branded Spool',
      image: '/images/tailored_blazer_material.png',
    },
    {
      id: 'g4',
      category: 'fabrics',
      catLabel: 'SHIRTS & COTTONS',
      title: 'Folded Fine Cotton & Emerald Pinstripe Dress Shirt Fabrics',
      image: '/images/folded_cotton_fabrics.png',
    },
    {
      id: 'g5',
      category: 'fabrics',
      catLabel: 'FABRIC ROLLS',
      title: 'Stacked Eco-Friendly Velvet, Linen & Wool Material Rolls',
      image: '/images/eco_material_rolls.png',
    },
    {
      id: 'g6',
      category: 'factory',
      catLabel: 'SHOWCASE',
      title: 'Luxury Suit Fabric & Tailored Materials Showcase',
      image: '/images/suit_materials_showcase.png',
    },
    {
      id: 'g7',
      category: 'fabrics',
      catLabel: 'FABRICS',
      title: 'Dark Multi-Texture Knitted & Check Fabrics',
      image: '/images/fabric_stack_dark.png',
    },
    {
      id: 'g8',
      category: 'fabrics',
      catLabel: 'FABRICS',
      title: 'Linen & Sustainable Denim Upcycled Rolls',
      image: '/images/fabric_stack_linen.png',
    },
    {
      id: 'g9',
      category: 'yarns',
      catLabel: 'FABRICS',
      title: 'Earth-Toned Upcycled Eco-Canvas Fabric Rolls',
      image: '/images/fabric_stack_earth.png',
    },
  ];

  const filteredGallery =
    activeGalleryTab === 'all'
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeGalleryTab);

  return (
    <section className={styles.productsSectionWrapper}>
      {/* Background Engineering Grid */}
      <GridBackground variant="dots" dark={false} opacity={0.08} />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        {/* Section Header */}
        <SectionTitle
          label="OUR PRODUCTS"
          light={true}
          title="Recycled Sustainable Yarns & Fabrics"
          subtitle="Explore our GRS-certified product range engineered for high-tensile apparel and sustainable textile applications."
        />

        {/* INTERACTIVE PRODUCT SLIDER / CAROUSEL CARD */}
        <motion.div
          className={styles.bulletListContainerCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={styles.bulletListGridContainer}>
            {/* Left Column: Product Selector List */}
            <div className={styles.bulletColumn}>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--color-emerald)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '4px' }}>
                Available Yarn & Fabric Varieties
              </span>
              <h3 className={styles.bulletSectionHeading}>Explore Our Sustainable Products</h3>
              <p className={styles.bulletSectionSub}>
                Select a yarn or fabric type to explore its product specifications:
              </p>

              <ul className={styles.bulletHyperlinkList}>
                {carouselProducts.map((prod, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <li
                      key={prod.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`${styles.bulletListItem} ${isActive ? styles.bulletItemActive : ''}`}
                      style={{ cursor: 'pointer' }}
                    >
                      <span className={styles.bulletDot} style={{ color: isActive ? 'var(--color-emerald)' : 'rgba(14, 59, 46, 0.3)' }}>
                        •
                      </span>
                      <div className={styles.yarnHyperlink}>
                        <span
                          className={styles.yarnTitleText}
                          style={{
                            color: isActive ? 'var(--color-emerald)' : 'var(--color-deep-forest)',
                            fontWeight: isActive ? 800 : 700
                          }}
                        >
                          {prod.name}
                        </span>
                        <FaArrowRight className={styles.arrowIcon} style={{ opacity: isActive ? 1 : 0.4 }} />
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Slider Controls */}
              <div className={styles.sliderControlsRow}>
                <div className={styles.sliderNavBtnGroup}>
                  <button className={styles.sliderNavBtn} onClick={handlePrev} aria-label="Previous Product">
                    <FaChevronLeft />
                    <span>Previous</span>
                  </button>
                  <button className={styles.sliderNavBtn} onClick={handleNext} aria-label="Next Product">
                    <span>Next</span>
                    <FaChevronRight />
                  </button>
                </div>

                {/* Pagination Dots */}
                <div className={styles.dotsRow}>
                  {carouselProducts.map((_, idx) => (
                    <button
                      key={idx}
                      className={`${styles.dotItem} ${idx === activeIndex ? styles.dotActive : ''}`}
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Go to product ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Hero Product Preview Box */}
            <div className={styles.previewColumn}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className={styles.previewCard}
                >
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    className={styles.previewImg}
                  />

                  <div className={styles.previewInfoBox}>
                    <span className={styles.previewTag}>{activeProduct.category}</span>
                    <h4 className={styles.previewTitle}>{activeProduct.name}</h4>
                    <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.85)', margin: '4px 0 10px', lineHeight: 1.4 }}>
                      {activeProduct.description}
                    </p>

                    <Link to={`/products/${activeProduct.slug}`} className="btn-primary" style={{ alignSelf: 'flex-start', padding: '8px 20px', fontSize: '0.85rem' }}>
                      <span>View Specifications →</span>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* WHERE OUR FABRICS ARE USED BANNER */}
        <motion.div
          className={styles.fabricUsageBannerCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/fabric_usage_banner.png"
            alt="Where Our Fabrics Are Used"
            className={styles.fabricUsageImg}
            loading="lazy"
          />
        </motion.div>

        {/* VALUE CHAIN FLOW COMPARISON CARD */}
        <motion.div
          className={styles.valueChainWrapper}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            label="PRODUCT VALUE CHAIN"
            title="Integrated Circular Product Transformation"
            subtitle="Explore how our manufacturing ecosystem seamlessly converts raw staple fibres into high-tensile yarns and finished eco-fabrics."
          />

          <div className={styles.chainGrid}>
            <div className={styles.chainCard}>
              <span className={styles.chainStepNum}>STAGE 01</span>
              <h4 className={styles.chainTitle}>Recycled Fibres</h4>
              <p className={styles.chainDesc}>
                Purified micro-denier staple fibres mechanically recovered from pre-consumer textile waste.
              </p>
            </div>

            <div className={styles.chainArrowCol}>
              <FaArrowRight />
            </div>

            <div className={styles.chainCard}>
              <span className={styles.chainStepNum}>STAGE 02</span>
              <h4 className={styles.chainTitle}>Recycled Yarns</h4>
              <p className={styles.chainDesc}>
                High-strength ring-spun & dope-dyed yarns engineered across Ne 10s to 40s count ranges.
              </p>
            </div>

            <div className={styles.chainArrowCol}>
              <FaArrowRight />
            </div>

            <div className={styles.chainCard}>
              <span className={styles.chainStepNum}>STAGE 03</span>
              <h4 className={styles.chainTitle}>Recycled Fabrics</h4>
              <p className={styles.chainDesc}>
                Durable, soft-finish woven Duck canvas and knitted fabrics ready for luxury apparel & technical uses.
              </p>
            </div>
          </div>
        </motion.div>

        {/* WHY CHOOSE OUR PRODUCTS */}
        <div className={styles.whyChooseWrapper}>
          <SectionTitle
            label="WHY CHOOSE AVANTEE"
            light={true}
            title="Engineered Excellence & Uncompromising Quality"
          />

          <div className={styles.whyGrid}>
            {whyProps.map((w, idx) => (
              <motion.div
                key={w.title}
                className={styles.whyCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className={styles.whyIconBox}>{w.icon}</div>
                <h4 className={styles.whyTitle}>{w.title}</h4>
                <p className={styles.whyDesc}>{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MANUFACTURING GALLERY & LIGHTBOX */}
        <div>
          <SectionTitle
            label="MANUFACTURING GALLERY"
            light={true}
            title="Inside Our Production & Quality Facilities"
          />

          {/* Filter Tabs */}
          <div className={styles.galleryFilterRow}>
            {['all', 'fibres', 'yarns', 'fabrics', 'factory', 'quality'].map((cat) => (
              <button
                key={cat}
                className={`${styles.galleryTab} ${activeGalleryTab === cat ? styles.activeGalleryTab : ''}`}
                onClick={() => setActiveGalleryTab(cat)}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className={styles.galleryMasonryGrid}>
            {filteredGallery.map((item) => (
              <motion.div
                key={item.id}
                className={styles.galleryItemCard}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -6 }}
                onClick={() => setLightboxItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.galleryItemImg}
                  loading="lazy"
                />
                <div className={styles.galleryItemOverlay}>
                  <span className={styles.galleryItemCat}>{item.catLabel}</span>
                  <h4 className={styles.galleryItemTitle}>{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxItem && (
          <div className={styles.lightboxOverlay}>
            <motion.div
              className={styles.lightboxBackdrop}
              onClick={() => setLightboxItem(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className={styles.lightboxContent}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
            >
              <button
                className={styles.lightboxClose}
                onClick={() => setLightboxItem(null)}
              >
                <FaTimes />
              </button>
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className={styles.lightboxImg}
              />
              <div className={styles.lightboxInfo}>
                <span className={styles.galleryItemCat}>{lightboxItem.catLabel}</span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '4px' }}>
                  {lightboxItem.title}
                </h3>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
