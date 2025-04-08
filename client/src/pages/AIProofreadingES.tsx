import React, { useEffect } from 'react';
import Header from '@/components/es/ESHeader';
import Footer from '@/components/es/ESFooter';
import Features from '@/components/es/ESFeatures';
import Testimonials from '@/components/es/ESTestimonials';
import Pricing from '@/components/es/ESPricing';
import HowItWorks from '@/components/es/ESHowItWorks';
import CTA from '@/components/es/ESCTA';
import ProofreadingHeroES from '@/components/ai-proofreading-es/ProofreadingHeroES';
import ProofreadingBenefitsES from '@/components/ai-proofreading-es/ProofreadingBenefitsES';
import ProofreadingDescriptionES from '@/components/ai-proofreading-es/ProofreadingDescriptionES';
import ProofreadingFeaturesES from '@/components/ai-proofreading-es/ProofreadingFeaturesES';
import ProofreadingComparisonES from '@/components/ai-proofreading-es/ProofreadingComparisonES';
import ProofreadingFAQES from '@/components/ai-proofreading-es/ProofreadingFAQES';

const AIProofreadingES: React.FC = () => {
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
        <ProofreadingHeroES />
        <ProofreadingBenefitsES />
        <ProofreadingDescriptionES />
        <ProofreadingFeaturesES />
        <ProofreadingComparisonES />
        <ProofreadingFAQES />
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

export default AIProofreadingES; 