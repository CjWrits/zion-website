'use client';

// Community section with stats and call-to-action
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.4]);

  return (
    <section id="community" className="py-16 md:py-32 relative" ref={ref}>
      {/* Center divider line with design */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-white/60" />
        <div className="w-20 h-0.5 bg-gradient-to-r from-white/80 via-white/40 to-white/80" />
        <div className="w-2 h-2 rounded-full bg-white/60" />
      </div>
      
      <motion.div className="max-w-7xl mx-auto px-4 md:px-6" style={{ opacity }}>
        {/* Community header and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ y }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Become part of India's first leadership and team building community
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ scale }}
            className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl max-w-md mx-auto"
          >
            <p className="text-gray-300 mb-6">
              Join us to develop your leadership skills, build confidence, and connect with like-minded individuals
            </p>
            <motion.a
              href="https://forms.gle/2vQbJeAMZz2bkuZo6"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
            >
              Get Started
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Community statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-20"
        >
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-2 text-white">20+</h3>
            <p className="text-gray-400">Community Members</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-2 text-white">5+</h3>
            <p className="text-gray-400">Events Conducted</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-2 text-white">73%</h3>
            <p className="text-gray-400">Success Rate</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
