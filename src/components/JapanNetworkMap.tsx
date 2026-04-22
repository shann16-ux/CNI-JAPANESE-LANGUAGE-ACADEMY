import { motion } from "motion/react";

export default function JapanNetworkMap() {
  return (
    <div className="relative w-full max-w-2xl mx-auto select-none">
      <motion.img 
        src="https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/99573e94-a092-4f12-f4d8-b95669c62f00/public" 
        alt="Map of CNI Network in Japan" 
        className="w-full h-auto object-contain drop-shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
