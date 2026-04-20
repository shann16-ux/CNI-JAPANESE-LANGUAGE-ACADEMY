import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  content: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "New Student Intake for April 2027 Now Open",
    image: "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/c57381d0-c929-474a-8497-f6e06f747c00/public",
    excerpt: "Start your journey to Japan with our upcoming April intake. Limited seats available for N5 and N4 levels.",
    content: "We are excited to announce that applications for the April 2027 intake are now officially open. This intake is specifically designed for students aiming for the October 2027 visa cycle. Our comprehensive program includes intensive language training, document preparation, and interview coaching."
  },
  {
    id: 2,
    title: "Success Stories: 50+ Visas Approved in Q1",
    image: "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/ec05191c-adba-4fe7-8fe8-7653dd856100/public",
    excerpt: "Celebrating a milestone achievement with our students securing their futures in Japan.",
    content: "The first quarter of 2026 has been remarkable for CNI. Over 50 of our students have successfully received their Certificate of Eligibility (COE) and visa approvals. These students are now preparing for their departure to various prestigious language schools and universities across Tokyo, Osaka, and Nagoya."
  },
  {
    id: 3,
    title: "Upcoming Workshop: Life in Japan for Students",
    image: "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/d90d5a2f-834c-42ce-6f73-d6d51107b400/public",
    excerpt: "Join our free pre-departure workshop to learn about part-time work, accommodation, and culture.",
    content: "Moving to a new country can be daunting. Our upcoming workshop covers essential topics such as finding part-time jobs, opening bank accounts, navigating the Japanese health insurance system, and understanding social etiquette. Open to all current students and their parents."
  },
  {
    id: 4,
    title: "CNI Partners with Top Japanese Language Schools",
    image: "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/c22c1cad-dfc5-4517-beef-a9bb62926000/public",
    excerpt: "Expanding our network to provide even better opportunities for our students in Japan.",
    content: "We have recently signed partnership agreements with three more top-tier language schools in Tokyo and Fukuoka. This expansion allows us to offer more diverse study options and better support for our students upon arrival in Japan."
  }
];

function NewsCard({ item, isExpanded, onToggle, isFeatured = false }: { 
  item: NewsItem, 
  isExpanded: boolean, 
  onToggle: () => void,
  isFeatured?: boolean,
  key?: number | string
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      onClick={onToggle}
      className={`group cursor-pointer bg-white rounded-3xl overflow-hidden border border-black/[0.03] transition-all duration-700 ${
        isExpanded ? 'shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] z-10' : 'hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)]'
      } ${isFeatured ? 'lg:flex lg:items-center lg:gap-0' : 'flex flex-col'}`}
    >
      <div className={`relative overflow-hidden ${isFeatured ? 'lg:w-full aspect-[16/10]' : 'w-full aspect-[4/3]'}`}>
        <motion.img
          src={item.image}
          alt={item.title}
          animate={{ scale: isExpanded ? 1.05 : 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
      </div>

      <div className={`p-8 md:p-12 ${isFeatured ? 'lg:w-full' : ''}`}>
        <motion.div layout="position" className="space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-[1px] bg-japan-red/30" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-japan-red/60">
              {isFeatured ? 'Featured Story' : 'Update'}
            </span>
          </div>
          <h3 
            className={`${isFeatured ? 'text-3xl md:text-4xl lg:text-5xl' : 'text-2xl md:text-3xl'} font-bold text-black leading-[1.1] tracking-tight group-hover:text-japan-red transition-colors duration-500`}
          >
            {item.title}
          </h3>
        </motion.div>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-8 space-y-8">
                <p className="text-black/50 leading-relaxed text-lg md:text-xl font-medium">
                  {item.content}
                </p>
                <div className="flex items-center gap-4 text-japan-red font-bold text-sm uppercase tracking-widest group/btn">
                  <span className="relative">
                    Read Full Article
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-japan-red transition-all duration-500 group-hover/btn:w-full" />
                  </span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover/btn:translate-x-2" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function NewsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const featuredNews = newsData[0];
  const otherNews = newsData.slice(1);

  return (
    <section className="py-32 md:py-48 bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row: Heading + Featured Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24 items-center">
          {/* Left Side Heading Block */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-black"
            >
              Latest Updates
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl md:text-2xl text-black/50 font-medium leading-relaxed max-w-md"
            >
              Stay updated with the latest from CNI and opportunities related to Japan.
            </motion.p>
          </div>

          {/* Right Side Featured Card */}
          <NewsCard
            item={featuredNews}
            isExpanded={expandedId === featuredNews.id}
            onToggle={() => setExpandedId(expandedId === featuredNews.id ? null : featuredNews.id)}
            isFeatured={true}
          />
        </div>

        {/* Bottom Row: 3 News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {otherNews.map((item) => (
            <NewsCard
              key={item.id}
              item={item}
              isExpanded={expandedId === item.id}
              onToggle={() => setExpandedId(expandedId === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
