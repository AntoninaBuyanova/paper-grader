import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PlagiarismHero from '../components/plagiarism-checker/PlagiarismHero';
import PlagiarismBenefits from '../components/plagiarism-checker/PlagiarismBenefits';
import PlagiarismDescription from '../components/plagiarism-checker/PlagiarismDescription';
import PlagiarismFeatures from '../components/plagiarism-checker/PlagiarismFeatures';
import PlagiarismComparison from '../components/plagiarism-checker/PlagiarismComparison';
import PlagiarismFAQ from '../components/plagiarism-checker/PlagiarismFAQ';

const PlagiarismChecker: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased">
      <Header />
      
      <main>
        <PlagiarismHero />
        <PlagiarismBenefits />
        <PlagiarismDescription />
        <PlagiarismFeatures />
        <PlagiarismComparison />
        <PlagiarismFAQ />
      </main>

      <Footer />
    </div>
  );
};

export default PlagiarismChecker; 