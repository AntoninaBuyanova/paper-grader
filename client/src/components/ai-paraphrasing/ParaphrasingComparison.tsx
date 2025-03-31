import React from 'react';
import { Check } from 'lucide-react';

const ParaphrasingComparison: React.FC = () => {
  return (
    <section className="pt-0 pb-8 lg:py-20 bg-[#FFFFFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start max-w-[1200px] mx-auto">
          {/* Left side - Before/After comparison */}
          <div className="relative">
            {/* Before */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm border border-gray-100 relative z-10 mb-[-48px] lg:mb-0">
              <h3 className="text-[#9CA3AF] text-base lg:text-xl font-normal mb-3 lg:mb-4 font-aeonik">Without Paraphrasing Tool</h3>
              <p className="text-[#9CA3AF] leading-relaxed text-base font-normal font-aeonik">
                Your AI-generated text might be easily detectable by AI detection tools. Without proper paraphrasing, you risk having your content flagged as AI-generated. It's crucial to transform your content into human-like writing.
              </p>
            </div>

            {/* After */}
            <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm border border-gray-100 relative lg:absolute lg:top-[160px] lg:left-[40px] lg:right-[-40px] z-20">
              <h3 className="text-[#3C3C3C] text-base lg:text-xl font-normal mb-3 lg:mb-4 font-aeonik">With Our Paraphrasing Tool</h3>
              <p className="text-[#3C3C3C] leading-relaxed text-base font-normal font-aeonik">
                <span className="bg-[#60A5FA]/20 rounded-[4px]">Paraphrasing Results:</span><br />
                • AI-generated text transformed into human-like writing<br />
                • Turnitin-safe paraphrasing completed<br />
                • Natural language flow maintained<br />
                • Ready for submission with confidence
              </p>
            </div>
          </div>

          {/* Right side - Feature description */}
          <div className="lg:pl-16 mt-6 lg:mt-0">
            <h2 className="text-[2rem] lg:text-[3.25rem] font-medium leading-[1.2] lg:leading-[3.75rem] mb-6 lg:mb-8 text-[#232323]">
              Reword Sentences with AI-Powered Paraphrasing
            </h2>
            
            <div className="space-y-2 lg:space-y-[8px] mb-8">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 lg:w-6 lg:h-6 text-[#232323]" />
                <span className="text-base lg:text-xl text-[#232323] font-medium font-aeonik">Best paraphraser for AI content</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 lg:w-6 lg:h-6 text-[#232323]" />
                <span className="text-base lg:text-xl text-[#232323] font-medium font-aeonik">Paraphrasing tool that does not detect AI</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 lg:w-6 lg:h-6 text-[#232323]" />
                <span className="text-base lg:text-xl text-[#232323] font-medium font-aeonik">Paraphrasing tool - Quillbot AI alternative</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 lg:w-6 lg:h-6 text-[#232323]" />
                <span className="text-base lg:text-xl text-[#232323] font-medium font-aeonik">Paraphrase the text with confidence</span>
              </div>
            </div>

            <button className="w-full lg:w-auto py-4 lg:py-[1.125rem] px-6 lg:px-[3.75rem] bg-[#232323] text-white rounded-full text-lg lg:text-[1.25rem] font-medium font-aeonik">
              Try Our Paraphrasing Tool
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParaphrasingComparison; 