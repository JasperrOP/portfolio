"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function FloatingParticles() {
  const ref = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = [];
    
    // INCREASED COUNT
    for (let i = 0; i < 700; i++) {
      positions.push(
        (Math.random() - 0.5) * 3.2,
        (Math.random() - 0.5) * 3.5,
        (Math.random() - 0.5) * 1.2
      );
    }
    return new Float32Array(positions);
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.01;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.02;
    }
  });

  return (
    <Points
      ref={ref}
      positions={particles}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#d8b4fe"
        size={0.005}           // DECREASED SIZE (Was 0.015)
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}