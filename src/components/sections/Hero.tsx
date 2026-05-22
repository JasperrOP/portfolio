"use client";

import { motion } from "framer-motion";
import BeamScene from "@/components/three/BeamScene";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#050505]">

      {/* FULLSCREEN 3D BACKGROUND */}
        <BeamScene />

      {/* DARK CINEMATIC OVERLAY */}
      <div
        className="
        absolute
        inset-0
        bg-black/20
        z-[1]
      "
      />

      {/* CONTENT */}
      <div
        className="
        relative
        z-10
        h-full
        flex
        items-center
      "
      >
        <div
          className="
          w-full
          max-w-[1400px]
          mx-auto
          px-10
          md:px-24
        "
        >

          <div className="max-w-[650px]">

            

            {/* MAIN TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="
                text-[5rem]
                md:text-[7rem]
                leading-[0.88]
                font-bold
                tracking-[-0.07em]
                text-white
              "
            >
              Ayush &nbsp;Patel
            </motion.h1>
            <br />

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="
                mt-8
                text-zinc-400
                text-lg
                leading-relaxed
                max-w-[520px]
              "
            >
              Building futuristic digital experiences,
              immersive interfaces, scalable full-stack
              systems, and AI-powered applications.
            </motion.p>
            <br />
            {/* BUTTONS */}
            {/* BUTTONS */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  className="
    flex
    items-center
    gap-6
    mt-12
  "
>

  

  {/* SECONDARY BUTTON */}
  <button
    className="
      group
      relative

      h-[56px]
      px-9

      rounded-[18px]

      border
      border-white/10

      bg-white/[0.04]
      backdrop-blur-xl

      text-white
      text-[15px]
      font-medium

      transition-all
      duration-300
      ease-out

      hover:bg-white/[0.07]
      hover:border-purple-400/30
      hover:shadow-[0_0_35px_rgba(168,85,247,0.12)]
    "
  >

    {/* INNER LIGHT */}
    <div
      className="
        absolute
        inset-[1px]

        rounded-[17px]

        bg-gradient-to-b
        from-white/[0.06]
        to-transparent
      "
    />

    <span
      className="
        relative
        z-10

        flex
        items-center
        gap-3
      "
    >
      Visualize in 3D

      <span
        className="
          opacity-70

          transition-all
          duration-300

          group-hover:rotate-12
          group-hover:opacity-100
        "
      >
        ✦
      </span>
    </span>
  </button>

</motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}