import React, { useState } from 'react';

const AIDetectionFAQ: React.FC = () => {
  // Initialize with all indexes as open (array of true values)
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
      question: "What is a paragraph generator?",
      answer: "It is an online writing tool to help users generate well-structured and natural paragraphs in minimal time. An AI paragraph writer is useful in various writings, including essays, articles, research papers, reports, and blogs."
    },
    {
      question: "Can you write me a paragraph?",
      answer: "Yes, our AI detection tool can analyze your text and provide detailed insights about its authenticity and potential AI-generated content."
    },
    {
      question: "Is this a free paragraph generator?",
      answer: "We offer both free and premium features. The basic AI detection functionality is available for free, while advanced features require a subscription."
    },
    {
      question: "What topics can a paragraph creator write on?",
      answer: "Our AI detection tool can analyze text on any topic, from academic papers to creative writing, ensuring comprehensive content verification."
    },
    {
      question: "Is this tool actually helpful?",
      answer: "Yes, our tool provides accurate and reliable AI content detection, helping users maintain content authenticity and academic integrity."
    }
  ];

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[2rem] lg:text-[3.25rem] font-medium leading-[1.2] lg:leading-[3.75rem] mb-12 text-center text-[#232323]">
            Frequently Asked Questions
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

export default AIDetectionFAQ; 