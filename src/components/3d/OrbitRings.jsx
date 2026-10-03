import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

/**
 * OrbitRings Component
 * 2–3 thin geometric rings with small orbiting nodes and differential slow rotation.
 */
export default function OrbitRings({ isMobile = false, prefersReducedMotion = false }) {
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();
  const timeRef = useRef(0);

  // Discrete micro-nodes on Ring 1 (Cyan)
  const ring1Nodes = useMemo(() => {
    const nodes = [];
    const count = isMobile ? 3 : 5;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      nodes.push({
        x: Math.cos(angle) * 1.82,
        y: Math.sin(angle) * 1.82,
        size: 0.045
      });
    }
    return nodes;
  }, [isMobile]);

  // Discrete micro-nodes on Ring 2 (Violet)
  const ring2Nodes = useMemo(() => {
    const nodes = [];
    const count = isMobile ? 2 : 4;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + 0.4;
      nodes.push({
        x: Math.cos(angle) * 2.22,
        y: Math.sin(angle) * 2.22,
        size: 0.038
      });
    }
    return nodes;
  }, [isMobile]);

  useFrame((_, delta) => {
    if (prefersReducedMotion) return;

    timeRef.current += delta;
    const time = timeRef.current;

    // Ring 1 (Cyan) rotation & gentle inclination precession
    if (ring1.current) {
      ring1.current.rotation.z += delta * 0.26;
      ring1.current.rotation.x = 0.55 + Math.sin(time * 0.5) * 0.08;
    }

    // Ring 2 (Violet) counter-rotation
    if (ring2.current) {
      ring2.current.rotation.z -= delta * 0.2;
      ring2.current.rotation.y = -0.45 + Math.cos(time * 0.6) * 0.1;
    }

    // Ring 3 (Outer Horizon) slow orbital drift
    if (ring3.current) {
      ring3.current.rotation.x += delta * 0.14;
      ring3.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group>
      {/* Ring 1: Primary Cyan Orbital Ring */}
      <group ref={ring1} rotation={[0.55, 0.35, 0]}>
        <mesh>
          <torusGeometry args={[1.82, 0.013, 16, isMobile ? 54 : 96]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0284c7"
            emissiveIntensity={0.65}
            roughness={0.2}
            metalness={0.85}
          />
        </mesh>

        {/* Orbiting micro-nodes on Ring 1 */}
        {ring1Nodes.map((node, i) => (
          <mesh key={`r1-node-${i}`} position={[node.x, node.y, 0]}>
            <sphereGeometry args={[node.size, 12, 12]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#38bdf8"
              emissiveIntensity={1.8}
            />
          </mesh>
        ))}
      </group>

      {/* Ring 2: Secondary Violet Orbital Ring */}
      <group ref={ring2} rotation={[-0.65, 0.45, 0.2]}>
        <mesh>
          <torusGeometry args={[2.22, 0.011, 16, isMobile ? 54 : 96]} />
          <meshStandardMaterial
            color="#c084fc"
            emissive="#7c3aed"
            emissiveIntensity={0.6}
            roughness={0.25}
            metalness={0.8}
          />
        </mesh>

        {/* Orbiting micro-nodes on Ring 2 */}
        {ring2Nodes.map((node, i) => (
          <mesh key={`r2-node-${i}`} position={[node.x, node.y, 0]}>
            <sphereGeometry args={[node.size, 12, 12]} />
            <meshStandardMaterial
              color="#ede9fe"
              emissive="#a855f7"
              emissiveIntensity={1.6}
            />
          </mesh>
        ))}
      </group>

      {/* Ring 3: Outer Horizon Ring (Faint Cyan Boundary) */}
      <group ref={ring3} rotation={[1.15, -0.4, 0.75]}>
        <mesh>
          <torusGeometry args={[2.58, 0.008, 14, isMobile ? 40 : 80]} />
          <meshBasicMaterial
            color="#38bdf8"
            transparent
            opacity={0.32}
          />
        </mesh>
      </group>
    </group>
  );
}
