import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-40 pb-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-japan-red mb-4 block">Get in Touch</span>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-black mb-8">Contact Us</h1>
            <p className="text-xl text-black/40 font-medium leading-relaxed mb-16">
              Have questions about our courses or the visa process? We're here to help you every step of the way.
            </p>

            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-japan-red/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-japan-red" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-2">Phone</h4>
                  <p className="text-xl font-medium">+94 113 502 902</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-japan-red/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-japan-red" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-2">Email</h4>
                  <p className="text-xl font-medium">cnijapanese@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-japan-red/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-japan-red" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-2">Location</h4>
                  <p className="text-xl font-medium">No : 166A, Makola Road, <br /> Kiribathgoda.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-12 rounded-[40px] bg-gray-50 border border-black/5"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-black/40 ml-4">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-black/5 focus:border-japan-red outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-black/40 ml-4">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white border border-black/5 focus:border-japan-red outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-black/40 ml-4">Subject</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-white border border-black/5 focus:border-japan-red outline-none transition-all appearance-none">
                  <option>Student Visa Inquiry</option>
                  <option>Language Course Details</option>
                  <option>General Question</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-black/40 ml-4">Message</label>
                <textarea rows={5} className="w-full px-6 py-4 rounded-2xl bg-white border border-black/5 focus:border-japan-red outline-none transition-all resize-none" placeholder="Tell us about your goals..." />
              </div>

              <button className="w-full py-5 bg-black text-white rounded-2xl font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-japan-red transition-all group">
                Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
