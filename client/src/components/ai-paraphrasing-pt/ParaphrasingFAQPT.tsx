import React, { useState } from 'react';

const ParaphrasingFAQPT: React.FC = () => {
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
      answer: "A nossa ferramenta de paráfrase é especificamente concebida para transformar texto gerado por IA em escrita semelhante à humana. É a melhor ferramenta de paráfrase de IA para lidar com conteúdo do ChatGPT e outros modelos de IA, garantindo um fluxo natural de linguagem enquanto mantém o significado original."
    },
    {
      question: "Qual é a melhor ferramenta de paráfrase para escrita académica?",
      answer: "A nossa ferramenta é a melhor ferramenta de paráfrase para escrita académica, oferecendo funcionalidades avançadas especificamente concebidas para ensaios, trabalhos de investigação e conteúdo académico. Combina tecnologia de IA com resultado semelhante ao humano para garantir que o seu trabalho académico mantém a sua integridade enquanto permanece indetetável por ferramentas de deteção de IA."
    },
    {
      question: "Como parafrasear eficazmente um texto gerado por IA?",
      answer: "A nossa ferramenta fornece a melhor forma de parafrasear conteúdo gerado por IA. Basta colar o seu texto, e a nossa avançada ferramenta de paráfrase de IA irá transformá-lo em escrita natural e semelhante à humana, preservando o significado original e garantindo que passa na deteção de IA."
    },
    {
      question: "Esta ferramenta de paráfrase é compatível com o Turnitin?",
      answer: "Sim, a nossa ferramenta de paráfrase foi concebida para ser segura para o Turnitin. É uma ferramenta de paráfrase que o Turnitin não consegue detetar, tornando-a perfeita para uso académico. A ferramenta garante que o seu conteúdo mantém a originalidade enquanto evita a deteção."
    },
    {
      question: "Como posso parafrasear o meu texto sem deteção de IA?",
      answer: "A nossa ferramenta de paráfrase sem funcionalidades de deteção de IA ajuda-o a transformar o seu conteúdo com segurança. É uma boa ferramenta de paráfrase que utiliza algoritmos avançados para criar texto semelhante ao humano enquanto evita marcadores de deteção de IA."
    },
    {
      question: "O que torna o nosso parafraseador para remover deteção de IA único?",
      answer: "O nosso parafraseador para remover deteção de IA destaca-se com a sua tecnologia avançada que transforma eficazmente conteúdo gerado por IA em escrita semelhante à humana. Foi especificamente concebido para remover marcadores de deteção de IA enquanto mantém o significado original e o fluxo natural do seu texto."
    },
    {
      question: "O que torna esta a melhor ferramenta de paráfrase de IA?",
      answer: "A nossa ferramenta combina tecnologia avançada de IA com processamento de linguagem natural para criar a melhor ferramenta de paráfrase de IA. Oferece características como calculadora de paráfrase, otimização de texto em português e resultados instantâneos, tornando-a a melhor IA para parafrasear."
    },
    {
      question: "Como utilizo a ferramenta de paráfrase para ensaios?",
      answer: "A nossa ferramenta de paráfrase para ensaios é fácil de usar. Basta colar o texto do seu ensaio, e a ferramenta ajudá-lo-á a parafrasear o texto mantendo os padrões académicos. É a melhor ferramenta de paráfrase para ensaios com características especificamente concebidas para conteúdo académico."
    },
    {
      question: "Quais são as melhores práticas para utilizar a ferramenta de paráfrase?",
      answer: "Para melhores resultados: utilize a nossa ferramenta de paráfrase regularmente, reveja o conteúdo parafraseado e certifique-se de que mantém o significado pretendido. A nossa ferramenta é a melhor ferramenta de paráfrase de IA para criar conteúdo natural e semelhante ao humano que passa em todos os sistemas de deteção."
    },
    {
      question: "Como funciona o nosso bot de paráfrase?",
      answer: "O nosso bot de paráfrase utiliza algoritmos avançados de IA para transformar instantaneamente o seu texto. Foi concebido para funcionar como um bot de paráfrase inteligente que compreende contexto e nuance, garantindo que o seu conteúdo mantém o seu significado original enquanto é completamente indetetável por ferramentas de deteção de IA."
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

export default ParaphrasingFAQPT; 