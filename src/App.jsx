import React, { useState, useEffect } from 'react';
import IntroLoader from './components/IntroLoader';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import SystemStatusDock from './components/SystemStatusDock';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

import { useKeyboardShortcut } from './hooks/useKeyboardShortcut';

export default function App() {
  const [introCompleted, setIntroCompleted] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Check if intro has already been shown in this browser session
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('pari_os_intro_seen');
    if (hasSeenIntro) {
      setIntroCompleted(true);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem('pari_os_intro_seen', 'true');
    setIntroCompleted(true);
  };

  const handleReplayIntro = () => {
    setIntroCompleted(false);
  };

  // Keyboard shortcut listener for Ctrl+K / Cmd+K
  useKeyboardShortcut('k', () => {
    setCommandPaletteOpen((prev) => !prev);
  });

  return (
    <div className="min-h-screen bg-[#07090e] text-[#e2e8f0] relative selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Intro Booting Animation (Skippable, session-aware) */}
      {!introCompleted && <IntroLoader onComplete={handleIntroComplete} />}

      {/* Global Command Palette (Ctrl + K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Sticky Navbar (Normal web navigation remains available) */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10 flex flex-col">
        {/* Hero Section with 3D AI Core */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Featured Projects Section */}
        <Projects />

        {/* Experience & Activities Timeline */}
        <Experience />

        {/* Achievements Section */}
        <Achievements />

        {/* Certifications Section */}
        <Certifications />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* PARI.OS Floating Status Dock */}
      <SystemStatusDock
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onReplayIntro={handleReplayIntro}
      />

      {/* Footer */}
      <Footer onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
    </div>
  );
}
