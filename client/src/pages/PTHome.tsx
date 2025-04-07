import React, { useEffect } from 'react';
import PTHeader from '@/components/pt/PTHeader';
import PTHeroSection from '@/components/pt/PTHeroSection';
import PTLogoCloud from '@/components/pt/PTLogoCloud';
import PTFeatures from '@/components/pt/PTFeatures';
import PTTestimonials from '@/components/pt/PTTestimonials';
import PTPricing from '@/components/pt/PTPricing';
import PTHowItWorks from '@/components/pt/PTHowItWorks';
import PTCTA from '@/components/pt/PTCTA';
import PTFooter from '@/components/pt/PTFooter';

const PTHome: React.FC = () => {
  useEffect(() => {
    // Update document title for Portuguese (Portugal)
    document.title = 'myStylus - Avalie e Melhore o Seu Trabalho em Minutos';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'O myStylus ajuda-o a criar conteúdo perfeito analisando o seu texto e fornecendo sugestões em tempo real para melhorar o seu estilo de escrita, clareza e impacto.');
    
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
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
      <PTHeader />
      <PTHeroSection />
      <PTLogoCloud />
      <PTFeatures />
      <PTTestimonials />
      <PTPricing />
      <PTHowItWorks />
      <PTCTA />
      <PTFooter />
    </div>
  );
};

export default PTHome; 