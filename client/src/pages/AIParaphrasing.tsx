import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParaphrasingHero from '../components/ai-paraphrasing/ParaphrasingHero';
import ParaphrasingBenefits from '../components/ai-paraphrasing/ParaphrasingBenefits';
import ParaphrasingDescription from '../components/ai-paraphrasing/ParaphrasingDescription';
import ParaphrasingFeatures from '../components/ai-paraphrasing/ParaphrasingFeatures';
import ParaphrasingComparison from '../components/ai-paraphrasing/ParaphrasingComparison';
import ParaphrasingFAQ from '../components/ai-paraphrasing/ParaphrasingFAQ';

const AIParaphrasing: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased">
      <Header />
      
      <main>
        <ParaphrasingHero />
        <ParaphrasingBenefits />
        <ParaphrasingDescription />
        <ParaphrasingFeatures />
        <ParaphrasingComparison />
        <ParaphrasingFAQ />
      </main>

      <Footer />
    </div>
  );
};

export default AIParaphrasing; 