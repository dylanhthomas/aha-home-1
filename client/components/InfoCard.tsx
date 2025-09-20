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
      className="relative w-full max-w-7xl mx-auto border-2 border-medical-gold-400 hover:shadow-lg transition-shadow cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex min-h-[200px] md:min-h-[344px]">
        {/* Icon Section */}
        <div className="flex items-center justify-center p-4 md:p-8 w-24 md:w-[230px] flex-shrink-0">
          <div className="w-16 h-16 md:w-[218px] md:h-[218px] flex items-center justify-center">
            {icon}
          </div>
        </div>
        
        {/* Vertical Line */}
        <div className="w-px bg-medical-gold-400 flex-shrink-0"></div>
        
        {/* Content Section */}
        <div className="flex-1 p-4 md:p-8 flex items-center">
          <div className="text-white text-sm md:text-3xl lg:text-[45px] leading-relaxed md:leading-normal font-light">
            {children}
          </div>
        </div>
        
        {/* Arrow Section */}
        <div className="w-16 md:w-[76px] bg-card-arrow-gradient flex items-center justify-center flex-shrink-0">
          <ChevronRight className="w-6 h-6 md:w-12 md:h-12 text-white transform rotate-90" strokeWidth={3} />
        </div>
      </div>
      
      {/* Learn More Text */}
      <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 translate-x-full origin-left">
        <div className="transform -rotate-90 text-white text-xs md:text-lg font-light whitespace-nowrap">
          LEARN MORE
        </div>
      </div>
    </div>
  );
}
