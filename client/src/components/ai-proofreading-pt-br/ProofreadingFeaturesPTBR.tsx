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

const ProofreadingFeaturesPTBR: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-[#232323]" />,
      title: "Revisão de Português Online",
      description: "Serviços profissionais de revisão e edição potencializados pela tecnologia de IA.",
      benefits: [
        "Revisão de português para todos os tipos de documentos",
        "Assistência online de revisor profissional",
        "Serviços de revisão e edição 24/7",
        "Revisão por IA com resultados instantâneos"
      ]
    },
    {
      icon: <Search className="w-6 h-6 text-[#232323]" />,
      title: "Serviços de Edição Acadêmica",
      description: "Serviços de edição especializados para documentos acadêmicos e de pesquisa.",
      benefits: [
        "Serviços de edição de teses e revisão de dissertações",
        "Serviços de edição de manuscritos com revisão especializada",
        "Revisão acadêmica para trabalhos de pesquisa",
        "Padrões de qualidade de serviços de edição profissional"
      ]
    },
    {
      icon: <FileCheck className="w-6 h-6 text-[#232323]" />,
      title: "Serviço de Revisão de Ensaios",
      description: "Serviços abrangentes de revisão para ensaios e trabalhos.",
      benefits: [
        "Revise seu ensaio com confiança",
        "Serviço de revisão de ensaios com rápida resposta",
        "Site de revisão com suporte 24/7",
        "Garantia de qualidade de revisão profissional"
      ]
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#232323]" />,
      title: "Revisão Potencializada por IA",
      description: "Tecnologia avançada de IA para revisão e edição eficientes.",
      benefits: [
        "Revisão por IA para resultados instantâneos",
        "Serviço de revisão com sugestões inteligentes",
        "Revise seu trabalho com assistência de IA",
        "Aprendizagem contínua e atualizações"
      ]
    }
  ];

  return (
    <section className="pt-12 md:pt-[80px] lg:pt-28 pb-20 bg-[#FFFFFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[2rem] lg:text-[3.25rem] font-medium leading-[1.2] lg:leading-[3.75rem] mb-6 lg:mb-8 text-center text-[#232323]">
              Experimente a Revisão Premium Online Hoje
            </h2>
            <p className="text-lg md:text-xl text-[#666666] font-aeonik max-w-3xl mx-auto">
              Ferramentas avançadas para serviços abrangentes de revisão e edição
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

export default ProofreadingFeaturesPTBR; 