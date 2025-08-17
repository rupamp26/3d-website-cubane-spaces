import React from 'react';

interface HeroSectionProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ canvasRef }) => {
  return (
    <main className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Left Side - Text Content */}
      <div className="hero-content z-20 w-full lg:w-1/2 pt-16 sm:pt-20 lg:pt-0 text-center lg:text-left">
        <div className="space-y-6">
          {/* Main Name */}
          <h1 className="hero-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-glow">
            Carl<br />
            Gordon
          </h1>

          {/* Subtitle */}
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl md:text-2xl futuristic-font text-cyan-400 tracking-wider">
              PORTFOLIO ©2024
            </h2>
          </div>

          {/* Tagline */}
          <div className="space-y-4">
            <p className="text-base sm:text-lg md:text-xl futuristic-font text-cyan-300 tracking-wide">
              DESIGN <span className="text-cyan-400">✶</span> DEVELOPMENT <span className="text-cyan-400">✶</span> BRANDING
            </p>

            {/* Scroll to Explore */}
            <p className="text-xs sm:text-sm md:text-base text-gray-300 font-light tracking-wider scroll-indicator">
              SCROLL TO EXPLORE
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="hidden md:block space-y-4 mt-8">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-cyan-400/30 rounded-sm animate-pulse" 
                       style={{ animationDelay: `${i * 0.2}s` }}></div>
                ))}
              </div>
              <span className="tracking-wider">CARL GORDON STUDIO</span>
            </div>
            
            <div className="text-xs text-gray-500 font-mono tracking-widest">
              <span className="animate-pulse">▬▬▬▬</span> ✕ © <span className="animate-pulse">▶▶▶▶▶</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - 3D Canvas */}
      <div className="hero-3d relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-screen flex items-center justify-center mt-8 lg:mt-0">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl"
          style={{ filter: 'drop-shadow(0 0 30px rgba(0, 255, 255, 0.3))' }}
        />
      </div>

      {/* Background Overlay for better text readability */}
      <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-blue-900/60 via-transparent to-blue-900/40 pointer-events-none"></div>
    </main>
  );
};

export default HeroSection;