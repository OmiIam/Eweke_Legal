import React, { useState } from 'react';
import { X } from 'lucide-react';

export const LegalDisclaimer = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white border-t border-white/10"
      role="alert"
      aria-live="polite"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 py-4">
        <div className="flex items-start justify-between gap-4">
          <p 
            style={{ 
              fontWeight: 400, 
              fontSize: '12px', 
              lineHeight: '1.6',
              color: '#FFFFFF'
            }}
          >
            <strong style={{ fontWeight: 500 }}>Legal Notice:</strong> This website is for informational purposes only and does not constitute legal advice. 
            Attorney-client relationships are not formed through use of this website. For specific legal guidance, please contact our office directly.
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 p-1 hover:bg-white/10 transition-colors duration-200"
            aria-label="Dismiss legal notice"
          >
            <X size={16} color="#FFFFFF" />
          </button>
        </div>
      </div>
    </div>
  );
};
