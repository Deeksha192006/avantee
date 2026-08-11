import React from 'react';

export const AvanteeLogo = ({ width = 210, height, className = '' }) => {
  return (
    <img
      src="/images/avantee_official_logo.png"
      alt="Avantee - Where Variety Meets Excellence"
      style={{
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto',
        objectFit: 'contain',
        display: 'block',
        maxWidth: '100%',
      }}
      className={className}
    />
  );
};

export const AvanteeLogoMark = ({ size = 44, className = '' }) => {
  return (
    <img
      src="/images/avantee_official_logo.png"
      alt="Avantee Logo"
      style={{
        width: `${size}px`,
        height: 'auto',
        objectFit: 'contain',
        display: 'block',
      }}
      className={className}
    />
  );
};
