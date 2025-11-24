import React, { useState } from 'react';

const insightsData = [
  {
    title: 'Recent Amendments to the Companies and Allied Matters Act',
    date: 'October 2025',
    category: 'Corporate Law',
    description: 'A comprehensive analysis of the recent CAMA amendments and their implications for corporate governance in Nigeria.',
    readTime: '8 min read'
  },
  {
    title: 'Data Protection Compliance: A Guide for Nigerian Businesses',
    date: 'September 2025',
    category: 'Regulatory',
    description: 'Understanding the Nigeria Data Protection Regulation and implementing effective compliance frameworks.',
    readTime: '6 min read'
  },
  {
    title: 'Dispute Resolution in Cross-Border Commercial Transactions',
    date: 'August 2025',
    category: 'Litigation',
    description: 'Strategic considerations for arbitration and litigation in international business agreements.',
    readTime: '10 min read'
  },
  {
    title: 'Intellectual Property Rights in the Digital Economy',
    date: 'July 2025',
    category: 'IP Law',
    description: 'Protecting trademarks and copyrights in an increasingly digital marketplace.',
    readTime: '7 min read'
  },
  {
    title: 'Tax Implications of Mergers and Acquisitions',
    date: 'June 2025',
    category: 'Tax Advisory',
    description: 'Navigating the complex tax landscape in M&A transactions under Nigerian law.',
    readTime: '9 min read'
  },
  {
    title: 'Employment Law Updates: Remote Work Policies',
    date: 'May 2025',
    category: 'Employment Law',
    description: 'Legal frameworks for remote work arrangements in the post-pandemic business environment.',
    readTime: '5 min read'
  }
];

export const Insights = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="insights" className="py-16 md:py-24 bg-white border-t border-black/10">
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
              Insights & Publications
            </h2>
            <div className="w-16 h-[2px] bg-[#B30000]" />
          </div>
        </div>
        
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {insightsData.map((insight, index) => (
            <div 
              key={index}
              className="col-span-12 md:col-span-6 border-t border-black/10 pt-6"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-3 mb-2">
                <p 
                  style={{ 
                    fontWeight: 500, 
                    fontSize: '12px', 
                    lineHeight: '1.4',
                    color: '#B30000',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}
                >
                  {insight.date}
                </p>
                <span style={{ color: '#5A5A5A' }}>•</span>
                <p 
                  style={{ 
                    fontWeight: 400, 
                    fontSize: '12px', 
                    lineHeight: '1.4',
                    color: '#5A5A5A'
                  }}
                >
                  {insight.category}
                </p>
              </div>
              <h3 
                className="mb-3"
                style={{ 
                  fontWeight: 500, 
                  fontSize: '20px', 
                  lineHeight: '1.3',
                  color: hoveredIndex === index ? '#B30000' : '#000000',
                  transition: 'color 200ms',
                  cursor: 'pointer'
                }}
              >
                {insight.title}
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
                {insight.description}
              </p>
              <div className="flex items-center justify-between">
                <button
                  className="relative group focus:outline-none focus:ring-2 focus:ring-[#B30000] focus:ring-offset-2 px-1 py-1"
                  style={{ 
                    fontWeight: 500, 
                    fontSize: '12px', 
                    lineHeight: '1.4',
                    color: hoveredIndex === index ? '#B30000' : '#000000',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    transition: 'color 200ms'
                  }}
                  aria-label={`Read more about ${insight.title}`}
                >
                  Read More
                  <span 
                    className="absolute left-0 right-0 bottom-[-2px] h-[1px] transition-colors duration-200"
                    style={{
                      backgroundColor: hoveredIndex === index ? '#B30000' : '#000000'
                    }}
                    aria-hidden="true"
                  />
                </button>
                <p 
                  style={{ 
                    fontWeight: 400, 
                    fontSize: '11px', 
                    lineHeight: '1.4',
                    color: '#5A5A5A'
                  }}
                >
                  {insight.readTime}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
