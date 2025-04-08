import React, { useState } from 'react';

const ProofreadingFAQPT: React.FC = () => {
  const [openStates, setOpenStates] = useState<boolean[]>(Array(7).fill(true));

  const toggleFAQ = (index: number) => {
    setOpenStates(prev => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const faqs = [
    {
      question: "O que torna os nossos serviços de revisão e edição únicos?",
      answer: "O nosso serviço de revisão combina experiência profissional com tecnologia de IA. Oferecemos serviços abrangentes de revisão e edição que abrangem trabalhos académicos, manuscritos e documentos empresariais. O nosso site de revisão proporciona acesso 24/7 a editores especializados."
    },
    {
      question: "Como funciona o processo de revisão por IA?",
      answer: "O nosso sistema de revisão por IA trabalha em conjunto com revisores profissionais para garantir a mais alta qualidade. A plataforma de revisão online utiliza algoritmos avançados para identificar problemas de gramática, estilo e clareza, enquanto os nossos especialistas em revisão académica fornecem feedback detalhado e sugestões."
    },
    {
      question: "Que serviços de edição académica oferecem?",
      answer: "Fornecemos serviços abrangentes de edição académica, incluindo serviços de edição de teses, serviços de edição de manuscritos e revisão de dissertações. A nossa equipa de revisão académica é especializada em várias áreas e segue os mais altos padrões, semelhantes aos serviços de edição profissional."
    },
    {
      question: "Podem rever o meu ensaio ou trabalho?",
      answer: "Sim! O nosso serviço de revisão de ensaios ajuda a rever o seu ensaio ou trabalho com experiência profissional. Oferecemos revisão especializada de teses e mantemos padrões de qualidade comparáveis aos serviços de revisão profissional."
    },
    {
      question: "Qual a rapidez do vosso serviço de revisão de português online?",
      answer: "O nosso serviço de revisão de português online funciona 24/7 com tempos de resposta rápidos. Especialistas em revisão profissional estão sempre disponíveis para analisar os seus documentos, e os nossos serviços de revisão e edição garantem resultados rápidos e precisos."
    },
    {
      question: "Que tipos de documentos tratam?",
      answer: "Os nossos serviços de revisão e edição abrangem todos os tipos de documentos: trabalhos académicos, teses, dissertações, manuscritos, documentos empresariais e mais. Fornecemos assistência de revisor profissional para qualquer conteúdo que necessite de revisão especializada."
    },
    {
      question: "Como se comparam os vossos serviços com outros serviços de edição?",
      answer: "Os nossos serviços igualam ou excedem a qualidade de plataformas estabelecidas de revisão profissional. Combinamos tecnologia de IA com editores humanos especializados para fornecer serviços abrangentes de revisão de português e serviços de edição académica."
    }
  ];

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[2rem] lg:text-[3.25rem] font-medium leading-[1.2] lg:leading-[3.75rem] mb-12 text-center text-[#232323]">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#F8F8F3] rounded-2xl overflow-hidden">
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#F0F0EA] transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-xl font-medium text-[#232323] pr-8">
                    {faq.question}
                  </h3>
                  <button className="text-2xl text-[#232323] flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    {openStates[index] ? '−' : '+'}
                  </button>
                </div>
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openStates[index] 
                      ? 'max-h-[500px] opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-[#666666] font-aeonik">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofreadingFAQPT; 