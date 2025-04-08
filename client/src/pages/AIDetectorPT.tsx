import React, { useEffect } from 'react';
import Header from '@/components/pt/PTHeader';
import Footer from '@/components/pt/PTFooter';
import Features from '@/components/pt/PTFeatures';
import Testimonials from '@/components/pt/PTTestimonials';
import HowItWorks from '@/components/pt/PTHowItWorks';
import CTA from '@/components/pt/PTCTA';
import AIDetectionHeroPT from '@/components/ai-detector-pt/AIDetectionHeroPT';
import AIDetectionFeaturesPT from '@/components/ai-detector-pt/AIDetectionFeaturesPT';
import AIDetectionBenefitsPT from '@/components/ai-detector-pt/AIDetectionBenefitsPT';
import AIDetectionComparisonPT from '@/components/ai-detector-pt/AIDetectionComparisonPT';
import AIDetectionFAQPT from '@/components/ai-detector-pt/AIDetectionFAQPT';
import AIDetectionDescriptionPT from '@/components/ai-detector-pt/AIDetectionDescriptionPT';

// Componente de pré-carregamento de recursos críticos
const ResourcePreloader: React.FC = () => {
  useEffect(() => {
    // Pré-carregamento de imagens críticas para a página AI-detector
    const preloadImages = [
      '/users.png',  // Imagem com avatares de usuários
    ];
    
    preloadImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.type = src.endsWith('.png') ? 'image/png' : 'image/webp';
      document.head.appendChild(link);
    });
    
    // Adição de estilos críticos para AI-detector
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
    
    // Inserção de estilos críticos
    if (!document.querySelector('#ai-detector-critical-css')) {
      const style = document.createElement('style');
      style.id = 'ai-detector-critical-css';
      style.innerHTML = criticalStyles;
      document.head.appendChild(style);
    }
    
    // Otimização do carregamento de fontes
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

const AIDetectorPT: React.FC = () => {
  useEffect(() => {
    // Atualizar o título do documento
    document.title = 'Detector de IA - Detecte Conteúdo Gerado por IA';
    
    // Atualizar meta tags
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Ferramenta avançada de detecção de conteúdo de IA. Verifique se o seu texto foi gerado por IA com o nosso detector de IA confiável. Obtenha resultados precisos instantaneamente.');
    
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'Detector de IA, Detecção de IA, detecção de conteúdo de IA, detectar conteúdo gerado por IA, ferramenta de detecção de IA, verificador de conteúdo de IA');
    
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }

    // Rolagem suave para links âncora
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.href.includes(window.location.pathname)) {
        e.preventDefault();
        const targetId = target.getAttribute('href') as string;
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Ajuste para altura do cabeçalho
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
      {/* Pré-carregamento de recursos críticos */}
      <ResourcePreloader />
      
      <Header />
      
      {/* Hero Section com classe adicional para estilos críticos */}
      <section className="ai-detection-hero">
        <AIDetectionHeroPT />
      </section>

      {/* Benefits Section com classe adicional para estilos críticos */}
      <section className="ai-detection-benefits">
        <AIDetectionBenefitsPT />
      </section>

      {/* Main Content */}
      <main>
        <div id="description">
          <AIDetectionDescriptionPT />
        </div>

        <div id="features">
          <AIDetectionFeaturesPT />
          <Features />
        </div>
        
        <div id="comparison">
          <AIDetectionComparisonPT />
        </div>

        <Testimonials />
        <HowItWorks />

        {/* FAQ Section */}
        <div id="faq">
          <AIDetectionFAQPT />
        </div>

        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default AIDetectorPT; 