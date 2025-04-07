import React from 'react';
import { Check, Lightbulb, ClipboardList, PieChart, AlertCircle } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}> = ({ icon, title, description, benefits }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 transition-all hover:translate-y-[-5px] hover:shadow-[0_25px_30px_-12px_rgba(0,0,0,0.1)]">
      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-aeonik font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-slate-700">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PTBRFeatures: React.FC = () => {
  return (
    <section className="pt-12 md:pt-[80px] lg:pt-28 pb-20 bg-[#FFFFFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="max-w-[1200px] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center">
            {/* Left side content */}
            <div className="lg:block">
              <h2 className="text-[2rem] sm:text-[2rem] md:text-[32px] lg:text-[3.25rem] font-aeonik font-medium leading-[1.2] sm:leading-[1.3] md:leading-[1.2] lg:leading-[3.75rem] mb-2 sm:mb-6 text-[#232323]">
                Veja seu trabalho do jeito<br className="hidden sm:block" /> que um professor veria
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 font-aeonik">
                Receba feedback super detalhado e dê aquela melhorada com insights de especialista
              </p>
              <a href="https://mystylus.ai/paper-grader/" className="no-underline">
                <button className="hidden lg:block px-[3.75rem] py-[1.125rem] bg-[#232323] text-white rounded-full text-lg font-aeonik font-medium">
                  Checar meu trabalho
                </button>
              </a>
            </div>

            {/* Right side content */}
            <div className="relative w-full lg:w-[500px] ml-auto mt-0 lg:mt-0">
              {/* Main image */}
              <img 
                src="/student-laptop.png"
                alt="Estudante trabalhando no laptop"
                className="rounded-3xl w-full"
              />
              
              {/* Plagiarism warning card */}
              <div className="absolute lg:-top-4 lg:-left-20 bottom-4 right-4 lg:bottom-auto lg:right-auto bg-white rounded-2xl shadow-lg p-4 w-[312px] z-10">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="w-5 h-5 text-yellow-500" />
                  <span className="font-medium">Risco alto de plágio</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Fontes Potenciais</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span className="text-sm">Revista Acadêmica de Pesquisa Vol. 12</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        <span className="text-sm">Silva, J. (2023). Pesquisa Avançada</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        <span className="text-sm">Santos, A. (2023). Estudos Inovadores</span>
                      </li>
                    </ul>
                  </div>
                  <button className="py-2 px-4 bg-[#F2F2ED] hover:bg-gray-200 rounded-lg text-sm font-medium">
                    Deixar mais original
                  </button>
                </div>
              </div>
            </div>
            
            {/* Mobile Check my paper button */}
            <div className="block lg:hidden mt-8">
              <a href="https://mystylus.ai/paper-grader/" className="no-underline">
                <button className="w-full px-[3.75rem] py-[1.125rem] bg-[#232323] text-white rounded-full text-lg font-aeonik font-medium">
                  Checar meu trabalho
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PTBRFeatures; 