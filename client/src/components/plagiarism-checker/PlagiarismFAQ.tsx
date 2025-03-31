import React, { useState } from 'react';

const PlagiarismFAQ: React.FC = () => {
  // Initialize with all indexes as open (array of true values)
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
      question: "How does the plagiarism checker and AI checker work?",
      answer: "Our plagiat scanner combines plagiarism checker and AI checker capabilities. The AI and plagiarism detector uses advanced algorithms to check plagiarism AI content across billions of online sources, academic papers, and databases."
    },
    {
      question: "How to check ChatGPT plagiarism and detect AI-generated content?",
      answer: "Our anti plagiarism AI tools help you check for AI plagiarism and detect AI-generated content. The software specializes in how to detect AI plagiarism, particularly content from ChatGPT and other AI models, helping teachers check for AI plagiarism effectively."
    },
    {
      question: "Is it compatible with Turnitin and other plagiarism software?",
      answer: "Yes, you can check plagiarism turnitin through our direct integration. Our check plagiarism software follows similar detection principles, helping you identify potential issues before submission. The AI checker and plagiarism tool ensures comprehensive detection of plagiarism."
    },
    {
      question: "How to avoid and reduce AI plagiarism in academic work?",
      answer: "To avoid and reduce AI plagiarism: use our checking for AI plagiarism tools regularly, properly cite sources, and follow our guidelines on how to get rid of plagiarism. Our detection of plagiarism system provides comprehensive support for maintaining academic integrity."
    },
    {
      question: "What makes our AI plagiarism checker different?",
      answer: "Our plagiarism checker software combines advanced AI detection with traditional plagiarism checking. We provide a complete ai generator plagiarism checker that not only helps check plagiarism AI content but also provides detailed reports and suggestions for improvement."
    },
    {
      question: "How do teachers use the plagiarism checker?",
      answer: "Teachers can effectively check for AI plagiarism using our specialized tools. The system helps how do teachers check for AI plagiarism by providing detailed analysis, making it easy to detect AI-generated content and maintain academic integrity."
    },
    {
      question: "What are the best practices for using the checker?",
      answer: "For best results: regularly check plagiarism AI content, use our anti plagiarism AI features, and follow our guidelines on how to reduce AI plagiarism. Our comprehensive tools help you maintain originality in your work."
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

export default PlagiarismFAQ; 