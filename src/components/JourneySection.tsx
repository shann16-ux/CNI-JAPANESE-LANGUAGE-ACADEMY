import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import JapanNetworkMap from "./JapanNetworkMap";

const journeySteps = [
  {
    parts: [
      { text: "Learn", highlight: true },
      { text: " Japanese (N5 > N3)", highlight: false }
    ]
  },
  {
    parts: [
      { text: "Language ", highlight: false },
      { text: "Exam", highlight: true },
      { text: " (JLPT | NAT | JLCT | JFT)", highlight: false }
    ]
  },
  {
    parts: [
      { text: "Choose Your ", highlight: false },
      { text: "School", highlight: true },
      { text: " in Japan", highlight: false }
    ]
  },
  {
    parts: [
      { text: "Get ", highlight: false },
      { text: "Visa", highlight: true },
      { text: " & Prepare for Interview", highlight: false }
    ]
  },
  {
    parts: [
      { text: "Fly", highlight: true },
      { text: " to Japan & Start Your Journey", highlight: false }
    ]
  }
];

interface JourneyStepProps {
  step: {
    parts: { text: string; highlight: boolean }[];
  };
  index: number;
  progress: any;
  key?: any;
}

function JourneyStep({ step, index, progress }: JourneyStepProps) {
  const start = 0.3 + (index * 0.1);
  const end = start + 0.05;
  const labelOpacity = useTransform(progress, [start, end], [0, 1]);
  const labelX = useTransform(progress, [start, end], [10, 0]);

  return (
    <motion.div
      style={{ opacity: labelOpacity, x: labelX }}
      className="relative w-full flex justify-center"
    >
      <div className="bg-white/40 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] whitespace-nowrap">
        <span className="text-base md:text-lg lg:text-xl font-normal tracking-tight text-black">
          {step.parts.map((part, i) => (
            <span key={i} className={part.highlight ? "text-japan-red" : ""}>
              {part.text}
            </span>
          ))}
        </span>
      </div>
    </motion.div>
  );
}

export default function JourneySection() {
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

  // Phase 1: Editorial Statement Opacity & Y
  const phase1Opacity = useTransform(smoothProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const phase1Y = useTransform(smoothProgress, [0, 0.15, 0.25], [0, 0, -50]);

  // Phase 2: Split Layout Reveal
  const leftX = useTransform(smoothProgress, [0.2, 0.4, 0.8], ["-100%", "0%", "0%"]);
  const rightX = useTransform(smoothProgress, [0.2, 0.4, 0.8], ["100%", "0%", "0%"]);
  const splitOpacity = useTransform(smoothProgress, [0.2, 0.3], [0, 1]);

  // Center Line Growth
  const lineHeight = useTransform(smoothProgress, [0.3, 0.8], ["0%", "100%"]);

  // Phase 3: Final Content Reveal
  const phase3Opacity = useTransform(smoothProgress, [0.8, 0.9], [0, 1]);
  const phase3Y = useTransform(smoothProgress, [0.8, 0.9], [50, 0]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-white">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Phase 1: Editorial Statement */}
        <motion.div 
          style={{ opacity: phase1Opacity, y: phase1Y }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-20 pointer-events-none"
        >
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight text-black"
          >
            Not just Japanese lessons.
          </motion.h2>
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight text-black/40"
          >
            A complete path from Sri Lanka to Japan.
          </motion.h2>
        </motion.div>

        {/* Phase 2: Split Layout */}
        <motion.div 
          style={{ opacity: splitOpacity }}
          className="absolute inset-0 w-full h-full flex z-10"
        >
          {/* Left Side: Sri Lanka */}
          <motion.div 
            style={{ x: leftX }}
            className="relative w-1/2 h-full overflow-hidden border-r border-black/5"
          >
            <img 
              src="https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/bb158825-6d6d-4590-a029-cc6d2e39fa00/public" 
              alt="Sri Lanka" 
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-12 left-12">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40">Starting Point</span>
              <h3 className="text-2xl font-medium text-black">Sri Lanka</h3>
            </div>
          </motion.div>

          {/* Right Side: Japan */}
          <motion.div 
            style={{ x: rightX }}
            className="relative w-1/2 h-full overflow-hidden"
          >
            <img 
              src="https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/29963590-fa95-4601-c8c4-bfdcff3cbc00/public" 
              alt="Japan" 
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-12 right-12 text-right">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40">Destination</span>
              <h3 className="text-2xl font-medium text-black">Japan</h3>
            </div>
          </motion.div>

          {/* Center Vertical Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-black/5 z-20">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-japan-red origin-top"
            />
            
            {/* Animated Labels along the path */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-around py-24">
              {journeySteps.map((step, index) => (
                <JourneyStep 
                  key={index} 
                  step={step} 
                  index={index} 
                  progress={smoothProgress} 
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Phase 3: Our Network Across Japan */}
        <motion.div 
          style={{ opacity: phase3Opacity, y: phase3Y }}
          className="absolute inset-0 z-30 bg-white"
        >
          <div className="h-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left: Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <JapanNetworkMap />
            </motion.div>

            {/* Right: Text Block */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.6 }}
              className="order-1 lg:order-2 flex flex-col items-start text-left pt-2 md:pt-0"
            >
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-japan-red mb-2 md:mb-4">
                Institutional Network
              </span>
              <h2 className="text-3xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight text-black mb-4 md:mb-10">
                Partnered with 100+ <br /> A Grade Japanese Schools
              </h2>
              <p className="text-sm md:text-2xl text-black/50 leading-relaxed font-medium max-w-2xl">
                We work with a trusted network of leading institutions across Japan, 
                giving students access to stronger academic pathways, reliable 
                placement opportunities, and well-connected study options.
              </p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
