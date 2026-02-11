'use client';

// Fixed navigation bar with scroll-based styling
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to change navbar appearance
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-1"
        >
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <span className="text-gray-900 font-bold text-xl">Z</span>
          </div>
          <span className="text-2xl font-bold text-white">ION</span>
        </motion.div>

        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Focus', 'Team', 'Community', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="text-gray-200 hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
