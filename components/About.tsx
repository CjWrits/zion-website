'use client';

// About section component with mission and vision
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="about" className="py-32 bg-slate-900/50 backdrop-blur-sm" ref={ref}>
      <motion.div className="max-w-7xl mx-auto px-6" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* About text content */}
          <motion.div style={{ y }}>
            <h2 className="text-5xl font-bold text-white mb-6">
              About Zion
            </h2>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              Zion was founded by <span className="font-semibold">Rahul Wakhale</span>, 
              a second-year student at IIT Jodhpur, supported by <span className="font-semibold">Jalaj Jain</span> 
              from Amity University.
            </p>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              Our mission is to push the limitations of students who struggle with stage fear, 
              low confidence, team miscommunication, and similar challenges.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              We believe in empowering individuals to become confident leaders and effective 
              team players through practical experience and supportive community engagement.
            </p>
          </motion.div>

          {/* Vision and Mission card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
            className="bg-slate-800/50 backdrop-blur-sm p-12 rounded-3xl border border-slate-700"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Our Vision</h3>
                <p className="text-gray-300">
                  To create India's most impactful community for personal and professional growth
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
                <p className="text-gray-300">
                  Empower students to overcome their fears and become confident leaders
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
