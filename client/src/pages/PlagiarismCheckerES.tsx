import React, { useEffect } from 'react';
import Header from '@/components/es/ESHeader';
import Footer from '@/components/es/ESFooter';
import Features from '@/components/es/ESFeatures';
import Testimonials from '@/components/es/ESTestimonials';
import Pricing from '@/components/es/ESPricing';
import HowItWorks from '@/components/es/ESHowItWorks';
import CTA from '@/components/es/ESCTA';
import PlagiarismHeroES from '@/components/plagiarism-checker-es/PlagiarismHeroES';
import PlagiarismBenefitsES from '@/components/plagiarism-checker-es/PlagiarismBenefitsES';
import PlagiarismDescriptionES from '@/components/plagiarism-checker-es/PlagiarismDescriptionES';
import PlagiarismFeaturesES from '@/components/plagiarism-checker-es/PlagiarismFeaturesES';
import PlagiarismFAQES from '@/components/plagiarism-checker-es/PlagiarismFAQES';

const PlagiarismCheckerES: React.FC = () => {
  useEffect(() => {
    // Actualizar el título del documento
    document.title = 'Detector de Plagio - Detecta y Corrige Plagio Instantáneamente';
    
    // Actualizar meta tags
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Herramienta avanzada para detectar plagio y contenido duplicado. Obtén resultados instantáneos y precisos para asegurar que tu texto sea original.');
    
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'detector de plagio, comprobador de plagio, verificación de plagio, contenido duplicado, originalidad de texto');
    
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }

    // Desplazamiento suave para enlaces de anclaje
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.href.includes(window.location.pathname)) {
        e.preventDefault();
        const targetId = target.getAttribute('href') as string;
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Ajuste para la altura del encabezado
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
        <PlagiarismHeroES />
        <PlagiarismBenefitsES />
        <PlagiarismDescriptionES />
        <PlagiarismFeaturesES />
        <Features />
        <Testimonials />
        <Pricing />
        <HowItWorks />
        <PlagiarismFAQES />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default PlagiarismCheckerES; 