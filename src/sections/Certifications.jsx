import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink, CheckCircle } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import Reveal from '../components/Reveal';

export default function Certifications() {
  // Only show certifications if actually provided. Do not create fake certificates.
  if (!certificationsData || certificationsData.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="relative py-20 sm:py-28 overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" distance={20} className="mb-14">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>06 // VERIFIED CERTIFICATIONS</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight break-words">
              Verified <span className="text-gradient-cyan">Certifications</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-sans">
              Credentials and certificates earned through completed technical courses and examinations.
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
              transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-4"
            />
          </div>
        </Reveal>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id || index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.24), ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl glass-panel p-4 sm:p-6 border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="truncate max-w-[170px] sm:max-w-none">{cert.credentialId || 'VERIFIED'}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">{cert.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg text-white mt-4 group-hover:text-cyan-300 transition-colors break-words">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  {cert.issuer}
                </p>

                {/* Topics Covered */}
                {cert.topics && cert.topics.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">
                      Topics
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.topics.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/[0.08]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action link */}
              {cert.link && cert.link !== '#' && (
                <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 shrink-0" />
                    <span>VERIFIED</span>
                  </span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link text-xs font-mono text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 transition-colors px-2.5 py-1.5 -mr-1.5 rounded-lg hover:bg-cyan-500/10 min-h-[36px]"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
