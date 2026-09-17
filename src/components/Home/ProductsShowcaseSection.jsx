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
  const [hoveredYarnId, setHoveredYarnId] = useState('prod-knit-yarn');

  // Bulleted Hyperlink List of Yarn Types
  const yarnList = [
    {
      id: 'prod-knit-yarn',
      title: 'Recycled Knit Yarn',
      category: 'RECYCLED KNIT YARN',
      tag: '100% GRS Certified • High Elasticity',
      link: '/products?item=prod-knit-yarn',
      image: '/images/recycled_knit_yarn.jpg',
    },
    {
      id: 'prod-weaving-yarn',
      title: 'Recycled Weaving Yarn',
      category: 'RECYCLED WEAVING YARN',
      tag: 'High Tensile Strength • Ring-Spun',
      link: '/products?item=prod-weaving-yarn',
      image: '/images/recycled_weaving_yarn.jpg',
    },
    {
      id: 'prod-melange-yarn',
      title: 'Recycled Melange Yarn',
      category: 'RECYCLED MELANGE YARN',
      tag: 'Multi-Tonal Heather • Pre-Dyed Blends',
      link: '/products?item=prod-melange-yarn',
      image: '/images/recycled_melange_yarn.jpg',
    },
    {
      id: 'prod-denim-yarn',
      title: 'Recycled Denim Yarn',
      category: 'RECYCLED DENIM YARN',
      tag: 'Upcycled Denim Waste • Vintage Slub',
      link: '/products?item=prod-denim-yarn',
      image: '/images/recycled_denim_yarn.jpg',
    },
    {
      id: 'p-ocean',
      title: 'Recycled Ocean PET & Cotton Yarn',
      category: 'RECYCLED PET YARN',
      tag: '18 Ocean Bottles Recycled / Garment',
      link: '/products?item=p-ocean',
      image: '/images/avantee_ocean_sweater_spool.jpg',
    },
    {
      id: 'p-hoodie',
      title: 'AVANTEE Signature Mint Eco Yarn',
      category: 'SIGNATURE MINT YARN',
      tag: 'Cellulosic Viscose & Recycled Cotton',
      link: '/products?item=p-hoodie',
      image: '/images/avantee_mint_hoodie_spool.jpg',
    },
  ];

  const activeYarn = yarnList.find((y) => y.id === hoveredYarnId) || yarnList[0];

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

  // Gallery items with categories including uploaded fabric photos
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
          title="Recycled Sustainability Yarns"
          subtitle="Click on any yarn variety below to view complete technical details on our Products page."
        />

        {/* BULLETED YARN HYPERLINK LIST SECTION */}
        <motion.div
          className={styles.bulletListContainerCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.bulletListGridContainer}>
            {/* Left Column: Bulleted Hyperlinks */}
            <div className={styles.bulletColumn}>
              <h3 className={styles.bulletSectionHeading}>Available Yarn Varieties</h3>
              <p className={styles.bulletSectionSub}>
                Select a yarn type to navigate directly to its product specifications:
              </p>

              <ul className={styles.bulletHyperlinkList}>
                {yarnList.map((yarn) => (
                  <li
                    key={yarn.id}
                    onMouseEnter={() => setHoveredYarnId(yarn.id)}
                    className={`${styles.bulletListItem} ${hoveredYarnId === yarn.id ? styles.bulletItemActive : ''
                      }`}
                  >
                    <span className={styles.bulletDot}>•</span>
                    <Link to={yarn.link} className={styles.yarnHyperlink}>
                      <span className={styles.yarnTitleText}>{yarn.title}</span>
                      <FaArrowRight className={styles.arrowIcon} />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className={styles.bulletCtaBox}>
                <Link to="/products" className="btn-primary">
                  <span>View All Products in Catalog</span>
                  <FaArrowRight />
                </Link>
              </div>
            </div>

            {/* Right Column: Live Interactive Preview */}
            <div className={styles.previewColumn}>
              <div className={styles.previewCard}>
                <span className={styles.categoryTagBadge}>{activeYarn.category}</span>
                <img
                  src={activeYarn.image}
                  alt={activeYarn.title}
                  className={styles.previewImg}
                  loading="lazy"
                />
                <div className={styles.previewInfoBox}>
                  <h4 className={styles.previewTitle}>{activeYarn.title}</h4>
                  <span className={styles.previewTag}>{activeYarn.tag}</span>
                  <Link to={activeYarn.link} className={styles.previewLinkBtn}>
                    <span>View Specifications →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

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
                className={`${styles.galleryTab} ${activeGalleryTab === cat ? styles.activeGalleryTab : ''
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
