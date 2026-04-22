import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { BookOpen, ClipboardCheck, BarChart3, MessageSquare } from "lucide-react";

const levels = [
  {
    number: "01",
    title: "N5 — Beginner Level",
    description: "Build your foundation with Hiragana, Katakana, essential grammar, vocabulary, and simple sentence construction.",
    image: "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/23cb4237-2c7a-4de2-6035-8e79023ca200/public"
  },
  {
    number: "02",
    title: "N4 — Intermediate Level",
    description: "Expand your grammar and vocabulary while improving reading, listening, and everyday conversation skills.",
    image: "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/3e4168b6-aa03-407f-f848-63f86d4bfb00/public"
  },
  {
    number: "03",
    title: "N3 — Advanced Level",
    description: "Master advanced grammar and Kanji while developing real-world communication skills for academic and workplace environments.",
    image: "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/a93f7eab-529f-49bc-f33a-db65b4d6a400/public"
  }
];

const trainingMethods = [
  {
    title: "JLPT-Focused Curriculum",
    description: "Comprehensive study plans designed specifically for JLPT success.",
    icon: BookOpen
  },
  {
    title: "Mock Exams & Practice Tests",
    description: "Regular testing to build confidence and track exam readiness.",
    icon: ClipboardCheck
  },
  {
    title: "Performance Tracking",
    description: "Detailed analytics on your progress and areas for improvement.",
    icon: BarChart3
  },
  {
    title: "Individual Feedback",
    description: "Personalized guidance from expert instructors to refine your skills.",
    icon: MessageSquare
  }
];

export default function LanguageTraining() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);
  const springX = useSpring(x, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section id="language-training-anchor" className="bg-[#BC002D] text-white">
      {/* Section Intro */}
      <div className="pt-16 md:pt-32 pb-8 md:pb-12 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6"
          >
            Japanese Language Training <br className="hidden md:block" /> (JLPT N5 – N3)
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl font-medium mb-8 opacity-80"
          >
            A structured learning system built to meet visa requirements and prepare you for life in Japan.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/60 leading-relaxed text-lg"
          >
            Language proficiency is essential for studying and adapting in Japan. Our JLPT-focused training program takes you from beginner to advanced levels with a clear, step-by-step approach designed for real-world success.
          </motion.p>
        </div>
      </div>

      {/* Scroll-Triggered Carousel */}
      <div ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x: springX }} className="flex gap-12 px-[10vw]">
            {levels.map((level, idx) => (
              <div 
                key={idx} 
                className="w-[80vw] md:w-[70vw] lg:w-[60vw] flex-shrink-0"
              >
                <div className="relative h-[500px] md:h-[600px] lg:h-[550px] overflow-hidden rounded-[40px] border border-white/20 group">
                  {/* Background Image */}
                  <img
                    src={level.image}
                    alt={level.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                  
                  {/* Text Content - Positioned Bottom Left */}
                  <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 lg:p-16 space-y-4 md:space-y-6">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-4"
                    >
                      <span className="text-xl font-bold tracking-tighter text-white/60">{level.number}</span>
                      <div className="h-[1px] w-12 bg-white/30" />
                    </motion.div>
                    
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight"
                    >
                      {level.title}
                    </motion.h3>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl"
                    >
                      {level.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Training Method */}
      <div className="py-10 md:py-32 max-w-7xl mx-auto px-6">
        <div className="pt-32 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-24">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-semibold mb-6"
              >
                Our Training Method
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/60 font-medium text-lg"
              >
                A focused approach designed to ensure consistent progress and exam readiness.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trainingMethods.map((method, idx) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col items-center text-center p-12 rounded-[32px] bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-500 group"
                >
                  <div className="mb-8 p-4 rounded-2xl bg-white/10 group-hover:scale-110 transition-transform duration-500">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 tracking-tight">
                    {method.title}
                  </h4>
                  <p className="text-white/70 leading-relaxed max-w-xs">
                    {method.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



