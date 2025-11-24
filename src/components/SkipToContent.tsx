import React from 'react';

export const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-[#B30000] focus:text-white"
      style={{ 
        fontWeight: 500, 
        fontSize: '14px', 
        lineHeight: '1.4',
        letterSpacing: '0.01em'
      }}
    >
      Skip to main content
    </a>
  );
};
