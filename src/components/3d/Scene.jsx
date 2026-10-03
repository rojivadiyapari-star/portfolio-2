import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import AIOrb from './AIOrb';
import OrbitRings from './OrbitRings';
import FloatingNodes from './FloatingNodes';
import ParticleField from './ParticleField';

/**
 * Scene Component
 * High-quality, lightweight 3D AI core scene.
 * Coordinates AIOrb, OrbitRings, FloatingNodes, and ParticleField with subtle futuristic lighting,
 * smooth 3D camera movement, and cursor parallax.
 */
export default function Scene({ isMobile = false, prefersReducedMotion = false }) {
  const rootGroup = useRef();
  const timeRef = useRef(0);
  const lookAtTarget = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state, delta) => {
    if (!rootGroup.current) return;

    if (!prefersReducedMotion) {
      const safeDelta = Math.min(delta, 0.05);
      timeRef.current += safeDelta;

      // 1. Slow, continuous global rotation
      rootGroup.current.rotation.y += safeDelta * 0.09;

      // 2. Window scroll position integration for subtle 3D camera travel
      const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
      const scrollProgress = Math.min(1, Math.max(0, scrollY / 700));

      // 3. Mouse parallax & gentle cursor response with smooth lerping
      const targetRotX = -state.pointer.y * 0.24 - scrollProgress * 0.2;
      const targetRotZ = -state.pointer.x * 0.08;

      rootGroup.current.rotation.x = THREE.MathUtils.lerp(
        rootGroup.current.rotation.x,
        targetRotX,
        safeDelta * 2.2
      );
      rootGroup.current.rotation.z = THREE.MathUtils.lerp(
        rootGroup.current.rotation.z,
        targetRotZ,
        safeDelta * 2.0
      );

      // Subtle positional parallax translation
      rootGroup.current.position.x = THREE.MathUtils.lerp(
        rootGroup.current.position.x,
        state.pointer.x * 0.12,
        safeDelta * 2.0
      );
      rootGroup.current.position.y = THREE.MathUtils.lerp(
        rootGroup.current.position.y,
        state.pointer.y * 0.1 - scrollProgress * 0.15,
        safeDelta * 2.0
      );

      // 4. Subtle 3D camera movement, cinematic breathing & scroll depth tracking
      const breathingZ = Math.sin(timeRef.current * 0.45) * 0.07;
      const breathingY = Math.cos(timeRef.current * 0.35) * 0.03;

      const targetCamX = state.pointer.x * 0.32;
      const targetCamY = state.pointer.y * 0.2 + breathingY - scrollProgress * 0.35;
      const targetCamZ = (isMobile ? 5.8 : 5.0) + breathingZ + scrollProgress * 0.45;

      state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetCamX, safeDelta * 1.8);
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetCamY, safeDelta * 1.8);
      state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetCamZ, safeDelta * 1.4);

      // Smooth camera lookAt point tracking
      const targetLookX = state.pointer.x * 0.05;
      const targetLookY = state.pointer.y * 0.04 - scrollProgress * 0.1;
      lookAtTarget.current.x = THREE.MathUtils.lerp(lookAtTarget.current.x, targetLookX, safeDelta * 2.0);
      lookAtTarget.current.y = THREE.MathUtils.lerp(lookAtTarget.current.y, targetLookY, safeDelta * 2.0);
      state.camera.lookAt(lookAtTarget.current);
    } else {
      // In reduced-motion mode, set neutral position
      state.camera.position.set(0, 0, isMobile ? 5.8 : 5.0);
      state.camera.lookAt(0, 0, 0);
    }
  });

  return (
    <group ref={rootGroup}>
      {/* Subtle Futuristic Lighting System (No heavy post-processing needed) */}
      <ambientLight intensity={0.45} />

      {/* Primary Key Light (Cyan) */}
      <pointLight position={[3.5, 4, 3.5]} intensity={2.6} color="#38bdf8" distance={14} />

      {/* Rim Fill Light (Violet) */}
      <pointLight position={[-3.5, -2.5, -3]} intensity={2.0} color="#a855f7" distance={14} />

      {/* Bottom Subtle Base Light (Deep Blue) */}
      <pointLight position={[0, -4, 2]} intensity={1.2} color="#3b82f6" distance={10} />

      {/* Directional Soft Accent Light for metallic ring glints */}
      <directionalLight position={[0, 5, 4]} intensity={1.0} color="#ffffff" />

      {/* Central Abstract Glowing AI Sphere */}
      <AIOrb isMobile={isMobile} prefersReducedMotion={prefersReducedMotion} />

      {/* Thin Precision Geometric Rings with Orbiting Nodes */}
      <OrbitRings isMobile={isMobile} prefersReducedMotion={prefersReducedMotion} />

      {/* Connected Nodes, Lattice Lines & Floating Geometric Shapes */}
      <FloatingNodes isMobile={isMobile} prefersReducedMotion={prefersReducedMotion} />

      {/* Floating Background Particle Field */}
      <ParticleField isMobile={isMobile} prefersReducedMotion={prefersReducedMotion} />
    </group>
  );
}
