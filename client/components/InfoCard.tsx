import { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

interface InfoCardProps {
  icon: ReactNode;
  children: ReactNode;
  onClick?: () => void;
}

export default function InfoCard({ icon, children, onClick }: InfoCardProps) {
  return (
    <div
      className="relative w-[1859px] mx-auto cursor-pointer group"
      onClick={onClick}
    >
      <div className="card-gradient-border hover:shadow-2xl transition-all duration-300">
      <div className="flex h-[344px]">
        {/* Icon Section */}
        <div className="flex items-center justify-center p-[24px] w-[218px] flex-shrink-0">
          <div className="w-[218px] h-[218px] flex items-center justify-center">
            {icon}
          </div>
        </div>
        
        {/* Vertical Line */}
        <div className="w-px bg-medical-gold-400 flex-shrink-0"></div>
        
        {/* Content Section */}
        <div className="flex-1 p-[40px] flex items-center relative z-10">
          <div className="text-white text-[45px] leading-normal font-normal">
            {children}
          </div>
        </div>
        
        {/* Arrow Section */}
        <div className="w-[76px] bg-card-arrow-gradient flex items-center justify-center flex-shrink-0 relative z-10">
          <ChevronRight className="w-12 h-12 text-white transform rotate-90" strokeWidth={4} />
        </div>
      </div>
      </div>
      
      {/* Learn More Text */}
      <div className="absolute right-[48px] top-1/2 transform -translate-y-1/2 translate-x-full origin-left z-20">
        <div className="transform -rotate-90 text-white text-[20px] font-normal whitespace-nowrap tracking-widest">
          LEARN             MORE
        </div>
      </div>
    </div>
  );
}
