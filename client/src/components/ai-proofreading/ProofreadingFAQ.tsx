import React, { useState } from 'react';

const ProofreadingFAQ: React.FC = () => {
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
      question: "What makes our proofreading and editing services unique?",
      answer: "Our proof reading service combines professional expertise with AI technology. We offer comprehensive proofreading and editing services that cover academic papers, manuscripts, and business documents. Our proof reading website provides 24/7 access to expert editors."
    },
    {
      question: "How does the AI proofreading process work?",
      answer: "Our AI proofreading system works alongside professional proofreaders to ensure the highest quality. The proof reader online platform uses advanced algorithms to identify grammar, style, and clarity issues, while our academic proofreading experts provide detailed feedback and suggestions."
    },
    {
      question: "What academic editing services do you offer?",
      answer: "We provide comprehensive academic editing services including thesis editing services, manuscript editing services, and dissertation proofreading. Our academic proofreading team specializes in various fields and follows the highest standards similar to Wiley editing services."
    },
    {
      question: "Can you proofread my essay or paper?",
      answer: "Yes! Our essay proofreading service helps you proofread my essay or proofread my paper with professional expertise. We offer specialized thesis proofreading and maintain quality standards comparable to Scribendi proofreading services."
    },
    {
      question: "How fast is your english proofreading online service?",
      answer: "Our english proofreading online service operates 24/7 with quick turnaround times. Professional proofreader experts are always available to review your documents, and our proofreading and editing services ensure fast, accurate results."
    },
    {
      question: "What types of documents do you handle?",
      answer: "Our proofreading and editing services cover all types of documents: academic papers, theses, dissertations, manuscripts, business documents, and more. We provide professional proofreader assistance for any content that needs expert review."
    },
    {
      question: "How do your services compare to other editing services?",
      answer: "Our services match or exceed the quality of established platforms like Wiley editing services and Scribendi proofreading. We combine AI technology with expert human editors to provide comprehensive english proofreading and academic editing services."
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

export default ProofreadingFAQ; 