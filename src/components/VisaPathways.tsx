import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Consultation & Eligibility",
    description: "We assess your background, goals, and eligibility to determine the right pathway."
  },
  {
    number: "02",
    title: "Institution Selection",
    description: "We help you choose the most suitable Japanese language school or institution based on your profile."
  },
  {
    number: "03",
    title: "Interview Preparation",
    description: "We train you to confidently handle interviews with the right guidance and practice."
  },
  {
    number: "04",
    title: "Visa Processing",
    description: "We guide you through the visa process with a structured approach to ensure approval."
  },
  {
    number: "05",
    title: "Application & Documentation",
    description: "We assist with applications, required documents, and financial preparation."
  },
  {
    number: "06",
    title: "Pre-Departure Guidance",
    description: "We prepare you for life in Japan, including culture, expectations, and practical readiness."
  }
];

function StepItem({ step, index, total }: { step: typeof steps[0], index: number, total: number, key?: string | number }) {
  const isLeft = index % 2 === 0;
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  
  return (
    <div ref={ref} className="relative flex items-start justify-between mb-16 md:mb-24 last:mb-0 w-full pl-10 md:pl-0">
      {/* Timeline Dot */}
      <motion.div 
        animate={{ 
          scale: isInView ? 1.5 : 1,
          backgroundColor: isInView ? "#ffffff" : "transparent",
          borderColor: isInView ? "#ffffff" : "rgba(255,255,255,0.2)"
        }}
        className="absolute left-2 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 mt-1.5 md:mt-0" 
      />
      
      {/* Content */}
      <div className={`w-full md:w-[45%] ${isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12 md:ml-auto"}`}>
        <motion.div
          animate={{ 
            opacity: isInView ? 1 : 0.3,
            scale: isInView ? 1.05 : 1,
            x: isInView ? 0 : (isLeft ? -10 : 10)
          }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-left md:contents"
        >
          <span className={`font-bold tracking-widest text-xs md:text-sm mb-2 block transition-colors duration-500 ${isInView ? "text-white" : "text-white/20"}`}>
            {step.number}
          </span>
          <h3 className={`text-xl md:text-3xl font-bold md:font-semibold mb-3 md:mb-4 transition-colors duration-500 ${isInView ? "text-white" : "text-white/40"}`}>
            {step.title}
          </h3>
          <p className={`text-sm md:text-lg leading-relaxed max-w-sm transition-colors duration-500 ${isLeft ? "md:ml-auto md:mr-0" : ""} ${isInView ? "text-white/70" : "text-white/20"}`}>
            {step.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function VisaPathways() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative py-10 md:py-32 bg-[#BC002D] overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
      >
        <img 
          src="https://picsum.photos/seed/travel/1920/1080?grayscale" 
          alt="Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Sticky Label */}
      <div className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2 z-20">
        <div className="sticky top-1/2 -rotate-90 origin-left">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20 whitespace-nowrap">
            Step-by-Step Process
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6"
          >
            Student Visa Pathways
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 font-medium mb-8"
          >
            A complete, guided process to help you successfully study and move to Japan.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/60 leading-relaxed text-lg"
          >
            We manage every step of your journey — from evaluating your eligibility to preparing you for life in Japan. 
            Our structured approach ensures a smooth, reliable transition with the right guidance at every stage.
          </motion.p>
        </div>

        {/* Steps Section Title */}
        <div id="visa-process-anchor" className="text-center mb-24">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold text-white mb-4"
          >
            A Structured Process You Can Trust
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 font-medium"
          >
            From your first consultation to your departure, every step is carefully guided to ensure clarity, confidence, and success.
          </motion.p>
        </div>

        {/* Timeline Section */}
        <div ref={timelineRef} className="relative max-w-5xl mx-auto py-12 md:py-20">
          {/* Vertical Line */}
          <div className="absolute left-2 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-white"
            />
          </div>

          {/* Steps */}
          <div className="flex flex-col">
            {steps.map((step, index) => (
              <StepItem 
                key={step.number} 
                step={step} 
                index={index} 
                total={steps.length} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
