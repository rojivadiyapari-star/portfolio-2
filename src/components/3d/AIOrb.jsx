import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

/**
 * AIOrb Component
 * Central abstract glowing AI sphere with metallic core, wireframe cage, and pulsating nucleus.
 */
export default function AIOrb({ isMobile = false, prefersReducedMotion = false }) {
  const orbGroup = useRef();
  const innerNucleus = useRef();
  const wireframeShell = useRef();
  const timeRef = useRef(0);

  useFrame((_, delta) => {
    if (prefersReducedMotion || !orbGroup.current) return;

    timeRef.current += delta;
    const time = timeRef.current;

    // Smooth floating levitation
    orbGroup.current.position.y = Math.sin(time * 1.3) * 0.07;
    orbGroup.current.rotation.y += delta * 0.22;
    orbGroup.current.rotation.x = Math.sin(time * 0.7) * 0.08;

    // Outer wireframe counter-rotation
    if (wireframeShell.current) {
      wireframeShell.current.rotation.y -= delta * 0.15;
      wireframeShell.current.rotation.z += delta * 0.08;
    }

    // Inner nucleus breathing pulse
    if (innerNucleus.current) {
      const pulse = 1 + Math.sin(time * 2.2) * 0.06;
      innerNucleus.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <group ref={orbGroup}>
      {/* 1. Dark metallic sphere with subtle cyan specular glow */}
      <mesh>
        <sphereGeometry args={[0.88, isMobile ? 20 : 32, isMobile ? 20 : 32]} />
        <meshStandardMaterial
          color="#080c14"
          emissive="#0369a1"
          emissiveIntensity={0.5}
          roughness={0.14}
          metalness={0.92}
        />
      </mesh>

      {/* 2. Geodesic wireframe shell surrounding the core */}
      <mesh ref={wireframeShell}>
        <sphereGeometry args={[0.95, isMobile ? 16 : 24, isMobile ? 16 : 24]} />
        <meshBasicMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* 3. Inner glowing radiant nucleus */}
      <mesh ref={innerNucleus}>
        <sphereGeometry args={[0.36, 16, 16]} />
        <meshStandardMaterial
          color="#67e8f9"
          emissive="#38bdf8"
          emissiveIntensity={1.9}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}
