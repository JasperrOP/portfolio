export default function Home() {
  return (
    <main className="relative h-screen w-full flex flex-col justify-end p-8 md:p-24 pb-16 z-10">
      <div className="flex flex-col gap-6">
        <h1 className="text-6xl md:text-[9rem] font-bold tracking-tighter uppercase leading-none">
          Ayush Patel
        </h1>
        
        <p className="text-gray-400 text-lg md:text-2xl max-w-2xl font-light">
          Crafting scalable digital experiences. Specializing in full-stack architecture, MERN, and machine learning integrations.
        </p>

        <button className="mt-8 w-fit px-8 py-4 border border-white/20 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
          Visualize in 3D
        </button>
      </div>
    </main>
  );
}