import React, { useEffect } from 'react';
import Header from '@/components/es-mx/ESMXHeader';
import Footer from '@/components/es-mx/ESMXFooter';
import Features from '@/components/es-mx/ESMXFeatures';
import Testimonials from '@/components/es-mx/ESMXTestimonials';
import Pricing from '@/components/es-mx/ESMXPricing';
import HowItWorks from '@/components/es-mx/ESMXHowItWorks';
import CTA from '@/components/es-mx/ESMXCTA';
import ParaphrasingHeroESMX from '@/components/ai-paraphrasing-es-mx/ParaphrasingHeroESMX';
import ParaphrasingBenefitsESMX from '@/components/ai-paraphrasing-es-mx/ParaphrasingBenefitsESMX';
import ParaphrasingDescriptionESMX from '@/components/ai-paraphrasing-es-mx/ParaphrasingDescriptionESMX';
import ParaphrasingFeaturesESMX from '@/components/ai-paraphrasing-es-mx/ParaphrasingFeaturesESMX';
import ParaphrasingFAQESMX from '@/components/ai-paraphrasing-es-mx/ParaphrasingFAQESMX';

const AIParaphrasingESMX: React.FC = () => {
  useEffect(() => {
    // Update the document title
    document.title = 'Herramienta de Parafraseo de IA - myStylus';
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'La mejor herramienta de parafraseo de IA para reformular tu texto. Transforma contenido generado por IA en escritura similar a la humana instantáneamente.');
    
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'herramienta de parafraseo, parafraseo de IA, reescritura de texto, parafraseador, contenido académico, texto humano, español mexicano');
    
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }
    
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.href.includes(window.location.pathname)) {
        e.preventDefault();
        const targetId = target.getAttribute('href') as string;
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Adjust for header height
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased">
      <Header />
      
      <main>
        <ParaphrasingHeroESMX />
        <ParaphrasingBenefitsESMX />
        <ParaphrasingDescriptionESMX />
        <ParaphrasingFeaturesESMX />
        <Features />
        <Testimonials />
        <Pricing />
        <HowItWorks />
        <ParaphrasingFAQESMX />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default AIParaphrasingESMX; 