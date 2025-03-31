import React, { useState } from 'react';

const AIDetectionFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

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
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <div 
                className="flex items-center justify-between p-6 bg-[#F8F8F3] rounded-2xl cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <h3 className="text-xl font-medium text-[#232323]">{item.question}</h3>
                <button className="text-2xl text-[#232323]">
                  {openIndex === index ? '×' : '+'}
                </button>
              </div>
              {openIndex === index && (
                <div className="px-6 py-4 bg-[#F8F8F3] -mt-4 rounded-b-2xl">
                  <p className="text-[#666666] font-aeonik">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIDetectionFAQ; 