import React, { useState } from 'react';

const ParaphrasingFAQPTBR: React.FC = () => {
  // Inicializa com todos os índices abertos (array de valores true)
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
      question: "Qual é a melhor ferramenta de paráfrase para conteúdo gerado por IA?",
      answer: "Nossa ferramenta de paráfrase é especificamente projetada para transformar texto gerado por IA em escrita semelhante à humana. É a melhor ferramenta de paráfrase de IA para lidar com conteúdo do ChatGPT e outros modelos de IA, garantindo um fluxo natural de linguagem enquanto mantém o significado original."
    },
    {
      question: "Qual é a melhor ferramenta de paráfrase para escrita acadêmica?",
      answer: "Nossa ferramenta é a melhor ferramenta de paráfrase para escrita acadêmica, oferecendo funcionalidades avançadas especificamente projetadas para ensaios, trabalhos de pesquisa e conteúdo acadêmico. Combina tecnologia de IA com resultado semelhante ao humano para garantir que seu trabalho acadêmico mantém sua integridade enquanto permanece indetectável por ferramentas de detecção de IA."
    },
    {
      question: "Como parafrasear eficazmente um texto gerado por IA?",
      answer: "Nossa ferramenta fornece a melhor forma de parafrasear conteúdo gerado por IA. Basta colar seu texto, e nossa avançada ferramenta de paráfrase de IA irá transformá-lo em escrita natural e semelhante à humana, preservando o significado original e garantindo que passa na detecção de IA."
    },
    {
      question: "Esta ferramenta de paráfrase é compatível com o Turnitin?",
      answer: "Sim, nossa ferramenta de paráfrase foi projetada para ser segura para o Turnitin. É uma ferramenta de paráfrase que o Turnitin não consegue detectar, tornando-a perfeita para uso acadêmico. A ferramenta garante que seu conteúdo mantém a originalidade enquanto evita a detecção."
    },
    {
      question: "Como posso parafrasear meu texto sem detecção de IA?",
      answer: "Nossa ferramenta de paráfrase sem funcionalidades de detecção de IA ajuda você a transformar seu conteúdo com segurança. É uma boa ferramenta de paráfrase que utiliza algoritmos avançados para criar texto semelhante ao humano enquanto evita marcadores de detecção de IA."
    },
    {
      question: "O que torna nosso parafraseador para remover detecção de IA único?",
      answer: "Nosso parafraseador para remover detecção de IA se destaca com sua tecnologia avançada que transforma efetivamente conteúdo gerado por IA em escrita semelhante à humana. Foi especificamente projetado para remover marcadores de detecção de IA enquanto mantém o significado original e o fluxo natural do seu texto."
    },
    {
      question: "O que torna esta a melhor ferramenta de paráfrase de IA?",
      answer: "Nossa ferramenta combina tecnologia avançada de IA com processamento de linguagem natural para criar a melhor ferramenta de paráfrase de IA. Oferece características como calculadora de paráfrase, otimização de texto em português brasileiro e resultados instantâneos, tornando-a a melhor IA para parafrasear."
    },
    {
      question: "Como utilizo a ferramenta de paráfrase para ensaios?",
      answer: "Nossa ferramenta de paráfrase para ensaios é fácil de usar. Basta colar o texto do seu ensaio, e a ferramenta ajudará você a parafrasear o texto mantendo os padrões acadêmicos. É a melhor ferramenta de paráfrase para ensaios com características especificamente projetadas para conteúdo acadêmico."
    },
    {
      question: "Quais são as melhores práticas para utilizar a ferramenta de paráfrase?",
      answer: "Para melhores resultados: utilize nossa ferramenta de paráfrase regularmente, revise o conteúdo parafraseado e certifique-se de que mantém o significado pretendido. Nossa ferramenta é a melhor ferramenta de paráfrase de IA para criar conteúdo natural e semelhante ao humano que passa em todos os sistemas de detecção."
    },
    {
      question: "Como funciona nosso bot de paráfrase?",
      answer: "Nosso bot de paráfrase utiliza algoritmos avançados de IA para transformar instantaneamente seu texto. Foi projetado para funcionar como um bot de paráfrase inteligente que compreende contexto e nuance, garantindo que seu conteúdo mantém seu significado original enquanto é completamente indetectável por ferramentas de detecção de IA."
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

export default ParaphrasingFAQPTBR; 