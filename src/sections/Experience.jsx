import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import Reveal from '../components/Reveal';
import Parallax from '../components/Parallax';

export default function Experience() {
  const [filter, setFilter] = useState('All');

  const filterOptions = ['All', 'Studies', 'Projects', 'Club Activities', 'Exploring'];

  const filteredData = experienceData.filter((item) => {
    if (filter === 'All') return true;
    if (filter === 'Studies') return item.type.includes('Academics');
    if (filter === 'Projects') return item.type.includes('Projects');
    if (filter === 'Club Activities') return item.type.includes('Club');
    if (filter === 'Exploring') return item.type.includes('Exploring') || item.type.includes('Learning');
    return true;
  });

  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden bg-white/[0.01]">
      {/* Background ambient lighting with parallax */}
      <Parallax offset={-35} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-600/10 rounded-full blur-[130px]" />
      </Parallax>

      {/* Anchor for journey link */}
      <div id="journey" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" distance={20} className="mb-10 sm:mb-14">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>04 // LEARNING JOURNEY</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
              Learning <span className="text-gradient-cyan">Journey</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-base mt-2 max-w-2xl font-sans">
              A chronological record of my Computer Science studies, personal projects, college team work, technical club activities, and continuous technical explorations.
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

        {/* Filter Pills */}
        <Reveal direction="up" delay={0.06} distance={15} className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar w-full max-w-full overscroll-x-contain touch-pan-x">
            {filterOptions.map((opt) => {
              const isActive = filter === opt;
              return (
                <button
                  key={opt}
                  onClick={() => setFilter(opt)}
                  className={`relative px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap min-h-[38px] flex items-center ${
                    isActive
                      ? 'text-cyan-300'
                      : 'glass-panel-subtle text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeExperienceTab"
                      className="absolute inset-0 rounded-xl bg-cyan-500/20 border border-cyan-400/40 shadow-sm pointer-events-none"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{opt}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Timeline Stream */}
        <div className="relative border-l border-cyan-500/20 ml-2 sm:ml-8 pl-5 sm:pl-10 space-y-8 sm:space-y-12">
          {filteredData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.08, 0.25), ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Timeline Node Orb */}
              <div className="absolute -left-[29px] sm:-left-[49px] top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#07090e] border-2 border-cyan-400 group-hover:scale-125 transition-transform duration-200 flex items-center justify-center shadow-[0_0_12px_rgba(56,189,248,0.5)]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
              </div>

              {/* Card Container */}
              <div className="rounded-2xl glass-panel p-4 sm:p-8 border border-white/[0.08] hover:border-cyan-500/35 transition-all duration-300 hover:-translate-y-1 space-y-3 sm:space-y-4">
                
                {/* Header row: Period, Type Badge, Location */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-cyan-300 bg-cyan-500/10 px-2.5 sm:px-3 py-1 rounded-full border border-cyan-500/20">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-white/5 border border-white/5">
                      {item.type}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Role & Organization */}
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors break-words">
                    {item.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-400 mt-0.5">
                    {item.organization}
                  </p>
                </div>

                {/* Narrative Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-sans font-light">
                  {item.description}
                </p>

                {/* Highlights / Learning Outcomes */}
                <div className="pt-2 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <BookOpen className="w-3 h-3 text-cyan-400" />
                    Key Activities & Learnings
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills/Tags */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {item.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-cyan-300/80 border border-white/[0.08]"
                    >
                      #{s}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
