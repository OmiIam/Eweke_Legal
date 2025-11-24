import React, { useState } from 'react';

const practiceAreasData = [
  {
    title: 'Corporate Law',
    description: 'Comprehensive legal counsel for business formation, governance, mergers and acquisitions, and regulatory compliance.',
    services: ['M&A Transactions', 'Corporate Governance', 'Securities Law', 'Contract Drafting']
  },
  {
    title: 'Litigation',
    description: 'Strategic representation in commercial disputes, civil litigation, and appellate advocacy across Nigerian courts.',
    services: ['Commercial Litigation', 'Arbitration', 'Appellate Practice', 'Dispute Resolution']
  },
  {
    title: 'Intellectual Property',
    description: 'Protection and enforcement of trademarks, patents, copyrights, and trade secrets in the digital age.',
    services: ['Trademark Registration', 'Copyright Protection', 'IP Enforcement', 'Technology Law']
  },
  {
    title: 'Real Estate',
    description: 'Expert guidance on property transactions, title verification, land use, and real estate development projects.',
    services: ['Property Acquisition', 'Title Verification', 'Development Projects', 'Leasing']
  },
  {
    title: 'Employment Law',
    description: 'Counsel on employment contracts, workplace policies, labor disputes, and compliance with Nigerian labor regulations.',
    services: ['Employment Contracts', 'Labor Disputes', 'HR Compliance', 'Executive Compensation']
  },
  {
    title: 'Tax Advisory',
    description: 'Strategic tax planning, compliance, and dispute resolution for corporations and high-net-worth individuals.',
    services: ['Tax Planning', 'Compliance', 'Tax Disputes', 'International Tax']
  }
];

export const PracticeAreas = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="practice-areas" className="py-16 md:py-24 bg-white border-t border-black/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12">
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
              Practice Areas
            </h2>
            <div className="w-16 h-[2px] bg-[#B30000]" />
          </div>
        </div>
        
        <div className="grid grid-cols-12 gap-6">
          {practiceAreasData.map((area, index) => (
            <div 
              key={index}
              className="col-span-12 md:col-span-6 lg:col-span-4 border border-black/10 p-6 md:p-8 transition-all duration-200"
              style={{
                backgroundColor: hoveredIndex === index ? '#FAFAFA' : '#FFFFFF'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 
                className="mb-4"
                style={{ 
                  fontWeight: 500, 
                  fontSize: '20px', 
                  lineHeight: '1.3',
                  color: hoveredIndex === index ? '#B30000' : '#000000',
                  transition: 'color 200ms',
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                {area.title}
                {hoveredIndex === index && (
                  <span 
                    className="absolute left-0 right-0 bottom-[-4px] h-[1px] bg-[#B30000]"
                    style={{ animation: 'expandWidth 200ms ease-out' }}
                  />
                )}
              </h3>
              <p 
                className="mb-4"
                style={{ 
                  fontWeight: 400, 
                  fontSize: '14px', 
                  lineHeight: '1.6',
                  color: '#5A5A5A'
                }}
              >
                {area.description}
              </p>
              <div className="border-t border-black/10 pt-4 mt-4">
                <p 
                  className="mb-2"
                  style={{ 
                    fontWeight: 500, 
                    fontSize: '11px', 
                    lineHeight: '1.4',
                    color: '#5A5A5A',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}
                >
                  Key Services
                </p>
                <ul className="space-y-1">
                  {area.services.map((service, serviceIndex) => (
                    <li 
                      key={serviceIndex}
                      style={{ 
                        fontWeight: 400, 
                        fontSize: '12px', 
                        lineHeight: '1.6',
                        color: '#000000'
                      }}
                    >
                      • {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
