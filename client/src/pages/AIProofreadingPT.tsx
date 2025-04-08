import React, { useEffect } from 'react';
import Header from '@/components/pt/PTHeader';
import Footer from '@/components/pt/PTFooter';
import Features from '@/components/pt/PTFeatures';
import Testimonials from '@/components/pt/PTTestimonials';
import Pricing from '@/components/pt/PTPricing';
import HowItWorks from '@/components/pt/PTHowItWorks';
import CTA from '@/components/pt/PTCTA';
import ProofreadingHeroPT from '@/components/ai-proofreading-pt/ProofreadingHeroPT';
import ProofreadingBenefitsPT from '@/components/ai-proofreading-pt/ProofreadingBenefitsPT';
import ProofreadingDescriptionPT from '@/components/ai-proofreading-pt/ProofreadingDescriptionPT';
import ProofreadingFeaturesPT from '@/components/ai-proofreading-pt/ProofreadingFeaturesPT';
import ProofreadingComparisonPT from '@/components/ai-proofreading-pt/ProofreadingComparisonPT';
import ProofreadingFAQPT from '@/components/ai-proofreading-pt/ProofreadingFAQPT';

const AIProofreadingPT: React.FC = () => {
  useEffect(() => {
    // Update the document title
    document.title = 'Ferramenta de Revisão por IA - Editor Online Profissional';
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Melhore a sua escrita com a nossa ferramenta de revisão por IA. Obtenha correções instantâneas de gramática, pontuação e estilo com recursos de edição profissional.');
    
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'ferramenta de revisão, revisão por IA, editor online, corretor gramatical, revisão académica, edição de teses');
    
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
        <ProofreadingHeroPT />
        <ProofreadingBenefitsPT />
        <ProofreadingDescriptionPT />
        <ProofreadingFeaturesPT />
        <ProofreadingComparisonPT />
        <ProofreadingFAQPT />
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

export default AIProofreadingPT; 