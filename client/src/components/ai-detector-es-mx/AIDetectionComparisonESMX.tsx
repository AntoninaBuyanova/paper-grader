import React from 'react';
import { Check } from 'lucide-react';

const AIDetectionComparisonESMX: React.FC = () => {
  return (
    <section className="pt-0 pb-8 lg:py-20 bg-[#FFFFFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start max-w-[1200px] mx-auto">
          {/* Lado izquierdo - Comparación Antes/Después */}
          <div className="relative">
            {/* Antes */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm border border-gray-100 relative z-10 mb-[-48px] lg:mb-0">
              <h3 className="text-[#9CA3AF] text-base lg:text-xl font-normal mb-3 lg:mb-4 font-aeonik">Sin Detección de IA</h3>
              <p className="text-[#9CA3AF] leading-relaxed text-base font-normal font-aeonik">
                El ensayo analiza el cambio climático y sus efectos en los ecosistemas globales. El aumento de temperaturas está causando cambios significativos en los patrones del clima y afectando a poblaciones de vida silvestre en todo el mundo. Estos cambios están provocando varios desafíos ambientales que requieren atención inmediata.
              </p>
            </div>

            {/* Después */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm border border-gray-100 relative lg:absolute lg:top-[160px] lg:left-[40px] lg:right-[-40px] z-20">
              <h3 className="text-[#3C3C3C] text-base lg:text-xl font-normal mb-3 lg:mb-4 font-aeonik">Con Herramienta de Detección de IA</h3>
              <p className="text-[#3C3C3C] leading-relaxed text-base font-normal font-aeonik">
                <span className="bg-[#60A5FA]/20 rounded-[4px]">Resultados de Detección de Contenido IA:</span><br />
                • 87% de probabilidad de contenido generado por IA<br />
                • Requiere reescritura para evitar detección de IA<br />
                • Recomendado: Usar reescritor de detección de IA para mejor originalidad<br />
                • Reescribir para evitar marcadores de detección de IA
              </p>
            </div>
          </div>

          {/* Lado derecho - Descripción de características */}
          <div className="lg:pl-16 mt-6 lg:mt-0">
            <h2 className="text-[2rem] lg:text-[3.25rem] font-medium leading-[1.2] lg:leading-[3.75rem] mb-6 lg:mb-8 text-[#232323]">
              Detecta Contenido Generado por IA al Instante
            </h2>
            
            <div className="space-y-2 lg:space-y-[8px] mb-8">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 lg:w-6 lg:h-6 text-[#232323]" />
                <span className="text-base lg:text-xl text-[#232323] font-medium font-aeonik">Mejor precisión en detección de IA</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 lg:w-6 lg:h-6 text-[#232323]" />
                <span className="text-base lg:text-xl text-[#232323] font-medium font-aeonik">Resuelve problemas de detección de IA al instante</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 lg:w-6 lg:h-6 text-[#232323]" />
                <span className="text-base lg:text-xl text-[#232323] font-medium font-aeonik">Prevención de bots de detección de IA</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 lg:w-6 lg:h-6 text-[#232323]" />
                <span className="text-base lg:text-xl text-[#232323] font-medium font-aeonik">Verificación gratuita de detección de IA</span>
              </div>
            </div>

            <a href="https://mystylus.ai/paper-grader/" className="no-underline">
              <button className="w-full lg:w-auto py-4 lg:py-[1.125rem] px-6 lg:px-[3.75rem] bg-[#232323] text-white rounded-full text-lg lg:text-[1.25rem] font-medium font-aeonik">
                Probar Detección de IA
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDetectionComparisonESMX; 