import React, { useEffect } from 'react';
import PTBRHeader from '@/components/pt-br/PTBRHeader';
import PTBRHeroSection from '@/components/pt-br/PTBRHeroSection';
import PTBRLogoCloud from '@/components/pt-br/PTBRLogoCloud';
import PTBRFeatures from '@/components/pt-br/PTBRFeatures';
import PTBRTestimonials from '@/components/pt-br/PTBRTestimonials';
import PTBRPricing from '@/components/pt-br/PTBRPricing';
import PTBRHowItWorks from '@/components/pt-br/PTBRHowItWorks';
import PTBRCTA from '@/components/pt-br/PTBRCTA';
import PTBRFooter from '@/components/pt-br/PTBRFooter';

const PTBRHome: React.FC = () => {
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
      <PTBRHeader />
      <PTBRHeroSection />
      <PTBRLogoCloud />
      <PTBRFeatures />
      <PTBRTestimonials />
      <PTBRPricing />
      <PTBRHowItWorks />
      <PTBRCTA />
      <PTBRFooter />
    </div>
  );
};

export default PTBRHome; 