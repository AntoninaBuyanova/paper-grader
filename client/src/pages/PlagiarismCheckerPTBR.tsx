import React, { useEffect } from 'react';
import Header from '@/components/pt-br/PTBRHeader';
import Footer from '@/components/pt-br/PTBRFooter';
import Features from '@/components/pt-br/PTBRFeatures';
import Testimonials from '@/components/pt-br/PTBRTestimonials';
import Pricing from '@/components/pt-br/PTBRPricing';
import HowItWorks from '@/components/pt-br/PTBRHowItWorks';
import CTA from '@/components/pt-br/PTBRCTA';
import PlagiarismHeroPTBR from '@/components/plagiarism-checker-pt-br/PlagiarismHeroPTBR';
import PlagiarismBenefitsPTBR from '@/components/plagiarism-checker-pt-br/PlagiarismBenefitsPTBR';
import PlagiarismDescriptionPTBR from '@/components/plagiarism-checker-pt-br/PlagiarismDescriptionPTBR';
import PlagiarismFeaturesPTBR from '@/components/plagiarism-checker-pt-br/PlagiarismFeaturesPTBR';
import PlagiarismFAQPTBR from '@/components/plagiarism-checker-pt-br/PlagiarismFAQPTBR';

const PlagiarismCheckerPTBR: React.FC = () => {
  useEffect(() => {
    // Atualizar o título do documento
    document.title = 'Verificador de Plágio - Detecte e Corrija Plágio Instantaneamente';
    
    // Atualizar meta tags
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Ferramenta avançada para detecção de plágio e conteúdo duplicado. Obtenha resultados instantâneos e precisos para garantir que seu texto seja original.');
    
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'verificador de plágio, detector de plágio, verificação de plágio, conteúdo duplicado, originalidade do texto');
    
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
      <Header />
      
      <main>
        <PlagiarismHeroPTBR />
        <PlagiarismBenefitsPTBR />
        <PlagiarismDescriptionPTBR />
        <PlagiarismFeaturesPTBR />
        <Features />
        <Testimonials />
        <Pricing />
        <HowItWorks />
        <PlagiarismFAQPTBR />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default PlagiarismCheckerPTBR; 