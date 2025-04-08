import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import CTA from '@/components/CTA';
import ParaphrasingHero from '../components/ai-paraphrasing/ParaphrasingHero';
import ParaphrasingBenefits from '../components/ai-paraphrasing/ParaphrasingBenefits';
import ParaphrasingDescription from '../components/ai-paraphrasing/ParaphrasingDescription';
import ParaphrasingFeatures from '../components/ai-paraphrasing/ParaphrasingFeatures';
import ParaphrasingComparison from '../components/ai-paraphrasing/ParaphrasingComparison';
import ParaphrasingFAQ from '../components/ai-paraphrasing/ParaphrasingFAQ';

const AIParaphrasing: React.FC = () => {
  useEffect(() => {
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
        <ParaphrasingHero />
        <ParaphrasingBenefits />
        <ParaphrasingDescription />
        <ParaphrasingFeatures />
        <Features />
        <ParaphrasingComparison />
        <Testimonials />
        <HowItWorks />
        <ParaphrasingFAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default AIParaphrasing; 