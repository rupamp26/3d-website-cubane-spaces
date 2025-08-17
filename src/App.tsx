import React, { useEffect, useRef } from 'react';
import { initThreeJS } from './components/ThreeScene';
import { initAnimations } from './components/Animations';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Navigation from './components/Navigation';
import BackgroundGrid from './components/BackgroundGrid';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvasRef.current && appRef.current) {
      // Initialize Three.js 3D scene
      const cleanup = initThreeJS(canvasRef.current);
      
      // Initialize GSAP animations
      initAnimations();

      return cleanup;
    }
  }, []);

  return (
    <div ref={appRef} className="app-container">
      <BackgroundGrid />
      <Header />
      <HeroSection canvasRef={canvasRef} />
      <Navigation />
    </div>
  );
}

export default App;