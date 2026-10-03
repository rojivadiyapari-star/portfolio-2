import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import { useReducedMotion } from '../../hooks/useReducedMotion';

class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("WebGL/Canvas Fallback triggered:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// 2D High-Tech Vector Fallback for devices without WebGL or reduced-motion
function FallbackAiCore() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <div className="relative w-56 h-56 sm:w-80 sm:h-80 flex items-center justify-center">
        {/* Glow halo */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/15 blur-2xl animate-pulse" />
        
        {/* Outer Ring */}
        <div className="absolute inset-4 rounded-full border border-cyan-400/30 border-dashed animate-[spin_20s_linear_infinite]" />
        
        {/* Middle Ring */}
        <div className="absolute inset-10 rounded-full border border-violet-500/40 animate-[spin_12s_linear_infinite_reverse]" />
        
        {/* Inner Core */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-cyan-600 to-violet-600 shadow-[0_0_40px_rgba(56,189,248,0.5)] flex items-center justify-center border border-white/20">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white shadow-inner animate-ping opacity-60" />
        </div>

        {/* Orbit nodes */}
        <div className="absolute top-8 left-1/2 w-3 h-3 -ml-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#38bdf8]" />
        <div className="absolute bottom-10 right-14 w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_10px_#c084fc]" />
      </div>
    </div>
  );
}

export default function AiCoreCanvas() {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative w-full h-[280px] sm:h-[400px] md:h-[480px] lg:h-[540px] xl:h-[580px] flex items-center justify-center select-none touch-pan-y">
      {/* Subtle radial background glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-cyan-500/15 blur-[100px] pointer-events-none" />
      <div className="absolute w-64 h-64 rounded-full bg-violet-600/15 blur-[120px] pointer-events-none" />

      {/* Cyber overlay indicators */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex items-center gap-2 px-3 py-1 rounded-full glass-panel-subtle text-[10px] font-mono text-cyan-300 border border-cyan-500/20 z-10 pointer-events-none shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>NEURAL_ORB::ACTIVE</span>
      </div>

      <CanvasErrorBoundary fallback={<FallbackAiCore />}>
        <Suspense fallback={<FallbackAiCore />}>
          <Canvas
            camera={{ position: [0, 0, 5.5], fov: 45 }}
            dpr={[1, isMobile ? 1.5 : 2]}
            gl={{
              antialias: true,
              powerPreference: 'high-performance',
              alpha: true
            }}
            className="w-full h-full cursor-grab active:cursor-grabbing !touch-pan-y"
          >
            <Scene isMobile={isMobile} prefersReducedMotion={prefersReducedMotion} />
          </Canvas>
        </Suspense>
      </CanvasErrorBoundary>
    </div>
  );
}
