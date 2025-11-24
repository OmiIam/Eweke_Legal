import React from 'react';
import { Helmet } from 'react-helmet';

export const SEOHead = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "E.J. Eweke & Co",
    "description": "Full-service Nigerian law firm committed to ethical practice, analytical depth, and effective advocacy.",
    "url": "https://ejeweke.com",
    "logo": "https://ejeweke.com/logo.png",
    "image": "https://ejeweke.com/og-image.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "23 Awolowo Road",
      "addressLocality": "Ikoyi",
      "addressRegion": "Lagos",
      "addressCountry": "NG"
    },
    "telephone": "+234-1-234-5678",
    "email": "info@ejeweke.com",
    "priceRange": "$$$$",
    "areaServed": {
      "@type": "Country",
      "name": "Nigeria"
    },
    "knowsAbout": [
      "Corporate Law",
      "Litigation",
      "Intellectual Property",
      "Real Estate Law",
      "Employment Law",
      "Tax Advisory"
    ]
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>E.J. Eweke & Co - Leading Nigerian Law Firm | Corporate, Litigation & Advisory</title>
      <meta name="description" content="E.J. Eweke & Co is a full-service Nigerian law firm providing expert legal counsel in corporate law, litigation, intellectual property, real estate, employment law, and tax advisory." />
      <meta name="keywords" content="Nigerian law firm, corporate law Nigeria, litigation lawyers Lagos, intellectual property law, real estate lawyers Nigeria, employment law, tax advisory Nigeria" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="E.J. Eweke & Co - Leading Nigerian Law Firm" />
      <meta property="og:description" content="Delivering clarity, integrity, and precision in legal representation." />
      <meta property="og:url" content="https://ejeweke.com" />
      <meta property="og:site_name" content="E.J. Eweke & Co" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="E.J. Eweke & Co - Leading Nigerian Law Firm" />
      <meta name="twitter:description" content="Delivering clarity, integrity, and precision in legal representation." />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Helmet>
  );
};
