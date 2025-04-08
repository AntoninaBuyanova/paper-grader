import React, { useEffect } from 'react';
import Header from '@/components/pt-br/PTBRHeader';
import Footer from '@/components/pt-br/PTBRFooter';
import Features from '@/components/pt-br/PTBRFeatures';
import Testimonials from '@/components/pt-br/PTBRTestimonials';
import Pricing from '@/components/pt-br/PTBRPricing';
import HowItWorks from '@/components/pt-br/PTBRHowItWorks';
import CTA from '@/components/pt-br/PTBRCTA';
import ParaphrasingHeroPTBR from '../components/ai-paraphrasing-pt-br/ParaphrasingHeroPTBR';
import ParaphrasingBenefitsPTBR from '../components/ai-paraphrasing-pt-br/ParaphrasingBenefitsPTBR';
import ParaphrasingDescriptionPTBR from '../components/ai-paraphrasing-pt-br/ParaphrasingDescriptionPTBR';
import ParaphrasingFeaturesPTBR from '../components/ai-paraphrasing-pt-br/ParaphrasingFeaturesPTBR';
import ParaphrasingFAQPTBR from '../components/ai-paraphrasing-pt-br/ParaphrasingFAQPTBR';

const AIParaphrasingPTBR: React.FC = () => {
  useEffect(() => {
    // Update the document title
    document.title = 'Ferramenta de Paráfrase de IA - myStylus';
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'A melhor ferramenta de paráfrase de IA para reformular o seu texto. Transforme conteúdo gerado por IA em escrita semelhante à humana instantaneamente.');
    
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'ferramenta de paráfrase, paráfrase de IA, reescrita de texto, parafraseador, conteúdo acadêmico, texto humano, português brasileiro');
    
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
        <ParaphrasingHeroPTBR />
        <ParaphrasingBenefitsPTBR />
        <ParaphrasingDescriptionPTBR />
        <ParaphrasingFeaturesPTBR />
        <Features />
        <Testimonials />
        <Pricing />
        <HowItWorks />
        <ParaphrasingFAQPTBR />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default AIParaphrasingPTBR; 