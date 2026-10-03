import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import {
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Terminal,
  Cpu,
  X,
  FileCode2,
  BookOpen,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { projects } from '../data/projects';
import MagneticButton from '../components/MagneticButton';
import Reveal from '../components/Reveal';
import Parallax from '../components/Parallax';
import { useReducedMotion } from '../hooks/useReducedMotion';

// Interactive Preview Component for each project
function ProjectPreviewArea({ project, isHovered }) {
  return (
    <div className="relative w-full rounded-2xl bg-[#06080e] border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-cyan-500/40">
      {/* 1. Window Chrome Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0a0d16] border-b border-white/10 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-slate-300 hidden sm:inline text-[11px]">
            experiment::{project.id}
          </span>
        </div>

        {/* Status / Badge Bar */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-black/50 border border-white/5 text-[11px] text-cyan-300">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="truncate max-w-[200px] sm:max-w-none">
            {project.previewMeta.badge}
          </span>
        </div>

        <div className="text-[10px] text-slate-400 font-mono hidden md:block">
          MODE::LEARNING_PROTOTYPE
        </div>
      </div>

      {/* 2. Main Interactive Preview Body */}
      <div className="relative p-5 sm:p-7 min-h-[300px] sm:min-h-[360px] flex flex-col justify-between overflow-hidden">
        {/* Subtle Cyber Grid Background */}
        <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />

        {/* Ambient Glow shifting on hover */}
        <div
          className={`absolute -right-10 -bottom-10 w-72 h-72 rounded-full blur-[100px] pointer-events-none transition-opacity duration-700 ${
            isHovered ? 'opacity-30' : 'opacity-15'
          } ${
            project.previewMeta.accentColor === 'cyan'
              ? 'bg-cyan-500'
              : project.previewMeta.accentColor === 'purple'
              ? 'bg-violet-600'
              : 'bg-blue-600'
          }`}
        />

        {/* PROJECT 1: Smart Allocation Engine Visualization */}
        {project.id === 'smart-allocation-engine' && (
          <div className="relative z-10 space-y-4">
            {/* Top KPI Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {project.previewMeta.kpis.map((kpi, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">{kpi.label}</div>
                  <div className="text-xs font-semibold text-white font-mono mt-0.5">{kpi.value}</div>
                </div>
              ))}
            </div>

            {/* Prototype Simulation Console */}
            <div className="p-4 rounded-xl bg-black/60 border border-cyan-500/20 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 border-b border-white/5 pb-2 text-[11px]">
                <span className="text-cyan-400 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  Simulated Matching Pipeline
                </span>
                <span className="text-cyan-300">Prototype Logic Test</span>
              </div>

              {/* Sample Matching Table Rows */}
              <div className="space-y-2 text-[11px]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5 gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-mono">SAMPLE_APPLICANT_A</span>
                    <span className="text-white font-sans text-xs">Skills: Python, Machine Learning</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-300">
                    <span>Opportunity: AI Intern</span>
                    <span className="text-slate-400 text-[10px]">• Constraints: Validated</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5 gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-mono">SAMPLE_APPLICANT_B</span>
                    <span className="text-white font-sans text-xs">Skills: React, JavaScript, CSS</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-300">
                    <span>Opportunity: Frontend Intern</span>
                    <span className="text-slate-400 text-[10px]">• Constraints: Validated</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-[10px] text-slate-400 flex items-center justify-between border-t border-white/5">
                <span>FACTORS: SKILL PROFILE • PREFERENCES • ELIGIBILITY</span>
                <span className="text-emerald-400">TEST EVALUATION PASSED</span>
              </div>
            </div>
          </div>
        )}

        {/* PROJECT 2: LegalAId Document Flow */}
        {project.id === 'legal-aid' && (
          <div className="relative z-10 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {project.previewMeta.kpis.map((kpi, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">{kpi.label}</div>
                  <div className="text-xs font-semibold text-white font-mono mt-0.5">{kpi.value}</div>
                </div>
              ))}
            </div>

            {/* Guided Notice Compilation Flow */}
            <div className="p-4 rounded-xl bg-black/60 border border-blue-500/20 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 border-b border-white/5 pb-2 text-[11px]">
                <span className="text-blue-400 flex items-center gap-1.5">
                  <FileCode2 className="w-3.5 h-3.5" />
                  Guided Questionnaire & Structured Notice Walkthrough
                </span>
                <span className="text-emerald-400">Step-by-Step UI</span>
              </div>

              <div className="p-3 rounded bg-white/[0.02] border border-white/5 space-y-2 text-[11px] font-sans">
                <div className="flex items-center justify-between border-b border-white/5 pb-1 font-mono text-[10px] text-slate-400">
                  <span>SAMPLE FLOW: COMMON DISPUTE GUIDANCE</span>
                  <span className="text-blue-300">EXPLORATORY UI</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  "Step 1: Summarize key incident details. Step 2: Review relevant consumer provisions in plain language. Step 3: Compile drafted formal notice for user review..."
                </p>
              </div>

              <div className="pt-2 text-[10px] font-mono text-slate-400 flex items-center justify-between border-t border-white/5">
                <span>DATA HANDLING: LOCAL BROWSER SESSION ONLY</span>
                <span className="text-blue-300">DRAFT EXPORT TEST</span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Preview Telemetry */}
        <div className="relative z-10 mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-slate-300">STATUS: PROTOTYPE & EXPERIMENT</span>
          </div>
          <span className="text-cyan-400/80">HANDS-ON LEARNING</span>
        </div>
      </div>
    </div>
  );
}

