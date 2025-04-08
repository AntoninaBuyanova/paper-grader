import React, { useEffect } from 'react';
import Header from '@/components/es-mx/ESMXHeader';
import Footer from '@/components/es-mx/ESMXFooter';
import Features from '@/components/es-mx/ESMXFeatures';
import Testimonials from '@/components/es-mx/ESMXTestimonials';
import Pricing from '@/components/es-mx/ESMXPricing';
import HowItWorks from '@/components/es-mx/ESMXHowItWorks';
import CTA from '@/components/es-mx/ESMXCTA';
import PlagiarismHeroESMX from '@/components/plagiarism-checker-es-mx/PlagiarismHeroESMX';
import PlagiarismBenefitsESMX from '@/components/plagiarism-checker-es-mx/PlagiarismBenefitsESMX';
import PlagiarismDescriptionESMX from '@/components/plagiarism-checker-es-mx/PlagiarismDescriptionESMX';
import PlagiarismFeaturesESMX from '@/components/plagiarism-checker-es-mx/PlagiarismFeaturesESMX';
import PlagiarismFAQESMX from '@/components/plagiarism-checker-es-mx/PlagiarismFAQESMX';

const PlagiarismCheckerESMX: React.FC = () => {
  useEffect(() => {
    // Actualizar el título del documento
    document.title = 'Detector de Plagio - Detecta y Corrige Plagio al Instante';
    
    // Actualizar meta tags
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Herramienta avanzada para detectar plagio y contenido duplicado. Obtén resultados inmediatos y precisos para asegurar que tu texto sea original.');
    
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'detector de plagio, verificador de plagio, verificación de plagio, contenido duplicado, originalidad de texto');
    
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
        <PlagiarismHeroESMX />
        <PlagiarismBenefitsESMX />
        <PlagiarismDescriptionESMX />
        <PlagiarismFeaturesESMX />
        <Features />
        <Testimonials />
        <Pricing />
        <HowItWorks />
        <PlagiarismFAQESMX />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default PlagiarismCheckerESMX; 