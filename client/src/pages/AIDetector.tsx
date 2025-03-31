import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIDetectionHero from '../components/ai-detection/AIDetectionHero';
import AIDetectionFeatures from '../components/ai-detection/AIDetectionFeatures';
import AIDetectionBenefits from '../components/ai-detection/AIDetectionBenefits';
import AIDetectionComparison from '../components/ai-detection/AIDetectionComparison';
import AIDetectionFAQ from '../components/ai-detection/AIDetectionFAQ';
import AIDetectionDescription from '../components/ai-detection/AIDetectionDescription';

const AIDetector: React.FC = () => {
  useEffect(() => {
    // Update the document title
    document.title = 'AI Detector - Detect AI Generated Content';
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Advanced AI content detection tool. Check if your text is AI-generated with our reliable AI detector. Get accurate results instantly.');
    
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'AI Detector, AI Detection, AI content detection, detect AI-generated content, AI detection tool, AI content checker');
    
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
      
      {/* Hero Section */}
      <AIDetectionHero />

      {/* Benefits Section with Logo Cloud style */}
      <AIDetectionBenefits />

      {/* Main Content */}
      <main>
        <div id="description">
          <AIDetectionDescription />
        </div>

        <div id="features">
          <AIDetectionFeatures />
        </div>
        
        <div id="comparison">
          <AIDetectionComparison />
        </div>

        {/* FAQ Section */}
        <div id="faq">
          <AIDetectionFAQ />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIDetector; 