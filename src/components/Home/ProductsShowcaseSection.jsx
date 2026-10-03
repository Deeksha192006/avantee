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

  // 1. RECYCLED SUSTAINABLE FABRICS (2 Products)
  const fabricProducts = [
    {
      id: 'knit-fabrics',
      num: '01',
      name: 'Knit Fabrics',
      slug: 'knit-fabrics',
      tag: '100% GRS Certified • Soft & Elastic',
      image: '/images/fabric_stack_dark.png',
      description: 'Recycled knit fabrics designed for comfortable, durable and sustainable textile applications.',
    },
    {
      id: 'woven-fabrics',
      num: '02',
      name: 'Woven Fabrics',
      slug: 'woven-fabrics',
      tag: 'High Tensile • Precision Loom Weave',
      image: '/images/eco_material_rolls.png',
      description: 'Recycled woven fabrics developed for durable and versatile textile applications with a focus on sustainability.',
    },
  ];

  // 2. RECYCLED SUSTAINABLE YARNS (4 Products)
  // 2. RECYCLED SUSTAINABLE YARNS (7 Products)
  const yarnProducts = [
    {
      id: 'recycled-knitting-yarn',
      num: '01',
      name: 'Recycled Knitting Yarn',
      slug: 'recycled-knitting-yarn',
      tag: '100% GRS & RCS Certified',
      image: '/images/recycled_knit_yarn.jpg',
      description: 'Recycled yarn designed for circular and flat knitting applications, combining loop stability and consistency.',
    },
    {
      id: 'recycled-weaving-yarn',
      num: '02',
      name: 'Recycled Weaving Yarn',
      slug: 'recycled-weaving-yarn',
      tag: 'High Tensile Strength • Weaving Spin',
      image: '/images/recycled_weaving_yarn.jpg',
      description: 'Recycled yarn engineered for high-speed weaving looms, delivering maximum warp and weft tensile strength.',
    },
    {
      id: 'recycled-cotton-melange-yarn',
      num: '03',
      name: 'Recycled Cotton Melange Yarn',
      slug: 'recycled-cotton-melange-yarn',
      tag: 'Multi-Tonal Heather • Pre-Dyed Blends',
      image: '/images/recycled_melange_yarn.jpg',
      description: 'Recycled cotton melange yarn produced with blended colour effects without wet-dyeing, creating rich heather textures.',
    },
    {
      id: 'recycled-denim-yarn',
      num: '04',
      name: 'Recycled Denim Yarn',
      slug: 'recycled-denim-yarn',
      tag: 'Upcycled Denim Waste • Vintage Slub',
      image: '/images/recycled_denim_yarn.jpg',
      description: 'Recycled yarn developed for denim applications, supporting sustainable textile production through upcycled denim.',
    },
    {
      id: 'recycled-speciality-blended-yarn',
      num: '05',
      name: 'Recycled Speciality Blended Yarn',
      slug: 'recycled-speciality-blended-yarn',
      tag: 'Engineered Specialty Blends',
      image: '/images/yarn_cones_emerald.png',
      description: 'Custom-engineered specialty blended yarns combining recycled materials with organic cotton or high-tenacity filament.',
    },
    {
      id: 'regenerated-blends-counts',
      num: '06',
      name: 'Regenerated Blends & Counts',
      slug: 'regenerated-blends-counts',
      tag: 'Precise Micron & Staple Alignment',
      image: '/images/yarn_cones_spools.png',
      description: 'Superior regenerated yarn blends processed through multi-stage opening and carding for uniform count and low hairiness.',
    },
    {
      id: 'colored-yarn-shades',
      num: '07',
      name: 'Colored Yarn Shades',
      slug: 'colored-yarn-shades',
      tag: 'Waterless Dope-Dyed 150+ Shades',
      image: '/images/yarn_balls_pastel.jpg',
      description: 'Extensive portfolio of 150+ vibrant, consistent colored yarn shades created through waterless dope-dyeing.',
    },
  ];

  const [activeFabricIndex, setActiveFabricIndex] = useState(0);
  const [activeYarnIndex, setActiveYarnIndex] = useState(0);

  const activeFabric = fabricProducts[activeFabricIndex];
  const activeYarn = yarnProducts[activeYarnIndex];

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
      catLabel: 'RECYCLED TEXTILES',
      title: 'AVANTEE Recycled Textile Bales & Branded Spool',
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

        {/* ========================================================
            CATEGORY 1: RECYCLED SUSTAINABLE FABRICS
           ======================================================== */}
        <motion.div
          className={styles.bulletListContainerCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.bulletListGridContainer}>
            {/* LEFT COLUMN: Product Content & Selector List */}
            <div className={styles.bulletColumn}>
              <span className={styles.categorySubhead}>
                PRODUCT CATEGORY 01
              </span>
              <h3 className={styles.bulletSectionHeading}>Recycled Sustainable Fabrics</h3>
              <p className={styles.bulletSectionSub}>
                Select a fabric variety below to inspect product features and specifications:
              </p>

              <ul className={styles.bulletHyperlinkList}>
                {fabricProducts.map((prod, idx) => {
                  const isActive = idx === activeFabricIndex;
                  return (
                    <li
                      key={prod.id}
                      onClick={() => setActiveFabricIndex(idx)}
                      className={`${styles.bulletListItem} ${isActive ? styles.bulletItemActive : ''}`}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className={styles.bulletItemHeaderRow}>
                        <div className={styles.itemTitleGroup}>
                          <span className={styles.bulletDot}>
                            {prod.num}
                          </span>
                          <span
                            className={styles.yarnTitleText}
                            style={{
                              color: isActive ? 'var(--color-emerald)' : 'var(--color-deep-forest)',
                              fontWeight: isActive ? 800 : 700
                            }}
                          >
                            {prod.name}
                          </span>
                        </div>
                        <FaArrowRight className={styles.arrowIcon} style={{ color: isActive ? 'var(--color-emerald)' : 'rgba(14, 59, 46, 0.4)' }} />
                      </div>

                      {/* Expanded Active Info */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className={styles.itemActiveContent}
                        >
                          <p className={styles.itemDesc}>{prod.description}</p>
                          <Link to={`/products/${prod.slug}`} className={styles.specsInlineBtn}>
                            <span>View Specifications</span>
                            <FaArrowRight style={{ fontSize: '0.8rem' }} />
                          </Link>
                        </motion.div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* RIGHT COLUMN: Product Image */}
            <div className={styles.previewColumn}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFabric.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4 }}
                  className={styles.previewCard}
                >
                  <img
                    src={activeFabric.image}
                    alt={activeFabric.name}
                    className={styles.previewImg}
                  />

                  <div className={styles.previewInfoBox}>
                    <span className={styles.previewTag}>{activeFabric.tag}</span>
                    <h4 className={styles.previewTitle}>{activeFabric.name}</h4>
                    <p className={styles.previewShortText}>
                      {activeFabric.description}
                    </p>

                    <Link
                      to={`/products/${activeFabric.slug}`}
                      className="btn-primary"
                      style={{ alignSelf: 'flex-start', padding: '8px 20px', fontSize: '0.85rem' }}
                    >
                      <span>View Specifications →</span>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            CATEGORY 2: RECYCLED SUSTAINABLE YARNS
           ======================================================== */}
        <motion.div
          className={styles.bulletListContainerCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.bulletListGridContainer}>
            {/* LEFT COLUMN: Product Content & Selector List */}
            <div className={styles.bulletColumn}>
              <span className={styles.categorySubhead}>
                PRODUCT CATEGORY 02
              </span>
              <h3 className={styles.bulletSectionHeading}>Recycled Sustainable Yarns</h3>
              <p className={styles.bulletSectionSub}>
                Select a yarn variety below to inspect product features and specifications:
              </p>

              <ul className={styles.bulletHyperlinkList}>
                {yarnProducts.map((prod, idx) => {
                  const isActive = idx === activeYarnIndex;
                  return (
                    <li
                      key={prod.id}
                      onClick={() => setActiveYarnIndex(idx)}
                      className={`${styles.bulletListItem} ${isActive ? styles.bulletItemActive : ''}`}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className={styles.bulletItemHeaderRow}>
                        <div className={styles.itemTitleGroup}>
                          <span className={styles.bulletDot}>
                            {prod.num}
                          </span>
                          <span
                            className={styles.yarnTitleText}
                            style={{
                              color: isActive ? 'var(--color-emerald)' : 'var(--color-deep-forest)',
                              fontWeight: isActive ? 800 : 700
                            }}
                          >
                            {prod.name}
                          </span>
                        </div>
                        <FaArrowRight className={styles.arrowIcon} style={{ color: isActive ? 'var(--color-emerald)' : 'rgba(14, 59, 46, 0.4)' }} />
                      </div>

                      {/* Expanded Active Info */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className={styles.itemActiveContent}
                        >
                          <p className={styles.itemDesc}>{prod.description}</p>
                          <Link to={`/products/${prod.slug}`} className={styles.specsInlineBtn}>
                            <span>View Specifications</span>
                            <FaArrowRight style={{ fontSize: '0.8rem' }} />
                          </Link>
                        </motion.div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* RIGHT COLUMN: Product Image */}
            <div className={styles.previewColumn}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeYarn.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4 }}
                  className={styles.previewCard}
                >
                  <img
                    src={activeYarn.image}
                    alt={activeYarn.name}
                    className={styles.previewImg}
                  />

                  <div className={styles.previewInfoBox}>
                    <span className={styles.previewTag}>{activeYarn.tag}</span>
                    <h4 className={styles.previewTitle}>{activeYarn.name}</h4>
                    <p className={styles.previewShortText}>
                      {activeYarn.description}
                    </p>

                    <Link
                      to={`/products/${activeYarn.slug}`}
                      className="btn-primary"
                      style={{ alignSelf: 'flex-start', padding: '8px 20px', fontSize: '0.85rem' }}
                    >
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
            subtitle="Explore how our manufacturing ecosystem seamlessly converts raw recycled materials into high-tensile yarns and finished eco-fabrics."
          />

          <div className={styles.chainGrid}>
            <div className={styles.chainCard}>
              <span className={styles.chainStepNum}>STAGE 01</span>
              <h4 className={styles.chainTitle}>Recycled Materials</h4>
              <p className={styles.chainDesc}>
                Purified micro-denier staple materials mechanically recovered from pre-consumer textile waste.
              </p>
            </div>

            <div className={styles.chainArrowCol}>
              <FaArrowRight />
            </div>

            <div className={styles.chainCard}>
              <span className={styles.chainStepNum}>STAGE 02</span>
              <h4 className={styles.chainTitle}>Recycled Yarns</h4>
              <p className={styles.chainDesc}>
                High-strength open-end & dope-dyed yarns engineered across Ne 10s to 40s count ranges.
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
            {['all', 'yarns', 'fabrics', 'factory', 'quality'].map((cat) => (
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
