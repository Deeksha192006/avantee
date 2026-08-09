import React from 'react';

// Pristine Circular Vector SVG Flags for the 6 Client Languages
export const FlagIcon = ({ code, size = 24 }) => {
  switch (code) {
    case 'en':
      // 🇬🇧 United Kingdom Flag
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <circle cx="50" cy="50" r="50" fill="#00247D" />
          <path d="M0,0 L100,100 M100,0 L0,100" stroke="#FFFFFF" strokeWidth="16" />
          <path d="M0,0 L100,100 M100,0 L0,100" stroke="#CF142B" strokeWidth="10" />
          <path d="M50,0 V100 M0,50 H100" stroke="#FFFFFF" strokeWidth="24" />
          <path d="M50,0 V100 M0,50 H100" stroke="#CF142B" strokeWidth="14" />
        </svg>
      );

    case 'fr':
      // 🇫🇷 France Flag
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <rect x="0" y="0" width="33.3" height="100" fill="#002395" />
          <rect x="33.3" y="0" width="33.3" height="100" fill="#FFFFFF" />
          <rect x="66.6" y="0" width="33.4" height="100" fill="#ED2939" />
        </svg>
      );

    case 'de':
      // 🇩🇪 Germany Flag
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <rect x="0" y="0" width="100" height="33.3" fill="#000000" />
          <rect x="0" y="33.3" width="100" height="33.3" fill="#DD0000" />
          <rect x="0" y="66.6" width="100" height="33.4" fill="#FFCC00" />
        </svg>
      );

    case 'es':
      // 🇪🇸 Spain Flag
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <rect x="0" y="0" width="100" height="25" fill="#AA151B" />
          <rect x="0" y="25" width="100" height="50" fill="#F1BF00" />
          <rect x="0" y="75" width="100" height="25" fill="#AA151B" />
        </svg>
      );

    case 'nl':
      // 🇳🇱 Netherlands Flag
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <rect x="0" y="0" width="100" height="33.3" fill="#AE1C28" />
          <rect x="0" y="33.3" width="100" height="33.3" fill="#FFFFFF" />
          <rect x="0" y="66.6" width="100" height="33.4" fill="#21468B" />
        </svg>
      );

    case 'sv':
    case 'se':
      // 🇸🇪 Sweden Flag
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <rect x="0" y="0" width="100" height="100" fill="#006AA7" />
          <rect x="30" y="0" width="18" height="100" fill="#FECC00" />
          <rect x="0" y="41" width="100" height="18" fill="#FECC00" />
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <circle cx="50" cy="50" r="50" fill="#1B7F5B" />
        </svg>
      );
  }
};
