import { motion } from "motion/react";
import AboutEditorial from "../components/AboutEditorial";
import CEOMessage from "../components/CEOMessage";
import VisionMission from "../components/VisionMission";

export default function About() {
  return (
    <div className="pt-40 pb-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-japan-red mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-black mb-8">About Us</h1>
            <p className="text-xl text-black/60 font-medium leading-relaxed mb-8">
              CNI Japanese Institute was founded with a single mission: to bridge the gap between Sri Lankan students and their dreams of living in Japan.
            </p>
            <div className="space-y-6 text-black/40 leading-relaxed font-medium">
              <p>
                We believe that language is just the first step. A successful transition requires cultural understanding, legal guidance, and personal support.
              </p>
              <p>
                Our team of experienced educators and consultants work tirelessly to ensure every student is prepared not just for an exam, but for a new life.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative lg:aspect-auto aspect-[16/10] h-full"
          >
            <div className="w-full h-full rounded-[60px] overflow-hidden shadow-2xl">
              <img 
                src="https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/05964bc0-5253-4164-d3eb-4f5b609ddb00/public" 
                alt="CNI Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        <AboutEditorial />
      </div>

      <CEOMessage />

      <VisionMission />
    </div>
  );
}
