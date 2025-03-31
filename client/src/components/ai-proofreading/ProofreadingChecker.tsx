import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ProofreadingHero from './ProofreadingHero';
import ProofreadingBenefits from './ProofreadingBenefits';
import ProofreadingDescription from './ProofreadingDescription';
import ProofreadingFeatures from './ProofreadingFeatures';
import ProofreadingComparison from './ProofreadingComparison';
import ProofreadingFAQ from './ProofreadingFAQ';

const ProofreadingChecker: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ProofreadingHero />
        <ProofreadingBenefits />
        <ProofreadingDescription />
        <ProofreadingFeatures />
        <ProofreadingComparison />
        <ProofreadingFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default ProofreadingChecker; 