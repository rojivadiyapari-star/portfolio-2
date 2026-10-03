import React from 'react';
import {
  Code2,
  Cpu,
  Layers,
  Terminal,
  Globe,
  GitBranch,
  Wrench,
  Boxes,
  Zap,
  Sparkles,
  Bot,
  Network,
  Cog,
  FileCode,
  Braces
} from 'lucide-react';
import { GithubIcon } from './Icons';

export function TechIcon({ type, className = "w-5 h-5", isHovered = false }) {
  const baseClasses = `${className} transition-transform duration-300 ${
    isHovered ? 'scale-110 text-cyan-300' : 'text-slate-400 group-hover:text-cyan-300'
  }`;

  switch (type) {
    case 'React':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={baseClasses}>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'JavaScript':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={baseClasses}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 17.5c0-.8.6-1.5 1.5-1.5s1.5.7 1.5 1.5v.5c0 1.1-.9 2-2 2h-.5c-.8 0-1.5-.7-1.5-1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M7.5 13v4.5c0 1.4-1.1 2.5-2.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'HTML':
      return <Globe className={baseClasses} />;
    case 'CSS':
      return <Layers className={baseClasses} />;
    case 'Tailwind':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={baseClasses}>
          <path d="M6 12c1-3 3-4 6-3 2.5.8 3.5 3 5 3.5 2 .7 4-.3 5-2-1 3-3 4-6 3-2.5-.8-3.5-3-5-3.5-2-.7-4 .3-5 2z" />
          <path d="M2 17c1-3 3-4 6-3 2.5.8 3.5 3 5 3.5 2 .7 4-.3 5-2-1 3-3 4-6 3-2.5-.8-3.5-3-5-3.5-2-.7-4 .3-5 2z" />
        </svg>
      );
    case 'Java':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={baseClasses}>
          <path d="M6 19c3 1.5 9 1.5 12 0M8 22c2.5 1 5.5 1 8 0" strokeLinecap="round" />
          <path d="M10 2c1 2-2 3.5-1 5.5 1 2 3.5 3 2 5M14 2c1 2-2 3.5-1 5.5 1 2 3.5 3 2 5" strokeLinecap="round" />
        </svg>
      );
    case 'Python':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={baseClasses}>
          <path d="M12 2C8 2 7 3.5 7 5.5V8h5v1.5H5.5C3.5 9.5 2 11 2 13.5s1.5 4 3.5 4H7v-2.5c0-1.5 1-2.5 2.5-2.5H15c1.5 0 2.5-1 2.5-2.5V5.5C17.5 3.5 16 2 12 2z" />
          <circle cx="9" cy="5" r="1" fill="currentColor" />
          <path d="M12 22c4 0 5-1.5 5-3.5V16h-5v-1.5h6.5c2 0 3.5-1.5 3.5-4s-1.5-4-3.5-4H17v2.5c0 1.5-1 2.5-2.5 2.5H9c-1.5 0-2.5 1-2.5 2.5v5.5c0 2 1.5 3.5 5.5 3.5z" />
          <circle cx="15" cy="19" r="1" fill="currentColor" />
        </svg>
      );
    case 'C++':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={baseClasses}>
          <path d="M11 6a7 7 0 1 0 0 12" strokeLinecap="round" />
          <path d="M15 12h3M16.5 10.5v3M19.5 12h3M21 10.5v3" strokeLinecap="round" />
        </svg>
      );
    case 'AI':
      return <Bot className={baseClasses} />;
    case 'API':
      return <Network className={baseClasses} />;
    case 'Automation':
      return <Cog className={baseClasses} />;
    case 'Engineering':
      return <Braces className={baseClasses} />;
    case 'Git':
      return <GitBranch className={baseClasses} />;
    case 'GitHub':
      return <GithubIcon className={baseClasses} />;
    case 'VSCode':
      return <Code2 className={baseClasses} />;
    case 'Vite':
      return <Zap className={baseClasses} />;
    case 'ThreeJS':
      return <Boxes className={baseClasses} />;
    case 'R3F':
      return <Cpu className={baseClasses} />;
    case 'GSAP':
      return <Sparkles className={baseClasses} />;
    default:
      return <Terminal className={baseClasses} />;
  }
}
