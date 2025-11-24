import React from 'react';
import { Award, Shield, Users, Building2 } from 'lucide-react';

const trustData = [
  {
    icon: Building2,
    number: '10+',
    label: 'Years of Excellence'
  },
  {
    icon: Users,
    number: '500+',
    label: 'Clients Served'
  },
  {
    icon: Award,
    number: '98%',
    label: 'Success Rate'
  },
  {
    icon: Shield,
    number: '100%',
    label: 'Confidentiality'
  }
];

export const TrustSignals = () => {
  return (
    <section className="py-12 md:py-16 bg-[#FAFAFA] border-t border-b border-black/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {trustData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div 
                  className="mb-6 relative transition-all duration-300"
                  style={{
                    width: '80px',
                    height: '80px'
                  }}
                >
                  {/* Outer geometric frame */}
                  <div 
                    className="absolute inset-0 border-2 border-black/10 transition-all duration-300 group-hover:border-[#B30000]"
                    style={{
                      transform: 'rotate(0deg)'
                    }}
                  />
                  {/* Inner geometric frame - offset */}
                  <div 
                    className="absolute transition-all duration-300"
                    style={{
                      top: '8px',
                      left: '8px',
                      right: '8px',
                      bottom: '8px',
                      border: '1px solid #B30000',
                      opacity: 0.3
                    }}
                  />
                  {/* Red accent corner */}
                  <div 
                    className="absolute top-0 left-0 bg-[#B30000] transition-all duration-300"
                    style={{
                      width: '2px',
                      height: '16px'
                    }}
                  />
                  <div 
                    className="absolute top-0 left-0 bg-[#B30000] transition-all duration-300"
                    style={{
                      width: '16px',
                      height: '2px'
                    }}
                  />
                  {/* Icon container */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon 
                      size={28} 
                      color="#000000" 
                      strokeWidth={1}
                      aria-hidden="true"
                      className="transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                <p 
                  className="mb-2"
                  style={{ 
                    fontWeight: 700, 
                    fontSize: 'clamp(28px, 4vw, 40px)', 
                    lineHeight: '1.2',
                    color: '#000000',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {item.number}
                </p>
                <p 
                  style={{ 
                    fontWeight: 400, 
                    fontSize: '14px', 
                    lineHeight: '1.4',
                    color: '#5A5A5A'
                  }}
                >
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
