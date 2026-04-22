import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const galleryImages = [
  {
    id: 1,
    src: "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/e0ad5dd3-bcb1-412d-f925-b41e7b094c00/public",
    className: "w-full aspect-[4/3] z-10",
    initial: { x: 0, y: 0 },
    float: { y: [0, -15, 0], x: [0, 5, 0] },
    delay: 0.2
  },
  {
    id: 2,
    src: "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/7b7321ad-0f9e-431f-ba2f-6cd337126c00/public",
    className: "absolute -top-12 -right-12 w-1/2 aspect-[3/4] z-20 shadow-xl",
    initial: { x: 20, y: -20 },
    float: { y: [0, 10, 0], x: [0, -5, 0] },
    delay: 0.4
  },
  {
    id: 3,
    src: "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/ee3d809a-b5f5-43f6-872a-8e5fb7ceef00/public",
    className: "absolute -bottom-16 -left-12 w-3/5 aspect-[3/2] z-30 shadow-2xl",
    initial: { x: -20, y: 20 },
    float: { y: [0, -10, 0], x: [0, 8, 0] },
    delay: 0.6
  }
];

export default function GalleryPreview() {
  return (
    <section className="pt-10 pb-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-24 items-center">
          
          {/* Left Side: Text Content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black mb-6">
                Life at CNI
              </h2>
              <p className="text-lg md:text-xl text-black/40 font-medium tracking-wide mb-12 leading-relaxed">
                A glimpse into the moments that shape your journey. From cultural celebrations 
                to classroom breakthroughs, see how our students thrive.
              </p>
              
              <Link to="/gallery">
                <motion.button
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-3 text-black font-semibold text-sm uppercase tracking-[0.2em]"
                >
                  View Full Gallery 
                  <span className="w-10 h-[1px] bg-black group-hover:w-16 transition-all duration-300" />
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
 
          {/* Right Side: Creative Composition */}
          <div className="relative mt-4 lg:mt-0">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              {galleryImages.map((img) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.9, ...img.initial }}
                  whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  animate={img.float}
                  transition={{ 
                    duration: 1, 
                    delay: img.delay,
                    ease: [0.23, 1, 0.32, 1],
                    x: {
                      duration: 5 + img.id,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: img.delay + 1
                    },
                    y: {
                      duration: 5 + img.id,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: img.delay + 1
                    }
                  }}
                  className={img.className}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full rounded-2xl overflow-hidden border border-black/5 bg-gray-100"
                  >
                    <img
                      src={img.src}
                      alt={`Life at CNI ${img.id}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
