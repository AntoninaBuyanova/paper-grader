import React from 'react';
import { AIIcon, PlagiarismIcon } from '../icons/Logo';

interface MetricCardProps {
  label: string;
  value?: string;
  description: string;
  className?: string;
  icon?: React.ReactNode;
  chart?: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  label, 
  value, 
  description, 
  className = "", 
  icon, 
  chart 
}) => {
  return (
    <div className={`bg-white rounded-[16px] border border-[#E8E8E5] shadow-sm p-5 ${className}`}>
      <div className="flex justify-between items-start mb-3">
        <div className="text-[15px] font-medium text-[#232323] font-aeonik">{label}</div>
        {icon && <div className="ml-auto">{icon}</div>}
      </div>
      
      {value && <div className="text-[24px] font-medium text-[#232323] font-aeonik mb-2">{value}</div>}
      {chart && <div className="mb-3">{chart}</div>}
      
      <div className="text-[13px] font-normal text-[#6C6C6C] font-aeonik">{description}</div>
    </div>
  );
};

// Оптимизированный компонент мобильных метрик
const MobileMetrics: React.FC = () => {
  return (
    <div className="flex md:hidden flex-col gap-4 w-full px-4">
      <MetricCard
        label="AI Content"
        value="70%"
        description="High AI probability"
        icon={<AIIcon className="w-8 h-8" />}
      />
      
      <MetricCard
        label="Evidence quality"
        description="Weak supporting evidence"
        chart={
          <svg width="100%" height="10" viewBox="0 0 170 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="3.5" width="100%" height="3" rx="1.5" fill="#E8E8E5"/>
            <rect y="3.5" width="70%" height="3" rx="1.5" fill="#FED770"/>
          </svg>
        }
      />
      
      <MetricCard
        label="Plagiarism"
        value="60%"
        description="High risk of plagiarism"
        icon={<PlagiarismIcon className="w-8 h-8" />}
      />
      
      <MetricCard
        label="Critical thinking"
        value="9%"
        description="Limited critical analysis"
        chart={
          <svg width="100%" height="10" viewBox="0 0 154 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="3.5" width="100%" height="3" rx="1.5" fill="#E8E8E5"/>
            <rect y="3.5" width="9%" height="3" rx="1.5" fill="#FF70A6"/>
          </svg>
        }
      />
    </div>
  );
};

export default MobileMetrics; 