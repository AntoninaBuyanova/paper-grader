import React from 'react';
import { FileEdit, CheckCircle, BookOpen, Clock } from 'lucide-react';

const ProofreadingDescriptionPT: React.FC = () => {
  const benefits = [
    {
      icon: <FileEdit className="w-6 h-6 text-[#232323]" />,
      title: "Revisão e Edição em Português",
      description: "Serviços profissionais de revisão e edição para trabalhos académicos, ensaios e manuscritos"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#232323]" />,
      title: "Tecnologia de Revisão por IA",
      description: "Ferramentas avançadas de revisão alimentadas por IA combinadas com experiência profissional de edição"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#232323]" />,
      title: "Serviços de Revisão Académica",
      description: "Serviços especializados de edição de teses e edição de manuscritos para investigadores"
    },
    {
      icon: <Clock className="w-6 h-6 text-[#232323]" />,
      title: "Revisor Profissional Online",
      description: "Acesso 24/7 a serviço de revisão e assistência especializada de revisores online"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[2rem] md:text-[3.25rem] font-medium leading-[1.2] md:leading-[3.75rem] mb-12 text-center text-[#232323]">
            A Plataforma de Serviços de Revisão Mais Avançada
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
                Experimentar Revisão Profissional
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofreadingDescriptionPT; 