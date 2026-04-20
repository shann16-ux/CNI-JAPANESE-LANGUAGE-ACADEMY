import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

export default function PartTimeJobGuidance() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative group">
          <div className="flex flex-col lg:flex-row items-center gap-16 p-8 md:p-16 rounded-[40px] border border-black/5 bg-gray-50/50 hover:bg-white hover:shadow-2xl transition-all duration-700">
            {/* Left Side: Content */}
            <div className="flex-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="p-3 rounded-2xl bg-japan-red/5 text-japan-red">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
                  Work While You Learn
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                <h3 className="text-xl md:text-2xl font-medium text-black/80 leading-snug">
                  Guidance to find the right part-time opportunities while studying in Japan.
                </h3>
                <p className="text-black/60 leading-relaxed text-lg max-w-xl">
                  We support students in finding and applying for part-time jobs in Japan, helping them gain real-world experience while managing daily expenses with confidence. Our guidance ensures you understand the process, expectations, and opportunities available.
                </p>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-3 pt-4"
              >
                {["Flexible Hours", "Student-Friendly Jobs", "Application Support"].map((tag) => (
                  <span
                    key={tag}
                    className="px-5 py-2 rounded-full bg-white border border-black/5 text-sm font-medium text-black/60 hover:border-japan-red/20 hover:text-japan-red transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right Side: Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="flex-1 w-full aspect-[16/10] rounded-[32px] overflow-hidden shadow-xl"
            >
              <img
                src="https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/4f778853-9e21-4b36-654b-3206281ef100/public"
                alt="Student part-time work in Japan"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
