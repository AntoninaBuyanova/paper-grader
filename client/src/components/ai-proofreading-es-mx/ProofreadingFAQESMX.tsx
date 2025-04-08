import React, { useState } from 'react';

const ProofreadingFAQESMX: React.FC = () => {
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
      question: "¿Qué hace que nuestros servicios de corrección y edición sean únicos?",
      answer: "Nuestro servicio de corrección combina experiencia profesional con tecnología de IA. Ofrecemos servicios completos de corrección y edición que incluyen trabajos académicos, manuscritos y documentos empresariales. Nuestro sitio web de corrección proporciona acceso 24/7 a editores especializados."
    },
    {
      question: "¿Cómo funciona el proceso de corrección por IA?",
      answer: "Nuestro sistema de corrección por IA trabaja junto con correctores profesionales para garantizar la más alta calidad. La plataforma de corrección en línea utiliza algoritmos avanzados para identificar problemas de gramática, estilo y claridad, mientras nuestros especialistas en revisión académica proporcionan retroalimentación detallada y sugerencias."
    },
    {
      question: "¿Qué servicios de edición académica ofrecen?",
      answer: "Proporcionamos servicios completos de edición académica, incluyendo servicios de edición de tesis, servicios de edición de manuscritos y revisión de disertaciones. Nuestro equipo de revisión académica está especializado en varias áreas y sigue los más altos estándares, similares a los servicios de edición profesional."
    },
    {
      question: "¿Pueden revisar mi ensayo o trabajo?",
      answer: "¡Claro que sí! Nuestro servicio de corrección de ensayos te ayuda a revisar tu ensayo o trabajo con experiencia profesional. Ofrecemos revisión especializada de tesis y mantenemos estándares de calidad comparables a los servicios de corrección profesional."
    },
    {
      question: "¿Qué tan rápido es el servicio de corrección de español en línea?",
      answer: "Nuestro servicio de corrección de español en línea funciona 24/7 con tiempos de respuesta rápidos. Especialistas en corrección profesional están siempre disponibles para analizar tus documentos, y nuestros servicios de corrección y edición garantizan resultados rápidos y precisos."
    },
    {
      question: "¿Qué tipos de documentos corrigen?",
      answer: "Nuestros servicios de corrección y edición abarcan todos los tipos de documentos: trabajos académicos, tesis, disertaciones, manuscritos, documentos empresariales y más. Proporcionamos asistencia de corrector profesional para cualquier contenido que necesite revisión especializada."
    },
    {
      question: "¿Cómo se comparan sus servicios con otros servicios de edición?",
      answer: "Nuestros servicios igualan o superan la calidad de plataformas establecidas de corrección profesional. Combinamos tecnología de IA con editores humanos especializados para proporcionar servicios completos de corrección de español y servicios de edición académica."
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

export default ProofreadingFAQESMX; 