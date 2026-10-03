import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  CheckCircle,
  Copy,
  Check,
  ArrowUpRight,
  Terminal,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { personalInfo } from '../data/portfolioData';
import Reveal from '../components/Reveal';
import Parallax from '../components/Parallax';
import MagneticButton from '../components/MagneticButton';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship Opportunity',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const subjectOptions = [
    'Internship Opportunity',
    'Project Collaboration',
    'Learning Discussion',
    'General Inquiries'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulated responsive feedback
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting with parallax */}
      <Parallax offset={-40} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px]" />
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" distance={20} className="mb-16">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>06 // CONNECT & INQUIRE</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight break-words">
              Let's <span className="text-gradient-cyan">Connect</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl font-sans">
              I'm always interested in learning, building projects and connecting with people who enjoy technology.
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

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Communication Hub */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal direction="up" delay={0.08} distance={18}>
              {/* Direct Email Card with One-Click Copy */}
              <div className="rounded-2xl glass-panel p-4 sm:p-6 border border-white/[0.08] hover:border-cyan-500/35 transition-all duration-300 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 shrink-0" /> Email
                  </span>
                  <MagneticButton strength={0.15} maxOffset={4}>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg transition-colors cursor-pointer min-h-[36px]"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-cyan-400" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </MagneticButton>
                </div>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="block text-base sm:text-lg font-heading font-semibold text-white hover:text-cyan-300 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
                <p className="text-xs text-slate-400 font-sans">
                  Feel free to reach out for student project discussions, internships, or questions.
                </p>
              </div>
            </Reveal>

            {/* Social Channels (GitHub, LinkedIn) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Reveal direction="up" delay={0.14} distance={15}>
                {/* GitHub Button */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl glass-panel p-5 border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full"
                >
                  <div className="flex items-center justify-between pb-3">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-cyan-300 transition-colors">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-base">GitHub</h4>
                    <p className="text-xs text-slate-400 mt-0.5 font-mono">
                      Explore Projects & Code
                    </p>
                  </div>
                </a>
              </Reveal>

              <Reveal direction="up" delay={0.18} distance={15}>
                {/* LinkedIn Button */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl glass-panel p-5 border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full"
                >
                  <div className="flex items-center justify-between pb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-base">LinkedIn</h4>
                    <p className="text-xs text-slate-400 mt-0.5 font-mono">
                      Connect Professionally
                    </p>
                  </div>
                </a>
              </Reveal>
            </div>

            <Reveal direction="up" delay={0.22} distance={15}>
              {/* Student Telemetry Status */}
              <div className="rounded-2xl glass-panel-subtle p-5 border border-white/5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>CURRENT AVAILABILITY</span>
                </div>
                <div className="text-xs text-slate-300 space-y-1.5 font-sans">
                  <p>&bull; <span className="text-slate-400">Status:</span> Computer Science Student</p>
                  <p>&bull; <span className="text-slate-400">Interests:</span> Software Development, Web Technologies & AI</p>
                  <p>&bull; <span className="text-slate-400">Open To:</span> Internships, Project Collaborations & Tech Discussions</p>
                </div>
              </div>
            </Reveal>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Reveal direction="up" delay={0.12} distance={20}>
              <div className="rounded-2xl sm:rounded-3xl glass-panel p-4 sm:p-8 border border-white/[0.08] shadow-2xl relative">
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-white">
                      Message Sent
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-cyan-300">{formData.name}</strong>. Your message regarding "{formData.subject}" has been received. I will reply to you at <span className="text-cyan-300">{formData.email}</span>.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          subject: 'Internship Opportunity',
                          message: ''
                        });
                      }}
                      className="mt-4 px-6 py-3 rounded-xl text-xs font-mono bg-white/5 hover:bg-white/10 text-cyan-400 border border-white/10 transition-colors cursor-pointer min-h-[44px]"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-white/10">
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 shrink-0" /> Send a Message
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">PARI.OS // CONNECT</span>
                    </div>

                    {/* Subject Pills */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block">
                        Topic
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {subjectOptions.map((opt) => {
                          const isSelected = formData.subject === opt;
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setFormData({ ...formData, subject: opt })}
                              className={`relative px-3 py-2 rounded-lg text-xs font-mono transition-colors cursor-pointer min-h-[38px] flex items-center justify-center ${
                                isSelected
                                  ? 'text-cyan-300'
                                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                              }`}
                            >
                              {isSelected && (
                                <motion.div
                                  layoutId="activeContactSubject"
                                  className="absolute inset-0 rounded-lg bg-cyan-500/20 border border-cyan-400/40 pointer-events-none"
                                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                              )}
                              <span className="relative z-10">{opt}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Name & Email in Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-mono text-slate-300 uppercase tracking-wider block">
                          Your Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alex Vance"
                          className="w-full px-4 py-3 rounded-xl glass-input text-white text-sm placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-mono text-slate-300 uppercase tracking-wider block">
                          Your Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@example.com"
                          className="w-full px-4 py-3 rounded-xl glass-input text-white text-sm placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                        />
                      </div>
                    </div>

                    {/* Message Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-mono text-slate-300 uppercase tracking-wider block">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Pari, I saw your portfolio and would like to connect..."
                        className="w-full px-4 py-3 rounded-xl glass-input text-white text-sm placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors font-sans resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <MagneticButton strength={0.18} maxOffset={5} className="w-full">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 shadow-lg shadow-cyan-500/25 hover-glow-cyan transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 cursor-pointer disabled:opacity-60"
                        >
                          {submitting ? (
                            <>
                              <span className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>SEND MESSAGE</span>
                            </>
                          )}
                        </button>
                      </MagneticButton>
                    </div>
                  </form>
                )}

              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
