import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6 md:p-8">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="logo-container">
          <span className="text-xl sm:text-2xl md:text-3xl futuristic-font text-glow">
            CG
          </span>
        </div>

        {/* Say Hello Button */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Sound Icon */}
          <button className="p-1.5 sm:p-2 rounded-full border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 button-glow">
            <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
              <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.07 4.93A10 10 0 0 1 22 12a10 10 0 0 1-2.93 7.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.54 8.46A5 5 0 0 1 18 12a5 5 0 0 1-2.46 3.54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {/* Say Hello Button */}
          <button className="say-hello-btn px-3 sm:px-6 py-2 sm:py-3 bg-transparent border border-cyan-400/50 rounded-full text-cyan-400 futuristic-font text-xs sm:text-sm tracking-wider hover:bg-cyan-400/10 transition-all duration-300 button-glow">
            SAY HELLO
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;