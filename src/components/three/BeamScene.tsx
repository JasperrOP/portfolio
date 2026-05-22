"use client";

import { Canvas } from "@react-three/fiber";
import BeamShader from "./BeamShader";
import FloatingParticles from "./FloatingParticles";

export default function BeamScene() {
  return (
    <div className="relative w-full h-full">

      {/* COLOR PICKER */}
      <div
        className="
        absolute
        top-10
        right-10
        z-20
        flex
        gap-3
      "
      >
        <div className="w-4 h-4 rounded-full bg-purple-500" />
        <div className="w-4 h-4 rounded-full bg-cyan-400" />
        <div className="w-4 h-4 rounded-full bg-emerald-400" />
      </div>

      {/* FLOATING ORB */}
      <div
        className="
        absolute
        top-16
        right-24
        w-5
        h-5
        rounded-full
        bg-purple-500
        shadow-[0_0_40px_#a855f7]
        animate-pulse
        z-20
      "
      />

      

      {/* VIGNETTE */}
      <div
        className="
        absolute
        inset-0
        pointer-events-none
        z-10
      "
      />

      {/* THREE CANVAS */}
      <Canvas
  dpr={[1, 2]}
  gl={{
    alpha: true,
    antialias: true,
  }}
  camera={{
    position: [0, 0, 1],
    fov: 45,
  }}
>
  <BeamShader />
  <FloatingParticles />
</Canvas>
    </div>
  );
}