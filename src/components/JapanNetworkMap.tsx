import { motion } from "motion/react";

const cities = [
  { name: "Tokyo", x: 343, y: 266, direction: "left", delay: 0.1, extraLen: 60 },
  { name: "Yokohama", x: 333, y: 279, direction: "left", delay: 0.3, extraLen: 20 },
  { name: "Nagoya", x: 279, y: 305, direction: "left", delay: 0.5, extraLen: 70 },
  { name: "Kyoto", x: 253, y: 315, direction: "left", delay: 0.7, extraLen: 30 },
  { name: "Hiroshima", x: 179, y: 353, direction: "left", delay: 0.9, extraLen: 40 },
  { name: "Fukuoka", x: 115, y: 394, direction: "left", delay: 0.8, extraLen: 10 },
  
  { name: "Sendai", x: 389, y: 159, direction: "right", delay: 1.0, extraLen: 20 },
  { name: "Gunma", x: 333, y: 241, direction: "right", delay: 1.1, extraLen: 40 },
  { name: "Chiba", x: 358, y: 271, direction: "right", delay: 0.2, extraLen: 70 },
  { name: "Shizuoka", x: 307, y: 294, direction: "right", delay: 0.4, extraLen: 20 },
  { name: "Osaka", x: 243, y: 325, direction: "right", delay: 0.6, extraLen: 50 },
];

export default function JapanNetworkMap() {
  return (
    <div className="relative w-full pb-[85%] md:pb-[100%] max-w-2xl mx-auto overflow-visible select-none md:scale-100 scale-110 md:translate-y-0 -translate-y-4">
      
      {/* Map Image Base */}
      <div className="absolute inset-0 w-full h-full p-2 md:p-12">
        <img 
          src="https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/a3ff2482-66a6-48ac-cba9-338773d7e000/public" 
          alt="Map of Japan" 
          className="w-full h-full object-contain opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Overlay SVG for Pins and Labels */}
      <svg 
        viewBox="0 0 512 512" 
        className="absolute inset-0 w-full h-full overflow-visible" 
        aria-hidden="true"
        fill="none"
      >
        <g className="pins">
          {cities.map((city) => {
            const isRight = city.direction === "right";
            // Increase line length to push text away from the map
            const lineLen = 35 + (city.extraLen || 0);
            const x1 = isRight ? city.x + 6 : city.x - 6;
            const x2 = isRight ? city.x + lineLen : city.x - lineLen;
            const labelX = isRight ? city.x + lineLen + 8 : city.x - lineLen - 8;
            
            return (
              <motion.g 
                key={city.name} 
                className="map-location"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: city.delay }}
              >
                {/* Point on map */}
                <circle className="pin-dot" cx={city.x} cy={city.y} r="4" fill="#BC002D" />
                <circle cx={city.x} cy={city.y} r="8" stroke="#BC002D" strokeWidth="0.5" className="opacity-20 translate-z-0" />
                
                {/* Connecting Line */}
                <line 
                  className="pin-line stroke-japan-red/30" 
                  x1={x1} y1={city.y} 
                  x2={x2} y2={city.y} 
                  strokeWidth="1" 
                />
                
                {/* City Label - Increased font size */}
                <text 
                  className="pin-label fill-black/80 font-bold uppercase" 
                  x={labelX} y={city.y + 4} 
                  fontSize="12"
                  letterSpacing="0.1em"
                  textAnchor={isRight ? "start" : "end"}
                >
                  {city.name}
                </text>
              </motion.g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
