import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { skills, skillCategories } from '../data/skills';
import { TechIcon } from '../components/TechIcons';
import Reveal from '../components/Reveal';
import Parallax from '../components/Parallax';
import MagneticButton from '../components/MagneticButton';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-28 sm:py-36 overflow-hidden bg-white/[0.01]">
      {/* Background ambient lighting with parallax */}
      <Parallax offset={-40} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[150px]" />
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" distance={20} className="mb-14">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>02 // SKILLS & TOOLS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight">
              Currently Learning & <span className="text-gradient-cyan">Using</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl font-sans">
              Technologies and tools I am actively learning, building with, and exploring through coursework, personal projects, and experiments.
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
              transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4"
            />
          </div>
        </Reveal>

        {/* Category Filter Navigation Bar */}
        <Reveal direction="up" delay={0.08} distance={15} className="mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar w-full max-w-full overscroll-x-contain touch-pan-x">
            {skillCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap flex items-center gap-2 min-h-[38px] ${
                    isActive
                      ? 'text-cyan-300'
                      : 'glass-panel-subtle text-slate-400 hover:text-white hover:bg-white/5 border border-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillCategory"
                      className="absolute inset-0 rounded-xl bg-cyan-500/20 border border-cyan-400/40 shadow-sm shadow-cyan-500/10 pointer-events-none"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.name}</span>
                  <span
                    className={`relative z-10 text-[10px] font-mono px-1.5 py-0.2 rounded ${
                      isActive ? 'bg-cyan-400/20 text-cyan-200' : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    {cat.id === 'all'
                      ? skills.length
                      : skills.filter((s) => s.category === cat.id).length}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Interactive Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const isSelected = selectedSkill.id === skill.id;

              return (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.28, delay: Math.min(index * 0.025, 0.2), ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedSkill(skill)}
                  className={`group relative rounded-2xl glass-panel p-5 sm:p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden ${
                    isSelected
                      ? 'border-cyan-400/50 bg-cyan-950/20 shadow-lg shadow-cyan-500/10'
                      : 'border-white/[0.07] hover:border-cyan-500/35 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50'
                  }`}
                >
                  {/* Subtle Ambient Hover Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all duration-300 pointer-events-none" />

                  <div className="relative z-10 space-y-3">
                    {/* Top: Icon + Name + Category Tag */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 group-hover:scale-105 group-hover:bg-cyan-500/10 transition-all duration-200">
                          <TechIcon type={skill.iconType} />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-white text-base sm:text-lg group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </h3>
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                            {skill.categoryName}
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {skill.status}
                      </span>
                    </div>

                    {/* Factual Application Note */}
                    <p className="text-xs text-slate-300 leading-relaxed font-sans font-light pt-1">
                      {skill.application}
                    </p>
                  </div>

                  {/* Bottom: Concrete Project Practical Link */}
                  <div className="relative z-10 mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="truncate flex-1 min-w-0 pr-2 text-slate-400 group-hover:text-slate-300 transition-colors">
                      {skill.projectUse}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Selected Skill Detail Bar */}
        {selectedSkill && (
          <motion.div
            key={selectedSkill.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 p-4 sm:p-6 rounded-2xl glass-panel border border-cyan-500/30 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-xl"
          >
            <div className="flex items-start sm:items-center gap-3 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0">
                <TechIcon type={selectedSkill.iconType} className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-0.5 min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-heading font-bold text-white text-base sm:text-lg">
                    {selectedSkill.name}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {selectedSkill.categoryName} &bull; {selectedSkill.status}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 break-words">
                  <strong className="text-slate-200">How I'm using it: </strong>
                  {selectedSkill.application}. ({selectedSkill.projectUse})
                </p>
              </div>
            </div>

            <MagneticButton strength={0.18} maxOffset={5} className="w-full md:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-1.5 min-h-[44px] px-4 py-2.5 rounded-xl text-xs font-mono bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all hover:-translate-y-0.5 shrink-0 w-full md:w-auto"
              >
                <span>View Projects</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </MagneticButton>
          </motion.div>
        )}

        {/* Learning Mindset Note */}
        <Reveal direction="up" delay={0.1} distance={12} className="mt-8">
          <div className="p-4 rounded-xl glass-panel-subtle border border-white/5 flex items-center gap-3 text-xs text-slate-400 font-mono">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              LEARNING APPROACH: Evaluated through practical code implementations, hands-on building, and continuous practice rather than arbitrary percentages.
            </span>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
