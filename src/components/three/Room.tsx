"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Room() {

  const { scene } = useGLTF("/models/room.glb");

  useEffect(() => {

    scene.traverse((child: any) => {
      console.log(child.name);
    });

  }, [scene]);

  return (
    <primitive
      object={scene}
      scale={1.5}
      position={[0, -1.2, 0]}
    />
  );
}