import React, { useEffect } from 'react';
import Header from '@/components/es/ESHeader';
import Footer from '@/components/es/ESFooter';
import Features from '@/components/es/ESFeatures';
import Testimonials from '@/components/es/ESTestimonials';
import Pricing from '@/components/es/ESPricing';
import HowItWorks from '@/components/es/ESHowItWorks';
import CTA from '@/components/es/ESCTA';
import ParaphrasingHeroES from '../components/ai-paraphrasing-es/ParaphrasingHeroES';
import ParaphrasingBenefitsES from '../components/ai-paraphrasing-es/ParaphrasingBenefitsES';
import ParaphrasingDescriptionES from '../components/ai-paraphrasing-es/ParaphrasingDescriptionES';
import ParaphrasingFeaturesES from '../components/ai-paraphrasing-es/ParaphrasingFeaturesES';
import ParaphrasingFAQES from '../components/ai-paraphrasing-es/ParaphrasingFAQES';

const AIParaphrasingES: React.FC = () => {
  useEffect(() => {
    // Update the document title
    document.title = 'Herramienta de Parafraseo de IA - myStylus';
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'La mejor herramienta de parafraseo de IA para reformular tu texto. Transforma contenido generado por IA en escritura similar a la humana instantáneamente.');
    
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'herramienta de parafraseo, parafraseo de IA, reescritura de texto, parafraseador, contenido académico, texto humano, español');
    
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
        <ParaphrasingHeroES />
        <ParaphrasingBenefitsES />
        <ParaphrasingDescriptionES />
        <ParaphrasingFeaturesES />
        <Features />
        <Testimonials />
        <Pricing />
        <HowItWorks />
        <ParaphrasingFAQES />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default AIParaphrasingES; 