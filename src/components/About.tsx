import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const About = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-black/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1633591691145-f18f28fc83f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjI3OTMwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Architectural texture"
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
              style={{ filter: 'grayscale(100%)' }}
            />
          </div>
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            <h2 
              className="mb-4 md:mb-6"
              style={{ 
                fontWeight: 700, 
                fontSize: 'clamp(32px, 5vw, 48px)', 
                lineHeight: '1.2', 
                letterSpacing: '-0.01em',
                color: '#000000'
              }}
            >
              Our Philosophy
            </h2>
            <div className="w-16 h-[2px] bg-[#B30000] mb-6 md:mb-8" />
            <p 
              className="mb-4 md:mb-6"
              style={{ 
                fontWeight: 400, 
                fontSize: 'clamp(16px, 2vw, 18px)', 
                lineHeight: '1.6',
                color: '#000000',
                maxWidth: '600px'
              }}
            >
              E.J. Eweke & Co is a full-service Nigerian law firm committed to ethical practice, analytical depth, and effective advocacy.
            </p>
            <p 
              className="mb-4 md:mb-6"
              style={{ 
                fontWeight: 400, 
                fontSize: '16px', 
                lineHeight: '1.6',
                color: '#5A5A5A',
                maxWidth: '600px'
              }}
            >
              Founded on principles of integrity and precision, our firm serves a diverse clientele ranging from multinational corporations to emerging enterprises. We approach each matter with rigorous analysis, strategic thinking, and unwavering dedication to our clients' objectives.
            </p>
            <p 
              className="mb-6 md:mb-8"
              style={{ 
                fontWeight: 400, 
                fontSize: '16px', 
                lineHeight: '1.6',
                color: '#5A5A5A',
                maxWidth: '600px'
              }}
            >
              Our practice is distinguished by clarity of counsel, depth of expertise, and a commitment to excellence that has earned the trust of leading organizations across Nigeria and beyond.
            </p>
            <div className="border-t border-black/10 pt-6 md:pt-8">
              <p 
                className="mb-4"
                style={{ 
                  fontWeight: 500, 
                  fontSize: '12px', 
                  lineHeight: '1.4',
                  color: '#5A5A5A',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
              >
                Professional Memberships
              </p>
              <ul className="space-y-2 max-w-[600px]">
                {[
                  'Nigerian Bar Association (NBA)',
                  'International Bar Association (IBA)',
                  'Chartered Institute of Arbitrators (CIArb)'
                ].map((membership, index) => (
                  <li 
                    key={index}
                    style={{ 
                      fontWeight: 400, 
                      fontSize: '14px', 
                      lineHeight: '1.6',
                      color: '#000000'
                    }}
                  >
                    • {membership}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
