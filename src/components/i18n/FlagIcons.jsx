import React from 'react';

// Pristine Circular Vector SVG Flags for the 6 Client Languages
export const FlagIcon = ({ code, size = 24 }) => {
  switch (code) {
    case 'en':
    case 'uk':
    case 'gb':
      // 🇬🇧 UK Union Jack Flag (matching user screenshot)
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <clipPath id="ukFlagCircle">
            <circle cx="50" cy="50" r="50" />
          </clipPath>
          <g clipPath="url(#ukFlagCircle)">
            <rect width="100" height="100" fill="#012169" />
            <path d="M0,0 L100,100 M100,0 L0,100" stroke="#FFFFFF" strokeWidth="20" />
            <path d="M0,0 L100,100 M100,0 L0,100" stroke="#C8102E" strokeWidth="12" />
            <path d="M50,0 V100 M0,50 H100" stroke="#FFFFFF" strokeWidth="30" />
            <path d="M50,0 V100 M0,50 H100" stroke="#C8102E" strokeWidth="18" />
          </g>
        </svg>
      );

    case 'us':
      // 🇺🇸 US Flag
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <clipPath id="usFlagCircle">
            <circle cx="50" cy="50" r="50" />
          </clipPath>
          <g clipPath="url(#usFlagCircle)">
            <rect x="0" y="0" width="100" height="100" fill="#B22234" />
            <rect x="0" y="7.69" width="100" height="7.69" fill="#FFFFFF" />
            <rect x="0" y="23.07" width="100" height="7.69" fill="#FFFFFF" />
            <rect x="0" y="38.46" width="100" height="7.69" fill="#FFFFFF" />
            <rect x="0" y="53.84" width="100" height="7.69" fill="#FFFFFF" />
            <rect x="0" y="69.23" width="100" height="7.69" fill="#FFFFFF" />
            <rect x="0" y="84.61" width="100" height="7.69" fill="#FFFFFF" />
            <rect x="0" y="0" width="45" height="53.84" fill="#3C3B6E" />
            <circle cx="10" cy="10" r="2.5" fill="#FFFFFF" />
            <circle cx="22.5" cy="10" r="2.5" fill="#FFFFFF" />
            <circle cx="35" cy="10" r="2.5" fill="#FFFFFF" />
            <circle cx="16.25" cy="18" r="2.5" fill="#FFFFFF" />
            <circle cx="28.75" cy="18" r="2.5" fill="#FFFFFF" />
            <circle cx="10" cy="26" r="2.5" fill="#FFFFFF" />
            <circle cx="22.5" cy="26" r="2.5" fill="#FFFFFF" />
            <circle cx="35" cy="26" r="2.5" fill="#FFFFFF" />
            <circle cx="16.25" cy="34" r="2.5" fill="#FFFFFF" />
            <circle cx="28.75" cy="34" r="2.5" fill="#FFFFFF" />
            <circle cx="10" cy="42" r="2.5" fill="#FFFFFF" />
            <circle cx="22.5" cy="42" r="2.5" fill="#FFFFFF" />
            <circle cx="35" cy="42" r="2.5" fill="#FFFFFF" />
          </g>
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

    case 'hi':
    case 'in':
      // 🇮🇳 India Flag (Hindi)
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <rect x="0" y="0" width="100" height="33.3" fill="#FF9933" />
          <rect x="0" y="33.3" width="100" height="33.3" fill="#FFFFFF" />
          <rect x="0" y="66.6" width="100" height="33.4" fill="#138808" />
          <circle cx="50" cy="50" r="12" fill="none" stroke="#000080" strokeWidth="2" />
          <circle cx="50" cy="50" r="2.5" fill="#000080" />
        </svg>
      );

    case 'ta':
      // 🇮🇳 Tamil Flag / Badge
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <rect x="0" y="0" width="100" height="33.3" fill="#FF9933" />
          <rect x="0" y="33.3" width="100" height="33.3" fill="#FFFFFF" />
          <rect x="0" y="66.6" width="100" height="33.4" fill="#138808" />
          <circle cx="50" cy="50" r="11" fill="#000080" />
          <text x="50" y="54" fontSize="10" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">த</text>
        </svg>
      );

    case 'ar':
    case 'ae':
      // 🇦🇪 UAE Flag (Arabic)
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <rect x="25" y="0" width="75" height="33.3" fill="#007A3D" />
          <rect x="25" y="33.3" width="75" height="33.3" fill="#FFFFFF" />
          <rect x="25" y="66.6" width="75" height="33.4" fill="#000000" />
          <rect x="0" y="0" width="25" height="100" fill="#FF0000" />
        </svg>
      );

    case 'ja':
    case 'jp':
      // 🇯🇵 Japan Flag
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <rect x="0" y="0" width="100" height="100" fill="#FFFFFF" stroke="#EEEEEE" strokeWidth="1" />
          <circle cx="50" cy="50" r="30" fill="#BC002D" />
        </svg>
      );

    case 'zh':
    case 'cn':
      // 🇨🇳 China Flag
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ borderRadius: '50%', display: 'block' }}>
          <rect x="0" y="0" width="100" height="100" fill="#DE2910" />
          <polygon points="25,15 28,24 37,24 30,30 33,39 25,33 17,39 20,30 13,24 22,24" fill="#FFDE00" />
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
