import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "py-4 bg-white/80 backdrop-blur-md border-bottom border-black/5 shadow-sm" 
            : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-50">
            <img 
              src="https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/3cf9ac09-0b5d-4c70-529f-1546eb413e00/public" 
              alt="CNI Logo" 
              className="site-logo transition-all duration-500" 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium uppercase tracking-widest transition-colors duration-500 group ${
                  isScrolled ? "text-black/60 hover:text-black" : "text-white/60 hover:text-white"
                } ${location.pathname === link.path ? (isScrolled ? "text-black" : "text-white") : ""}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                  isScrolled ? "bg-black" : "bg-white"
                } ${location.pathname === link.path ? "w-full" : ""}`} />
              </Link>
            ))}
          </div>

          {/* CTA & Hamburger */}
          <div className="flex items-center gap-4">
            <a 
              href="https://lms.cnijapanese.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 ${
                isScrolled 
                  ? "bg-black text-white hover:bg-japan-red shadow-lg shadow-black/10" 
                  : "bg-white text-black hover:bg-japan-red hover:text-white shadow-lg shadow-white/10"
              }`}
            >
              Student Login
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`relative z-50 lg:hidden p-2 transition-colors duration-500 ${
                isScrolled || isMobileMenuOpen ? "text-black" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-4xl md:text-5xl font-semibold tracking-tight text-black hover:text-japan-red transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 w-full px-6 flex flex-col items-center"
              >
                <a 
                  href="https://lms.cnijapanese.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-10 py-5 bg-japan-red text-white rounded-full text-sm font-bold uppercase tracking-[0.2em] shadow-xl shadow-japan-red/20 hover:scale-105 transition-all"
                >
                  Student Login
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
