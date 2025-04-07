import React from 'react';
import { Shield, Search, FileCheck, AlertCircle } from 'lucide-react';

const AIDetectionDescriptionPT: React.FC = () => {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-[#232323]" />,
      title: "Verificador de Detecção de IA",
      description: "Software avançado de detecção de IA com análise de conteúdo em tempo real e recursos de verificação"
    },
    {
      icon: <Search className="w-6 h-6 text-[#232323]" />,
      title: "Site de Detecção de IA",
      description: "Site profissional de detecção de IA com recursos avançados de digitalização e resultados instantâneos"
    },
    {
      icon: <FileCheck className="w-6 h-6 text-[#232323]" />,
      title: "Detecção de Conteúdo IA",
      description: "Ferramentas abrangentes de detecção de conteúdo de IA para identificar texto gerado por IA com alta precisão"
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-[#232323]" />,
      title: "Remover Detecção de IA",
      description: "Ferramentas avançadas para ajudar a evitar a detecção de IA e melhorar a autenticidade do conteúdo"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[2rem] md:text-[3.25rem] font-medium leading-[1.2] md:leading-[3.75rem] mb-12 text-center text-[#232323]">
            A Melhor Tecnologia de Detecção de IA
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
                Experimente a Detecção de IA Agora
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDetectionDescriptionPT; 