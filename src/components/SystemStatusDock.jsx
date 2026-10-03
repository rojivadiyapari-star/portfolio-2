import React, { useState, useEffect } from 'react';
import { Command, RotateCcw } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function SystemStatusDock({ onOpenCommandPalette, onReplayIntro }) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside
      aria-label="PARI.OS System Telemetry Dock"
      className="fixed bottom-4 right-4 z-40 hidden sm:flex flex-col items-end pointer-events-auto"
    >
      <div className="flex items-center gap-2 p-1.5 rounded-2xl glass-panel border border-cyan-500/25 shadow-xl text-xs font-mono text-slate-300">
        {/* Status Indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/40 border border-white/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-cyan-300 text-[11px] font-semibold tracking-wider">
            PARI.OS
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-[11px] text-slate-400">{currentTime}</span>
        </div>

        {/* Command Palette Trigger Button */}
        <MagneticButton strength={0.16} maxOffset={4}>
          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-white border border-cyan-500/20 transition-colors cursor-pointer"
            title="Open Command Palette (Ctrl+K)"
          >
            <Command className="w-3.5 h-3.5" />
            <span className="text-[11px]">Ctrl+K</span>
          </button>
        </MagneticButton>

        {/* Replay Intro Boot sequence */}
        <MagneticButton strength={0.18} maxOffset={4}>
          <button
            type="button"
            onClick={onReplayIntro}
            className="p-1.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer flex items-center justify-center"
            title="Replay System Boot Sequence"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </MagneticButton>
      </div>
    </aside>
  );
}
