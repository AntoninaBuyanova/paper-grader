import React from 'react';
import Logo from '../icons/Logo';

const PTBRHeader: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-[#F2F2ED]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 max-w-[1240px] mx-auto">
          {/* Logo */}
          <div className="w-[100px] md:w-[145px]">
            <a href="/pt-br">
              <Logo />
            </a>
          </div>
          
          {/* Get Started Button - Brazilian Portuguese Translation */}
          <a 
            href="https://mystylus.ai/paper-grader/" 
            className="px-10 py-4 rounded-full bg-[#E9FF70] text-black font-aeonik font-medium hover:bg-[#dff566] transition-colors"
          >
            Vamos lá
          </a>
        </div>
      </div>
    </header>
  );
};

export default PTBRHeader; 