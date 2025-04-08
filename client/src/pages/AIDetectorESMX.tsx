import React, { useEffect } from 'react';
import ESMXHeader from '@/components/es-mx/ESMXHeader';
import ESMXFooter from '@/components/es-mx/ESMXFooter';
import ESMXFeatures from '@/components/es-mx/ESMXFeatures';
import ESMXTestimonials from '@/components/es-mx/ESMXTestimonials';
import ESMXHowItWorks from '@/components/es-mx/ESMXHowItWorks';
import ESMXCTA from '@/components/es-mx/ESMXCTA';
import AIDetectionHeroESMX from '../components/ai-detector-es-mx/AIDetectionHeroESMX';
import AIDetectionFeaturesESMX from '../components/ai-detector-es-mx/AIDetectionFeaturesESMX';
import AIDetectionBenefitsESMX from '../components/ai-detector-es-mx/AIDetectionBenefitsESMX';
import AIDetectionComparisonESMX from '../components/ai-detector-es-mx/AIDetectionComparisonESMX';
import AIDetectionFAQESMX from '../components/ai-detector-es-mx/AIDetectionFAQESMX';
import AIDetectionDescriptionESMX from '../components/ai-detector-es-mx/AIDetectionDescriptionESMX';

// Componente de precarga de recursos críticos
const ResourcePreloader: React.FC = () => {
  useEffect(() => {
    // Precarga de imágenes críticas para la página de AI-detector
    const preloadImages = [
      '/users.png',  // Imagen con avatares de usuarios
      '/ai-detector-hero.webp', // Imagen principal de la sección hero (si existe)
    ];
    
    preloadImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.type = 'image/webp';
      document.head.appendChild(link);
    });
    
    // Adición de estilos críticos para AI-detector
    const criticalStyles = `
      .ai-detection-hero {
        background-color: white;
        padding-top: 1rem;
        padding-bottom: 0;
      }
      @media (min-width: 768px) {
        .ai-detection-hero {
          padding-top: 2.5rem;
          padding-bottom: 0;
        }
      }
      .ai-detection-benefits {
        background-color: white;
        padding: 0;
        border-top: none;
        border-bottom: none;
      }
      @media (min-width: 768px) {
        .ai-detection-benefits {
          padding: 0;
        }
      }
    `;
    
    // Inserción de estilos críticos
    if (!document.querySelector('#ai-detector-critical-css')) {
      const style = document.createElement('style');
      style.id = 'ai-detector-critical-css';
      style.innerHTML = criticalStyles;
      document.head.appendChild(style);
    }
    
    // Optimización de carga de fuentes
    document.documentElement.classList.add('fonts-loading');
    
    if ('fonts' in document) {
      Promise.all([
        (document as any).fonts.load('1em "Aeonik Pro"'),
        (document as any).fonts.load('1em "Orbikular"'),
        (document as any).fonts.load('1em "Inter"')
      ]).then(() => {
        document.documentElement.classList.remove('fonts-loading');
        document.documentElement.classList.add('fonts-loaded');
      });
    }
  }, []);
  
  return null;
};

const AIDetectorESMX: React.FC = () => {
  useEffect(() => {
    // Actualizar el título del documento
    document.title = 'Detector de IA - Detecta Contenido Generado por IA';
    
    // Actualizar meta tags
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Herramienta avanzada de detección de contenido de IA. Comprueba si tu texto está generado por IA con nuestro detector de IA confiable. Obtén resultados precisos al instante.');
    
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'Detector de IA, Detección de IA, detección de contenido de IA, detectar contenido generado por IA, herramienta de detección de IA, verificador de contenido de IA');
    
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
      {/* Precarga de recursos críticos */}
      <ResourcePreloader />
      
      <ESMXHeader />
      
      {/* Sección Hero con clase adicional para estilos críticos */}
      <section className="ai-detection-hero">
        <AIDetectionHeroESMX />
      </section>

      {/* Sección de Beneficios con clase adicional para estilos críticos */}
      <section className="ai-detection-benefits">
        <AIDetectionBenefitsESMX />
      </section>

      {/* Contenido Principal */}
      <main>
        <div id="description">
          <AIDetectionDescriptionESMX />
        </div>

        <div id="features">
          <AIDetectionFeaturesESMX />
          <ESMXFeatures />
        </div>
        
        <div id="comparison">
          <AIDetectionComparisonESMX />
        </div>

        <ESMXTestimonials />
        <ESMXHowItWorks />

        {/* Sección FAQ */}
        <div id="faq">
          <AIDetectionFAQESMX />
        </div>

        <ESMXCTA />
      </main>

      <ESMXFooter />
    </div>
  );
};

export default AIDetectorESMX; 