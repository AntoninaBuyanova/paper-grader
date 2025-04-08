import React from 'react';
import { FileEdit, CheckCircle, BookOpen, Clock } from 'lucide-react';

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

const ProofreadingBenefitsES: React.FC = () => {
  return (
    <section className="py-6 md:py-10 bg-[#FFFFFF] border-t border-b border-[#E8E8E5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-[1240px] mx-auto">
          <FeatureItem
            icon={<FileEdit className="w-6 h-6 md:w-8 md:h-8" />}
            title="Corrección de Español"
            description="Servicios profesionales de corrección y edición para trabajos académicos y ensayos"
          />
          <FeatureItem
            icon={<CheckCircle className="w-6 h-6 md:w-8 md:h-8" />}
            title="Corrección por IA"
            description="Herramientas avanzadas de corrección con IA, con retroalimentación instantánea y sugerencias"
          />
          <FeatureItem
            icon={<BookOpen className="w-6 h-6 md:w-8 md:h-8" />}
            title="Edición Académica"
            description="Servicios especializados de edición de tesis y manuscritos para investigadores"
          />
          <FeatureItem
            icon={<Clock className="w-6 h-6 md:w-8 md:h-8" />}
            title="Servicio 24/7"
            description="Asistencia profesional de corrección en línea disponible a cualquier hora"
          />
        </div>
      </div>
    </section>
  );
};

export default ProofreadingBenefitsES; 