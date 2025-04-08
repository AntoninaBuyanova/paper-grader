import React from 'react';
import { Check } from 'lucide-react';

const ProofreadingComparisonES: React.FC = () => {
  return (
    <section className="pt-0 pb-8 lg:py-20 bg-[#FFFFFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start max-w-[1200px] mx-auto">
          {/* Left side - Before/After comparison */}
          <div className="relative">
            {/* Before */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm border border-gray-100 relative z-10 mb-[-48px] lg:mb-0">
              <h3 className="text-[#9CA3AF] text-base lg:text-xl font-normal mb-3 lg:mb-4 font-aeonik">Sin Corrección Profesional</h3>
              <p className="text-[#9CA3AF] leading-relaxed text-base font-normal font-aeonik">
                Tu trabajo académico puede contener errores gramaticales y frases poco claras. Sin servicios adecuados de corrección y edición, te arriesgas a enviar un trabajo no pulido que podría afectar tus calificaciones. Es crucial tener tu contenido revisado por servicios especializados de revisión académica.
              </p>
            </div>

            {/* After */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm border border-gray-100 relative lg:absolute lg:top-[160px] lg:left-[40px] lg:right-[-40px] z-20">
              <h3 className="text-[#3C3C3C] text-base lg:text-xl font-normal mb-3 lg:mb-4 font-aeonik">Con Nuestro Servicio de Corrección</h3>
              <p className="text-[#3C3C3C] leading-relaxed text-base font-normal font-aeonik">
                <span className="bg-[#60A5FA]/20 rounded-[4px]">Resultados de Corrección Profesional:</span><br />
                • Corrección de español completa con calidad profesional<br />
                • Servicios de edición de manuscritos mejorados por IA<br />
                • Revisión de tesis y disertaciones completada<br />
                • Listo para presentación con estándares de servicios de edición profesional
              </p>
            </div>
          </div>

          {/* Right side - Feature description */}
          <div className="lg:pl-16 mt-6 lg:mt-0">
            <h2 className="text-[2rem] lg:text-[3.25rem] font-medium leading-[1.2] lg:leading-[3.75rem] mb-6 lg:mb-8 text-[#232323]">
              El Corrector de Ensayos Definitivo en el Que Puedes Confiar
            </h2>
            
            <div className="space-y-2 lg:space-y-[8px] mb-8">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 lg:w-6 lg:h-6 text-[#232323]" />
                <span className="text-base lg:text-xl text-[#232323] font-medium font-aeonik">Corrector profesional en línea 24/7</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 lg:w-6 lg:h-6 text-[#232323]" />
                <span className="text-base lg:text-xl text-[#232323] font-medium font-aeonik">Corrección de español en línea para todos los tipos de documentos</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 lg:w-6 lg:h-6 text-[#232323]" />
                <span className="text-base lg:text-xl text-[#232323] font-medium font-aeonik">Servicios de edición de tesis y revisión académica</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 lg:w-6 lg:h-6 text-[#232323]" />
                <span className="text-base lg:text-xl text-[#232323] font-medium font-aeonik">Revisa tu trabajo con confianza</span>
              </div>
            </div>

            <a href="https://mystylus.ai/paper-grader/" className="no-underline">
              <button className="w-full lg:w-auto py-4 lg:py-[1.125rem] px-6 lg:px-[3.75rem] bg-[#232323] text-white rounded-full text-lg lg:text-[1.25rem] font-medium font-aeonik">
                Corregir Ahora
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofreadingComparisonES; 