import React, { useEffect } from 'react';
import Header from '@/components/pt/PTHeader';
import Footer from '@/components/pt/PTFooter';
import Features from '@/components/pt/PTFeatures';
import Testimonials from '@/components/pt/PTTestimonials';
import Pricing from '@/components/pt/PTPricing';
import HowItWorks from '@/components/pt/PTHowItWorks';
import CTA from '@/components/pt/PTCTA';
import ParaphrasingHeroPT from '@/components/ai-paraphrasing-pt/ParaphrasingHeroPT';
import ParaphrasingBenefitsPT from '@/components/ai-paraphrasing-pt/ParaphrasingBenefitsPT';
import ParaphrasingDescriptionPT from '@/components/ai-paraphrasing-pt/ParaphrasingDescriptionPT';
import ParaphrasingFeaturesPT from '@/components/ai-paraphrasing-pt/ParaphrasingFeaturesPT';
import ParaphrasingFAQPT from '@/components/ai-paraphrasing-pt/ParaphrasingFAQPT';

const AIParaphrasingPT: React.FC = () => {
  useEffect(() => {
    // Update the document title
    document.title = 'Ferramenta de Paráfrase de IA - myStylus';
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'A melhor ferramenta de paráfrase de IA para reformular o seu texto. Transforme conteúdo gerado por IA em escrita semelhante à humana instantaneamente.');
    
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'ferramenta de paráfrase, paráfrase de IA, reescrita de texto, parafraseador, conteúdo académico, texto humano');
    
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
        <ParaphrasingHeroPT />
        <ParaphrasingBenefitsPT />
        <ParaphrasingDescriptionPT />
        <ParaphrasingFeaturesPT />
        <Features />
        <Testimonials />
        <Pricing />
        <HowItWorks />
        <ParaphrasingFAQPT />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default AIParaphrasingPT; 