import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

/**
 * MagneticButton Component
 * Adds a subtle, professional magnetic pull to interactive buttons on cursor proximity.
 * Respects prefers-reduced-motion and pointer accuracy (fine pointer only).
 * Fast, responsive, never blocks click events.
 */
export default function MagneticButton({
  children,
  className = '',
  strength = 0.22,
  maxOffset = 6,
  onClick,
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !ref.current) return;

    // Only apply on fine-pointer devices (desktop mouse, trackpad)
    if (typeof window !== 'undefined' && window.matchMedia && !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    // Clamp offset to ensure subtle, strictly controlled movement (no excessive displacement)
    const clampedX = Math.max(-maxOffset, Math.min(maxOffset, distanceX));
    const clampedY = Math.max(-maxOffset, Math.min(maxOffset, distanceY));

    setPosition({ x: clampedX, y: clampedY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  if (prefersReducedMotion) {
    return <div className={`inline-block ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: 'spring',
        stiffness: 320,
        damping: 22,
        mass: 0.25
      }}
      className={`inline-block ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
}
