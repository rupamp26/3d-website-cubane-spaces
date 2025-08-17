import React from 'react';

const Navigation: React.FC = () => {
  const navItems = [
    { id: '01', label: 'ABOUT' },
    { id: '02', label: 'STATS' },
    { id: '03', label: 'WORK' }
  ];

  return (
    <nav className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50 px-4">
      <div className="nav-container bg-black/20 backdrop-blur-lg border border-cyan-400/20 rounded-full px-3 sm:px-6 py-2 sm:py-3 flex items-center gap-3 sm:gap-6">
        {/* CG Logo */}
        <div className="text-cyan-400 futuristic-font text-xs sm:text-sm font-bold">
          CG
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-3 sm:gap-6">
          {navItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <button className="nav-item group flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-cyan-400 transition-all duration-300">
                <span className="text-xs text-cyan-400 group-hover:text-cyan-300 hidden sm:inline">
                  {item.id}.
                </span>
                <span className="text-xs sm:text-sm futuristic-font tracking-wide group-hover:text-glow">
                  {item.label}
                </span>
              </button>
              
              {index < navItems.length - 1 && (
                <div className="w-1 h-1 bg-cyan-400/30 rounded-full hidden sm:block"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;