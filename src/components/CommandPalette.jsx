import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Home,
  User,
  Cpu,
  FolderGit2,
  BookOpen,
  Target,
  Mail,
  FileText,
  CornerDownLeft,
  X,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const commands = [
    {
      id: 'home',
      name: 'HOME',
      description: 'Navigate to hero section and 3D interactive core',
      icon: Home,
      category: 'NAVIGATION',
      action: () => scrollToSection('home')
    },
    {
      id: 'about',
      name: 'ABOUT',
      description: 'Student background, learning mindset & focus areas',
      icon: User,
      category: 'NAVIGATION',
      action: () => scrollToSection('about')
    },
    {
      id: 'projects',
      name: 'PROJECTS & EXPERIMENTS',
      description: 'Student projects: Smart Allocation Engine, LegalAId',
      icon: FolderGit2,
      category: 'NAVIGATION',
      action: () => scrollToSection('projects')
    },
    {
      id: 'skills',
      name: 'SKILLS & TOOLS',
      description: 'Currently learning & using: Programming, Web, Tools, Exploring',
      icon: Cpu,
      category: 'NAVIGATION',
      action: () => scrollToSection('skills')
    },
    {
      id: 'experience',
      name: 'LEARNING JOURNEY',
      description: 'Timeline of CS studies, personal projects & activities',
      icon: BookOpen,
      category: 'NAVIGATION',
      action: () => scrollToSection('experience')
    },
    {
      id: 'achievements',
      name: "WHAT I'M WORKING ON",
      description: 'Key areas of daily technical practice and study goals',
      icon: Target,
      category: 'NAVIGATION',
      action: () => scrollToSection('working-on')
    },
    {
      id: 'resume',
      name: 'RESUME',
      description: 'Download CV / Resume document',
      icon: FileText,
      category: 'DOCUMENT',
      action: () => {
        window.open(personalInfo.resumeUrl, '_blank');
      }
    },
    {
      id: 'contact',
      name: "LET'S CONNECT",
      description: 'Send a message or start a discussion',
      icon: Mail,
      category: 'COMMUNICATION',
      action: () => scrollToSection('contact')
    },
    {
      id: 'github',
      name: 'GITHUB',
      description: 'View public repositories and project code',
      icon: GithubIcon,
      category: 'EXTERNAL',
      action: () => {
        window.open(personalInfo.github, '_blank', 'noopener,noreferrer');
      }
    },
    {
      id: 'linkedin',
      name: 'LINKEDIN',
      description: 'Connect on LinkedIn network',
      icon: LinkedinIcon,
      category: 'EXTERNAL',
      action: () => {
        window.open(personalInfo.linkedin, '_blank', 'noopener,noreferrer');
      }
    }
  ];

  const scrollToSection = (id) => {
    sound.commandSelect();
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 120);
  };

  const filteredCommands = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(query.toLowerCase()) ||
    cmd.description.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      sound.commandOpen();
      setQuery('');
      setSelectedIndex(0);
      const timer = setTimeout(() => inputRef.current?.focus(), 40);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (!isOpen) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      sound.keyNav();
      setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      sound.keyNav();
      setSelectedIndex((prev) =>
        prev === 0 ? Math.max(0, filteredCommands.length - 1) : prev - 1
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-8 sm:pt-24 px-3 sm:px-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
          onKeyDown={handleKeyDown}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -14 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl rounded-2xl glass-panel border border-cyan-500/40 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95)] overflow-hidden text-slate-200"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3 bg-white/[0.02]">
              <Search className="w-5 h-5 text-cyan-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type command or jump to section..."
                className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none font-mono tracking-wide"
              />
              {query ? (
                <button
                  onClick={() => setQuery('')}
                  className="p-1.5 rounded-md text-slate-400 hover:text-white"
                  title="Clear input"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : (
                <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-white/5 rounded border border-white/10">
                  ESC
                </kbd>
              )}
            </div>

            {/* List of Commands */}
            <div className="max-h-[58vh] sm:max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredCommands.length === 0 ? (
                <div className="py-8 text-center text-sm text-slate-400 font-mono">
                  No matching commands found for "{query}"
                </div>
              ) : (
                filteredCommands.map((cmd, index) => {
                  const Icon = cmd.icon;
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      key={cmd.id}
                      onClick={() => cmd.action()}
                      onMouseEnter={() => {
                        if (selectedIndex !== index) {
                          setSelectedIndex(index);
                        }
                      }}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between transition-colors cursor-pointer min-h-[44px] ${
                        isSelected
                          ? 'bg-cyan-500/15 border border-cyan-500/40 text-white shadow-sm'
                          : 'hover:bg-white/5 text-slate-300 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`p-2 rounded-lg shrink-0 ${
                            isSelected
                              ? 'bg-cyan-400/20 text-cyan-300'
                              : 'bg-white/5 text-slate-400'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <div className="font-mono font-bold text-sm tracking-wide text-white flex items-center gap-2">
                            <span>{cmd.name}</span>
                            <span className="text-[9px] px-1.5 py-0.2 rounded font-mono text-slate-400 bg-white/5 border border-white/5">
                              {cmd.category}
                            </span>
                          </div>
                          <div className="text-xs text-slate-400 truncate mt-0.5 font-sans">
                            {cmd.description}
                          </div>
                        </div>
                      </div>

                      {isSelected && (
                        <div className="flex items-center gap-1 text-[11px] font-mono text-cyan-300 pl-2 shrink-0">
                          <span className="hidden sm:inline">EXECUTE</span>
                          <CornerDownLeft className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </button>
                  );
                })
              )}
            </div>

            {/* Bottom Keyboard Hint Bar */}
            <div className="px-4 py-2.5 bg-black/50 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 font-mono">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">↑</kbd>
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">↓</kbd>
                  <span className="hidden xs:inline">navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">↵</kbd>
                  <span>select</span>
                </span>
                <span className="flex items-center gap-1 hidden sm:inline-flex">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">esc</kbd>
                  <span>close</span>
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-cyan-400/90 shrink-0">
                <Sparkles className="w-3 h-3" />
                <span>QUICK DIAL</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
