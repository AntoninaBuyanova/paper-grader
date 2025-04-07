import React from 'react';

const StepCard: React.FC<{
  number: number;
  title: string;
  description: string;
  isHighlighted?: boolean;
}> = ({ number, title, description, isHighlighted }) => {
  return (
    <div className={`rounded-[1.25rem] p-6 lg:p-8 ${isHighlighted ? 'bg-[#E9FF70]' : 'bg-white border border-[#E8E8E5]'}`}>
      <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white text-black font-medium mb-6 border border-[#E8E8E5]">
        {number}
      </div>
      <h3 className="text-2xl font-aeonik font-medium mb-3 text-[#3C3C3C]">{title}</h3>
      <p className="text-[#3C3C3C]">{description}</p>
      {isHighlighted && (
        <a href="https://mystylus.ai/paper-grader/" className="no-underline">
          <button className="mt-6 px-6 py-3 bg-[#232323] text-[#FFFFFF] text-base rounded-full font-aeonik font-medium">
            Bora começar
          </button>
        </a>
      )}
    </div>
  );
};

const PTBRHowItWorks: React.FC = () => {
  return (
    <section className="pt-4 pb-12 lg:pt-[7.5rem] lg:pb-20 bg-[#FFFFFF]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8 lg:mb-[2.5rem]">
          <h2 className="text-[2rem] lg:text-[3.25rem] font-medium leading-[1.2] lg:leading-[3.75rem] text-[#232323] mb-3 lg:mb-0">Como funciona</h2>
          <p className="text-base lg:text-lg text-[#3C3C3C] lg:max-w-[17rem] lg:text-right">
            <span className="font-medium">3 passos fáceis</span> pra deixar seu trabalho acadêmico nota 10
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
          <StepCard
            number={1}
            title="Manda seu trabalho"
            description="Só arrastar seu texto, trabalho ou tese. A gente aceita todos os formatos acadêmicos"
            isHighlighted={true}
          />
          
          <StepCard
            number={2}
            title="Receba feedback rapidinho"
            description="A IA analisa seu trabalho com critérios acadêmicos e mostra onde dá pra melhorar"
          />
          
          <StepCard
            number={3}
            title="Corrija e envie"
            description="Faça as melhorias com um clique e baixe a versão pronta para entregar"
          />
        </div>
      </div>
    </section>
  );
};

export default PTBRHowItWorks; 