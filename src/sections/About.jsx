import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  CodeXml,
  Layers,
  Binary,
  Rocket,
  Terminal,
  CheckCircle2,
  Cpu,
  Sparkles
} from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';
import Reveal from '../components/Reveal';
import Parallax from '../components/Parallax';

const iconMap = {
  Cpu: Brain,
  CodeXml: CodeXml,
  Layers: Layers,
  Binary: Binary,
  Rocket: Rocket
};

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting with parallax */}
      <Parallax offset={-35} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-[140px]" />
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" distance={20} className="mb-12 sm:mb-16">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>01 // PERSPECTIVE & BACKGROUND</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
              Learning by <span className="text-gradient-cyan">Building & Exploring</span>
            </h2>
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

        {/* Top Split: Bio Narrative & Terminal HUD Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <Reveal direction="up" delay={0.08} distance={18}>
              <div className="space-y-4 text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-sans font-light">
                {aboutData.summary.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* Quick Stat Tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2 sm:pt-4">
              {aboutData.stats.map((stat, i) => (
                <Reveal key={i} direction="up" delay={0.15 + i * 0.05} distance={15}>
                  <div className="glass-panel-subtle p-3 sm:p-3.5 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all duration-200 hover:-translate-y-0.5">
                    <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 truncate">{stat.label}</div>
                    <div className="text-sm sm:text-base font-semibold text-white mt-1 font-mono">
                      {stat.value}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Terminal HUD Spec Card */}
          <div className="lg:col-span-5">
            <Reveal direction="up" delay={0.12} distance={20} className="h-full">
              <div className="h-full rounded-2xl glass-panel border border-cyan-500/20 p-4 sm:p-6 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-cyan-500/40 transition-colors duration-300">
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                      <span className="ml-1 sm:ml-2 text-cyan-300 truncate">pari@student-os:~$</span>
                    </div>
                    <span className="text-slate-400 text-[11px]">student_profile.json</span>
                  </div>

                  {/* Code / Spec representation */}
                  <div className="mt-4 font-mono text-xs sm:text-sm space-y-2 text-slate-300">
                    <p className="text-cyan-400 text-xs">
                      <span className="text-slate-400">&gt; </span>cat profile.sys
                    </p>
                    <div className="p-3 bg-black/40 rounded-lg border border-white/5 space-y-1.5 text-xs overflow-x-auto break-words">
                      <p><span className="text-violet-400">"name"</span>: <span className="text-emerald-300">"{personalInfo.name}"</span>,</p>
                      <p><span className="text-violet-400">"status"</span>: <span className="text-slate-200">"Computer Science Student"</span>,</p>
                      <p><span className="text-violet-400">"learning"</span>: [<span className="text-cyan-300">"Programming"</span>, <span className="text-cyan-300">"Web Dev"</span>, <span className="text-cyan-300">"AI"</span>],</p>
                      <p><span className="text-violet-400">"philosophy"</span>: <span className="text-slate-200">"Learn by building practical projects"</span>,</p>
                      <p><span className="text-violet-400">"mindset"</span>: <span className="text-slate-200">"Curious, consistent & eager to improve"</span></p>
                    </div>
                  </div>
                </div>

                {/* Status footer inside HUD */}
                <div className="mt-5 sm:mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>ACTIVE LEARNER</span>
                  </span>
                  <span className="text-slate-400">PARI.OS // CS_STUDENT</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>

        {/* 5 Core Pillars: Humble, realistic student interests */}
        <div>
          <Reveal direction="up" delay={0.05} distance={15} className="mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-400">
                Core Interests & Technical Exploration
              </h3>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {aboutData.focusAreas.map((area, idx) => {
              const IconComponent = iconMap[area.icon] || Cpu;
              return (
                <Reveal key={idx} direction="up" delay={0.08 + idx * 0.05} distance={18}>
                  <div className="group relative rounded-2xl glass-panel-subtle p-4 sm:p-5 border border-white/5 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 group-hover:scale-105 transition-all duration-200">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <h4 className="font-heading font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                        {area.title}
                      </h4>

                      <p className="text-xs text-slate-400 leading-relaxed font-sans font-light">
                        {area.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-cyan-400/80">
                      {area.tagline}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
