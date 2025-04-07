import React, { useEffect } from 'react';
import ESMXHeader from '@/components/es-mx/ESMXHeader';
import ESMXHeroSection from '@/components/es-mx/ESMXHeroSection';
import ESMXLogoCloud from '@/components/es-mx/ESMXLogoCloud';
import ESMXFeatures from '@/components/es-mx/ESMXFeatures';
import ESMXTestimonials from '@/components/es-mx/ESMXTestimonials';
import ESMXPricing from '@/components/es-mx/ESMXPricing';
import ESMXHowItWorks from '@/components/es-mx/ESMXHowItWorks';
import ESMXCTA from '@/components/es-mx/ESMXCTA';
import ESMXFooter from '@/components/es-mx/ESMXFooter';

const ESMXHome: React.FC = () => {
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
      <ESMXHeader />
      <ESMXHeroSection />
      <ESMXLogoCloud />
      <ESMXFeatures />
      <ESMXTestimonials />
      <ESMXPricing />
      <ESMXHowItWorks />
      <ESMXCTA />
      <ESMXFooter />
    </div>
  );
};

export default ESMXHome; 