// Single Project Item Component
function ProjectCaseStudy({ project, onOpenModal }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const spotlightRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const quickTiltX = useRef(null);
  const quickTiltY = useRef(null);
  const quickSpotX = useRef(null);
  const quickSpotY = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion || !cardRef.current) return;

    // Only apply on fine-pointer devices (mouse/trackpad)
    if (typeof window !== 'undefined' && window.matchMedia && !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    quickTiltX.current = gsap.quickTo(cardRef.current, 'rotationX', { duration: 0.35, ease: 'power2.out' });
    quickTiltY.current = gsap.quickTo(cardRef.current, 'rotationY', { duration: 0.35, ease: 'power2.out' });

    if (spotlightRef.current) {
      quickSpotX.current = gsap.quickTo(spotlightRef.current, 'x', { duration: 0.25, ease: 'power2.out' });
      quickSpotY.current = gsap.quickTo(spotlightRef.current, 'y', { duration: 0.25, ease: 'power2.out' });
    }

    const cardEl = cardRef.current;
    const spotEl = spotlightRef.current;
    return () => {
      if (cardEl) gsap.killTweensOf(cardEl);
      if (spotEl) gsap.killTweensOf(spotEl);
    };
  }, [prefersReducedMotion]);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !cardRef.current) return;
    if (typeof window !== 'undefined' && window.matchMedia && !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Subtle 3D tilt (max 2.2 deg, clamped and silky)
    const normX = (x / rect.width) - 0.5;
    const normY = (y / rect.height) - 0.5;

    if (quickTiltX.current) quickTiltX.current(-normY * 2.2);
    if (quickTiltY.current) quickTiltY.current(normX * 2.2);

    if (quickSpotX.current) quickSpotX.current(x - 300);
    if (quickSpotY.current) quickSpotY.current(y - 300);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (prefersReducedMotion || !cardRef.current) return;

    gsap.to(cardRef.current, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.45,
      ease: 'power2.out'
    });
  };

  // Safe checks for URLs
  const hasLiveUrl = Boolean(
    project.liveUrl &&
    project.liveUrl.trim() !== '' &&
    project.liveUrl !== '#' &&
    !project.liveUrl.includes('localhost')
  );

  const hasGithubUrl = Boolean(
    project.githubUrl &&
    project.githubUrl.trim() !== '' &&
    project.githubUrl !== '#'
  );

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
      className="group relative rounded-3xl glass-panel border border-white/[0.08] hover:border-cyan-500/40 p-4 sm:p-8 lg:p-12 transition-colors duration-300 shadow-2xl hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),0_0_30px_-5px_rgba(56,189,248,0.12)] space-y-8 sm:space-y-10 overflow-hidden"
    >
      {/* Interactive Cursor Spotlight Hover Glow (Driven by GSAP quickTo without React re-renders) */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none transition-opacity duration-300 transform-gpu"
        style={{
          opacity: isHovered && !prefersReducedMotion ? 1 : 0,
          background: `radial-gradient(circle, ${
            project.previewMeta.accentColor === 'cyan'
              ? 'rgba(6, 182, 212, 0.12)'
              : project.previewMeta.accentColor === 'purple'
              ? 'rgba(168, 85, 247, 0.12)'
              : 'rgba(59, 130, 246, 0.12)'
          } 0%, transparent 65%)`
        }}
      />

      {/* 1. Header Section: Project Index & Meta */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-widest uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>PROJECT // {project.projectNumber} &bull; {project.category}</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white group-hover:text-cyan-200 transition-colors break-words">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-cyan-400/80 mt-1">
            {project.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
            {project.status}
          </span>
        </div>
      </div>

      {/* 2. Prominent Project Description (Requested exact text) */}
      <div className="relative z-10 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
        <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed font-normal">
          "{project.description}"
        </p>
      </div>

      {/* 3. Visual Preview Area */}
      <div className="relative z-10 transform transition-transform duration-300">
        <ProjectPreviewArea project={project} isHovered={isHovered} />
      </div>

      {/* 4. Narrative: Motivation & Approach */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Context Card */}
        <div className="p-4 sm:p-6 rounded-2xl bg-blue-500/[0.04] border border-blue-500/20 space-y-2">
          <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-semibold uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>PROJECT EXPLORATION</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-light">
            {project.context}
          </p>
        </div>

        {/* Learning Focus Card */}
        <div className="p-4 sm:p-6 rounded-2xl bg-cyan-500/[0.04] border border-cyan-500/20 space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>WHAT I WANTED TO LEARN</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-light">
            {project.learningFocus}
          </p>
        </div>
      </div>

      {/* 5. Key Learning Features */}
      <div className="relative z-10 space-y-4">
        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Explorations & Working Prototype Features</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {project.features.map((feat, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-xl glass-panel-subtle border border-white/5 space-y-1 hover:border-cyan-500/30 transition-colors"
            >
              <div className="font-heading font-semibold text-white text-sm flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{feat.title}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans pl-5">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Learning Takeaway / Result (Humble, no fake impact) */}
      <div className="relative z-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cyan-950/20 via-slate-900/40 to-violet-950/20 border border-cyan-500/30 space-y-1.5">
        <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-4 h-4 shrink-0" />
          <span>LEARNING OUTCOME & TAKEAWAYS</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
          {project.resultImpact}
        </p>
      </div>

      {/* 7. Technologies & Action Buttons */}
      <div className="relative z-10 pt-6 border-t border-white/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        {/* Technologies Badges */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
            Technologies & Libraries Explored
          </span>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.technologies.map((t) => (
              <span
                key={t.name}
                className="group/badge px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] hover:bg-cyan-500/15 text-slate-300 hover:text-cyan-300 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-200"
              >
                <span>{t.name}</span>
                <span className="ml-1 text-[9px] text-slate-400 group-hover/badge:text-cyan-400/80">
                  [{t.category}]
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: [ Launch Live Demo / Live Demo Coming Soon ] [ GitHub Repository ] */}
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 w-full lg:w-auto">
          {/* Live Demo Button OR Live Demo Coming Soon Status */}
          {hasLiveUrl ? (
            <MagneticButton strength={0.2} maxOffset={6} className="w-full sm:w-auto">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </MagneticButton>
          ) : (
            <div
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-mono text-slate-400 bg-white/[0.04] border border-white/10 select-none cursor-default"
              title="Live demo is not currently deployed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
              <span>Live Demo Coming Soon</span>
            </div>
          )}

          {/* GitHub Repository CTA with GitHub Icon */}
          {hasGithubUrl && (
            <MagneticButton strength={0.2} maxOffset={6} className="w-full sm:w-auto">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold glass-panel text-slate-200 hover:text-white hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>GitHub Repository</span>
              </a>
            </MagneticButton>
          )}

          {/* Details CTA */}
          <MagneticButton strength={0.15} maxOffset={4} className="w-full sm:w-auto">
            <button
              onClick={() => onOpenModal(project)}
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-xs font-mono text-cyan-400 hover:text-cyan-300 glass-panel-subtle hover:bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors cursor-pointer"
              title="View Project Details"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Project Details</span>
            </button>
          </MagneticButton>
        </div>

      </div>
    </motion.article>
  );
}

// In-Depth Project Details Modal
function CaseStudyDetailModal({ project, onClose }) {
  if (!project) return null;

  const hasLiveUrl = Boolean(
    project.liveUrl &&
    project.liveUrl.trim() !== '' &&
    project.liveUrl !== '#' &&
    !project.liveUrl.includes('localhost')
  );

  const hasGithubUrl = Boolean(
    project.githubUrl &&
    project.githubUrl.trim() !== '' &&
    project.githubUrl !== '#'
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl glass-panel border border-cyan-500/30 p-4 sm:p-8 text-slate-200 shadow-2xl space-y-5 sm:space-y-6"
      >
        <div className="flex items-start justify-between border-b border-white/10 pb-4 gap-3">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              PROJECT // {project.projectNumber} &bull; {project.category}
            </span>
            <h3 className="text-xl sm:text-3xl font-bold font-heading text-white mt-1 break-words">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-1">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 min-w-[36px] min-h-[36px] rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0 flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-5 sm:space-y-6 text-sm text-slate-300 font-sans leading-relaxed">
          <div>
            <h4 className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Project Description
            </h4>
            <p className="text-slate-200 font-normal text-xs sm:text-sm">{project.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            <div className="p-3.5 sm:p-4 rounded-xl bg-blue-500/[0.05] border border-blue-500/20 space-y-1">
              <span className="font-mono text-blue-400 font-semibold text-xs flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" /> Project Motivation
              </span>
              <p className="text-xs text-slate-400">{project.context}</p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-cyan-500/[0.05] border border-cyan-500/20 space-y-1">
              <span className="font-mono text-cyan-400 font-semibold text-xs flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> Learning Goals
              </span>
              <p className="text-xs text-slate-400">{project.learningFocus}</p>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Features & Explorations
            </h4>
            <div className="space-y-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-medium">{feat.title}: </strong>
                    <span className="text-slate-400">{feat.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-500/[0.05] border border-emerald-500/20 space-y-1">
            <span className="font-mono text-emerald-400 font-semibold text-xs flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> What I Learned
            </span>
            <p className="text-xs text-slate-300">{project.resultImpact}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            {hasLiveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[42px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-colors shadow-sm"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <div className="w-full sm:w-auto min-h-[42px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400 bg-white/5 border border-white/10 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Live Demo Coming Soon</span>
              </div>
            )}

            {hasGithubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[42px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold glass-panel text-slate-200 hover:text-white border border-white/10"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto min-h-[42px] px-4 py-2 text-xs font-mono text-slate-400 hover:text-white cursor-pointer rounded-lg bg-white/5 sm:bg-transparent"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background ambient lighting with parallax */}
      <Parallax offset={-45} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[650px] h-[650px] bg-cyan-500/10 rounded-full blur-[170px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-violet-600/10 rounded-full blur-[160px]" />
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" distance={20} className="mb-16 sm:mb-20">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>03 // PROJECTS & EXPERIMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight">
              Projects & <span className="text-gradient-cyan">Experiments</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl font-sans">
              A collection of practical projects and experiments built to explore software development, AI concepts, and modern web technologies.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mt-4" />
          </div>
        </Reveal>

        {/* Stacked Projects */}
        <div className="space-y-16 sm:space-y-24">
          {projects.map((project) => (
            <ProjectCaseStudy
              key={project.id}
              project={project}
              onOpenModal={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Modal for In-Depth Details */}
        <AnimatePresence>
          {selectedProject && (
            <CaseStudyDetailModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
