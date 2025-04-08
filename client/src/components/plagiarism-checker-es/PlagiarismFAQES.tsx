import React, { useState } from 'react';

const PlagiarismFAQES: React.FC = () => {
  // Inicializar con todos los índices como abiertos (array de valores verdaderos)
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
      question: "¿Cómo funciona el comprobador de plagio y el detector de IA?",
      answer: "Nuestro escáner de plagio combina capacidades de comprobador de plagio y detector de IA. El detector de IA y plagio utiliza algoritmos avanzados para verificar contenido de plagio y de IA en miles de millones de fuentes en línea, trabajos académicos y bases de datos."
    },
    {
      question: "¿Cómo verificar el plagio de ChatGPT y detectar contenido generado por IA?",
      answer: "Nuestras herramientas antiplagio de IA te ayudan a verificar plagio de IA y detectar contenido generado por IA. El software se especializa en cómo detectar plagio de IA, particularmente contenido de ChatGPT y otros modelos de IA, ayudando a profesores a verificar plagio de IA de manera efectiva."
    },
    {
      question: "¿Es compatible con Turnitin y otros software de plagio?",
      answer: "Sí, puedes verificar plagio con Turnitin a través de nuestra integración directa. Nuestro software de verificación de plagio sigue principios de detección similares, ayudándote a identificar posibles problemas antes de la entrega. El detector de IA y herramienta de plagio asegura una detección completa del plagio."
    },
    {
      question: "¿Cómo evitar y reducir el plagio de IA en trabajos académicos?",
      answer: "Para evitar y reducir el plagio de IA: usa nuestras herramientas de verificación de plagio de IA regularmente, cita adecuadamente las fuentes y sigue nuestras directrices sobre cómo eliminar el plagio. Nuestro sistema de detección de plagio proporciona soporte completo para mantener la integridad académica."
    },
    {
      question: "¿Qué hace que nuestro detector de plagio de IA sea diferente?",
      answer: "Nuestro software de detección de plagio combina detección avanzada de IA con verificación tradicional de plagio. Proporcionamos un comprobador de plagio de generador de IA completo que no solo ayuda a verificar contenido de plagio de IA, sino que también proporciona informes detallados y sugerencias para mejoras."
    },
    {
      question: "¿Cómo usan los profesores el comprobador de plagio?",
      answer: "Los profesores pueden verificar efectivamente el plagio de IA usando nuestras herramientas especializadas. El sistema ayuda a los profesores a verificar plagio de IA proporcionando análisis detallados, facilitando la detección de contenido generado por IA y manteniendo la integridad académica."
    },
    {
      question: "¿Cuáles son las mejores prácticas para usar el comprobador?",
      answer: "Para mejores resultados: verifica regularmente el contenido de plagio de IA, usa nuestras funciones de IA antiplagio y sigue nuestras directrices sobre cómo reducir el plagio de IA. Nuestras herramientas completas te ayudan a mantener la originalidad en tu trabajo."
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

export default PlagiarismFAQES; 