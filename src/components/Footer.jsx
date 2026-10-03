import React from 'react';
import { ArrowUp, Command } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';
import MagneticButton from './MagneticButton';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Footer({ onOpenCommandPalette }) {
  const prefersReducedMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#05070a] text-slate-400 py-12 text-sm overflow-hidden">
      {/* Background cyber accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-heading font-extrabold text-lg text-white tracking-wider">
                PARI.OS
              </span>
              <span className="text-xs font-mono text-cyan-400/80 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                {personalInfo.version}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-1 text-center md:text-left">
              Computer Science Student &bull; {personalInfo.name}
            </p>
          </div>

          {/* Quick nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-1 sm:gap-4 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-cyan-300 transition-colors px-2 py-1.5 min-h-[36px] inline-flex items-center"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Command palette & Back to top */}
          <div className="flex items-center gap-3">
            <MagneticButton strength={0.16} maxOffset={4}>
              <button
                onClick={onOpenCommandPalette}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg glass-panel-subtle text-xs font-mono text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer min-h-[40px]"
              >
                <Command className="w-3.5 h-3.5 text-cyan-400" />
                <span>Ctrl+K</span>
              </button>
            </MagneticButton>

            <MagneticButton strength={0.2} maxOffset={5}>
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="w-10 h-10 rounded-lg glass-panel text-slate-300 hover:text-white hover:border-cyan-500/40 border border-white/10 transition-colors cursor-pointer flex items-center justify-center"
              >
                <ArrowUp className="w-4 h-4 text-cyan-400" />
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* Bottom Status & Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-cyan-400 justify-center sm:justify-start">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="break-words">PARI.OS // ACTIVE LEARNER & BUILDER</span>
          </div>

          <div className="break-words text-slate-400">
            &copy; {new Date().getFullYear()} Pari Rojivadiya. Built with React & Vite.
          </div>
        </div>
      </div>
    </footer>
  );
}
