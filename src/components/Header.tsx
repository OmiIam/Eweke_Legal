import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ['Home', 'Practice Areas', 'Insights', 'Contact'];

  const scrollToSection = (link: string) => {
    setActiveLink(link);
    setMobileMenuOpen(false);
    const sectionId = link.toLowerCase().replace(' ', '-');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 py-4 md:py-6">
        <div className="flex items-center justify-between md:grid md:grid-cols-12 md:gap-6">
          <div className="md:col-span-6">
            <h1 className="uppercase tracking-tight" style={{ fontWeight: 700, fontSize: '16px', lineHeight: '1.2', letterSpacing: '0.02em' }}>
              E.J. EWEKE & CO
            </h1>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-[#B30000] focus:ring-offset-2"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? (
              <X size={24} color="#000000" aria-hidden="true" />
            ) : (
              <Menu size={24} color="#000000" aria-hidden="true" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block md:col-span-6" aria-label="Main navigation">
            <ul className="flex justify-end gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="relative group transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#B30000] focus-visible:ring-offset-2 px-1 py-1"
                    style={{ 
                      fontWeight: 400, 
                      fontSize: '14px', 
                      lineHeight: '1.4',
                      color: activeLink === link ? '#B30000' : '#000000'
                    }}
                    aria-current={activeLink === link ? 'page' : undefined}
                  >
                    {link}
                    <span 
                      className="absolute left-0 right-0 bottom-[-2px] h-[1px] bg-[#B30000] origin-left transition-transform duration-200"
                      style={{
                        transform: activeLink === link ? 'scaleX(1)' : 'scaleX(0)'
                      }}
                      aria-hidden="true"
                    />
                    <span 
                      className="absolute left-0 right-0 bottom-[-2px] h-[1px] bg-[#B30000] origin-left transition-transform duration-200 group-hover:scale-x-100"
                      style={{
                        transform: activeLink === link ? 'scaleX(0)' : 'scaleX(0)'
                      }}
                      aria-hidden="true"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav 
            id="mobile-navigation"
            className="md:hidden mt-6 pt-6 border-t border-black/10"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="block w-full text-left py-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#B30000] focus:ring-offset-2 px-2"
                    style={{ 
                      fontWeight: 400, 
                      fontSize: '16px', 
                      lineHeight: '1.4',
                      color: activeLink === link ? '#B30000' : '#000000'
                    }}
                    aria-current={activeLink === link ? 'page' : undefined}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
