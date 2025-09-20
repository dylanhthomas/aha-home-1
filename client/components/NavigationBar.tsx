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
        {/* Home Icon with active support */}
        <div className="nav-item active">
          <div className="w-[79px] h-[79px] flex items-center justify-center relative">
            <svg width="79" height="81" viewBox="0 0 79 81" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M78.0115 35.2485L66.3145 24.5399V6.74727C66.3145 5.4293 65.1613 4.27607 63.8433 4.27607H57.4182C56.1002 4.27607 54.947 5.4293 54.947 6.74727V13.9961L41.7672 1.80486C40.4492 0.651634 38.637 0.651634 37.319 1.80486L1.07471 35.2485C-0.243269 36.5665 -0.408016 38.5434 0.90996 39.8614C2.06319 41.1794 4.2049 41.3441 5.52287 40.0262L39.4608 8.72424L73.3986 40.1909C75.5403 41.8384 77.3526 40.6852 78.0115 40.0262C79.3295 38.7082 79.3295 36.5665 78.0115 35.2485Z" fill="#B82026"/>
              <path d="M39.4607 13.1726L7.49976 42.6623V80.0599H31.2233V58.9723H47.698V80.0599H71.4216V42.6623C71.2568 42.6623 39.4607 13.1726 39.4607 13.1726Z" fill="#B82026"/>
            </svg>
            <div className="active-indicator" />
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center space-x-16 flex-1 justify-center">
          {navigationItems.map((item, index) => (
            <div key={item.label} className={`flex items-center nav-item ${item.active ? 'active' : ''}`}>
              {index > 0 && (
                <div className="w-px h-[115px] bg-black mr-16"></div>
              )}
              <button className="text-black text-[40px] font-medium hover:text-medical-red-500 transition-colors text-center whitespace-nowrap">
                {item.label}
              </button>
              {item.active && <div className="active-indicator" />}
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
