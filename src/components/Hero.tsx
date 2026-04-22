import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-end pb-24 md:pb-32">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          src="https://iframe.videodelivery.net/d1aa567f87bacc9093a9f92709c21371?autoplay=true&loop=true&muted=true&controls=false"
          className="absolute top-1/2 left-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ border: 'none' }}
          allow="autoplay; encrypted-media; picture-in-picture"
        />
        {/* Dark Overlay - Refined with a slight bottom-heavy gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center text-white">
        {/* Headline - Single line focused */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="mb-4 text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight"
        >
          Your Trusted Pathway <br className="sm:hidden" /> to Japan
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-10 text-base md:text-lg lg:text-xl font-light text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          From your first step to arrival, we guide your journey to{" "}
          <motion.span
            initial={{ color: "#ffffff" }}
            animate={{ color: "#BC002D" }}
            transition={{ duration: 1, delay: 1.6 }}
            className="font-medium"
          >
            study and live in Japan.
          </motion.span>
        </motion.p>

        {/* Buttons - Minimized sizes and spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/contact">
            <button className="group relative px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Get Started <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>
          
          <Link to="/services">
            <button className="px-6 py-2.5 border border-white/20 bg-white/5 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all hover:bg-white/10 hover:border-white/40 active:scale-95">
              View Pathways
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator - Adjusted opacity for cleaner look */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
        <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">Explore</span>
      </motion.div>
    </div>
  );
}
