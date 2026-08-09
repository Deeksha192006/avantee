import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import { SectionTitle } from '../Common/SectionTitle';
import styles from './GlobalNetworkMap.module.css';

export const GlobalNetworkMap = () => {
  const [activePin, setActivePin] = useState(0);

  const exportHubs = [
    {
      id: 1,
      country: 'India (Global Manufacturing HQ)',
      city: 'Tamil Nadu Eco Industrial Complex',
      capacity: '50,000 MT/Year Capacity',
      blends: 'Recycled Cotton, Micro PET Staple & Ring Yarns',
      flag: '🇮🇳',
      x: 710,
      y: 260,
      coordsLabel: '11.0168° N, 76.9558° E',
    },
    {
      id: 2,
      country: 'Germany & European Logistics Center',
      city: 'Frankfurt Central Distribution Hub',
      capacity: 'Direct EU Dispatch within 48 Hours',
      blends: 'GRS Certified Technical Textiles & Filament Yarns',
      flag: '🇩🇪',
      x: 490,
      y: 140,
      coordsLabel: '50.1109° N, 8.6821° E',
    },
    {
      id: 3,
      country: 'United States & Americas Region',
      city: 'North Carolina Textiles Warehousing',
      capacity: 'Bulk Apparel & Industrial Fabric Supply',
      blends: 'Waterless Dope-Dyed Activewear Yarns',
      flag: '🇺🇸',
      x: 230,
      y: 175,
      coordsLabel: '35.7796° N, 78.6382° W',
    },
    {
      id: 4,
      country: 'Middle East Regional HQ',
      city: 'Dubai Eco-Zone Trade Center',
      capacity: 'Geotextiles & Heavy Canvas Stocking',
      blends: 'Upcycled Canvas & Heavy Denier Duck Fabrics',
      flag: '🇸🇦',
      x: 595,
      y: 215,
      coordsLabel: '25.2048° N, 55.2708° E',
    },
    {
      id: 5,
      country: 'East Asia Quality & Sourcing Office',
      city: 'Tokyo High-Tech Fiber Testing Office',
      capacity: 'Micro-Denier Quality Assurance & Testing',
      blends: 'Ultra-Soft Fine Recycled Micro Yarns',
      flag: '🇯🇵',
      x: 840,
      y: 180,
      coordsLabel: '35.6762° N, 139.6503° E',
    }
  ];

  return (
    <section className={`section-padding ${styles.mapWrapper}`}>
      <div className="container">
        <SectionTitle
          label="Worldwide Export Presence"
          title="Connecting Sustainable Manufacturing Globally"
          subtitle="Shipping GRS-certified recycled materials to over 45+ countries across North America, Europe, Asia, and the Middle East."
        />

        {/* Interactive Vector World Map Container */}
        <div className={styles.mapCardFrame}>
          <div className={styles.mapViewport}>
            {/* Real SVG World Map Vector with Arc Curves */}
            <svg viewBox="0 0 1000 480" className={styles.worldMapSvg}>
              {/* Background Lat/Long Grid Lines */}
              <g stroke="rgba(221, 245, 229, 0.05)" strokeWidth="1" strokeDasharray="4 4">
                <line x1="0" y1="120" x2="1000" y2="120" />
                <line x1="0" y1="240" x2="1000" y2="240" />
                <line x1="0" y1="360" x2="1000" y2="360" />
                <line x1="250" y1="0" x2="250" y2="480" />
                <line x1="500" y1="0" x2="500" y2="480" />
                <line x1="750" y1="0" x2="750" y2="480" />
              </g>

              {/* Realistic World Continents Vector Outlines */}
              <g fill="rgba(27, 127, 91, 0.22)" stroke="rgba(217, 182, 93, 0.25)" strokeWidth="1">
                {/* North America */}
                <path d="M120,70 Q240,50 300,120 Q320,180 260,230 Q180,240 140,160 Q100,140 120,70 Z" />
                {/* South America */}
                <path d="M260,250 Q340,260 360,330 Q330,420 280,440 Q250,370 260,250 Z" />
                {/* Europe */}
                <path d="M440,80 Q540,60 580,110 Q560,160 480,150 Q430,130 440,80 Z" />
                {/* Africa */}
                <path d="M450,170 Q560,170 570,250 Q540,360 480,380 Q430,300 450,170 Z" />
                {/* Asia */}
                <path d="M580,70 Q800,50 920,130 Q900,240 780,280 Q660,270 580,180 Q570,120 580,70 Z" />
                {/* Australia */}
                <path d="M780,320 Q880,310 900,370 Q860,420 790,400 Q760,360 780,320 Z" />
              </g>

              {/* Curved Animated Trade Flight Arcs from India HQ (710, 260) */}
              <g stroke="var(--gold-primary)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6">
                {/* Arc to USA */}
                <path d="M710,260 Q470,80 230,175" fill="none" />
                {/* Arc to Germany */}
                <path d="M710,260 Q600,160 490,140" fill="none" />
                {/* Arc to Middle East */}
                <path d="M710,260 Q650,220 595,215" fill="none" />
                {/* Arc to Japan */}
                <path d="M710,260 Q770,200 840,180" fill="none" />
              </g>

              {/* Glowing Pulse Rings & Pins */}
              {exportHubs.map((hub, idx) => {
                const isActive = activePin === idx;
                return (
                  <g key={hub.id} className={styles.svgPinGroup} onClick={() => setActivePin(idx)}>
                    {/* Outer Radar Pulse */}
                    <circle
                      cx={hub.x}
                      cy={hub.y}
                      r={isActive ? 18 : 10}
                      fill="none"
                      stroke={isActive ? '#D9B65D' : '#22C55E'}
                      strokeWidth="2"
                      className={styles.radarPulseCircle}
                    />

                    {/* Solid Inner Marker Circle */}
                    <circle
                      cx={hub.x}
                      cy={hub.y}
                      r={isActive ? 8 : 5}
                      fill={isActive ? '#D9B65D' : '#22C55E'}
                      className={styles.markerCircle}
                    />

                    {/* Pin Label Flag */}
                    <text
                      x={hub.x}
                      y={hub.y - 14}
                      fill="#FFFFFF"
                      fontSize="11"
                      fontFamily="var(--font-heading)"
                      fontWeight="700"
                      textAnchor="middle"
                      className={styles.svgFlagText}
                    >
                      {hub.flag}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Interactive Tooltip Card for Active Hub */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePin}
                className={styles.activeFloatingCard}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.cardHeaderRow}>
                  <span className={styles.flagIcon}>{exportHubs[activePin].flag}</span>
                  <div>
                    <h4 className={styles.cardCountry}>{exportHubs[activePin].country}</h4>
                    <span className={styles.cardCity}>{exportHubs[activePin].city}</span>
                  </div>
                </div>

                <div className={styles.cardDetailsList}>
                  <div className={styles.detailRow}>
                    <FaCheckCircle className={styles.checkIcon} />
                    <div>
                      <strong>Capacity:</strong> {exportHubs[activePin].capacity}
                    </div>
                  </div>
                  <div className={styles.detailRow}>
                    <FaStar className={styles.starIcon} />
                    <div>
                      <strong>Core Specialization:</strong> {exportHubs[activePin].blends}
                    </div>
                  </div>
                  <div className={styles.coordsRow}>
                    <span>GPS Coordinates: {exportHubs[activePin].coordsLabel}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Hub Selector Bar */}
          <div className={styles.bottomHubBar}>
            {exportHubs.map((hub, idx) => (
              <button
                key={hub.id}
                className={`${styles.hubBarBtn} ${activePin === idx ? styles.activeHubBarBtn : ''}`}
                onClick={() => setActivePin(idx)}
              >
                <span className={styles.barFlag}>{hub.flag}</span>
                <span className={styles.barCountry}>{hub.country.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
