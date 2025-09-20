import React, { ReactNode, useId } from "react";
import { ChevronRight } from "lucide-react";

interface InfoCardProps {
  icon: ReactNode;
  children: ReactNode;
  onClick?: () => void;
  active?: boolean;
  onProgressComplete?: () => void;
}

export default function InfoCard({ icon, children, onClick, active = false, onProgressComplete }: InfoCardProps) {
  const id = useId();
  const gradId = `cardGradient-${id}`;

  return (
    <div
      className={`relative ${active ? "w-[1957px]" : "w-[1859px]"} mx-auto cursor-pointer group z-card info-card ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {/* SVG border for exact stroke rendering */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1859 344" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F0E389" />
            <stop offset="50%" stopColor="#FFB200" />
            <stop offset="100%" stopColor="#B78700" />
          </linearGradient>
        </defs>
        <rect x="1.5" y="1.5" width="1856" height="341" rx="8" ry="8" fill="transparent" stroke={`url(#${gradId})`} strokeWidth={active ? 16 : 3} />
      </svg>

      <div className="relative">
        <div className="flex h-[344px]">
          {/* Icon Section */}
          <div className="flex items-center justify-center p-[24px] w-[218px] flex-shrink-0">
            <div className="w-[218px] h-[218px] flex items-center justify-center">{icon}</div>
          </div>

          {/* Vertical divider (single gradient via CSS) */}
          <div className="vertical-divider flex-shrink-0"></div>

          {/* Content Section */}
          <div className="flex-1 p-[40px] flex items-center relative z-10">
            <div className="text-white card-text">{children}</div>
          </div>

          {/* Arrow Section */}
      <div className="w-[76px] bg-card-arrow-gradient flex items-center justify-center flex-shrink-0 relative z-10">
        {!active ? (
          <ChevronRight className={`w-12 h-12 text-white transform rotate-90`} strokeWidth={4} />
        ) : (
          <div className="learn-more-active flex items-center text-white text-[20px] leading-none">
            <span className="font-medium mr-3">LEARN</span>
            <ChevronRight className={`w-6 h-6 text-white`} strokeWidth={4} />
            <span className="font-medium ml-3">MORE</span>
          </div>
        )}
      </div>
    </div>
  </div>

  {/* Progress bar (bottom) */}
  <div className="absolute left-0 bottom-0 w-full overflow-hidden">
    <div
      className={`progress-bar ${active ? "active" : ""}`}
      onAnimationEnd={() => {
        if (active && onProgressComplete) onProgressComplete();
      }}
    />
  </div>
</div>
  );
}
