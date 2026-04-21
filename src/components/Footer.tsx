import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-32 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="relative">
              <img 
                src="https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/3cf9ac09-0b5d-4c70-529f-1546eb413e00/public" 
                alt="CNI Logo" 
                className="site-logo" 
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Helping students build their future in Japan through premium language training and comprehensive visa guidance.
            </p>
            <a 
              href="https://lms.cnijapanese.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest hover:border-white/30 hover:text-white transition-all w-fit"
            >
              Student Login
            </a>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-japan-red">Navigation</h4>
            <div className="flex flex-col gap-4">
              {["Services", "About Us", "Gallery", "Contact Us"].map((item) => (
                <Link 
                  key={item}
                  to={`/${item.toLowerCase().replace(" ", "")}`}
                  className="text-white/60 hover:text-white transition-colors text-sm font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-japan-red">Contact</h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-white/60">
                <Phone className="w-4 h-4 text-japan-red" />
                <span className="text-sm">+94 113 502 902</span>
              </div>
              <div className="flex items-center gap-4 text-white/60">
                <Mail className="w-4 h-4 text-japan-red" />
                <span className="text-sm">cnijapanese@gmail.com</span>
              </div>
              <div className="flex items-start gap-4 text-white/60">
                <MapPin className="w-4 h-4 text-japan-red mt-1" />
                <span className="text-sm">No : 166A, <br /> Makola Road, <br /> Kiribathgoda.</span>
              </div>
            </div>
          </div>

          {/* Column 4: Social */}
          <div className="flex flex-col gap-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-japan-red">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: "Facebook", url: "https://www.facebook.com/profile.php?id=61552792306225&mibextid=wwXIfr&mibextid=wwXIfr" },
                { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/cnijapaneselanguage?igsh=M2l1dTl3bmdiazh6" },
                { icon: MessageCircle, label: "WhatsApp", url: "https://wa.me/94113502902" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-japan-red transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-white/20 text-[10px] uppercase tracking-widest">
            © 2026 CNI Japanese Language Academy. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link to="#" className="text-white/20 text-[10px] uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-white/20 text-[10px] uppercase tracking-widest hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
