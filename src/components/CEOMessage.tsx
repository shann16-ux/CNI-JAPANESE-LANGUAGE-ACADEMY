import { motion } from "motion/react";

export default function CEOMessage() {
  return (
    <section className="py-32 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[10px] font-light uppercase tracking-[0.5em] text-black/40">
            A Message from the CEO
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-start">
          {/* Left Side: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gray-200"
          >
            <img
              src="https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/3a69b071-ba96-4d62-f03e-5e2f3d2bc900/public"
              alt="CEO Portrait"
              className="w-full h-full object-cover transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Right Side: Content */}
          <div className="relative">
            {/* Background Quote Mark */}
            <div className="absolute -top-12 -left-8 text-[12rem] font-serif text-black/[0.03] select-none pointer-events-none">
              &ldquo;
            </div>

            <div className="relative space-y-8 pl-4 border-l border-black/5">
              {[
                "At CNI Japanese Language Academy, our journey has always been driven by one clear purpose — to create real opportunities for students to build their future beyond borders.",
                "We understand that choosing to study in a country like Japan is not just an academic decision, but a life-changing step that requires the right guidance, preparation, and trust.",
                "From the very beginning, our focus has been to provide students with a clear, structured, and reliable pathway to achieve their goals. We do not believe in simply offering services — we believe in delivering outcomes.",
                "Every student we guide represents a responsibility, and we are committed to ensuring their success at every stage of the journey.",
                "As we continue to grow, our commitment remains the same: To guide every student with integrity, professionalism, and a results-driven approach."
              ].map((para, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                  className={`text-lg md:text-xl leading-relaxed ${
                    idx === 4 ? "text-black font-medium" : "text-black/60"
                  }`}
                >
                  {para}
                </motion.p>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="pt-8 space-y-12"
              >
                <p className="text-xl font-medium text-black">
                  We look forward to being a part of your journey to Japan.
                </p>

                <div className="space-y-1">
                  <p className="text-black font-semibold">— CEO</p>
                  <p className="text-sm text-black/40 uppercase tracking-widest">
                    CNI Japanese Language Academy
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
