/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import IntroLoader from "./components/IntroLoader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <main className="min-h-screen bg-white">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <IntroLoader key="loader" onComplete={() => setIsLoading(false)} />
          ) : (
            <div key="content" className="flex flex-col min-h-screen">
              <Navbar />
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
              <Footer />
            </div>
          )}
        </AnimatePresence>
      </main>
    </Router>
  );
}






