import React from 'react';
import { Toaster } from 'sonner';
import { SEOHead } from './components/SEOHead';
import { SkipToContent } from './components/SkipToContent';
import { ScrollProgress } from './components/ScrollProgress';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSignals } from './components/TrustSignals';
import { PracticeAreas } from './components/PracticeAreas';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Insights } from './components/Insights';
import { Footer } from './components/Footer';
import { LegalDisclaimer } from './components/LegalDisclaimer';

export default function App() {
  return (
    <>
      <SEOHead />
      <SkipToContent />
      <ScrollProgress />
      <div className="min-h-screen bg-white">
        <Header />
        <main id="main-content">
          <Hero />
          <TrustSignals />
          <PracticeAreas />
          <About />
          <Testimonials />
          <Insights />
          <Footer />
        </main>
        <LegalDisclaimer />
      </div>
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            fontFamily: "'Helvetica Neue', 'Helvetica', Arial, sans-serif",
            fontSize: '14px',
            fontWeight: 400
          }
        }}
      />
    </>
  );
}
