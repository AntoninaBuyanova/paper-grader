import React, { useState } from 'react';

const AIDetectionFAQPTBR: React.FC = () => {
  // Inicializa com todos os índices abertos (array de valores true)
  const [openStates, setOpenStates] = useState<boolean[]>(Array(5).fill(true));

  const toggleFAQ = (index: number) => {
    setOpenStates(prev => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const faqItems = [
    {
      question: "O que é um detector de conteúdo de IA?",
      answer: "É uma ferramenta online que ajuda os usuários a identificar se um texto foi gerado por inteligência artificial. Um detector de IA é útil pra verificar a autenticidade de diversos textos, incluindo redações, artigos, trabalhos de pesquisa, relatórios e blogs."
    },
    {
      question: "Vocês podem verificar meu texto?",
      answer: "Sim, nossa ferramenta de detecção de IA pode analisar seu texto e fornecer informações detalhadas sobre sua autenticidade e possível conteúdo gerado por IA."
    },
    {
      question: "Esta é uma ferramenta gratuita de detecção de IA?",
      answer: "Oferecemos recursos gratuitos e premium. A funcionalidade básica de detecção de IA está disponível gratuitamente, enquanto recursos avançados requerem uma assinatura."
    },
    {
      question: "Quais tipos de texto a ferramenta pode analisar?",
      answer: "Nossa ferramenta de detecção de IA pode analisar texto sobre qualquer tópico, desde trabalhos acadêmicos até escrita criativa, garantindo uma verificação abrangente do conteúdo."
    },
    {
      question: "Esta ferramenta é realmente útil?",
      answer: "Sim, nossa ferramenta fornece detecção precisa e confiável de conteúdo de IA, ajudando os usuários a manter a autenticidade do conteúdo e a integridade acadêmica."
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
            {faqItems.map((item, index) => (
              <div key={index} className="bg-[#F8F8F3] rounded-2xl overflow-hidden">
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#F0F0EA] transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-xl font-medium text-[#232323] pr-8">{item.question}</h3>
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
                      {item.answer}
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

export default AIDetectionFAQPTBR; 