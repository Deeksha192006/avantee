import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaRecycle,
  FaIndustry,
  FaLeaf,
  FaTshirt,
  FaStore,
  FaBoxOpen,
  FaArrowRight,
  FaTrashAlt,
  FaShoppingCart,
} from 'react-icons/fa';
import { GridBackground } from '../Common/GridBackground';
import styles from './CircularInfinitySection.module.css';

export const CircularInfinitySection = () => {
  const scrollAnim = { once: false, amount: 0.2 };

  // Exact 8 Nodes matching the 1st reference image diagram layout
  const nodes = [
    {
      id: 'n1',
      title: 'Pre Consumer Waste',
      desc: 'Ethically recovered high-grade garment cutting waste collected before reaching consumers.',
      x: 160,
      y: 65,
      labelY: 35,
      icon: <FaTrashAlt />,
    },
    {
      id: 'n2',
      title: 'Garments',
      desc: 'High-performance recycled yarns woven into premium apparel and fashion textiles.',
      x: 160,
      y: 135,
      labelY: 160,
      icon: <FaTshirt />,
    },
    {
      id: 'n3',
      title: 'Manufacturer',
      desc: 'Automated Swiss Rieter spinning frames and Trützschler carding extrusion lines.',
      x: 50,
      y: 190,
      labelY: 228,
      labelX: 55,
      icon: <FaIndustry />,
    },
    {
      id: 'n4',
      title: 'Recycled Material',
      desc: 'Purified micro-denier staple fibres prepared for continuous zero-solvent spinning.',
      x: 80,
      y: 300,
      labelY: 345,
      labelX: 95,
      icon: <FaLeaf />,
    },
    {
      id: 'n5',
      title: 'Recycler',
      desc: 'Mechanical fibre opening technology eliminating chemical water pollution.',
      x: 190,
      y: 335,
      labelY: 368,
      icon: <FaRecycle />,
    },
    {
      id: 'n6',
      title: 'Retailing Brand',
      desc: 'Supplying leading international sustainable apparel brands across 5+ countries.',
      x: 300,
      y: 190,
      labelY: 225,
      icon: <FaStore />,
    },
    {
      id: 'n7',
      title: 'Post Consumer Waste',
      desc: 'Diverting end-of-life textiles away from municipal landfills back into circular loops.',
      x: 440,
      y: 65,
      labelY: 35,
      icon: <FaBoxOpen />,
    },
    {
      id: 'n8',
      title: 'End Customer',
      desc: 'Empowering global consumers with certified zero-landfill sustainable products.',
      x: 550,
      y: 190,
      labelY: 228,
      labelX: 545,
      icon: <FaShoppingCart />,
    },
  ];

  const [activeNode, setActiveNode] = useState(nodes[0]);

  // Smooth double-loop infinity ribbon path (figure 8)
  const ribbonPath = "M 300 190 C 210 50 70 50 70 190 C 70 330 210 330 300 190 C 390 50 530 50 530 190 C 530 330 390 330 300 190 Z";

  return (
    <section className={styles.infinitySectionWrapper}>
      <GridBackground variant="dots" dark={true} opacity={0.08} />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div className={styles.infinityGrid}>
          {/* Left Content Column */}
          <motion.div
            className={styles.leftContentCol}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={scrollAnim}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.badge}>
              <span>CIRCULAR MANUFACTURING ECOSYSTEM</span>
            </div>

            <h2 className={styles.title}>
              Closed-Loop Infinity Recycling Journey
            </h2>

            <p className={styles.desc}>
              Avantee Industries operates an integrated circular recycling ribbon. By converting pre-consumer textile waste into high-tenacity staple fibres, ring-spun yarns, and upcycled fabrics, we eliminate virgin resource dependency in a continuous closed loop.
            </p>

            <div className={styles.featureChips}>
              <span className={styles.chip}>✦ 100% Pre-Consumer Waste</span>
              <span className={styles.chip}>✦ Zero-Landfill Closed Loop</span>
              <span className={styles.chip}>✦ GRS & RCS Certified</span>
              <span className={styles.chip}>✦ Zero Chemical Solvents</span>
            </div>

            <div>
              <Link to="/sustainability" className="btn-primary">
                <span>Explore Circular Process</span>
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>

          {/* Right Infinity Diagram Image (Matching User Uploaded Image) */}
          <motion.div
            className={styles.infinityImageContainer}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={scrollAnim}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageCard}>
              <img
                src="/images/circular_infinity_loop.png"
                alt="Closed-Loop Infinity Recycling Journey Diagram"
                className={styles.infinityDarkImg}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
