import React from 'react';
import { Shield, Search, FileCheck, AlertCircle } from 'lucide-react';

const PlagiarismDescriptionESMX: React.FC = () => {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-[#232323]" />,
      title: "Detección de Plagio con IA",
      description: "Detección avanzada de plagio con tecnología de IA para verificación completa de contenido"
    },
    {
      icon: <Search className="w-6 h-6 text-[#232323]" />,
      title: "Verificación de Plagio y IA",
      description: "Sistema completo de escaneo para revisar plagio y contenido de IA en trabajos académicos"
    },
    {
      icon: <FileCheck className="w-6 h-6 text-[#232323]" />,
      title: "Verificador de Plagio y IA",
      description: "Verificador profesional de plagio y IA con resultados en tiempo real y reportes detallados"
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-[#232323]" />,
      title: "Detección de Contenido de IA",
      description: "Detección de contenido generado por IA de ChatGPT y guía para prevención"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[2rem] md:text-[3.25rem] font-medium leading-[1.2] md:leading-[3.75rem] mb-12 text-center text-[#232323]">
            El Detector de Plagio Más Potente con IA
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-[#F8F8F3] rounded-[20px] p-6 md:p-8 hover:bg-[#232323] group transition-all duration-300 ease-in-out"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-[#F8F8F3]">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#232323] group-hover:text-white text-xl font-medium mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-[#666666] group-hover:text-[#E8E8E5] text-base font-aeonik">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="https://mystylus.ai/paper-grader/" className="no-underline">
              <button className="bg-[#232323] text-white py-4 px-8 rounded-full text-lg font-medium hover:bg-[#3C3C3C] transition-colors duration-300">
                Prueba el Verificador de Plagio y IA
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlagiarismDescriptionESMX; 