import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * ParticleField Component
 * Lightweight, procedural particle cloud with subtle blue/violet/cyan vertex colors.
 */
export default function ParticleField({ isMobile = false, prefersReducedMotion = false }) {
  const pointsRef = useRef();

  // Optimized particle counts: 55 on mobile, 200 on desktop
  const particleCount = isMobile ? 55 : 200;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const cyan = new THREE.Color('#38bdf8');
    const violet = new THREE.Color('#a855f7');
    const blue = new THREE.Color('#3b82f6');

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.9 + Math.random() * 2.1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const ratio = Math.random();
      const chosenColor = ratio < 0.45 ? cyan : ratio < 0.75 ? blue : violet;
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return [pos, col];
  }, [particleCount]);

  useFrame((_, delta) => {
    if (prefersReducedMotion || !pointsRef.current) return;
    // Slow continuous orbital rotation
    pointsRef.current.rotation.y += delta * 0.055;
    pointsRef.current.rotation.x += delta * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={particleCount}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
          count={particleCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isMobile ? 0.032 : 0.042}
        vertexColors
        transparent
        opacity={0.82}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
