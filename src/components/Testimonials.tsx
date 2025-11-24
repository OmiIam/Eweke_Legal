import React, { useState } from 'react';
import { Quote } from 'lucide-react';

const testimonialsData = [
  {
    quote: "E.J. Eweke & Co provided exceptional legal counsel during our corporate restructuring. Their attention to detail and strategic thinking were instrumental to our success.",
    author: "Adebayo Okonkwo",
    position: "Consultant",
    company: "TechCorp Nigeria Ltd"
  },
  {
    quote: "The team's expertise in intellectual property law protected our brand across multiple jurisdictions. Professional, responsive, and highly effective.",
    author: "Chioma Nwosu",
    position: "General Counsel",
    company: "Innovation Labs"
  },
  {
    quote: "Outstanding representation in complex commercial litigation. Their strategic approach and courtroom excellence delivered results beyond our expectations.",
    author: "Ibrahim Yusuf",
    position: "Managing Director",
    company: "Global Ventures Ltd"
  },
  {
    quote: "Exceptional guidance on regulatory compliance and tax advisory. E.J. Eweke & Co consistently demonstrates deep knowledge and practical solutions.",
    author: "Ngozi Eze",
    position: "CFO",
    company: "FirstBank Industries"
  }
];

export const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white border-t border-black/10">
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
              Client Testimonials
            </h2>
            <div className="w-16 h-[2px] bg-[#B30000]" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={index}
              className="col-span-12 md:col-span-6 border border-black/10 p-6 md:p-8 transition-all duration-200"
              style={{
                backgroundColor: hoveredIndex === index ? '#FAFAFA' : '#FFFFFF'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Quote 
                size={24} 
                color={hoveredIndex === index ? '#B30000' : '#5A5A5A'} 
                strokeWidth={1.5}
                className="mb-4 transition-colors duration-200"
                aria-hidden="true"
              />
              <blockquote 
                className="mb-6"
                style={{ 
                  fontWeight: 400, 
                  fontSize: '16px', 
                  lineHeight: '1.6',
                  color: '#000000'
                }}
              >
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-black/10 pt-4">
                <p 
                  style={{ 
                    fontWeight: 500, 
                    fontSize: '14px', 
                    lineHeight: '1.4',
                    color: '#000000',
                    marginBottom: '4px'
                  }}
                >
                  {testimonial.author}
                </p>
                <p 
                  style={{ 
                    fontWeight: 400, 
                    fontSize: '12px', 
                    lineHeight: '1.4',
                    color: '#5A5A5A'
                  }}
                >
                  {testimonial.position}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
