import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import HowItWorks from '@/components/HowItWorks';
import CTA from '@/components/CTA';
import ProofreadingHero from '@/components/ai-proofreading/ProofreadingHero';
import ProofreadingBenefits from '@/components/ai-proofreading/ProofreadingBenefits';
import ProofreadingDescription from '@/components/ai-proofreading/ProofreadingDescription';
import ProofreadingFeatures from '@/components/ai-proofreading/ProofreadingFeatures';
import ProofreadingComparison from '@/components/ai-proofreading/ProofreadingComparison';
import ProofreadingFAQ from '@/components/ai-proofreading/ProofreadingFAQ';

const AIProofreading: React.FC = () => {
  useEffect(() => {
    // Update the document title
    document.title = 'AI Proofreading Tool - Professional Online Editor';
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Improve your writing with our AI proofreading tool. Get instant grammar, punctuation, and style corrections with professional editing features.');
    
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'proofreading tool, AI proofreading, online editor, grammar checker, academic proofreading, thesis editing');
    
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
        <ProofreadingHero />
        <ProofreadingBenefits />
        <ProofreadingDescription />
        <ProofreadingFeatures />
        <ProofreadingComparison />
        <ProofreadingFAQ />
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