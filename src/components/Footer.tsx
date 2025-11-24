import React from 'react';
import { ContactForm } from './ContactForm';

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-white border-t border-black">
      {/* Contact Form Section */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="mb-16 md:mb-24">
          <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16">
            <div className="col-span-12">
              <h2 
                style={{ 
                  fontWeight: 700, 
                  fontSize: 'clamp(32px, 5vw, 48px)', 
                  lineHeight: '1.2', 
                  letterSpacing: '-0.01em',
                  color: '#000000',
                  marginBottom: '16px'
                }}
              >
                Get in Touch
              </h2>
              <div className="w-16 h-[2px] bg-[#B30000]" />
              <p 
                className="mt-6 max-w-[600px]"
                style={{ 
                  fontWeight: 400, 
                  fontSize: '16px', 
                  lineHeight: '1.6',
                  color: '#5A5A5A'
                }}
              >
                Contact us to discuss how we can assist with your legal needs. Our team is ready to provide expert counsel tailored to your specific requirements.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 lg:col-span-8">
              <ContactForm />
            </div>
            <div className="col-span-12 lg:col-span-4 space-y-6">
              <div>
                <p 
                  className="mb-2"
                  style={{ 
                    fontWeight: 500, 
                    fontSize: '12px', 
                    lineHeight: '1.4',
                    color: '#5A5A5A',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}
                >
                  Office Hours
                </p>
                <p 
                  style={{ 
                    fontWeight: 400, 
                    fontSize: '14px', 
                    lineHeight: '1.6',
                    color: '#000000'
                  }}
                >
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: By Appointment<br />
                  Sunday: Closed
                </p>
              </div>
              <div>
                <p 
                  className="mb-2"
                  style={{ 
                    fontWeight: 500, 
                    fontSize: '12px', 
                    lineHeight: '1.4',
                    color: '#5A5A5A',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}
                >
                  Emergency Contact
                </p>
                <p 
                  style={{ 
                    fontWeight: 400, 
                    fontSize: '14px', 
                    lineHeight: '1.6',
                    color: '#000000'
                  }}
                >
                  For urgent legal matters outside business hours, please call:<br />
                  +234 803 456 7890
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info - Full Width Background */}
      <div 
        className="relative overflow-hidden border-t border-black/10"
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
            backgroundColor: 'rgba(255, 255, 255, 0.88)'
          }}
        />
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16 relative z-10">
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 md:col-span-6">
              <h3 
                className="mb-6"
                style={{ 
                  fontWeight: 700, 
                  fontSize: 'clamp(20px, 3vw, 24px)', 
                  lineHeight: '1.3',
                  color: '#000000',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase'
                }}
              >
                E.J. EWEKE & CO
              </h3>
              <div className="space-y-4">
                <div>
                  <p 
                    className="mb-1"
                    style={{ 
                      fontWeight: 500, 
                      fontSize: '12px', 
                      lineHeight: '1.4',
                      color: '#5A5A5A',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Address
                  </p>
                  <p 
                    style={{ 
                      fontWeight: 400, 
                      fontSize: '14px', 
                      lineHeight: '1.6',
                      color: '#000000'
                    }}
                  >
                    23 Awolowo Road<br />
                    Ikoyi, Lagos<br />
                    Nigeria
                  </p>
                </div>
                <div>
                  <p 
                    className="mb-1"
                    style={{ 
                      fontWeight: 500, 
                      fontSize: '12px', 
                      lineHeight: '1.4',
                      color: '#5A5A5A',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Contact
                  </p>
                  <p 
                    style={{ 
                      fontWeight: 400, 
                      fontSize: '14px', 
                      lineHeight: '1.6',
                      color: '#000000'
                    }}
                  >
                    +234 1 234 5678<br />
                    info@ejeweke.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3">
              <h4 
                className="mb-6"
                style={{ 
                  fontWeight: 500, 
                  fontSize: '12px', 
                  lineHeight: '1.4',
                  color: '#5A5A5A',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                {['Home', 'Practice Areas', 'Insights', 'Contact'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-'))}
                      className="relative group"
                      style={{ 
                        fontWeight: 400, 
                        fontSize: '14px', 
                        lineHeight: '1.4',
                        color: '#000000',
                        transition: 'color 200ms'
                      }}
                    >
                      {link}
                      <span 
                        className="absolute left-0 right-0 bottom-[-2px] h-[1px] bg-[#B30000] origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-6 md:col-span-3">
              <h4 
                className="mb-6"
                style={{ 
                  fontWeight: 500, 
                  fontSize: '12px', 
                  lineHeight: '1.4',
                  color: '#5A5A5A',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
              >
                Practice Areas
              </h4>
              <ul className="space-y-3">
                {['Corporate Law', 'Litigation', 'Intellectual Property', 'Real Estate', 'Employment Law', 'Tax Advisory'].map((area) => (
                  <li key={area}>
                    <button
                      className="relative group text-left"
                      style={{ 
                        fontWeight: 400, 
                        fontSize: '14px', 
                        lineHeight: '1.4',
                        color: '#000000',
                        transition: 'color 200ms'
                      }}
                    >
                      {area}
                      <span 
                        className="absolute left-0 right-0 bottom-[-2px] h-[1px] bg-[#B30000] origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 py-8 border-t border-black/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p 
            style={{ 
              fontWeight: 400, 
              fontSize: '12px', 
              lineHeight: '1.4',
              color: '#5A5A5A'
            }}
          >
            © 2025 E.J. Eweke & Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button
              className="relative group"
              style={{ 
                fontWeight: 400, 
                fontSize: '12px', 
                lineHeight: '1.4',
                color: '#5A5A5A',
                transition: 'color 200ms'
              }}
            >
              Privacy Policy
              <span 
                className="absolute left-0 right-0 bottom-[-2px] h-[1px] bg-[#5A5A5A] origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
              />
            </button>
            <button
              className="relative group"
              style={{ 
                fontWeight: 400, 
                fontSize: '12px', 
                lineHeight: '1.4',
                color: '#5A5A5A',
                transition: 'color 200ms'
              }}
            >
              Terms of Service
              <span 
                className="absolute left-0 right-0 bottom-[-2px] h-[1px] bg-[#5A5A5A] origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
              />
            </button>
            <button
              className="relative group"
              style={{ 
                fontWeight: 400, 
                fontSize: '12px', 
                lineHeight: '1.4',
                color: '#5A5A5A',
                transition: 'color 200ms'
              }}
            >
              Disclaimer
              <span 
                className="absolute left-0 right-0 bottom-[-2px] h-[1px] bg-[#5A5A5A] origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
