import React from 'react';
import { motion } from 'framer-motion';
import { Target, Code, Binary, Cpu, GitBranch, Layout, Sparkles } from 'lucide-react';
import { workingOnData } from '../data/portfolioData';
import Reveal from '../components/Reveal';
import Parallax from '../components/Parallax';

const focusIcons = {
  'Problem Solving': Target,
  'Computer Science': Binary,
  'Web Development': Layout,
  'AI & ML': Cpu,
  'Developer Tools': GitBranch,
  'Frontend': Code
};

export default function Achievements() {
  return (
    <section id="working-on" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Anchor for backward compatibility with achievements link */}
      <div id="achievements" className="absolute -top-20" />

      {/* Ambient background glow with parallax */}
      <Parallax offset={-35} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" distance={20} className="mb-16">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>05 // CURRENT FOCUS & GOALS</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight break-words">
              What I'm <span className="text-gradient-cyan">Working On</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-sans">
              Key areas of study, daily technical practice, and core skills I am focusing on improving as a Computer Science student.
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
              transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4"
            />
          </div>
        </Reveal>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workingOnData.map((item, idx) => {
            const Icon = focusIcons[item.category] || Target;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.06, 0.24), ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl glass-panel p-5 sm:p-7 border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Category, Status Tag */}
                  <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-200">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-cyan-300 tracking-wide">
                        {item.category}
                      </span>
                    </div>

                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="mt-4">
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-cyan-200 transition-colors break-words">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 mt-3 leading-relaxed font-sans font-light">
                    {item.description}
                  </p>
                </div>

                {/* Footer status */}
                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-2 text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{item.status}</span>
                  </span>
                  <span className="text-slate-500">{item.period}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
