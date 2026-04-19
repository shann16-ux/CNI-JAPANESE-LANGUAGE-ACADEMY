import { motion } from "motion/react";

export default function AboutEditorial() {
  const diffItems = [
    {
      title: "Visa Expertise",
      desc: "Deep knowledge of student visa requirements and documentation."
    },
    {
      title: "Language Preparation",
      desc: "JLPT-focused training designed for real-world communication."
    },
    {
      title: "Institutional Connections",
      desc: "Strong partnerships with leading language schools across Japan."
    }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[10px] font-light uppercase tracking-[0.5em] text-black/40">
            About CNI
          </span>
        </motion.div>

        {/* 2 Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-24 items-start">
          {/* Left Side: Who We Are */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-black/60 leading-relaxed max-w-xl">
              <p>
                CNI Japanese Language Academy is a complete Japan pathway provider, specializing in student visa services, language training, and international education guidance.
              </p>
              <p className="text-black font-medium">
                We are built around one core objective — to successfully send students to Japan with the right preparation.
              </p>
            </div>
          </motion.div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-[1px] h-full bg-black/5 self-stretch" />

          {/* Right Side: What Makes Us Different */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
                What Makes Us Different
              </h2>
              <p className="text-lg text-black/40 font-medium">
                Most institutes focus only on teaching. <br />
                We focus on results — getting you to Japan successfully.
              </p>
            </div>

            {/* Structured Items */}
            <div className="space-y-10">
              {diffItems.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-6">
                    <span className="text-[10px] font-bold text-japan-red mt-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                      0{idx + 1}
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-black tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-black/40 leading-relaxed max-w-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  {idx !== diffItems.length - 1 && (
                    <div className="mt-10 h-[1px] w-full bg-black/[0.03]" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
