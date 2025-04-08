import React from 'react';
import { Shield, Search, FileCheck, RefreshCw } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}> = ({ icon, title, description, benefits }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-[20px] shadow-sm border border-[#E8E8E5] transition-all hover:translate-y-[-5px] hover:shadow-[0_25px_30px_-12px_rgba(0,0,0,0.1)]">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-5 border border-[#E8E8E5]">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-aeonik font-medium text-[#232323] mb-3">{title}</h3>
      <p className="text-[#666666] text-base md:text-lg font-aeonik mb-6">{description}</p>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-[#232323] mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-[#666666] text-base font-aeonik">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AIDetectionFeaturesESMX: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-[#232323]" />,
      title: "Herramientas de Detección de IA para Maestros",
      description: "Conjunto completo de herramientas de detección de IA diseñadas específicamente para profesionales de la educación.",
      benefits: [
        "Verificador de detección de IA para análisis de contenido",
        "Detección de IA para revisiones de plagio",
        "Capacidades de detección de AIGC"
      ]
    },
    {
      icon: <Search className="w-6 h-6 text-[#232323]" />,
      title: "Detección de Contenido IA en Línea",
      description: "Sitio web profesional de detección de IA con capacidades avanzadas de escaneo.",
      benefits: [
        "Integración con sitios web de detección de IA",
        "Acceso a sitios de detección de IA",
        "Funciones para evitar herramientas de detección de IA"
      ]
    },
    {
      icon: <FileCheck className="w-6 h-6 text-[#232323]" />,
      title: "Detección de IA para Documentos",
      description: "Herramientas especializadas para verificación y mejora de documentos académicos.",
      benefits: [
        "Funciones para eliminar la detección de contenido de IA",
        "Software de detección de IA para escritura",
        "Eliminación de marcadores de detección de IA no deseados",
        "Conversión de texto de IA a texto humano"
      ]
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#232323]" />,
      title: "Gestión de Contenido de IA",
      description: "Solución completa para manejar problemas de contenido generado por IA.",
      benefits: [
        "Herramientas de detección de IA y humanización",
        "Soporte para múltiples programas de detección de IA",
        "Mejores tasas de precisión en detección de IA"
      ]
    }
  ];

  return (
    <section className="pt-12 md:pt-[80px] lg:pt-28 pb-20 bg-[#FFFFFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[2rem] lg:text-[3.25rem] font-medium leading-[1.2] lg:leading-[3.75rem] mb-4 text-center text-[#232323]">
              El Detector de Contenido IA Más Avanzado
            </h2>
            <p className="text-lg md:text-xl text-[#666666] font-aeonik max-w-3xl mx-auto">
              Herramientas avanzadas para análisis y verificación completa de contenido de IA
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDetectionFeaturesESMX; 