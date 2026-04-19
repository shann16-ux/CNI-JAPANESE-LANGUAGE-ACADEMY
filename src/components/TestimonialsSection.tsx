import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import React from "react";

const reviews = [
  { 
    id: 1, 
    name: "Achintha Induranga", 
    src: "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/4208222d-7f23-4d3d-c4a5-bfd47af67d00/public",
    x: "10%", 
    y: "15%", 
    delay: 0.1, 
    rotate: -2, 
    width: 280 
  },
  { 
    id: 2, 
    name: "Dilshan Buddhika", 
    src: "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/62a23ec2-f3af-4971-acd9-0bf916753500/public",
    x: "35%", 
    y: "8%", 
    delay: 0.3, 
    rotate: 1, 
    width: 300 
  },
  { 
    id: 3, 
    name: "Pulina Wijerathna", 
    src: "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/ec8da6d0-baca-4229-6123-15a994c40d00/public",
    x: "62%", 
    y: "10%", 
    delay: 0.5, 
    rotate: -1, 
    width: 260 
  },
  { 
    id: 4, 
    name: "Shenal Sehanza", 
    src: "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/763aadae-d827-4cfe-525e-b2c938d47a00/public",
    x: "85%", 
    y: "12%", 
    delay: 0.2, 
    rotate: 3, 
    width: 280 
  },
  { 
    id: 5, 
    name: "DN DN", 
    src: "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/f2fadb3b-9009-4041-a359-8e0acb855d00/public",
    x: "55%", 
    y: "28%", 
    delay: 0.7, 
    rotate: -2, 
    width: 240 
  },
  { 
    id: 6, 
    name: "Onali Karunanayake", 
    src: "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/41b55969-3923-42b0-22f4-1470e1c28500/public",
    x: "5%", 
    y: "42%", 
    delay: 0.4, 
    rotate: 2, 
    width: 260 
  },
  { 
    id: 7, 
    name: "Purna Withanage", 
    src: "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/64efb2b5-cab9-4ca8-d742-dc7dbf936100/public",
    x: "82%", 
    y: "45%", 
    delay: 0.6, 
    rotate: -1, 
    width: 280 
  },
  { 
    id: 8, 
    name: "Kaushalya Thennakoon", 
    src: "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/ebc1e8a0-0fe6-4722-932a-5d054a67a400/public",
    x: "8%", 
    y: "72%", 
    delay: 0.8, 
    rotate: 1, 
    width: 320 
  },
  { 
    id: 9, 
    name: "Himaya Amarasinghe", 
    src: "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/b46eeac6-548b-4037-71e9-e79decd2d000/public",
    x: "32%", 
    y: "85%", 
    delay: 0.3, 
    rotate: -2, 
    width: 280 
  },
  { 
    id: 10, 
    name: "Pazy Karunarathna", 
    src: "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/3208a2d2-c2ce-45ff-5eb3-f43964407300/public",
    x: "60%", 
    y: "80%", 
    delay: 0.5, 
    rotate: 2, 
    width: 260 
  },
  { 
    id: 11, 
    name: "Dinu M. Disanayaka", 
    src: "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/d9f6f08e-6889-427e-2561-a66899486f00/public",
    x: "85%", 
    y: "75%", 
    delay: 0.7, 
    rotate: -1, 
    width: 300 
  },
];

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const titleScale = useTransform(scrollYProgress, [0.2, 0.4], [0.8, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, name: string) => {
    e.currentTarget.src = `https://picsum.photos/seed/${name.replace(/\s+/g, '')}/600/400`;
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-48 md:py-64 bg-[#FDFDFD] overflow-hidden min-h-[120vh] flex items-center justify-center"
    >
      {/* Subtle Ambient Background Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-japan-red/5 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[150px]"
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h2
          style={{ scale: titleScale, opacity: titleOpacity }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black leading-[1.1]"
        >
          Real Stories from <br />
          <span className="text-japan-red">Our Students</span>
        </motion.h2>
      </div>

      {/* Floating Review Cards */}
      <div className="absolute inset-0 z-20 pointer-events-none md:pointer-events-auto">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              delay: review.delay,
              ease: [0.21, 0.47, 0.32, 0.98]
            }}
            style={{
              left: review.x,
              top: review.y,
              rotate: review.rotate,
              width: review.width,
            }}
            className="absolute hidden md:block overflow-visible"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -15, 
                rotate: 0,
                zIndex: 50,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-black/5 transition-shadow hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] cursor-pointer overflow-visible"
            >
              <img
                src={review.src}
                alt={review.name}
                className="floating-media"
                loading="eager"
                onError={(e) => handleImageError(e, review.name)}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        ))}

        {/* Mobile Layout: Simplified Grid/List for small screens */}
        <div className="md:hidden mt-24 px-6 grid grid-cols-1 gap-6 relative z-30">
          {reviews.slice(0, 4).map((review) => (
            <motion.div
              key={`mobile-${review.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg border border-black/5 overflow-visible"
            >
              <img
                src={review.src}
                alt={review.name}
                className="floating-media"
                loading="eager"
                onError={(e) => handleImageError(e, review.name)}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

