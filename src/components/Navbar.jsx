import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Command, Menu, X, FileDown } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';
import MagneticButton from './MagneticButton';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Navbar({ onOpenCommandPalette }) {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);

          // Section scroll spy
          const sections = ['home', 'about', 'skills', 'projects', 'journey', 'experience', 'working-on', 'achievements', 'contact'];
          const scrollPosition = window.scrollY + 200;

          for (const sectionId of sections) {
            const el = document.getElementById(sectionId);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                // Normalize alternate IDs
                if (sectionId === 'experience') setActiveSection('journey');
                else if (sectionId === 'achievements') setActiveSection('working-on');
                else setActiveSection(sectionId);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 sm:py-3 bg-[#07090e]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/40'
            : 'py-4 sm:py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-2.5 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg py-1 px-1.5 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/40 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                <div className="absolute inset-0 rounded-lg glow-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg sm:text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-300">
                  PARI.OS
                </span>
                <span className="text-[9px] font-mono text-cyan-400/80 -mt-1 tracking-widest">
                  SYS//ONLINE
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Visible on lg: 1024px+) */}
            <nav className="hidden lg:flex items-center gap-1 glass-panel-subtle px-3 py-1.5 rounded-full border border-white/[0.08]">
              {navLinks.map((link) => {
                const targetId = link.href.replace('#', '');
                const isActive = activeSection === targetId;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-colors duration-200 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      isActive
                        ? 'text-cyan-300'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-cyan-500/15 border border-cyan-400/30 shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                        transition={
                          prefersReducedMotion
                            ? { duration: 0 }
                            : { type: 'spring', stiffness: 380, damping: 30 }
                        }
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Action buttons (Command Palette trigger + Resume CTA) */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Command Palette Button with subtle magnetic response */}
              <MagneticButton strength={0.15} maxOffset={4}>
                <button
                  type="button"
                  onClick={onOpenCommandPalette}
                  aria-label="Open Command Palette (Ctrl+K)"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass-panel-subtle hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono transition-colors border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer min-h-[36px]"
                >
                  <Command className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[11px] text-slate-400">Ctrl+K</span>
                </button>
              </MagneticButton>

              {/* Resume CTA with magnetic response */}
              <MagneticButton strength={0.2} maxOffset={5}>
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </a>
              </MagneticButton>
            </div>

            {/* Mobile / Tablet Hamburger & Quick Trigger */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenCommandPalette}
                aria-label="Open Command Palette"
                className="w-10 h-10 rounded-lg glass-panel-subtle text-cyan-400 border border-white/10 flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
              >
                <Command className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="w-10 h-10 rounded-lg glass-panel-subtle text-slate-300 hover:text-white border border-white/10 flex items-center justify-center focus:outline-none cursor-pointer active:scale-95 transition-transform"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Indicator Bar at bottom of navbar */}
        {!prefersReducedMotion && (
          <motion.div
            style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 shadow-[0_0_8px_rgba(56,189,248,0.5)]"
          />
        )}
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[56px] sm:top-[60px] z-30 lg:hidden bg-[#07090e]/95 backdrop-blur-2xl border-b border-white/10 px-4 sm:px-6 py-5 shadow-2xl max-h-[calc(100dvh-60px)] overflow-y-auto"
          >
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const targetId = link.href.replace('#', '');
                const isActive = activeSection === targetId;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`min-h-[44px] px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="w-full min-h-[44px] text-center py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-cyan-500/20"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="w-full min-h-[44px] py-3 rounded-xl text-xs font-mono text-cyan-400 glass-panel-subtle flex items-center justify-center gap-2 border border-white/10 cursor-pointer"
                >
                  <Command className="w-3.5 h-3.5" />
                  <span>Open Command Palette (Ctrl+K)</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
