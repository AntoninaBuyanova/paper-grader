import React from 'react';
import { Shield, Search, FileCheck, AlertCircle } from 'lucide-react';

const PlagiarismDescriptionPT: React.FC = () => {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-[#232323]" />,
      title: "Detecção de Plágio com IA",
      description: "Detecção avançada de plágio alimentada por tecnologia de IA para verificação abrangente de conteúdo"
    },
    {
      icon: <Search className="w-6 h-6 text-[#232323]" />,
      title: "Verificação de Plágio e IA",
      description: "Sistema abrangente de digitalização para verificar plágio e conteúdo de IA em trabalhos acadêmicos"
    },
    {
      icon: <FileCheck className="w-6 h-6 text-[#232323]" />,
      title: "Verificador de Plágio e IA",
      description: "Verificador profissional de plágio e IA com resultados em tempo real e relatórios detalhados"
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-[#232323]" />,
      title: "Detecção de Conteúdo de IA",
      description: "Detecção de conteúdo gerado por IA do ChatGPT e orientação de prevenção"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[2rem] md:text-[3.25rem] font-medium leading-[1.2] md:leading-[3.75rem] mb-12 text-center text-[#232323]">
            O Detector de Plágio Mais Poderoso com IA
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
                Experimente o Verificador de Plágio e IA
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlagiarismDescriptionPT; 