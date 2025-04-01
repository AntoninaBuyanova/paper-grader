import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import HowItWorks from '@/components/HowItWorks';
import CTA from '@/components/CTA';
import AIDetectionHero from '../components/ai-detection/AIDetectionHero';
import AIDetectionFeatures from '../components/ai-detection/AIDetectionFeatures';
import AIDetectionBenefits from '../components/ai-detection/AIDetectionBenefits';
import AIDetectionComparison from '../components/ai-detection/AIDetectionComparison';
import AIDetectionFAQ from '../components/ai-detection/AIDetectionFAQ';
import AIDetectionDescription from '../components/ai-detection/AIDetectionDescription';

// Компонент предзагрузки критических ресурсов
const ResourcePreloader: React.FC = () => {
  useEffect(() => {
    // Предзагрузка критических изображений для страницы AI-detector
    const preloadImages = [
      '/users.png',  // Изображение с аватарами пользователей
      '/ai-detector-hero.webp', // Главное изображение hero секции (если есть)
    ];
    
    preloadImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.type = 'image/webp';
      document.head.appendChild(link);
    });
    
    // Добавление критических стилей для AI-detector
    const criticalStyles = `
      .ai-detection-hero {
        background-color: white;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
      @media (min-width: 768px) {
        .ai-detection-hero {
          padding-top: 2.5rem;
          padding-bottom: 2.5rem;
        }
      }
      .ai-detection-benefits {
        background-color: white;
        padding: 1.5rem 0;
      }
      @media (min-width: 768px) {
        .ai-detection-benefits {
          padding: 2.5rem 0;
        }
      }
    `;
    
    // Вставка критических стилей
    if (!document.querySelector('#ai-detector-critical-css')) {
      const style = document.createElement('style');
      style.id = 'ai-detector-critical-css';
      style.innerHTML = criticalStyles;
      document.head.appendChild(style);
    }
    
    // Оптимизация загрузки шрифтов
    document.documentElement.classList.add('fonts-loading');
    
    if ('fonts' in document) {
      Promise.all([
        (document as any).fonts.load('1em "Aeonik Pro"'),
        (document as any).fonts.load('1em "Orbikular"'),
        (document as any).fonts.load('1em "Inter"')
      ]).then(() => {
        document.documentElement.classList.remove('fonts-loading');
        document.documentElement.classList.add('fonts-loaded');
      });
    }
  }, []);
  
  return null;
};

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
      {/* Предзагрузка критических ресурсов */}
      <ResourcePreloader />
      
      <Header />
      
      {/* Hero Section с дополнительным классом для критических стилей */}
      <section className="ai-detection-hero">
        <AIDetectionHero />
      </section>

      {/* Benefits Section с дополнительным классом для критических стилей */}
      <section className="ai-detection-benefits">
        <AIDetectionBenefits />
      </section>

      {/* Main Content */}
      <main>
        <div id="description">
          <AIDetectionDescription />
        </div>

        <div id="features">
          <AIDetectionFeatures />
          <Features />
        </div>
        
        <div id="comparison">
          <AIDetectionComparison />
        </div>

        <Testimonials />
        <Pricing />
        <HowItWorks />

        {/* FAQ Section */}
        <div id="faq">
          <AIDetectionFAQ />
        </div>

        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default AIDetector; 