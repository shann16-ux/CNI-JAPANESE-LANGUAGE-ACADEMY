import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

interface StepProps {
  title: string;
  description?: string;
  progress: any;
  range: [number, number];
  isLast?: boolean;
  highlight?: boolean;
}

function PathwayStep({ title, progress, range, isLast }: StepProps) {
  const opacity = useTransform(progress, range, [0, 1]);
  const scale = useTransform(progress, range, [0.8, 1]);
  const lineScale = useTransform(progress, [range[0], range[1] + 0.05], [0, 1]);

  return (
    <div className="flex flex-row md:flex-col items-center flex-1 relative w-full md:w-auto pb-8 md:pb-0 last:pb-0">
      {/* Horizontal Line (Desktop) */}
      {!isLast && (
        <div className="hidden md:block absolute top-2 left-[50%] w-full h-[1px] bg-white/10 -z-0">
          <motion.div 
            style={{ scaleX: lineScale }}
            className="h-full bg-white origin-left"
          />
        </div>
      )}

      {/* Vertical Line (Mobile) */}
      {!isLast && (
        <div className="md:hidden absolute left-[7px] top-4 w-[1px] h-full bg-white/10 -z-0">
          <motion.div 
            style={{ scaleY: lineScale }}
            className="w-full bg-white origin-top"
          />
        </div>
      )}

      <motion.div 
        style={{ opacity, scale }}
        className="w-4 h-4 rounded-full border-2 border-white bg-white z-10 mr-6 md:mr-0 md:mb-4 shadow-[0_0_15px_rgba(255,255,255,0.5)] shrink-0"
      />
      
      <motion.span 
        style={{ opacity }}
        className="text-[10px] md:text-xs font-bold md:font-medium uppercase tracking-wider text-white px-0 md:px-2 text-left md:text-center"
      >
        {title}
      </motion.span>
    </div>
  );
}

function LanguageLevel({ title, description, progress, range, highlight }: StepProps) {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [20, 0]);

  return (
    <motion.div 
      style={{ opacity, y }}
      className={`p-5 md:p-8 rounded-2xl border ${highlight ? 'border-white bg-white/10' : 'border-white/10 bg-white/5'} flex-1 transition-all duration-500 backdrop-blur-sm`}
    >
      <h4 className={`text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white`}>
        {title}
      </h4>
      <p className="text-xs md:text-sm text-white/60 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default function SystemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Phase 1: Intro
  const introOpacity = useTransform(smoothProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const introY = useTransform(smoothProgress, [0, 0.1, 0.2], [0, 0, -50]);

  // Phase 2: Language Training
  const langOpacity = useTransform(smoothProgress, [0.15, 0.25, 0.4, 0.45], [0, 1, 1, 0]);
  const langY = useTransform(smoothProgress, [0.15, 0.25, 0.4, 0.45], [50, 0, 0, -50]);

  // Phase 3: Student Visa Pathway
  const visaOpacity = useTransform(smoothProgress, [0.45, 0.55, 0.75, 0.8], [0, 1, 1, 0]);
  const visaY = useTransform(smoothProgress, [0.45, 0.55, 0.75, 0.8], [50, 0, 0, -50]);

  // Phase 4: Additional Support
  const supportOpacity = useTransform(smoothProgress, [0.8, 0.9], [0, 1]);
  const supportY = useTransform(smoothProgress, [0.8, 0.9], [50, 0]);

  return (
    <div ref={containerRef} className="relative h-[600vh] bg-[#BC002D]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center px-6">
        
        {/* Phase 1: Intro */}
        <motion.div 
          style={{ opacity: introOpacity, y: introY }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-16 md:pt-0"
        >
          <h2 className="text-2xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-4 md:mb-6">
            A Complete System. <br /> Not Just a Course.
          </h2>
          <p className="text-sm md:text-xl text-white/60 font-medium tracking-wide">
            Everything you need to move from Sri Lanka to Japan — structured, guided, and proven.
          </p>
        </motion.div>

        {/* Phase 2: Language Training */}
        <motion.div 
          style={{ opacity: langOpacity, y: langY }}
          className="absolute inset-0 flex flex-col items-center justify-center max-w-6xl mx-auto w-full px-6 pt-20 md:pt-0"
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white mb-3 md:mb-4">Highlight Section</span>
          <h3 className="text-xl md:text-5xl font-semibold text-white mb-6 md:mb-12">Japanese Language Training (N5 → N3)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <LanguageLevel 
              title="N5 — Foundation" 
              description="Basic grammar, Hiragana, Katakana, and simple communication." 
              progress={smoothProgress} 
              range={[0.18, 0.23]} 
            />
            <LanguageLevel 
              title="N4 — Development" 
              description="Stronger conversation skills with improved reading and listening." 
              progress={smoothProgress} 
              range={[0.26, 0.31]} 
            />
            <LanguageLevel 
              title="N3 — Real-World Readiness" 
              description="Confident communication for studies and part-time work in Japan." 
              progress={smoothProgress} 
              range={[0.34, 0.39]} 
              highlight 
            />
          </div>
        </motion.div>

        {/* Phase 3: Student Visa Pathway */}
        <motion.div 
          style={{ opacity: visaOpacity, y: visaY }}
          className="absolute inset-0 flex flex-col items-center justify-center max-w-5xl mx-auto w-full px-6 pt-20 md:pt-0"
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white mb-3 md:mb-4">Core Focus</span>
          <h3 className="text-xl md:text-5xl font-semibold text-white mb-8 md:mb-16">Student Visa Pathway</h3>
          
          <div className="flex flex-col md:flex-row w-full mb-8 md:mb-16 px-4 md:px-0">
            <PathwayStep title="Institution Selection" progress={smoothProgress} range={[0.48, 0.52]} />
            <PathwayStep title="Application" progress={smoothProgress} range={[0.55, 0.59]} />
            <PathwayStep title="Documentation" progress={smoothProgress} range={[0.62, 0.66]} />
            <PathwayStep title="Visa Approval" progress={smoothProgress} range={[0.69, 0.73]} isLast />
          </div>

          <p className="text-lg text-white/70 max-w-2xl text-center leading-relaxed">
            We manage your entire journey — from choosing the right institution to securing your visa.
          </p>
        </motion.div>

        {/* Phase 4: Additional Support */}
        <motion.div 
          style={{ opacity: supportOpacity, y: supportY }}
          className="absolute inset-0 flex flex-col items-center justify-center max-w-5xl mx-auto w-full px-6 pt-20 md:pt-0"
        >
          <h3 className="text-xl md:text-5xl font-semibold text-white mb-8 md:mb-16 text-center">Beyond the Classroom</h3>
          
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "Financial Guidance (Bank Loans)",
              "Job Awareness",
              "Pre-Departure Preparation"
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="px-8 py-6 rounded-full border border-white/10 bg-white/5 shadow-sm text-sm font-medium tracking-wide text-white/80"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
