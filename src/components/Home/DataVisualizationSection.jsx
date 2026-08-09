import React from 'react';
import { motion } from 'framer-motion';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';
import {
  FaRecycle,
  FaGlobe,
  FaBuilding,
  FaShieldAlt,
  FaCheckCircle,
  FaChartPie,
  FaIndustry,
  FaWater,
  FaLeaf,
  FaBolt,
  FaCloudSun,
  FaCogs,
  FaFilter,
  FaWind,
  FaSync,
  FaProjectDiagram,
  FaTruckLoading,
  FaArrowRight,
  FaFlask,
  FaTint,
  FaTree,
  FaCheckDouble,
  FaAward,
} from 'react-icons/fa';
import { SectionTitle } from '../Common/SectionTitle';
import { GridBackground } from '../Common/GridBackground';
import { AnimatedCounter } from '../Common/AnimatedCounter';
import styles from './DataVisualizationSection.module.css';

export const DataVisualizationSection = () => {
  // Reusable motion viewport config for re-animating on scroll up and down
  const scrollAnim = {
    once: false,
    amount: 0.2,
  };

  // SECTION 1: GLOBAL IMPACT KPI CARDS
  const kpis = [
    { target: 50000, suffix: '+', label: 'Tons Recycled', icon: <FaRecycle /> },
    { target: 25, suffix: '+', label: 'Countries Served', icon: <FaGlobe /> },
    { target: 500, suffix: '+', label: 'Business Clients', icon: <FaBuilding /> },
    { target: 99, suffix: '%', label: 'Quality Assurance', icon: <FaShieldAlt /> },
    { target: 100, suffix: '%', label: 'Pre-Consumer Waste', icon: <FaCheckCircle /> },
  ];

  // SECTION 2 & 3: COUNTRIES SERVED & SOURCING NETWORK
  const globalPins = [
    { country: 'India', role: '500,000 Sq. Ft. Primary Eco Complex' },
    { country: 'Vietnam', role: 'Apparel Spinning Partner Hub' },
    { country: 'UAE', role: 'Middle East Regional Logistics Depot' },
    { country: 'Cambodia', role: 'Garment Waste Recycling Facility' },
    { country: 'USA', role: 'North America Distribution & Sales' },
    { country: 'Central America', role: 'Nearshoring Apparel Supply Chain' },
  ];

  // SECTION 4: CIRCULAR MANUFACTURING FLOW (8 STAGES)
  const processSteps = [
    { num: '01', title: 'Pre-Consumer Waste', desc: 'Garment cutting waste collected ethically.', icon: <FaRecycle /> },
    { num: '02', title: 'Sorting Audit', desc: 'Precision shade & composition inspection.', icon: <FaFilter /> },
    { num: '03', title: 'Fibre Recovery', desc: 'Mechanical opening without solvents.', icon: <FaCogs /> },
    { num: '04', title: 'Fibre Alignment', desc: 'Micro-denier carding & drafting.', icon: <FaWind /> },
    { num: '05', title: 'Yarn Manufacturing', desc: 'Swiss Rieter ring-spinning lines.', icon: <FaSync /> },
    { num: '06', title: 'Fabric Production', desc: 'Waterless dope-dyed weaving.', icon: <FaProjectDiagram /> },
    { num: '07', title: 'Quality Inspection', desc: 'Uster spectrophotometric lab tests.', icon: <FaFlask /> },
    { num: '08', title: 'Global Delivery', desc: 'Exported across 45+ international markets.', icon: <FaTruckLoading /> },
  ];

  // SECTION 5: PRODUCT MIX DOUGHNUT DATA (Recharts)
  const productMixData = [
    { name: 'Recycled Yarns', value: 40, color: '#1B7F5B' },
    { name: 'Recycled Fibres', value: 35, color: '#D9B65D' },
    { name: 'Recycled Fabrics', value: 25, color: '#DDF5E5' },
  ];

  // SECTION 6: MANUFACTURING CAPACITY BAR CHART DATA (Recharts)
  const capacityData = [
    { category: 'Fibres', tons: 20 },
    { category: 'Yarns', tons: 18 },
    { category: 'Fabrics', tons: 12 },
  ];

  // SECTION 7: WATER & ENVIRONMENTAL CONSERVATION RINGS
  const sustainRings = [
    { label: 'Water Saved', pct: 82, icon: <FaWater /> },
    { label: 'Waste Recovery', pct: 95, icon: <FaLeaf /> },
    { label: 'Energy Saved', pct: 76, icon: <FaBolt /> },
    { label: 'Carbon Reduction', pct: 68, icon: <FaCloudSun /> },
  ];

  // SECTION 8: ENVIRONMENTAL BENEFITS CARDS
  const envBenefits = [
    { title: 'Reduced Water Usage', desc: 'Zero-water dope dyeing eliminates thousands of liters per batch.', icon: <FaTint /> },
    { title: 'Lower Carbon Footprint', desc: 'Closed-loop mechanical extrusion reduces GHG emissions by 68%.', icon: <FaCloudSun /> },
    { title: 'Chemical Reduction', desc: 'Pure mechanical fibre opening avoids harsh chemical solvents.', icon: <FaFlask /> },
    { title: 'Zero Virgin Cotton', desc: 'Directs 100% pre-consumer textile waste away from landfills.', icon: <FaTree /> },
    { title: 'Circular Manufacturing', desc: 'Complete end-to-end recycling from staple fibre to fabric.', icon: <FaRecycle /> },
    { title: 'Reusable Resources', desc: 'Engineered for high tenacity across endless recycling loops.', icon: <FaCheckDouble /> },
  ];

  // SECTION 9: QUALITY CONTROL RADAR CHART DATA (Recharts)
  const radarData = [
    { subject: 'Strength', score: 95 },
    { subject: 'Durability', score: 92 },
    { subject: 'Colour Consistency', score: 98 },
    { subject: 'Eco Score', score: 100 },
    { subject: 'Performance', score: 90 },
    { subject: 'Quality', score: 99 },
  ];

  // SECTION 10: APPLICATION INDUSTRIES (Horizontal Bar Data)
  const applications = [
    { name: 'Fashion Apparel', val: 88 },
    { name: 'Home Textiles', val: 76 },
    { name: 'Industrial Textiles', val: 65 },
    { name: 'Sportswear', val: 82 },
    { name: 'Children Wear', val: 58 },
    { name: 'Accessories', val: 45 },
  ];

  // SECTION 12: PREMIUM KPI STRIP DATA
  const stripStats = [
    { num: 50000, suffix: '+', label: 'Recycled Materials (Tons)' },
    { num: 500, suffix: '+', label: 'Happy Customers' },
    { num: 25, suffix: '+', label: 'Global Destinations' },
    { num: 100, suffix: '%', label: 'Quality Assurance' },
    { num: 25, suffix: '+', label: 'Years Experience' },
  ];

  return (
    <section className={styles.vizSectionWrapper}>
      <GridBackground variant="blueprint" dark={true} opacity={0.08} />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        {/* HEADER */}
        <div className={styles.sectionHeader}>
          <SectionTitle
            label="MANUFACTURING & SUSTAINABILITY DATA"
            title="Quantifiable Excellence & Global Impact"
            subtitle="Explore our interactive production charts, circular waste recovery metrics, and global logistics network."
          />
        </div>

        {/* SECTION 1: GLOBAL IMPACT KPI CARDS */}
        <div className={styles.kpiGrid}>
          {kpis.map((k, idx) => (
            <motion.div
              key={k.label}
              className={`${styles.glassCard} ${styles.kpiCard}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={scrollAnim}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.cardSpotlightGlow} />
              <div className={styles.kpiVal}>
                <AnimatedCounter target={k.target} suffix={k.suffix} />
              </div>
              <div className={styles.kpiLabel}>{k.label}</div>
            </motion.div>
          ))}
        </div>

        {/* SECTION 2 & 3: INTERACTIVE WORLD MAP & SOURCING NETWORK */}
        <div className={styles.mapWrapper}>
          <SectionTitle
            label="GLOBAL NETWORK"
            title="Sourcing & Export Logistics Ecosystem"
          />

          <div className={styles.mapCard}>
            <div className={styles.mapPinsGrid}>
              {globalPins.map((p, idx) => (
                <motion.div
                  key={p.country}
                  className={styles.pinCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={scrollAnim}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className={styles.pulseDot} />
                  <div>
                    <h4 className={styles.countryName}>{p.country}</h4>
                    <p className={styles.countryRole}>{p.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* SECTION 3: Network Flow Connection Bar */}
            <div className={styles.networkFlowBar}>
              <span className={styles.networkNode}>India</span>
              <FaArrowRight className={styles.networkArrow} />
              <span className={styles.networkNode}>Vietnam</span>
              <FaArrowRight className={styles.networkArrow} />
              <span className={styles.networkNode}>UAE</span>
              <FaArrowRight className={styles.networkArrow} />
              <span className={styles.networkNode}>Cambodia</span>
              <FaArrowRight className={styles.networkArrow} />
              <span className={styles.networkNode}>USA</span>
              <FaArrowRight className={styles.networkArrow} />
              <span className={styles.networkNode}>Central America</span>
            </div>
          </div>
        </div>

        {/* SECTION 4: CIRCULAR MANUFACTURING FLOW */}
        <div className={styles.processFlowWrapper}>
          <SectionTitle
            label="CIRCULAR MANUFACTURING"
            title="8-Stage Zero-Waste Recycling Flow"
          />

          <div className={styles.flowGrid}>
            {processSteps.map((s, idx) => (
              <motion.div
                key={s.num}
                className={styles.flowCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={scrollAnim}
                transition={{ delay: idx * 0.08 }}
              >
                <span className={styles.flowStepNum}>STAGE {s.num}</span>
                <div className={styles.flowIcon}>{s.icon}</div>
                <h4 className={styles.flowStepTitle}>{s.title}</h4>
                <p className={styles.flowStepDesc}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 5 & 6: RECHARTS DOUGHNUT & CAPACITY BAR CHART */}
        <div className={styles.chartsDualRow}>
          {/* Section 5: Product Mix Doughnut Chart */}
          <motion.div
            className={styles.glassCard}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={scrollAnim}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.cardSpotlightGlow} />
            <h3 className={styles.chartTitle}>
              <FaChartPie className={styles.chartTitleIcon} />
              Product Portfolio Mix
            </h3>

            <div className={styles.doughnutFlex}>
              <div className={styles.doughnutWrapper}>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie
                      data={productMixData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {productMixData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        background: '#061A14',
                        border: '1px solid #D9B65D',
                        borderRadius: '8px',
                        color: '#FFF',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>

                <div className={styles.doughnutCenterText}>
                  <span className={styles.centerVal}>100%</span>
                  <span className={styles.centerSub}>CIRCULAR</span>
                </div>
              </div>

              <div className={styles.legendList}>
                {productMixData.map((item) => (
                  <div key={item.name} className={styles.legendItem}>
                    <span
                      className={styles.legendDot}
                      style={{ background: item.color }}
                    />
                    <span>{item.name}</span>
                    <span className={styles.legendPct}>{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Section 6: Manufacturing Capacity Bar Chart */}
          <motion.div
            className={styles.glassCard}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={scrollAnim}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.cardSpotlightGlow} />
            <h3 className={styles.chartTitle}>
              <FaIndustry className={styles.chartTitleIcon} />
              Annual Capacity (K Tons)
            </h3>

            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={capacityData} margin={{ top: 20, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                <XAxis dataKey="category" stroke="#DDF5E5" />
                <YAxis stroke="#DDF5E5" />
                <Tooltip
                  contentStyle={{
                    background: '#061A14',
                    border: '1px solid #D9B65D',
                    borderRadius: '8px',
                    color: '#FFF',
                  }}
                />
                <Bar dataKey="tons" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D9B65D" />
                    <stop offset="100%" stopColor="#1B7F5B" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* SECTION 7 & 9: WATER CONSERVATION RINGS & QUALITY RADAR */}
        <div className={styles.chartsDualRow}>
          {/* Section 7: Water & Sustainability Circular Rings */}
          <motion.div
            className={styles.glassCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollAnim}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.cardSpotlightGlow} />
            <h3 className={styles.chartTitle}>
              <FaWater className={styles.chartTitleIcon} />
              Resource Conservation Savings
            </h3>

            <div className={styles.sustainGrid} style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginBottom: 0 }}>
              {sustainRings.map((ring) => {
                const circumference = 2 * Math.PI * 40;
                const strokeDashoffset = circumference - (ring.pct / 100) * circumference;

                return (
                  <div key={ring.label} className={styles.ringCard} style={{ padding: '16px 10px' }}>
                    <div className={styles.ringSvgWrapper} style={{ width: '100px', height: '100px', marginBottom: '10px' }}>
                      <svg viewBox="0 0 100 100" width="100%" height="100%">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="8" />
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#D9B65D"
                          strokeWidth="8"
                          strokeDasharray={circumference}
                          initial={{ strokeDashoffset: circumference }}
                          whileInView={{ strokeDashoffset: strokeDashoffset }}
                          viewport={scrollAnim}
                          transition={{ duration: 1.4, ease: 'easeOut' }}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className={styles.ringCenterText} style={{ fontSize: '1.2rem' }}>{ring.pct}%</div>
                    </div>
                    <h4 className={styles.ringTitle} style={{ fontSize: '0.85rem' }}>{ring.label}</h4>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Section 9: Quality Control Radar Chart */}
          <motion.div
            className={styles.glassCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollAnim}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.cardSpotlightGlow} />
            <h3 className={styles.chartTitle}>
              <FaAward className={styles.chartTitleIcon} />
              Quality Benchmarks (Uster Lab Audit)
            </h3>

            <ResponsiveContainer width="100%" height={230}>
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                <PolarGrid stroke="rgba(255, 255, 255, 0.15)" />
                <PolarAngleAxis dataKey="subject" stroke="#DDF5E5" tick={{ fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#D9B65D" />
                <Radar name="Quality Score" dataKey="score" stroke="#D9B65D" fill="#1B7F5B" fillOpacity={0.6} />
                <Tooltip
                  contentStyle={{
                    background: '#061A14',
                    border: '1px solid #D9B65D',
                    borderRadius: '8px',
                    color: '#FFF',
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* SECTION 8: ENVIRONMENTAL BENEFITS INFOGRAPHICS */}
        <div className={styles.sectionHeader} style={{ marginBottom: '40px' }}>
          <SectionTitle
            label="ENVIRONMENTAL ADVANTAGES"
            title="Sustainable Textile Excellence"
          />
        </div>

        <div className={styles.envGrid}>
          {envBenefits.map((b, idx) => (
            <motion.div
              key={b.title}
              className={`${styles.glassCard} ${styles.envCard}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={scrollAnim}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.cardSpotlightGlow} />
              <div className={styles.envIconBox}>{b.icon}</div>
              <div>
                <h4 className={styles.envTitle}>{b.title}</h4>
                <p className={styles.envDesc}>{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECTION 10: APPLICATION INDUSTRIES (Horizontal Bar Chart) */}
        <motion.div
          className={`${styles.glassCard}`}
          style={{ marginBottom: '90px' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollAnim}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.cardSpotlightGlow} />
          <h3 className={styles.chartTitle}>
            Target Industry Applications Share (%)
          </h3>

          <div className={styles.horizBarGrid}>
            {applications.map((app) => (
              <div key={app.name} className={styles.horizBarItem}>
                <div className={styles.horizMeta}>
                  <span>{app.name}</span>
                  <span style={{ color: 'var(--gold-primary)' }}>{app.val}%</span>
                </div>
                <div className={styles.horizTrack}>
                  <motion.div
                    className={styles.horizFill}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${app.val}%` }}
                    viewport={scrollAnim}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SECTION 12: PREMIUM KPI STRIP */}
        <motion.div
          className={styles.kpiStripWrapper}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={scrollAnim}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.stripGrid}>
            {stripStats.map((s) => (
              <div key={s.label}>
                <div className={styles.stripVal}>
                  <AnimatedCounter target={s.num} suffix={s.suffix} />
                </div>
                <div className={styles.stripLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
