import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilter, FaDownload, FaArrowRight, FaTimes, FaLayerGroup, FaRecycle, FaAward } from 'react-icons/fa';
import { useTranslation } from '../context/LanguageContext';
import { TypingText } from '../components/Common/TypingText';
import { AnimatedCounter } from '../components/Common/AnimatedCounter';
import { GridBackground } from '../components/Common/GridBackground';
import styles from './ProductsPage.module.css';

export const ProductsPage = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productTypingPhrases = [
    '100% GRS Certified Recycled Fibres.',
    'High Tenacity Ring Spun Cotton Yarns.',
    'Zero Water Dope-Dyed Filament Fabrics.',
  ];

  const fullProducts = [
    {
      id: 'p-hoodie',
      category: 'yarns',
      name: 'AVANTEE Signature Mint Eco Hoodie & Spool',
      tag: '100% GRS Certified Recycled Cotton & Viscose',
      denier: 'Count Ne 20s to Ne 30s Fleece Spin',
      cut: 'Branded Kraft Paper Band Spools',
      image: '/images/avantee_mint_hoodie_spool.jpg',
      desc: 'Our flagship GRS-certified mint eco-yarn and fleece hoodie crafted from 80% recycled cotton and 20% cellulosic viscose with zero water dyeing technology.',
      applications: ['Sustainable Fleece Hoodies', 'Streetwear & Activewear', 'Circular Fashion Brands', 'Knitted Eco Textiles'],
      specs: { Tenacity: '5.4 - 5.8 g/d', Elongation: '28% - 34%', GRSStatus: '100% Certified', WaterSaved: '4,500 L / kg' }
    },
    {
      id: 'p-ocean',
      category: 'yarns',
      name: 'AVANTEE Ocean Recycled PET Sweater & Spool',
      tag: 'Upcycled Ocean PET Plastics & Recycled Cotton',
      denier: 'Count Ne 16s to Ne 32s Knit Spin',
      cut: 'Branded Kraft Paper Band Spools',
      image: '/images/avantee_ocean_sweater_spool.jpg',
      desc: 'Premium eco-yarn and luxury V-neck sweater produced by upcycling post-consumer ocean plastic bottles and recycled cotton fibers.',
      applications: ['Luxury V-Neck Knitwear', 'Sustainable Winterwear', 'Eco Corporate Apparel', 'Woven & Knitted Fabrics'],
      specs: { BottlesRecycled: '18 Bottles / Garment', TensileStrength: '1420 N', ColorFastness: 'Grade 4.8+', Shrinkage: '< 1.5%' }
    },
    {
      id: 'p1',
      category: 'yarns',
      name: 'AVANTEE Recycled Cotton Spool & Eco Apparel',
      tag: '80% Natural / 20% Recycled Cotton Blend',
      denier: 'Count Ne 10s to Ne 40s Single/Double',
      cut: 'Kraft Paper Band Branded Spools',
      image: '/images/avantee_hero_bale_spool.png',
      desc: 'Engineered from post-consumer cotton and recycled polyester fibers into high-tenacity eco-yarns with authentic natural textures.',
      applications: ['Organic Polo Shirts & Apparel', 'Sustainable Denim & Weaving', 'Knitted Eco Textiles', 'Home Furnishings'],
      specs: { Tenacity: '4.8 - 5.5 g/d', Elongation: '25% - 35%', CrimpCount: '12 - 16 crimps/inch', MoistureRegain: '0.4%' }
    },
    {
      id: 'p2',
      category: 'yarns',
      name: 'Automated Precision Weaving Loom Fabrics',
      tag: 'High-Density Woven Weave',
      denier: '300 GSM Heavy Woven Structure',
      cut: 'Width 60 Inches',
      image: '/images/textile_weave_loom.png',
      desc: 'Uniform, high-tenacity woven fabric produced on automated loom machines from pre-consumer cotton cuttings and recycled polyester staple fibres.',
      applications: ['Luxury Denim Weaving', 'High-Density Jackets & Coats', 'Heavy Canvas Apparel', 'Home Furnishings'],
      specs: { CSP: '2200 - 2600', Imperfections: '< 150 / 1000m', TwistMultiplier: '3.8 - 4.2', HairinessIndex: '4.5' }
    },
    {
      id: 'p3',
      category: 'yarns',
      name: 'Folded Fine Cotton & Emerald Pinstripe Shirt Fabrics',
      tag: 'Zero Water Dope Dyeing',
      denier: '180 GSM Fine Cotton Weave',
      cut: 'High-Density Breathable Weave',
      image: '/images/folded_cotton_fabrics.png',
      desc: 'High-density breathable dress shirt fabrics and pinstripes crafted with zero water dope-dyed yarns for pristine color vibrancy.',
      applications: ['Executive Dress Shirts', 'Activewear & Polos', 'Custom Tailoring', 'Uniform Wear'],
      specs: { ColorFastness: 'Grade 4.5+', Tenacity: '5.2 g/d', Shrinkage: '< 2.5%', OilContent: '1.2%' }
    },
    {
      id: 'p4',
      category: 'fabrics',
      name: 'AVANTEE Recycled Fiber Bales & Branded Spool',
      tag: '100% Upcycled Textile Fiber',
      denier: 'Count Ne 10s to Ne 40s Eco Yarn',
      cut: 'Branded Kraft Paper Band Spools',
      image: '/images/tailored_blazer_material.png',
      desc: 'Raw upcycled textile bales and GRS-certified cotton-polyester yarn spools engineered for sustainable apparel and polo shirt manufacturing.',
      applications: ['Recycled Polo Shirts', 'Eco-Friendly Knits', 'Circular Garment Weaving', 'Sustainable Apparel'],
      specs: { TensileStrength: '1350 N Warp / 1100 N Weft', TearResistance: '95 N', AbrasionCycles: '> 60,000 Rubs', WaterRepellency: 'Grade 90' }
    },
    {
      id: 'p5',
      category: 'fabrics',
      name: 'Stacked Eco-Friendly Velvet, Linen & Wool Rolls',
      tag: 'Heavy Duty Structural Weave',
      denier: '280 GSM Structured Check Weave',
      cut: 'Width 58 / 60 Inches',
      image: '/images/eco_material_rolls.png',
      desc: 'Luxurious stacked rolls of dark-toned knit and emerald check suiting fabrics woven for high-end circular fashion.',
      applications: ['Structured Jackets', 'Winter Overcoats', 'Formal Woven Apparel', 'Fashion Accessories'],
      specs: { TensileStrength: '1200 N Warp / 950 N Weft', TearResistance: '85 N', ColorFastness: 'Grade 4.5+', Pilling: 'Grade 4-5' }
    },
    {
      id: 'p6',
      category: 'fabrics',
      name: 'Luxury Suit Fabric & Tailored Materials Showcase',
      tag: 'Slub Denim & Linen Blend',
      denier: '280 GSM Slub Denim & Linen',
      cut: 'Width 60 Inches',
      image: '/images/suit_materials_showcase.png',
      desc: 'Comprehensive showcase of upcycled raw fibers, emerald suit cloth materials, and finished suiting textiles.',
      applications: ['Showroom Exhibits', 'Luxury Fashion Displays', 'Commercial Textiles', 'Eco Apparel'],
      specs: { SoftnessIndex: 'Ultra Soft', MoistureRegain: '8.5%', Shrinkage: '< 1.8%', TearResistance: '78 N' }
    }
  ];

  const filtered = activeFilter === 'all'
    ? fullProducts
    : fullProducts.filter(p => p.category === activeFilter);

  return (
    <div className={styles.productsPageWrapper}>
      {/* Header Banner */}
      <section className={styles.pageHeader}>
        <GridBackground variant="blueprint" dark={true} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className={styles.headerBadge}>{t('products.badge', 'Engineered Performance')}</span>
          <h1 className={styles.headerTitle}>
            {t('products.title', 'Premium Recycled Yarns, Fibres & Fabrics')}
          </h1>
          <p className={styles.headerSubtitle}>
            Browse our GRS-certified product portfolio engineered for high-tensile industrial and fashion applications.{' '}
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
                <AnimatedCounter value="12" suffix="+" duration={2} />
              </span>
              <span className={styles.metricText}>Product Lines</span>
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
              {['all', 'fibres', 'yarns', 'fabrics'].map((cat) => (
                <button
                  key={cat}
                  className={`${styles.filterTab} ${activeFilter === cat ? styles.activeFilterTab : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className={styles.productsGrid}>
            {filtered.map((prod) => (
              <motion.div
                key={prod.id}
                className={styles.productCard}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
              >
                <div className={styles.cardImgBox}>
                  <img src={prod.image} alt={prod.name} className={styles.cardImg} />
                  <span className={styles.tagBadge}>{prod.tag}</span>
                </div>

                <div className={styles.cardBody}>
                  <span className={styles.catBadge}>{prod.category.toUpperCase()}</span>
                  <h3 className={styles.cardName}>{prod.name}</h3>
                  <p className={styles.cardDesc}>{prod.desc}</p>

                  <div className={styles.appRow}>
                    <strong>Key Uses:</strong>
                    <div className={styles.tagWrap}>
                      {prod.applications.slice(0, 3).map((app, i) => (
                        <span key={i} className={styles.appChip}>{app}</span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <button className="btn-primary" onClick={() => setSelectedProduct(prod)}>
                      <span>Full Specifications</span>
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Spec Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className={styles.modalOverlay}>
            <motion.div
              className={styles.modalBackdrop}
              onClick={() => setSelectedProduct(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className={styles.specModal}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
            >
              <button className={styles.closeBtn} onClick={() => setSelectedProduct(null)}>
                <FaTimes />
              </button>

              <div className={styles.modalGrid}>
                <img src={selectedProduct.image} alt={selectedProduct.name} className={styles.modalImg} />

                <div>
                  <span className={styles.tagBadge}>{selectedProduct.tag}</span>
                  <h2 className={styles.modalTitle}>{selectedProduct.name}</h2>
                  <p className={styles.modalDesc}>{selectedProduct.desc}</p>

                  <h4 className={styles.specSectionTitle}>Technical Data Sheet</h4>
                  <div className={styles.specGrid}>
                    {Object.entries(selectedProduct.specs).map(([k, v]) => (
                      <div key={k} className={styles.specBox}>
                        <span className={styles.specKey}>{k}:</span>
                        <span className={styles.specVal}>{v}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.actionGroup}>
                    <button className="btn-gold" onClick={() => alert('Downloading official TDS brochure...')}>
                      <FaDownload />
                      <span>Download Technical Spec PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
