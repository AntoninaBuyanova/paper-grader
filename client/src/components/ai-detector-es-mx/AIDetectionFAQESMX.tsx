import React, { useState } from 'react';

const AIDetectionFAQESMX: React.FC = () => {
  // Inicializar con todos los índices abiertos (arreglo de valores true)
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
      question: "¿Qué es un detector de IA?",
      answer: "Es una herramienta en línea diseñada para identificar si un texto ha sido generado por inteligencia artificial. El detector de IA analiza patrones lingüísticos y estructurales para determinar la autenticidad del contenido."
    },
    {
      question: "¿Puede analizar mi texto?",
      answer: "¡Claro que sí! Nuestra herramienta de detección de IA puede analizar tu texto y proporcionarte información detallada sobre su autenticidad y posible contenido generado por IA."
    },
    {
      question: "¿Es gratuito este detector de IA?",
      answer: "Ofrecemos funciones tanto gratuitas como premium. La funcionalidad básica de detección de IA está disponible de forma gratuita, mientras que las funciones avanzadas requieren una suscripción."
    },
    {
      question: "¿Qué tipos de textos puede analizar?",
      answer: "Nuestra herramienta de detección de IA puede analizar texto sobre cualquier tema, desde documentos académicos hasta escritura creativa, garantizando una verificación exhaustiva del contenido."
    },
    {
      question: "¿Esta herramienta realmente funciona?",
      answer: "¡Por supuesto! Nuestra herramienta proporciona una detección precisa y confiable de contenido de IA, ayudando a los usuarios a mantener la autenticidad del contenido y la integridad académica."
    }
  ];

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[2rem] lg:text-[3.25rem] font-medium leading-[1.2] lg:leading-[3.75rem] mb-12 text-center text-[#232323]">
            Preguntas Frecuentes
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

export default AIDetectionFAQESMX; 