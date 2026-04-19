import { motion } from "motion/react";

export default function VisionMission() {
  const items = [
    {
      number: "01",
      title: "Vision",
      content: "To be a leading provider of Japan education pathways, creating globally competitive individuals."
    },
    {
      number: "02",
      title: "Mission",
      content: "To guide students through a structured and reliable system that ensures success in both visa approval and life in Japan."
    },
    {
      number: "03",
      title: "Approach",
      content: (
        <ul className="space-y-1">
          <li>Step-by-step student guidance</li>
          <li>Personalized consultation</li>
          <li>Strong follow-up system</li>
          <li>Continuous support until departure</li>
        </ul>
      )
    }
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/japan-architecture/1920/1080"
          alt="Japan Architecture"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Bottom Content Strip */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-10 w-full bg-black/40 backdrop-blur-md border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
            {items.map((item, idx) => (
              <div key={item.title} className="relative group">
                {/* Vertical Divider for Desktop */}
                {idx !== 0 && (
                  <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />
                )}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                  className="md:px-12"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-bold text-japan-red tracking-widest opacity-60">
                      {item.number}
                    </span>
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div className="text-white/70 text-base md:text-lg leading-relaxed font-light max-w-sm">
                    {item.content}
                  </div>
                </motion.div>

                {/* Horizontal Divider for Mobile */}
                {idx !== items.length - 1 && (
                  <div className="md:hidden mt-12 h-[1px] w-full bg-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
