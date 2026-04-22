import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import React from "react";

const branches = [
  {
    id: "kiribathgoda",
    name: "Kiribathgoda",
    address: "No : 166A, Makola Road, Kiribathgoda."
  },
  {
    id: "matara",
    name: "Matara",
    address: "139/5, Anagarika Dharmapala Road, Matara."
  },
  {
    id: "kurunegala",
    name: "Kurunegala",
    address: "294/1/1, Kandy Road, Kurunegala."
  }
];

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");
  const [activeBranch, setActiveBranch] = useState(branches[0]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : "Network error. Please check your connection.");
    }
  };

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

            <div className="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-black/5 space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-12 border-b border-black/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-japan-red text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-japan-red/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Call Us</h4>
                    <p className="text-lg font-semibold text-black tracking-tight">+94 113 502 902</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-japan-red text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-japan-red/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Email</h4>
                    <p className="text-lg font-semibold text-black tracking-tight">cnijapanese@gmail.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-6">Our Branch Network</h4>
                <div className="flex flex-wrap gap-2 md:gap-4 mb-8">
                  {branches.map((branch) => (
                    <button
                      key={branch.id}
                      onClick={() => setActiveBranch(branch)}
                      className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                        activeBranch.id === branch.id 
                          ? "bg-black text-white shadow-xl shadow-black/10" 
                          : "bg-white text-black/40 hover:text-black border border-black/5"
                      }`}
                    >
                      {branch.name}
                    </button>
                  ))}
                </div>

                <motion.div 
                  key={activeBranch.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-6 pt-4 min-h-[100px]"
                >
                  <div className="w-12 h-12 rounded-2xl bg-japan-red text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-japan-red/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Academy Address</h4>
                    <p className="text-xl font-semibold text-black tracking-tight leading-snug max-w-sm">
                      {activeBranch.address}
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="pt-8 border-t border-black/5">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-4 text-center">Academy Hours</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-2xl border border-black/5">
                    <p className="text-[10px] font-bold uppercase text-black/30 mb-1">Mon - Sat</p>
                    <p className="text-sm font-bold text-black">8:30 AM - 5:30 PM</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-black/5">
                    <p className="text-[10px] font-bold uppercase text-black/30 mb-1">Sunday</p>
                    <p className="text-sm font-bold text-black">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-12 rounded-[40px] bg-gray-50 border border-black/5 relative"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
              >
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-Japan-red" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">Message Sent!</h3>
                  <p className="text-black/50">Thank you for reaching out. We have received your inquiry and will get back to you shortly.</p>
                </div>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-black text-white rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-japan-red transition-all"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value="6c6890ca-2e27-466a-9e98-1be930f45eb7" />
                <input type="hidden" name="subject" value="New Student Inquiry - CNI Japanese" />
                <input type="hidden" name="from_name" value="CNI Japanese Academy" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-black/40 ml-4">Full Name</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-black/5 focus:border-japan-red outline-none transition-all" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-black/40 ml-4">Email Address</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-black/5 focus:border-japan-red outline-none transition-all" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-black/40 ml-4">Phone Number</label>
                  <input 
                    required
                    name="phone"
                    type="tel" 
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-black/5 focus:border-japan-red outline-none transition-all" 
                    placeholder="+94 7X XXX XXXX" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-black/40 ml-4">Inquiry Category</label>
                  <select 
                    name="category"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-black/5 focus:border-japan-red outline-none transition-all appearance-none"
                  >
                    <option>Student Visa Inquiry</option>
                    <option>Language Course Details</option>
                    <option>General Question</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-black/40 ml-4">Message</label>
                  <textarea 
                    required
                    name="message"
                    rows={5} 
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-black/5 focus:border-japan-red outline-none transition-all resize-none" 
                    placeholder="Tell us about your goals..." 
                  />
                </div>

                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-50 border border-red-100 flex items-center gap-3 text-red-600 text-sm"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p>{errorMessage}</p>
                  </motion.div>
                )}

                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-5 bg-black text-white rounded-2xl font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-japan-red transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>Sending... <Loader2 className="w-4 h-4 animate-spin" /></>
                  ) : (
                    <>Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
