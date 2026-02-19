'use client';

// Hero section with animated typewriter effect
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const phrases = ['For the people', 'By the people', 'With the people'] as const;
  const [phraseIndex, setPhraseIndex] = useState(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Typewriter effect implementation
  useEffect(() => {
    const interval = setInterval(() => {
      const currentPhrase = phrases[phraseIndex];
      
      if (!isDeletingRef.current) {
        // Typing phase - using slice on trusted static content
        const safeText = String(currentPhrase).slice(0, charIndexRef.current + 1);
        setDisplayText(safeText);
        charIndexRef.current++;
        
        if (charIndexRef.current === currentPhrase.length) {
          isDeletingRef.current = true;
        }
      } else {
        // Deleting phase
        const safeText = String(currentPhrase).slice(0, charIndexRef.current);
        setDisplayText(safeText);
        charIndexRef.current--;
        
        if (charIndexRef.current === 0) {
          isDeletingRef.current = false;
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeletingRef.current ? 50 : 100);

    return () => clearInterval(interval);
  }, [phraseIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <motion.div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32 text-center" style={{ y, opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main title */}
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold text-white mb-6">
            ZION
          </h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            India's First Community for Team Building & Leadership
          </motion.p>

          {/* Animated tagline with typewriter effect */}
          <motion.p
            className="text-lg text-gray-300 italic mb-12 min-h-[28px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            "{displayText}<span className="animate-pulse">|</span>"
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors text-center"
            >
              Learn More
            </motion.a>
            <motion.a
              href="#community"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors text-center"
            >
              Join Community
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
}
