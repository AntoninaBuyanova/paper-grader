import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import HowItWorks from '@/components/HowItWorks';
import CTA from '@/components/CTA';
import ProofreadingChecker from '@/components/ai-proofreading/ProofreadingChecker';
import ProofreadingHero from '@/components/ai-proofreading/ProofreadingHero';

const AIProofreading: React.FC = () => {
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
        <ProofreadingHero />
        <ProofreadingChecker />
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

export default AIProofreading; 