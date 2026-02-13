'use client';

// Team section displaying founder profiles
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

// Team member data
const team = [
  {
    name: 'Rahul Wakhale',
    role: 'Co-Founder',
    institution: 'IIT Jodhpur',
    year: 'Second Year',
    image: '/rhul.jpeg',
  },
  {
    name: 'Ayush Shrivastava',
    role: 'Community Manager',
    institution: 'BBDITM',
    year: 'Second Year',
    image: '/par.jpeg',
  },
  {
    name: 'Prashansa Doharey',
    role: 'Manager',
    institution: 'Mandsaur University',
    year: 'Second Year',
    image: '/prashansa.jpeg',
  },
  {
    name: 'Chirag Gupta',
    role: 'Manager',
    institution: 'BBDITM',
    year: 'Second Year',
    image: '/cj.jpeg',
  },
  {
    name: 'Saiyam Jain',
    role: 'Manager',
    institution: 'BVIMR (IPU)',
    year: 'Second Year',
    image: '/sai.jpeg',
  },
  {
    name: 'Jlaj Jain',
    role: 'Co-Founder',
    institution: 'Amity University',
    year: 'Second Year',
    image: '/jlaj.png',
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);

  return (
    <section id="team" className="py-16 md:py-32 bg-slate-900/50 backdrop-blur-sm" ref={ref}>
      <motion.div className="max-w-7xl mx-auto px-4 md:px-9" style={{ opacity }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ y }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The visionaries behind Zion community
          </p>
        </motion.div>

        {/* Team member cards */}
        <div className="md:grid md:grid-cols-3 lg:grid-cols-6 gap-5 hidden">
          {team.map((member, index) => (
            <motion.div
              key={`${member.name}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              style={{ y: useTransform(scrollYProgress, [0, 1], [(index % 3) * 30, -(index % 3) * 30]) }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl text-center border border-slate-700"
            >
              {/* Profile image */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-slate-700 rounded-full mx-auto mb-4 md:mb-5 overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                ) : null}
              </div>
              {/* Member details */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-1">{member.role}</p>
              <p className="text-sm text-gray-400">{member.institution}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile swipeable cards */}
        <div className="md:hidden overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
            {team.map((member, index) => (
              <motion.div
                key={`${member.name}-${index}`}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl text-center border border-slate-700 w-64 flex-shrink-0"
              >
                <div className="w-32 h-32 bg-slate-700 rounded-full mx-auto mb-4 overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  ) : null}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-base text-gray-300 mb-1">{member.role}</p>
                <p className="text-sm text-gray-400">{member.institution}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">← Swipe to see more →</p>
        </div>
      </motion.div>
    </section>
  );
}
