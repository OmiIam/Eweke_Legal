import React from 'react';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1744148621897-5fb0b6323543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY29uY3JldGUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyODczMzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'grayscale(100%)'
      }}
    >
      {/* Overlay for text readability */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.82)'
        }}
      />
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-10">
            <div className="mb-6">
              <p 
                style={{ 
                  fontWeight: 500, 
                  fontSize: '12px', 
                  lineHeight: '1.4',
                  color: '#B30000',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}
              >
                Est. 2015 — Nigerian Bar Association Member
              </p>
            </div>
            <h1 
              className="mb-6 md:mb-8"
              style={{ 
                fontWeight: 700, 
                fontSize: 'clamp(32px, 5vw, 64px)', 
                lineHeight: '1.1', 
                letterSpacing: '-0.02em',
                color: '#000000'
              }}
            >
              E.J. Eweke & Co — Advocates, Solicitors, and Legal Consultants.
            </h1>
            <p 
              className="mb-6 md:mb-8 max-w-[700px]"
              style={{ 
                fontWeight: 400, 
                fontSize: 'clamp(16px, 2vw, 18px)', 
                lineHeight: '1.6',
                color: '#5A5A5A'
              }}
            >
              Delivering clarity, integrity, and precision in legal representation. Over 10 years of excellence serving Nigeria's leading corporations and institutions.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6 mb-8 md:mb-12">
              <div className="border-l-2 border-[#B30000] pl-4">
                <p 
                  style={{ 
                    fontWeight: 500, 
                    fontSize: '12px', 
                    lineHeight: '1.4',
                    color: '#5A5A5A',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '4px'
                  }}
                >
                  Accreditations
                </p>
                <p 
                  style={{ 
                    fontWeight: 400, 
                    fontSize: '14px', 
                    lineHeight: '1.4',
                    color: '#000000'
                  }}
                >
                  NBA, IBA
                </p>
              </div>
              <div className="border-l-2 border-[#B30000] pl-4">
                <p 
                  style={{ 
                    fontWeight: 500, 
                    fontSize: '12px', 
                    lineHeight: '1.4',
                    color: '#5A5A5A',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '4px'
                  }}
                >
                  Languages
                </p>
                <p 
                  style={{ 
                    fontWeight: 400, 
                    fontSize: '14px', 
                    lineHeight: '1.4',
                    color: '#000000'
                  }}
                >
                  English, Yoruba, Igbo
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('practice-areas')}
                className="px-6 md:px-8 py-3 md:py-4 bg-[#B30000] text-white transition-all duration-200 hover:bg-[#8B0000] text-center focus:outline-none focus:ring-2 focus:ring-[#B30000] focus:ring-offset-2"
                style={{ 
                  fontWeight: 500, 
                  fontSize: '14px', 
                  lineHeight: '1.4',
                  letterSpacing: '0.01em',
                  backgroundColor: '#B30000'
                }}
                aria-label="View our practice areas"
              >
                OUR PRACTICE AREAS
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 md:px-8 py-3 md:py-4 bg-white text-black border border-black transition-all duration-200 hover:bg-black hover:text-white text-center focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                style={{ 
                  fontWeight: 500, 
                  fontSize: '14px', 
                  lineHeight: '1.4',
                  letterSpacing: '0.01em'
                }}
                aria-label="Contact us for legal consultation"
              >
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
