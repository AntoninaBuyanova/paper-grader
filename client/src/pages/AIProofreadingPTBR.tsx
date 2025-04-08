import React, { useEffect } from 'react';
import Header from '@/components/pt-br/PTBRHeader';
import Footer from '@/components/pt-br/PTBRFooter';
import Features from '@/components/pt-br/PTBRFeatures';
import Testimonials from '@/components/pt-br/PTBRTestimonials';
import Pricing from '@/components/pt-br/PTBRPricing';
import HowItWorks from '@/components/pt-br/PTBRHowItWorks';
import CTA from '@/components/pt-br/PTBRCTA';
import ProofreadingHeroPTBR from '@/components/ai-proofreading-pt-br/ProofreadingHeroPTBR';
import ProofreadingBenefitsPTBR from '@/components/ai-proofreading-pt-br/ProofreadingBenefitsPTBR';
import ProofreadingDescriptionPTBR from '@/components/ai-proofreading-pt-br/ProofreadingDescriptionPTBR';
import ProofreadingFeaturesPTBR from '@/components/ai-proofreading-pt-br/ProofreadingFeaturesPTBR';
import ProofreadingComparisonPTBR from '@/components/ai-proofreading-pt-br/ProofreadingComparisonPTBR';
import ProofreadingFAQPTBR from '@/components/ai-proofreading-pt-br/ProofreadingFAQPTBR';

const AIProofreadingPTBR: React.FC = () => {
  useEffect(() => {
    // Update the document title
    document.title = 'Ferramenta de Revisão por IA - Editor Online Profissional';
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Melhore sua escrita com nossa ferramenta de revisão por IA. Obtenha correções instantâneas de gramática, pontuação e estilo com recursos de edição profissional.');
    
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'ferramenta de revisão, revisão por IA, editor online, corretor gramatical, revisão acadêmica, edição de teses');
    
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
        <ProofreadingHeroPTBR />
        <ProofreadingBenefitsPTBR />
        <ProofreadingDescriptionPTBR />
        <ProofreadingFeaturesPTBR />
        <ProofreadingComparisonPTBR />
        <ProofreadingFAQPTBR />
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

export default AIProofreadingPTBR; 