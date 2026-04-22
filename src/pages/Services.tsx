import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import VisaPathways from "../components/VisaPathways";
import LanguageTraining from "../components/LanguageTraining";
import PartTimeJobGuidance from "../components/PartTimeJobGuidance";
import BankLoanSupport from "../components/BankLoanSupport";

function AbstractSystemVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-md">
        {/* Grid Lines */}
        <motion.path
          d="M0 100H400M0 200H400M0 300H400M100 0V400M200 0V400M300 0V400"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-black/5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Flow Lines */}
        <motion.path
          d="M50 350C50 350 150 350 150 250C150 150 250 150 250 50"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-japan-red/20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "linear" }}
        />
        <motion.path
          d="M100 380C100 380 200 380 200 280C200 180 300 180 300 80"
          stroke="currentColor"
          strokeWidth="1"
          className="text-black/10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 1 }}
        />

        {/* Nodes */}
        {[
          { x: 150, y: 250, r: 4 },
          { x: 250, y: 50, r: 6 },
          { x: 200, y: 280, r: 3 },
          { x: 300, y: 80, r: 4 }
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill="currentColor"
            className={i === 1 ? "text-japan-red" : "text-black/20"}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: i * 0.5 
            }}
          />
        ))}
      </svg>
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-12 h-12 border border-black/5 rounded-full"
      />
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-1/4 w-8 h-8 border border-japan-red/10 rounded-lg rotate-45"
      />
    </div>
  );
}

export default function Services() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 md:pt-48 pb-16 md:pb-32 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            {/* Left Side: Content */}
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xs font-bold uppercase tracking-[0.3em] text-japan-red mb-6 block"
              >
                Services
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-semibold tracking-tight text-black mb-8 leading-[1.1]"
              >
                Structured Pathways <br /> to Japan
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-black/40 font-medium leading-relaxed mb-12 max-w-xl"
              >
                Clear, guided services designed to support every stage of your journey — from language training to visa and beyond.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-6"
              >
                <button 
                  onClick={() => document.getElementById('visa-process-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                  className="px-8 py-4 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-japan-red transition-all duration-300 flex items-center gap-2 group"
                >
                  View Process <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => document.getElementById('language-training-anchor')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border border-black/10 text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
                >
                  Explore Language Training
                </button>
              </motion.div>
            </div>

            {/* Right Side: Abstract Visual */}
            <div className="hidden lg:block">
              <AbstractSystemVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Visa Pathways Section */}
      <VisaPathways />

      {/* Language Training Section */}
      <LanguageTraining />

      {/* Part-Time Job Guidance Section */}
      <PartTimeJobGuidance />

      {/* Bank Loan Support Section */}
      <BankLoanSupport />

    </div>
  );
}

