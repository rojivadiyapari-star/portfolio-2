import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * FloatingNodes Component
 * Connected nodes, structural connecting lines, and small floating geometric polyhedra.
 */
export default function FloatingNodes({ isMobile = false, prefersReducedMotion = false }) {
  const latticeRef = useRef();
  const shape1 = useRef();
  const shape2 = useRef();
  const shape3 = useRef();
  const timeRef = useRef(0);

  useFrame((_, delta) => {
    if (prefersReducedMotion) return;

    timeRef.current += delta;
    const time = timeRef.current;

    // 1. Slow rotation of the connecting neural lattice
    if (latticeRef.current) {
      latticeRef.current.rotation.y -= delta * 0.08;
      latticeRef.current.rotation.z += delta * 0.04;
    }

    // 2. Individual drifting and tumbling motions for floating geometric shapes
    if (shape1.current) {
      shape1.current.position.y = 0.55 + Math.sin(time * 0.9) * 0.12;
      shape1.current.position.x = Math.cos(time * 0.4) * 2.3;
      shape1.current.position.z = Math.sin(time * 0.4) * 2.3;
      shape1.current.rotation.x += delta * 0.4;
      shape1.current.rotation.y += delta * 0.5;
    }

    if (shape2.current) {
      shape2.current.position.y = -0.65 + Math.cos(time * 0.8) * 0.1;
      shape2.current.position.x = Math.sin(time * 0.35 + 1.5) * 2.1;
      shape2.current.position.z = Math.cos(time * 0.35 + 1.5) * 2.1;
      shape2.current.rotation.y += delta * 0.35;
      shape2.current.rotation.z += delta * 0.45;
    }

    if (shape3.current && !isMobile) {
      shape3.current.position.y = 0.15 + Math.sin(time * 1.1 + 0.8) * 0.1;
      shape3.current.position.x = Math.cos(time * 0.28 + 3.0) * 2.5;
      shape3.current.position.z = Math.sin(time * 0.28 + 3.0) * 2.5;
      shape3.current.rotation.x += delta * 0.3;
      shape3.current.rotation.z += delta * 0.3;
    }
  });

  return (
    <group>
      {/* 1. Connected Neural Lattice (Connecting Lines) */}
      <group ref={latticeRef}>
        <mesh>
          <icosahedronGeometry args={[1.45, 1]} />
          <meshBasicMaterial
            color="#818cf8"
            wireframe
            transparent
            opacity={0.24}
          />
        </mesh>

        {/* Vertex Connected Nodes */}
        <points>
          <icosahedronGeometry args={[1.45, 1]} />
          <pointsMaterial
            size={0.055}
            color="#c084fc"
            transparent
            opacity={0.9}
            blending={THREE.AdditiveBlending}
          />
        </points>
      </group>

      {/* 2. Small Floating Geometric Shapes */}
      {/* Shape 1: Octahedron (Cyan) */}
      <mesh ref={shape1} position={[2.3, 0.55, 0]}>
        <octahedronGeometry args={[0.075, 0]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={0.8}
          roughness={0.2}
          wireframe={false}
        />
      </mesh>

      {/* Shape 2: Tetrahedron (Violet) */}
      <mesh ref={shape2} position={[-2.1, -0.65, 0]}>
        <tetrahedronGeometry args={[0.08, 0]} />
        <meshStandardMaterial
          color="#c084fc"
          emissive="#7c3aed"
          emissiveIntensity={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Shape 3: Octahedron (Electric Blue - desktop only for performance) */}
      {!isMobile && (
        <mesh ref={shape3} position={[0, 0.15, 2.5]}>
          <octahedronGeometry args={[0.065, 0]} />
          <meshStandardMaterial
            color="#60a5fa"
            emissive="#2563eb"
            emissiveIntensity={0.7}
            roughness={0.25}
          />
        </mesh>
      )}
    </group>
  );
}
