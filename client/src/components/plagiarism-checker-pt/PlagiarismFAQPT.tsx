import React, { useState } from 'react';

const PlagiarismFAQPT: React.FC = () => {
  // Inicializar com todos os índices como abertos (array de valores verdadeiros)
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
      question: "Como funciona o verificador de plágio e verificador de IA?",
      answer: "Nosso scanner de plágio combina capacidades de verificador de plágio e verificador de IA. O detector de IA e plágio usa algoritmos avançados para verificar conteúdo de plágio de IA em bilhões de fontes online, trabalhos acadêmicos e bancos de dados."
    },
    {
      question: "Como verificar plágio do ChatGPT e detectar conteúdo gerado por IA?",
      answer: "Nossas ferramentas antiplágio de IA ajudam você a verificar plágio de IA e detectar conteúdo gerado por IA. O software se especializa em como detectar plágio de IA, particularmente conteúdo do ChatGPT e outros modelos de IA, ajudando professores a verificar plágio de IA efetivamente."
    },
    {
      question: "É compatível com Turnitin e outros softwares de plágio?",
      answer: "Sim, você pode verificar plágio turnitin através de nossa integração direta. Nosso software de verificação de plágio segue princípios de detecção semelhantes, ajudando você a identificar problemas potenciais antes da submissão. O verificador de IA e ferramenta de plágio garante detecção abrangente de plágio."
    },
    {
      question: "Como evitar e reduzir plágio de IA em trabalho acadêmico?",
      answer: "Para evitar e reduzir plágio de IA: use nossas ferramentas de verificação de plágio de IA regularmente, cite fontes corretamente e siga nossas diretrizes sobre como se livrar de plágio. Nosso sistema de detecção de plágio fornece suporte abrangente para manter a integridade acadêmica."
    },
    {
      question: "O que torna nosso verificador de plágio de IA diferente?",
      answer: "Nosso software de verificador de plágio combina detecção avançada de IA com verificação tradicional de plágio. Fornecemos um verificador de plágio de gerador de IA completo que não apenas ajuda a verificar conteúdo de plágio de IA, mas também fornece relatórios detalhados e sugestões para melhorias."
    },
    {
      question: "Como os professores usam o verificador de plágio?",
      answer: "Os professores podem verificar efetivamente plágio de IA usando nossas ferramentas especializadas. O sistema ajuda a como os professores verificam plágio de IA fornecendo análise detalhada, tornando fácil detectar conteúdo gerado por IA e manter a integridade acadêmica."
    },
    {
      question: "Quais são as melhores práticas para usar o verificador?",
      answer: "Para melhores resultados: verifique regularmente conteúdo de plágio de IA, use nossos recursos de IA antiplágio e siga nossas diretrizes sobre como reduzir plágio de IA. Nossas ferramentas abrangentes ajudam você a manter originalidade em seu trabalho."
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

export default PlagiarismFAQPT; 