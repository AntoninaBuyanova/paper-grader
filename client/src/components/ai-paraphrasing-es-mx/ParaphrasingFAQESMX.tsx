import React, { useState } from 'react';

const ParaphrasingFAQESMX: React.FC = () => {
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
      question: "¿Cuál es la mejor herramienta de parafraseo para trabajos escolares?",
      answer: "Nuestra herramienta es la mejor herramienta de parafraseo para trabajos escolares y académicos, ofreciendo funcionalidades avanzadas específicamente diseñadas para ensayos, tareas y todo tipo de contenido académico. Combina tecnología de IA con resultado similar al humano para garantizar que tu trabajo mantiene su integridad mientras es indetectable por herramientas de detección de IA."
    },
    {
      question: "¿Cómo parafrasear efectivamente un texto generado por IA?",
      answer: "Nuestra herramienta ofrece la mejor forma de parafrasear contenido generado por IA. Simplemente pega tu texto, y nuestra avanzada herramienta de parafraseo de IA lo transformará en escritura natural y similar a la humana, conservando el significado original y asegurando que pase cualquier sistema de detección de IA."
    },
    {
      question: "¿Esta herramienta de parafraseo es compatible con Turnitin?",
      answer: "Sí, nuestra herramienta de parafraseo ha sido diseñada para ser segura con Turnitin. Es una herramienta de parafraseo que Turnitin no puede detectar, haciéndola perfecta para uso académico. La herramienta garantiza que tu contenido mantiene originalidad mientras evita cualquier tipo de detección."
    },
    {
      question: "¿Cómo puedo parafrasear mi texto sin que se detecte como IA?",
      answer: "Nuestra herramienta de parafraseo sin características de detección de IA te ayuda a transformar tu contenido de manera segura. Es una excelente herramienta que utiliza algoritmos avanzados para crear texto similar al humano mientras evita los marcadores típicos que detectan los sistemas anti-IA."
    },
    {
      question: "¿Qué hace única a esta herramienta para eliminar la detección de IA?",
      answer: "Nuestro parafraseador para eliminar detección de IA destaca por su tecnología avanzada que transforma efectivamente contenido generado por IA en escritura similar a la humana. Ha sido específicamente diseñado para eliminar marcadores de detección de IA mientras mantiene el significado original y el flujo natural de tu texto."
    },
    {
      question: "¿Por qué esta es la mejor herramienta de parafraseo de IA?",
      answer: "Nuestra herramienta combina tecnología avanzada de IA con procesamiento de lenguaje natural para crear la mejor herramienta de parafraseo. Ofrece características como calculadora de parafraseo, optimización de texto en español mexicano y resultados instantáneos, convirtiéndola en la mejor opción para parafrasear."
    },
    {
      question: "¿Cómo utilizo la herramienta para parafrasear mis tareas?",
      answer: "Nuestra herramienta de parafraseo para tareas es muy fácil de usar. Simplemente pega el texto que quieres mejorar, y la herramienta te ayudará a parafrasearlo manteniendo todos los estándares académicos. Es la mejor herramienta para trabajos escolares con características específicamente diseñadas para contenido académico."
    },
    {
      question: "¿Cuáles son las mejores prácticas al usar esta herramienta de parafraseo?",
      answer: "Para obtener los mejores resultados: utiliza nuestra herramienta regularmente, revisa el contenido parafraseado y asegúrate de que mantiene el significado que quieres transmitir. Nuestra herramienta es la mejor opción para crear contenido natural y similar al humano que pasa todos los sistemas de detección."
    },
    {
      question: "¿Cómo funciona este bot de parafraseo?",
      answer: "Nuestro bot de parafraseo utiliza algoritmos avanzados de IA para transformar instantáneamente tu texto. Está diseñado para funcionar como un asistente inteligente que comprende el contexto y los matices del lenguaje, garantizando que tu contenido conserve su significado original mientras resulta completamente indetectable por herramientas de detección de IA."
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

export default ParaphrasingFAQESMX; 