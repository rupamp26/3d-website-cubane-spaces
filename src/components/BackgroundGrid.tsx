import React from 'react';

const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
      {/* Main subtle diagonal pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full"
             style={{
               backgroundImage: `
                 linear-gradient(45deg, transparent 49.5%, rgba(255, 255, 255, 0.1) 49.5%, rgba(255, 255, 255, 0.1) 50.5%, transparent 50.5%),
                 linear-gradient(-45deg, transparent 49.5%, rgba(255, 255, 255, 0.1) 49.5%, rgba(255, 255, 255, 0.1) 50.5%, transparent 50.5%)
               `,
               backgroundSize: '200px 200px',
               backgroundPosition: '0 0, 0 0'
             }}>
        </div>
      </div>

      {/* Very subtle grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full"
             style={{
               backgroundImage: `
                 linear-gradient(0deg, transparent 49.8%, rgba(255, 255, 255, 0.1) 49.8%, rgba(255, 255, 255, 0.1) 50.2%, transparent 50.2%),
                 linear-gradient(90deg, transparent 49.8%, rgba(255, 255, 255, 0.1) 49.8%, rgba(255, 255, 255, 0.1) 50.2%, transparent 50.2%)
               `,
               backgroundSize: '100px 100px'
             }}>
        </div>
      </div>

      {/* Minimal accent lines */}
      <div className="absolute inset-0 opacity-3">
        <div className="w-full h-full"
             style={{
               backgroundImage: `
                 repeating-linear-gradient(
                   45deg,
                   transparent,
                   transparent 20px,
                   rgba(255, 255, 255, 0.08) 20px,
                   rgba(255, 255, 255, 0.08) 21px
                 )
               `
             }}>
        </div>
      </div>

      {/* Very subtle cyan accent grid */}
      <div className="absolute inset-0 opacity-2">
        <div className="grid-pattern w-full h-full"
             style={{
               backgroundImage: `
                 linear-gradient(rgba(48, 197, 210, 0.2) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(48, 197, 210, 0.2) 1px, transparent 1px)
               `,
               backgroundSize: '150px 150px'
             }}>
        </div>
      </div>

      {/* Minimal floating particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-300/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Smooth gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-cyan-600/15 via-transparent to-transparent"></div>
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-purple-800/10 via-transparent to-transparent"></div>
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-cyan-500/10 via-transparent to-transparent"></div>
    </div>
  );
};

export default BackgroundGrid;