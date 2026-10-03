import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

/**
 * Reveal Component
 * High-performance, subtle scroll reveal with custom cubic-bezier easing.
 * Fast, responsive, respects prefers-reduced-motion, never blocks interaction.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.38,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'none'
  distance = 16,
  viewportMargin = '-20px 0px',
  once = true
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  // Calculate direction offsets (subtle displacements)
  let initialX = 0;
  let initialY = 0;

  if (direction === 'up') initialY = distance;
  else if (direction === 'down') initialY = -distance;
  else if (direction === 'left') initialX = distance;
  else if (direction === 'right') initialX = -distance;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialX,
        y: initialY
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0
      }}
      viewport={{ once, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] // Snappy start, silk-smooth settling
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
