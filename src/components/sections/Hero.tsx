"use client";

import { motion } from "framer-motion";
import BeamScene from "@/components/three/BeamScene";

export default function Hero() {
  return (
    <section className="relative h-screen bg-black overflow-hidden">

      {/* MAIN CONTAINER */}
      <div className="relative z-10 flex h-full">

        {/* LEFT CONTENT */}
        <div className="
          w-[42%]
          h-full
          flex
          items-center
          pl-10
          md:pl-24
        ">

          <div className="max-w-[600px]">

            {/* SMALL LABEL */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                uppercase
                tracking-[0.3em]
                text-zinc-500
                text-sm
                mb-6
              "
            >
              Full Stack Developer
            </motion.p>

            {/* MAIN TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="
                text-[5rem]
                md:text-[7rem]
                leading-[0.9]
                font-bold
                tracking-[-0.06em]
                text-white
              "
            >
              Ayush
              <br />
              Patel
            </motion.h1>

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
                max-w-[500px]
              "
            >
              Building futuristic digital experiences,
              immersive interfaces, scalable full-stack
              systems, and AI-powered applications.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 mt-10"
            >
              <button className="
                px-7
                py-3
                rounded-full
                bg-purple-600
                hover:bg-purple-500
                transition-all
                text-sm
                font-medium
              ">
                View Projects
              </button>

              <button className="
                px-7
                py-3
                rounded-full
                border
                border-zinc-700
                hover:border-purple-500
                hover:bg-purple-500/10
                transition-all
                text-sm
                font-medium
              ">
                Visualize in 3D
              </button>
            </motion.div>

          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative w-[58%] h-full">
          <BeamScene />
        </div>

      </div>

    </section>
  );
}