import React, { useEffect } from 'react';
import Header from '@/components/es-mx/ESMXHeader';
import Footer from '@/components/es-mx/ESMXFooter';
import Features from '@/components/es-mx/ESMXFeatures';
import Testimonials from '@/components/es-mx/ESMXTestimonials';
import Pricing from '@/components/es-mx/ESMXPricing';
import HowItWorks from '@/components/es-mx/ESMXHowItWorks';
import CTA from '@/components/es-mx/ESMXCTA';
import ProofreadingHeroESMX from '@/components/ai-proofreading-es-mx/ProofreadingHeroESMX';
import ProofreadingBenefitsESMX from '@/components/ai-proofreading-es-mx/ProofreadingBenefitsESMX';
import ProofreadingDescriptionESMX from '@/components/ai-proofreading-es-mx/ProofreadingDescriptionESMX';
import ProofreadingFeaturesESMX from '@/components/ai-proofreading-es-mx/ProofreadingFeaturesESMX';
import ProofreadingComparisonESMX from '@/components/ai-proofreading-es-mx/ProofreadingComparisonESMX';
import ProofreadingFAQESMX from '@/components/ai-proofreading-es-mx/ProofreadingFAQESMX';

const AIProofreadingESMX: React.FC = () => {
  useEffect(() => {
    // Update the document title
    document.title = 'Herramienta de Corrección por IA - Editor En Línea Profesional';
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Mejora tu escritura con nuestra herramienta de corrección por IA. Obtén correcciones instantáneas de gramática, puntuación y estilo con funciones de edición profesional.');
    
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'herramienta de corrección, corrección por IA, editor en línea, corrector gramatical, revisión académica, edición de tesis');
    
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
        <ProofreadingHeroESMX />
        <ProofreadingBenefitsESMX />
        <ProofreadingDescriptionESMX />
        <ProofreadingFeaturesESMX />
        <ProofreadingComparisonESMX />
        <ProofreadingFAQESMX />
        <Features />
        <Testimonials />
        <Pricing />
        <HowItWorks />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default AIProofreadingESMX; 