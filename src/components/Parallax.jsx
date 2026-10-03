import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

/**
 * Parallax Component
 * Provides subtle scroll parallax depth for background atmospheric layers or decor.
 * Subdued offset, completely disabled under prefers-reduced-motion.
 */
export default function Parallax({
  children,
  offset = -30,
  className = '',
  clamp = true
}) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    clamp ? [-Math.abs(offset) / 2, Math.abs(offset) / 2] : [0, offset]
  );

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, willChange: 'transform' }} className="w-full h-full transform-gpu">
        {children}
      </motion.div>
    </div>
  );
}
