import { motion } from "motion/react";

interface IntroLoaderProps {
  onComplete: () => void;
  key?: string;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden"
    >
      {/* The Red Circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 1, 15], 
          opacity: [0, 1, 1] 
        }}
        transition={{ 
          duration: 1.8, 
          times: [0, 0.4, 1],
          ease: "easeInOut" 
        }}
        onAnimationComplete={onComplete}
        className="w-32 h-32 rounded-full bg-[#BC002D]"
      />
    </motion.div>
  );
}
