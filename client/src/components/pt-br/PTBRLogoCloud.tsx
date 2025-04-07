import React from 'react';
import { DetailedFeedbackIcon, AIDetectionIcon, PlagiarismFixIcon, InTextCitationsIcon, OneClickFixesIcon } from '../icons/Logo';

const PTBRLogoCloud: React.FC = () => {
  return (
    <section className="py-6 md:py-10 bg-[#FFFFFF] border-t border-b border-[#E8E8E5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 max-w-[1240px] mx-auto">
          {/* Detailed Feedback */}
          <div className="flex flex-row items-start md:flex-col md:items-center md:text-center gap-3 md:gap-4">
            <div className="mb-0 md:mb-4">
              <DetailedFeedbackIcon className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <h3 className="text-[15px] md:text-base lg:text-base font-medium mb-1 md:mb-2">Feedback Detalhado</h3>
              <p className="text-[#666666] text-sm">
                Receba sugestões sobre estrutura, clareza, tom e muito mais
              </p>
            </div>
          </div>

          {/* AI Detection */}
          <div className="flex flex-row items-start md:flex-col md:items-center md:text-center gap-3 md:gap-4">
            <div className="mb-0 md:mb-4">
              <AIDetectionIcon className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <h3 className="text-[15px] md:text-base lg:text-base font-medium mb-1 md:mb-2">Detecção de IA</h3>
              <p className="text-[#666666] text-sm">
                Garanta que seu trabalho soe como você — não como ChatGPT
              </p>
            </div>
          </div>

          {/* Plagiarism Fix */}
          <div className="flex flex-row items-start md:flex-col md:items-center md:text-center gap-3 md:gap-4">
            <div className="mb-0 md:mb-4">
              <PlagiarismFixIcon className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <h3 className="text-[15px] md:text-base lg:text-base font-medium mb-1 md:mb-2">Correção de Plágio</h3>
              <p className="text-[#666666] text-sm">
                Identifique conteúdo copiado e reescreva-o instantaneamente
              </p>
            </div>
          </div>

          {/* In-text Citations */}
          <div className="flex flex-row items-start md:flex-col md:items-center md:text-center gap-3 md:gap-4">
            <div className="mb-0 md:mb-4">
              <InTextCitationsIcon className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <h3 className="text-[15px] md:text-base lg:text-base font-medium mb-1 md:mb-2">Citações no Texto</h3>
              <p className="text-[#666666] text-sm">
                Apoie seus argumentos com citações precisas no texto
              </p>
            </div>
          </div>

          {/* One-Click Fixes */}
          <div className="flex flex-row items-start md:flex-col md:items-center md:text-center gap-3 md:gap-4">
            <div className="mb-0 md:mb-4">
              <OneClickFixesIcon className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <h3 className="text-[15px] md:text-base lg:text-base font-medium mb-1 md:mb-2">Correções com Um Clique</h3>
              <p className="text-[#666666] text-sm">
                Aplique sugestões inteligentes instantaneamente e melhore seu trabalho
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PTBRLogoCloud; 