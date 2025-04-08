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

const ParaphrasingBenefitsESMX: React.FC = () => {
  return (
    <section className="py-6 md:py-10 bg-[#FFFFFF] border-t border-b border-[#E8E8E5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-[1240px] mx-auto">
          <FeatureItem
            icon={<PlagiarismFixIcon className="w-6 h-6 md:w-8 md:h-8" />}
            title="Mejor Parafraseo de IA"
            description="Herramienta avanzada de parafraseo indetectable por IA, perfecta para transformar cualquier contenido"
          />
          <FeatureItem
            icon={<InTextCitationsIcon className="w-6 h-6 md:w-8 md:h-8" />}
            title="IA a Texto Humano"
            description="Convierte contenido generado por IA en escritura similar a la humana con nuestro avanzado parafraseador"
          />
          <FeatureItem
            icon={<DetailedFeedbackIcon className="w-6 h-6 md:w-8 md:h-8" />}
            title="Seguro para Turnitin"
            description="Herramienta de parafraseo que Turnitin no detecta, garantizando integridad académica en tus trabajos"
          />
          <FeatureItem
            icon={<OneClickFixesIcon className="w-6 h-6 md:w-8 md:h-8" />}
            title="Reescritura Inteligente"
            description="La mejor herramienta de parafraseo de IA para ensayos y todo tipo de contenido académico"
          />
        </div>
      </div>
    </section>
  );
};

export default ParaphrasingBenefitsESMX; 