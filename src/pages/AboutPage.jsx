import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaGem } from 'react-icons/fa';
import { useTranslation } from '../context/LanguageContext';
import { TypingText } from '../components/Common/TypingText';
import { AnimatedCounter } from '../components/Common/AnimatedCounter';
import { SectionTitle } from '../components/Common/SectionTitle';
import { GridBackground } from '../components/Common/GridBackground';
import styles from './AboutPage.module.css';

export const AboutPage = () => {
  const { t } = useTranslation();

  const aboutTypingPhrases = [
    '25+ Years of Sustainable Textile Innovation.',
    'Pioneering Zero Waste Circularity.',
    'Exporting GRS Certified Yarns to 45+ Nations.',
  ];

  const timelineMilestones = [
    { year: '1999', title: 'Founding of Avantee Complex', desc: 'Started initial spinning unit in Tamil Nadu with 5,000 spindles.' },
    { year: '2008', title: 'Closed-Loop PET Recycling Facility', desc: 'Commissioned first automated post-consumer plastic bottle recycling plant.' },
    { year: '2015', title: 'GRS & OEKO-TEX Certification', desc: 'Achieved full Global Recycled Standard accreditation for exported yarns.' },
    { year: '2020', title: 'Zero Liquid Discharge (ZLD) Technology', desc: 'Eliminated water waste in yarn dyeing with 98% recycled water recycling.' },
    { year: '2024', title: '50,000 MT Annual Capacity Benchmark', desc: 'Expanded into 45+ international markets across North America, Europe, and Asia.' },
  ];

  const leadershipTeam = [
    {
      name: 'R. K. Avantee',
      role: 'Founder & Managing Director',
      bio: 'Visionary industrialist with 30+ years in circular textile engineering and eco-fabric innovation.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'Ananya Subraman',
      role: 'Chief Sustainability Officer',
      bio: 'Pioneered zero-water dyeing processes and global ESG compliance frameworks.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'Dr. Heinrich Webber',
      role: 'Director of Fiber R&D',
      bio: 'Former European Textile Research Institute scholar specializing in micro-denier staple polymers.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    }
  ];

  return (
    <div className={styles.aboutPageWrapper}>
      {/* Page Header Banner */}
      <section className={styles.pageHeader}>
        <GridBackground variant="blueprint" dark={true} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.span
            className={styles.headerBadge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('about.badge', 'Heritage & Vision')}
          </motion.span>
          <motion.h1
            className={styles.headerTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Pioneering <span className="text-gold-gradient">Circular Textiles</span> Since 1999
          </motion.h1>

          <motion.div
            className={styles.headerSubtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p>
              Avantee Industries Private Limited is a global manufacturer of GRS-certified recycled yarns, eco-fibres, and high-performance technical fabrics.{' '}
              <span className={styles.typingSub}>
                <TypingText phrases={aboutTypingPhrases} speed={60} delay={2200} />
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Vision Values Grid */}
      <section className={`section-padding ${styles.mvvSection}`}>
        <GridBackground variant="grid" dark={false} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.mvvGrid}>
            <motion.div
              className={styles.mvvCard}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className={styles.cardIconBox}><FaBullseye /></div>
              <h3 className={styles.cardTitle}>{t('about.missionTitle', 'Our Mission')}</h3>
              <p className={styles.cardText}>{t('about.missionText')}</p>
            </motion.div>

            <motion.div
              className={styles.mvvCard}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className={styles.cardIconBoxGold}><FaEye /></div>
              <h3 className={styles.cardTitle}>{t('about.visionTitle', 'Our Vision')}</h3>
              <p className={styles.cardText}>{t('about.visionText')}</p>
            </motion.div>

            <motion.div
              className={styles.mvvCard}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className={styles.cardIconBox}><FaGem /></div>
              <h3 className={styles.cardTitle}>{t('about.valuesTitle', 'Core Values')}</h3>
              <ul className={styles.valuesList}>
                <li>✦ Circular Innovation</li>
                <li>✦ Uncompromising Quality</li>
                <li>✦ Environmental Stewardship</li>
                <li>✦ Global Traceability</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline Milestones */}
      <section className={`section-padding ${styles.timelineSection}`}>
        <GridBackground variant="dots" dark={false} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <SectionTitle
            label="JOURNEY & MILESTONES"
            title={
              <>
                <AnimatedCounter value="25" suffix="+" duration={2} /> Years of Sustainable Engineering
              </>
            }
          />

          <div className={styles.milestonesList}>
            {timelineMilestones.map((m, idx) => (
              <motion.div
                key={m.year}
                className={styles.milestoneItem}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={styles.milestoneYear}>{m.year}</div>
                <div className={styles.milestoneContent}>
                  <h4 className={styles.mTitle}>{m.title}</h4>
                  <p className={styles.mDesc}>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership Grid */}
      <section className={`section-padding ${styles.leadershipSection}`}>
        <GridBackground variant="grid" dark={true} opacity={0.08} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <SectionTitle
            label="EXECUTIVE LEADERSHIP"
            title="Guided by Industry Pioneers"
          />

          <div className={styles.teamGrid}>
            {leadershipTeam.map((leader, idx) => (
              <motion.div
                key={leader.name}
                className={styles.leaderCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.leaderImgBox}>
                  <img src={leader.image} alt={leader.name} className={styles.leaderImg} />
                </div>
                <div className={styles.leaderInfo}>
                  <h3 className={styles.leaderName}>{leader.name}</h3>
                  <span className={styles.leaderRole}>{leader.role}</span>
                  <p className={styles.leaderBio}>{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
