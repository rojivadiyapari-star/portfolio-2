import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import Parallax from '../components/Parallax';
import AiCoreCanvas from '../components/3d/AiCoreCanvas';
import { personalInfo } from '../data/portfolioData';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-36 lg:pt-32 pb-16 lg:pb-24 overflow-hidden"
    >
      {/* 1. Subtle Animated Grid Lines in Background */}
      <div className="absolute inset-0 bg-animated-grid opacity-35 pointer-events-none" />

      {/* 2. Soft Ambient Scanning Beam traversing grid */}
      <div className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent pointer-events-none animate-scan-beam" />

      {/* 3. Deep Atmospheric Glow Accents with Parallax Depth */}
      <Parallax offset={-45} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/5 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px]" />
        <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[140px]" />
      </Parallax>

      {/* 4. Ambient Micro-Dust Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-1/5 left-1/12 w-1.5 h-1.5 rounded-full bg-cyan-400/40 blur-[1px] animate-pulse" />
        <span className="absolute top-3/5 left-1/4 w-1 h-1 rounded-full bg-violet-400/30 blur-[1px]" />
        <span className="absolute top-1/3 right-1/6 w-2 h-2 rounded-full bg-cyan-300/30 blur-[1px] animate-pulse" />
        <span className="absolute bottom-1/5 right-1/3 w-1 h-1 rounded-full bg-blue-400/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Text Column */}
          <div className="order-1 lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8">
            
            {/* 1. System Status Eyebrow Badge */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel-subtle border border-cyan-500/30 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-mono tracking-widest text-cyan-300 font-medium">
                PARI.OS // SYSTEM ONLINE
              </span>
              <span className="text-slate-600 text-xs">|</span>
              <span className="text-[11px] font-mono text-slate-300/80 tracking-wider hidden sm:inline">
                CS STUDENT & LEARNER
              </span>
            </motion.div>

            {/* 2. Name Heading */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.45, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2 w-full"
            >
              <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[5.4rem] font-extrabold tracking-tight font-heading leading-[1.04] text-white break-words">
                <span className="block text-gradient-white">PARI</span>
                <span className="block text-gradient-cyan">ROJIVADIYA</span>
              </h1>
            </motion.div>

            {/* 3. Role Subtitle */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.45, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2.5 sm:gap-3"
            >
              <motion.div
                initial={prefersReducedMotion ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                style={{ originX: 0 }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="h-[2px] w-6 sm:w-10 bg-gradient-to-r from-cyan-400 to-violet-500 shrink-0"
              />
              <h2 className="text-sm sm:text-lg lg:text-xl font-mono font-semibold tracking-[0.16em] sm:tracking-[0.22em] text-cyan-300 uppercase">
                COMPUTER SCIENCE STUDENT
              </h2>
            </motion.div>

            {/* 4. Secondary Line & Short Description */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.45, delay: 0.21, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3 max-w-2xl"
            >
              <p className="text-base sm:text-xl lg:text-2xl text-slate-100 font-sans font-normal leading-relaxed">
                Learning, building and experimenting with software, AI and modern web technologies.
              </p>
              <p className="text-sm sm:text-base text-slate-400 font-sans font-light leading-relaxed">
                I enjoy turning ideas into small working projects while continuously improving my technical skills.
              </p>
            </motion.div>

            {/* 5. Primary Action Buttons */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.45, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              {/* VIEW MY WORK Button */}
              <MagneticButton strength={0.25} maxOffset={8} className="w-full sm:w-auto">
                <button
                  type="button"
                  onClick={scrollToProjects}
                  className="group relative inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover-glow-cyan transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 cursor-pointer w-full sm:w-auto"
                >
                  <span>VIEW MY WORK</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                </button>
              </MagneticButton>

              {/* DOWNLOAD RESUME Button */}
              <MagneticButton strength={0.25} maxOffset={8} className="w-full sm:w-auto">
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-semibold text-sm glass-panel text-slate-200 hover:text-white hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 cursor-pointer w-full sm:w-auto"
                >
                  <FileDown className="w-4 h-4 text-cyan-400" />
                  <span>DOWNLOAD RESUME</span>
                </a>
              </MagneticButton>
            </motion.div>

            {/* 6. Minimalist Telemetry Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-[11px] sm:text-xs font-mono text-slate-400"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>EXPLORING AI & ML</span>
              </div>
              <div className="hidden sm:block text-slate-700">&bull;</div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                <span>BUILDING WEB PROJECTS</span>
              </div>
              <div className="hidden md:block text-slate-700">&bull;</div>
              <div className="hidden md:flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>CONTINUOUS LEARNING</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Interactive 3D AI Core (Retained futuristic visual design) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:col-span-5 relative flex flex-col items-center justify-center w-full"
          >
            <div className="w-full relative flex flex-col items-center">
              <AiCoreCanvas />
              
              <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-slate-400 tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>INTERACTIVE 3D CORE &bull; DRAG TO ROTATE</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
