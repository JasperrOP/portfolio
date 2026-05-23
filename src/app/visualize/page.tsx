"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Room from "@/components/three/Room";

export default function VisualizePage() {
  return (
    <main className="w-screen h-screen bg-gray">

      <Canvas camera={{ position: [4, 3, 5], fov: 45 }}>

        {/* LIGHTS */}
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
        />

        {/* MODEL */}
        <Room />

        {/* CONTROLS */}
        <OrbitControls
          enablePan={false}
        />

      </Canvas>
    </main>
  );
}