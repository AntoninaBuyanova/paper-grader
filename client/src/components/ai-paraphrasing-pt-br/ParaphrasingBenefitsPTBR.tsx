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

const ParaphrasingBenefitsPTBR: React.FC = () => {
  return (
    <section className="py-6 md:py-10 bg-[#FFFFFF] border-t border-b border-[#E8E8E5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-[1240px] mx-auto">
          <FeatureItem
            icon={<PlagiarismFixIcon className="w-6 h-6 md:w-8 md:h-8" />}
            title="Melhor Paráfrase de IA"
            description="Ferramenta avançada de paráfrase que não é detectada por IA, perfeita para transformação de conteúdo"
          />
          <FeatureItem
            icon={<InTextCitationsIcon className="w-6 h-6 md:w-8 md:h-8" />}
            title="IA para Texto Humano"
            description="Transforme conteúdo gerado por IA em escrita semelhante à humana com nosso parafraseador avançado"
          />
          <FeatureItem
            icon={<DetailedFeedbackIcon className="w-6 h-6 md:w-8 md:h-8" />}
            title="Seguro para Turnitin"
            description="Ferramenta de paráfrase que o Turnitin não consegue detectar, garantindo integridade acadêmica"
          />
          <FeatureItem
            icon={<OneClickFixesIcon className="w-6 h-6 md:w-8 md:h-8" />}
            title="Reescrita Inteligente"
            description="A melhor ferramenta de paráfrase de IA para ensaios e conteúdo acadêmico"
          />
        </div>
      </div>
    </section>
  );
};

export default ParaphrasingBenefitsPTBR; 