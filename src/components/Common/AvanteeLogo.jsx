import React from 'react';

export const AvanteeLogo = ({ width = 210, height, variant = 'light', className = '' }) => {
  let logoSrc = '/images/avantee_official_logo.png?v=5';
  if (variant === 'footer' || variant === 'dark') {
    logoSrc = '/images/avantee_logo_footer.png?v=2';
  }

  return (
    <img
      src={logoSrc}
      alt="Avantee - Where Variety Meets Excellence"
      style={{
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto',
        objectFit: 'contain',
        display: 'block',
        maxWidth: '100%',
        backgroundColor: 'transparent',
      }}
      className={className}
    />
  );
};

export const AvanteeLogoMark = ({ size = 44, className = '' }) => {
  return (
    <img
      src="/images/avantee_official_logo.png?v=5"
      alt="Avantee Logo"
      style={{
        width: `${size}px`,
        height: 'auto',
        objectFit: 'contain',
        display: 'block',
        backgroundColor: 'transparent',
      }}
      className={className}
    />
  );
};
