import React from 'react';
import { PlagiarismFixIcon, InTextCitationsIcon, OneClickFixesIcon, DetailedFeedbackIcon } from '@/components/icons/Logo';

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

const PlagiarismBenefitsPTBR: React.FC = () => {
  return (
    <section className="py-6 md:py-10 bg-[#FFFFFF] border-t border-b border-[#E8E8E5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-[1240px] mx-auto">
          <FeatureItem
            icon={<PlagiarismFixIcon className="w-6 h-6 md:w-8 md:h-8" />}
            title="Busque por Plágio"
            description="Scanner avançado de plágio com recursos de detecção de IA para análise completa de conteúdo"
          />
          <FeatureItem
            icon={<InTextCitationsIcon className="w-6 h-6 md:w-8 md:h-8" />}
            title="Detecção de Texto de IA"
            description="Verifique plágio e conteúdo gerado por IA com nosso sistema de detecção de dupla finalidade"
          />
          <FeatureItem
            icon={<DetailedFeedbackIcon className="w-6 h-6 md:w-8 md:h-8" />}
            title="Integração com Turnitin"
            description="Verifique plágio com compatibilidade Turnitin para verificação de integridade acadêmica"
          />
          <FeatureItem
            icon={<OneClickFixesIcon className="w-6 h-6 md:w-8 md:h-8" />}
            title="Ferramentas Antiplágio"
            description="Elimine o plágio com nossas ferramentas avançadas de otimização de conteúdo"
          />
        </div>
      </div>
    </section>
  );
};

export default PlagiarismBenefitsPTBR; 