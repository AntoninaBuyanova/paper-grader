import React, { useState } from 'react';

const ParaphrasingFAQ: React.FC = () => {
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
      question: "What is the best paraphrasing tool for AI-generated content?",
      answer: "Our paraphrasing tool is specifically designed to transform AI-generated text into human-like writing. It's the best paraphrasing tool AI for handling content from ChatGPT and other AI models, ensuring natural language flow while maintaining the original meaning."
    },
    {
      question: "Which is the paraphrasing tool best for academic writing?",
      answer: "Our tool is the paraphrasing tool best for academic writing, offering advanced features specifically designed for essays, research papers, and academic content. It combines AI technology with human-like output to ensure your academic work maintains its integrity while being undetectable by AI detection tools."
    },
    {
      question: "How to paraphrase an AI generated text effectively?",
      answer: "Our tool provides the best way to paraphrase AI-generated content. Simply paste your text, and our advanced AI paraphrasing tool will transform it into natural, human-like writing while preserving the original meaning and ensuring it passes AI detection."
    },
    {
      question: "Is this paraphrasing tool compatible with Turnitin?",
      answer: "Yes, our paraphrasing tool is designed to be Turnitin-safe. It's a paraphrasing tool that Turnitin cannot detect, making it perfect for academic use. The tool ensures your content maintains originality while avoiding detection."
    },
    {
      question: "How can I paraphrase my text without AI detection?",
      answer: "Our paraphrasing tool without AI detection features helps you transform your content safely. It's a good paraphrasing tool that uses advanced algorithms to create human-like text while avoiding AI detection markers."
    },
    {
      question: "What makes our paraphraser to remove AI detection unique?",
      answer: "Our paraphraser to remove AI detection stands out with its advanced technology that effectively transforms AI-generated content into human-like writing. It's specifically designed to remove AI detection markers while maintaining the original meaning and natural flow of your text."
    },
    {
      question: "What makes this the best AI paraphrasing tool?",
      answer: "Our tool combines advanced AI technology with natural language processing to create the best AI paraphrasing tool. It offers features like paraphrase calculator, English text optimization, and instant results, making it the best AI for paraphrasing."
    },
    {
      question: "How do I use the paraphrasing tool for essays?",
      answer: "Our paraphrasing tool for essays is easy to use. Simply paste your essay text, and the tool will help you paraphrase the text while maintaining academic standards. It's the best paraphrasing tool for essays with features specifically designed for academic content."
    },
    {
      question: "What are the best practices for using the paraphrasing tool?",
      answer: "For best results: use our paraphrasing tool regularly, review the paraphrased content, and make sure it maintains your intended meaning. Our tool is the best paraphrasing tool AI for creating natural, human-like content that passes all detection systems."
    },
    {
      question: "How does our paraphraser bot work?",
      answer: "Our paraphraser bot uses advanced AI algorithms to instantly transform your text. It's designed to work as an intelligent paraphraser bot that understands context and nuance, ensuring your content maintains its original meaning while being completely undetectable by AI detection tools."
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

export default ParaphrasingFAQ; 