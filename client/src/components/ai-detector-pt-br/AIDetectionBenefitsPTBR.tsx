import React from 'react';
import { AIDetectionIcon, PlagiarismFixIcon, InTextCitationsIcon, OneClickFixesIcon } from '@/components/icons/Logo';

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-row items-start md:flex-col md:items-center md:text-center gap-3 md:gap-4">
    <div className="mb-0 md:mb-4">
      {icon}
    </div>
    <div>
      <h3 className="text-[15px] md:text-base lg:text-base font-medium mb-1 md:mb-2">{title}</h3>
      <p className="text-[#666666] text-sm">{description}</p>
    </div>
  </div>
);

const AIDetectionBenefitsPTBR: React.FC = () => {
  return (
    <section className="py-10 bg-[#FFFFFF] border-t border-b border-[#E8E8E5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-[1240px] mx-auto">
          <FeatureItem
            icon={<AIDetectionIcon className="w-6 h-6 md:w-8 md:h-8" />}
            title="Melhor Detecção de IA"
            description="Ferramenta anti-detecção de IA e soluções avançadas de detecção"
          />
          <FeatureItem
            icon={<PlagiarismFixIcon className="w-6 h-6 md:w-8 md:h-8" />}
            title="Ferramentas de Detecção"
            description="Evite a detecção de IA, soluções de IA que contornam a detecção"
          />
          <FeatureItem
            icon={<InTextCitationsIcon className="w-6 h-6 md:w-8 md:h-8" />}
            title="Ferramentas pra Redações"
            description="Detecção de IA no Turnitin, detecção de plágio e reescrita pra evitar detecção"
          />
          <FeatureItem
            icon={<OneClickFixesIcon className="w-6 h-6 md:w-8 md:h-8" />}
            title="Ferramentas Comunitárias"
            description="Ferramenta de paráfrase pra evitar detecção de IA e outras soluções recomendadas"
          />
        </div>
      </div>
    </section>
  );
};

export default AIDetectionBenefitsPTBR; 