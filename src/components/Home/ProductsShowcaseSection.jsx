import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCheckCircle,
  FaArrowRight,
  FaDownload,
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

  // 3 Full-Screen Showcase Products
  const showcases = [
    {
      id: 'prod-fibres',
      category: 'RECYCLED FIBRES',
      title: 'Recycled Fibres',
      description:
        'Our recycled fibres are produced from carefully sourced pre-consumer textile waste using advanced mechanical recycling technology. Every fibre is processed for consistency, durability, and sustainability while reducing dependence on virgin cotton.',
      features: [
        'Premium Fibre Quality',
        'Mechanically Recycled',
        'Sustainable Raw Material',
        'Colour Consistency',
        'Reliable Supply',
      ],
      applications: [
        'Open-End Spinning',
        'Rotor Spinning',
        'Blended Yarn',
        'Knitted Textiles',
        'Home Textiles',
        'Industrial Textiles',
      ],
      ctaPrimaryText: 'Learn More',
      ctaPrimaryLink: '/products',
      ctaSecondaryText: 'Enquire Now',
      ctaSecondaryLink: '/contact',
      image: '/images/yarn_balls_emerald.png',
      layoutRight: false,
    },
    {
      id: 'prod-yarns',
      category: 'RECYCLED YARNS',
      title: 'Recycled Yarns',
      description:
        'Engineered for maximum tensile strength and zero shade variation, our GRS-certified yarns empower sustainable knitting and weaving applications globally.',
      features: [
        'High Tenacity',
        'Consistent Quality',
        'Zero Water Dyeing',
        'GRS Certified',
        'OEKO-TEX 100',
      ],
      applications: [
        'Knitting Apparel',
        'Woven Denim',
        'Home Furnishings',
        'Socks & Hosiery',
        'Industrial Weaving',
      ],
      ctaPrimaryText: 'Explore Yarns',
      ctaPrimaryLink: '/products',
      ctaSecondaryText: 'Download Spec Sheet',
      ctaSecondaryLink: '/contact',
      image: '/images/yarn_cones_emerald.png',
      layoutRight: true,
    },
    {
      id: 'prod-fabrics',
      category: 'RECYCLED FABRICS',
      title: 'Recycled Fabrics & Suitings',
      description:
        'Manufactured using our own recycled yarns, our fabrics combine premium luxury suiting quality with responsible manufacturing to create modern circular textile solutions.',
      features: [
        'Soft Finish',
        'Premium Texture',
        'Durable',
        'Eco Friendly',
        'Quality Controlled',
      ],
      applications: [
        'Bespoke Suiting',
        'Casual Wear',
        'Fashion Apparel',
        'Children Wear',
        'Home Textiles',
        'Accessories',
      ],
      ctaPrimaryText: 'Explore Fabrics',
      ctaPrimaryLink: '/products',
      ctaSecondaryText: 'Contact Team',
      ctaSecondaryLink: '/contact',
      image: '/images/suit_jackets_emerald.png',
      layoutRight: false,
    },
  ];

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
      title: 'Exported to 45+ Nations',
      desc: 'Trusted by major international apparel brands, weavers, and knitters across 5 continents.',
    },
    {
      icon: <FaIndustry />,
      title: '50,000 MT Annual Capacity',
      desc: 'Integrated large-scale manufacturing infrastructure ensuring reliable volume supply year-round.',
    },
    {
      icon: <FaLeaf />,
      title: 'Eco Friendly',
      desc: 'Zero-water dope-dyeing masterbatch processes reducing environmental carbon footprint.',
    },
  ];

  // Gallery items with categories including uploaded fabric photos
  const galleryItems = [
    {
      id: 'g1',
      category: 'fibres',
      catLabel: 'FIBRES',
      title: 'Purified Emerald Recycled Staple Yarn Balls',
      image: '/images/yarn_balls_emerald.png',
    },
    {
      id: 'g2',
      category: 'yarns',
      catLabel: 'YARNS',
      title: 'Precision-Spun Emerald & Charcoal Recycled Yarn Cones',
      image: '/images/yarn_cones_emerald.png',
    },
    {
      id: 'g3',
      category: 'fabrics',
      catLabel: 'SUITS & SHIRTS',
      title: 'Bespoke Emerald & Dark Navy Tailored Suit Jackets',
      image: '/images/suit_jackets_emerald.png',
    },
    {
      id: 'g4',
      category: 'fabrics',
      catLabel: 'SHIRTS & FABRICS',
      title: 'Folded Fine Cotton & Emerald Pinstripe Dress Shirts',
      image: '/images/folded_shirts_hd.png',
    },
    {
      id: 'g5',
      category: 'fabrics',
      catLabel: 'FABRICS',
      title: 'Stacked Emerald & Charcoal Wool-Silk Suit Fabrics',
      image: '/images/fabric_stack_emerald.png',
    },
    {
      id: 'g6',
      category: 'factory',
      catLabel: 'SHOWCASE',
      title: 'Textile Manufacturing & Luxury Fabric Showcase',
      image: '/images/fabric_usage_banner_emerald.png',
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
      catLabel: 'YARNS',
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
          title="Premium Circular Textile Solutions"
          subtitle="From responsibly sourced textile waste to high-performance recycled materials, Avantee Industries delivers sustainable fibres, yarns, and fabrics through one integrated manufacturing ecosystem."
        />

        {/* 3 FULL-SCREEN SHOWCASE PRODUCTS */}
        {showcases.map((prod) => (
          <motion.div
            key={prod.id}
            className={`${styles.showcaseBlock} ${
              prod.layoutRight ? styles.reverseLayout : ''
            }`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Image Card */}
            <div className={styles.showcaseImageCol}>
              <div className={styles.showcaseImageCard}>
                <span className={styles.categoryTagBadge}>{prod.category}</span>
                <img
                  src={prod.image}
                  alt={prod.title}
                  className={styles.showcaseImg}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className={styles.showcaseContentCol}>
              <h3 className={styles.prodTitle}>{prod.title}</h3>
              <p className={styles.prodDesc}>{prod.description}</p>

              {/* Features List */}
              <div className={styles.featuresGrid}>
                {prod.features.map((feat, i) => (
                  <div key={i} className={styles.featureItem}>
                    <FaCheckCircle className={styles.checkIcon} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Applications Chips */}
              <div className={styles.appSectionTitle}>Key Applications:</div>
              <div className={styles.chipGroup}>
                {prod.applications.map((app, i) => (
                  <span key={i} className={styles.appChip}>
                    {app}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className={styles.ctaRow}>
                <Link to={prod.ctaPrimaryLink} className="btn-primary">
                  <span>{prod.ctaPrimaryText}</span>
                  <FaArrowRight />
                </Link>

                <Link to={prod.ctaSecondaryLink} className="btn-secondary">
                  <span>{prod.ctaSecondaryText}</span>
                  {prod.ctaSecondaryText.includes('Brochure') && <FaDownload />}
                </Link>
              </div>
            </div>
          </motion.div>
        ))}

        {/* WHERE OUR FABRICS ARE USED - FEATURE BANNER (IMAGE 4) */}
        <motion.div
          className={styles.fabricUsageBannerCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/fabric_usage_banner.png"
            alt="Where Our Fabrics Are Used - Knitting Garment, Winter Wear, Woven Apparel, Home Textile, Tote Bags, Other Accessories"
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
                className={`${styles.galleryTab} ${
                  activeGalleryTab === cat ? styles.activeGalleryTab : ''
                }`}
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
