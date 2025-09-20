import { Home } from "lucide-react";
import RefBook from "@/components/icons/RefBook";

const navigationItems = [
  { label: "About sHTG", active: false },
  { label: "AP risk", active: false },
  { label: "ASCVD risk", active: false },
  { label: "Other risks", active: false },
  { label: "Management", active: false },
];

export default function NavigationBar() {
  return (
    <div className="w-[2160px] mx-auto bg-white relative">
      {/* Main navigation content */}
      <div className="flex items-center justify-between px-[65px] py-[96px]">
        {/* Home Icon with red stripe */}
        <div className="relative">
          <div className="w-[79px] h-[79px] flex items-center justify-center">
            <Home
              className="w-[79px] h-[79px] text-medical-red-500"
              fill="currentColor"
            />
          </div>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-medical-red-500"></div>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center space-x-2 md:space-x-16 flex-1 justify-center">
          {navigationItems.map((item, index) => (
            <div key={item.label} className="flex items-center">
              {index > 0 && (
                <div className="w-px h-[115px] bg-black mr-16"></div>
              )}
              <button className="text-black text-[40px] font-medium hover:text-medical-red-500 transition-colors text-center whitespace-nowrap">
                {item.label}
              </button>
            </div>
          ))}
        </div>

        {/* Reference Book */}
        <div className="flex items-center">
          <div className="w-px h-[115px] bg-black mr-16"></div>
          <div className="relative w-[97px] h-[97px] flex items-center justify-center">
            <RefBook className="w-[97px] h-[97px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
