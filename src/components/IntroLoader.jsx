import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function IntroLoader({ onComplete }) {
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    // Fast sequence: auto completes in 1.6s
    const timer1 = setTimeout(() => {
      setProgress(60);
      setStage(1);
    }, 380);

    const timer2 = setTimeout(() => {
      setProgress(100);
      setStage(2);
      sound.bootComplete();
    }, 900);

    const timer3 = setTimeout(() => {
      onComplete();
    }, 1600);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onClick={onComplete}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05070a] text-white px-3 sm:px-6 overflow-hidden select-none cursor-pointer"
      >
        {/* Ambient atmospheric glows */}
        <div className="absolute w-[550px] h-[550px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />
        <div className="absolute w-[450px] h-[450px] rounded-full bg-violet-600/10 blur-[150px] pointer-events-none" />

        {/* Ambient Animated Cyber Grid */}
        <div className="absolute inset-0 bg-animated-grid opacity-35 pointer-events-none" />

        {/* Center Futuristic PARI.OS Boot HUD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-lg p-4 sm:p-10 rounded-2xl sm:rounded-3xl glass-panel border border-cyan-500/35 shadow-[0_0_60px_rgba(0,0,0,0.85)]"
        >
          {/* Top System Terminal Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-300 font-semibold tracking-wider">PARI.OS // INITIALIZATION</span>
            </div>
            <span className="text-slate-400">v2.6.4</span>
          </div>

          {/* Core Exact Requested Identifiers */}
          <div className="my-6 sm:my-8 text-center space-y-4">
            {/* 1. PARI.OS */}
            <div>
              <motion.h1
                initial={{ opacity: 0, letterSpacing: '0.22em' }}
                animate={{ opacity: 1, letterSpacing: '0.14em' }}
                transition={{ duration: 0.35 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400"
              >
                PARI.OS
              </motion.h1>
            </div>

            {/* 2. SYSTEM ONLINE */}
            <div className="flex items-center justify-center">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="font-semibold">SYSTEM ONLINE</span>
              </span>
            </div>

            {/* 3. USER: PARI ROJIVADIYA & 4. ROLE: COMPUTER SCIENCE STUDENT */}
            <div className="pt-2 space-y-2 font-mono">
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-slate-300">
                <span className="text-slate-400">USER:</span>
                <span className="text-white font-semibold tracking-wider">PARI ROJIVADIYA</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-cyan-300">
                <span className="text-slate-400">ROLE:</span>
                <span className="font-semibold tracking-wider">COMPUTER SCIENCE STUDENT</span>
              </div>
            </div>
          </div>

          {/* Diagnostic Loading Bar */}
          <div className="space-y-2 mt-6">
            <div className="flex justify-between text-[11px] font-mono text-slate-400">
              <span className="text-cyan-400 truncate pr-2">
                {stage === 0 && '> INITIALIZING ENVIRONMENT...'}
                {stage === 1 && '> RENDERING INTERFACE & 3D ASSETS...'}
                {stage >= 2 && '> LAUNCHING PORTFOLIO.'}
              </span>
              <span>{progress}%</span>
            </div>

            <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden p-[1px] border border-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
            </div>
          </div>

          {/* Bottom Controls / Skip Action */}
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono text-[11px] text-slate-400 hidden sm:inline">
              Press <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">ESC</kbd> or click to skip
            </span>
            <button
              onClick={onComplete}
              className="ml-auto inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-mono cursor-pointer py-1.5 px-3 rounded-lg hover:bg-white/5 min-h-[40px]"
            >
              <span>Skip Intro</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
