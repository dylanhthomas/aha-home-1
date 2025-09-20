import { Home, Book } from 'lucide-react';

const navigationItems = [
  { label: 'About sHTG', active: false },
  { label: 'AP risk', active: false },
  { label: 'ASCVD risk', active: false },
  { label: 'Other risks', active: false },
  { label: 'Management', active: false },
];

export default function NavigationBar() {
  return (
    <div className="w-full bg-white relative">
      {/* Red stripe at top */}
      <div className="w-full h-8 bg-medical-red-gradient"></div>
      
      {/* Main navigation content */}
      <div className="flex items-center justify-between px-4 md:px-16 py-4 md:py-8">
        {/* Home Icon with red stripe */}
        <div className="relative">
          <div className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center">
            <Home className="w-8 h-8 md:w-12 md:h-12 text-medical-red-500" fill="currentColor" />
          </div>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-medical-red-500"></div>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center space-x-2 md:space-x-16 flex-1 justify-center">
          {navigationItems.map((item, index) => (
            <div key={item.label} className="flex items-center">
              {index > 0 && (
                <div className="w-px h-8 md:h-[115px] bg-black mr-2 md:mr-16"></div>
              )}
              <button className="text-black text-xs md:text-2xl lg:text-[40px] font-medium hover:text-medical-red-500 transition-colors text-center whitespace-nowrap">
                {item.label}
              </button>
            </div>
          ))}
        </div>

        {/* Reference Book */}
        <div className="flex items-center">
          <div className="w-px h-8 md:h-[115px] bg-black mr-2 md:mr-16"></div>
          <div className="relative w-12 h-12 md:w-24 md:h-24 flex items-center justify-center">
            <Book className="w-8 h-8 md:w-16 md:h-16 text-black" fill="currentColor" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xs md:text-lg font-bold">REF</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
