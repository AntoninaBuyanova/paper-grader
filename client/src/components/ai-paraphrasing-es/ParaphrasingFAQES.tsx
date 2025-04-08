import React, { useState } from 'react';

const ParaphrasingFAQES: React.FC = () => {
  // Inicializa con todos los índices abiertos (array de valores true)
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
      question: "¿Cuál es la mejor herramienta de parafraseo para contenido generado por IA?",
      answer: "Nuestra herramienta de parafraseo está específicamente diseñada para transformar texto generado por IA en escritura similar a la humana. Es la mejor herramienta de parafraseo de IA para manejar contenido de ChatGPT y otros modelos de IA, garantizando un flujo natural de lenguaje mientras mantiene el significado original."
    },
    {
      question: "¿Cuál es la mejor herramienta de parafraseo para escritura académica?",
      answer: "Nuestra herramienta es la mejor herramienta de parafraseo para escritura académica, ofreciendo funcionalidades avanzadas específicamente diseñadas para ensayos, trabajos de investigación y contenido académico. Combina tecnología de IA con resultado similar al humano para garantizar que tu trabajo académico mantiene su integridad mientras permanece indetectable por herramientas de detección de IA."
    },
    {
      question: "¿Cómo parafrasear eficazmente un texto generado por IA?",
      answer: "Nuestra herramienta proporciona la mejor forma de parafrasear contenido generado por IA. Simplemente pega tu texto, y nuestra avanzada herramienta de parafraseo de IA lo transformará en escritura natural y similar a la humana, preservando el significado original y garantizando que pasa la detección de IA."
    },
    {
      question: "¿Esta herramienta de parafraseo es compatible con Turnitin?",
      answer: "Sí, nuestra herramienta de parafraseo ha sido diseñada para ser segura con Turnitin. Es una herramienta de parafraseo que Turnitin no puede detectar, haciéndola perfecta para uso académico. La herramienta garantiza que tu contenido mantiene la originalidad mientras evita la detección."
    },
    {
      question: "¿Cómo puedo parafrasear mi texto sin detección de IA?",
      answer: "Nuestra herramienta de parafraseo sin características de detección de IA te ayuda a transformar tu contenido con seguridad. Es una buena herramienta de parafraseo que utiliza algoritmos avanzados para crear texto similar al humano mientras evita marcadores de detección de IA."
    },
    {
      question: "¿Qué hace único a nuestro parafraseador para eliminar detección de IA?",
      answer: "Nuestro parafraseador para eliminar detección de IA destaca con su tecnología avanzada que transforma eficazmente contenido generado por IA en escritura similar a la humana. Ha sido específicamente diseñado para eliminar marcadores de detección de IA mientras mantiene el significado original y el flujo natural de tu texto."
    },
    {
      question: "¿Qué hace que esta sea la mejor herramienta de parafraseo de IA?",
      answer: "Nuestra herramienta combina tecnología avanzada de IA con procesamiento de lenguaje natural para crear la mejor herramienta de parafraseo de IA. Ofrece características como calculadora de parafraseo, optimización de texto en español y resultados instantáneos, convirtiéndola en la mejor IA para parafrasear."
    },
    {
      question: "¿Cómo utilizo la herramienta de parafraseo para ensayos?",
      answer: "Nuestra herramienta de parafraseo para ensayos es fácil de usar. Simplemente pega el texto de tu ensayo, y la herramienta te ayudará a parafrasear el texto manteniendo los estándares académicos. Es la mejor herramienta de parafraseo para ensayos con características específicamente diseñadas para contenido académico."
    },
    {
      question: "¿Cuáles son las mejores prácticas para utilizar la herramienta de parafraseo?",
      answer: "Para mejores resultados: utiliza nuestra herramienta de parafraseo regularmente, revisa el contenido parafraseado y asegúrate de que mantiene el significado pretendido. Nuestra herramienta es la mejor herramienta de parafraseo de IA para crear contenido natural y similar al humano que pasa en todos los sistemas de detección."
    },
    {
      question: "¿Cómo funciona nuestro bot de parafraseo?",
      answer: "Nuestro bot de parafraseo utiliza algoritmos avanzados de IA para transformar instantáneamente tu texto. Ha sido diseñado para funcionar como un bot de parafraseo inteligente que comprende contexto y matices, garantizando que tu contenido mantiene su significado original mientras es completamente indetectable por herramientas de detección de IA."
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

export default ParaphrasingFAQES; 