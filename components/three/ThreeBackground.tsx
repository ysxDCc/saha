'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const LightOrbs = () => {
  const groupRef = useRef<THREE.Group>(null);
  const count = 40;
  
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      pos.push({
        x: (Math.random() - 0.5) * 15,
        y: (Math.random() - 0.5) * 8,
        z: (Math.random() - 0.5) * 6,
        speed: Math.random() * 0.02 + 0.01,
        color: Math.random() > 0.5 ? '#00ffaa' : '#aa00ff',
      });
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {positions.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[0.04 + Math.random() * 0.03, 8, 8]} />
          <meshBasicMaterial color={p.color} transparent opacity={0.8} />
        </mesh>
      ))}
      {/* Connecting lines */}
      {positions.map((p1, i) =>
        positions.slice(i + 1, i + 3).map((p2, j) => {
          const dist = Math.sqrt(
            (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2 + (p1.z - p2.z) ** 2
          );
          if (dist > 2.5) return null;
          return (
            <line key={`${i}-${j}`}>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={2}
                  array={new Float32Array([p1.x, p1.y, p1.z, p2.x, p2.y, p2.z])}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#00ffaa" transparent opacity={0.08} />
            </line>
          );
        })
      )}
    </group>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-70">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <LightOrbs />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;