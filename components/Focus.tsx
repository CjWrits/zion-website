'use client';

// Focus areas section displaying core development areas
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Core focus areas of the community
const focuses = [
  {
    title: 'Team Building',
    description: 'Learn to work effectively in teams and build lasting professional relationships',
    icon: '',
  },
  {
    title: 'Confidence Building',
    description: 'Overcome stage fear and develop the confidence to express yourself',
    icon: '',
  },
  {
    title: 'Leadership Skills',
    description: 'Support team leaders in making quick, effective decisions',
    icon: '',
  },
  {
    title: 'Communication',
    description: 'Improve team communication and eliminate miscommunication barriers',
    icon: '',
  },
];

export default function Focus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);

  return (
    <section id="focus" className="py-16 md:py-32 bg-slate-800/30 backdrop-blur-sm" ref={ref}>
      <motion.div className="max-w-7xl mx-auto px-4 md:px-6" style={{ opacity }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ y }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What We Focus On
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our core areas of development to help you grow as a leader and team player
          </p>
        </motion.div>

        {/* Focus cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {focuses.map((focus, index) => (
            <motion.div
              key={focus.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
              style={{ y: useTransform(scrollYProgress, [0, 1], [index * 20, -index * 20]) }}
              className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all"
            >
              <div className="text-5xl mb-4">{focus.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {focus.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {focus.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
