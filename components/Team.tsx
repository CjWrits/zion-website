'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import GalaxyBackground from './GalaxyBackground';


const team = [
  {
    name: 'Rahul Wakhale',
    role: 'Co-Founder',
    image: '/rhul.jpeg',
    portfolio: '/portfolio/rahul-wakhale',
    galaxyColor: '#3B82F6',
  },
  {
    name: 'Ayush Shrivastava',
    role: 'Community Manager',
    image: '/par.jpeg',
    portfolio: '/portfolio/ayush-shrivastava',
    galaxyColor: '#8B5CF6',
  },
  // {
  //   name: 'Prashansa Doharey',
  //   role: 'Social Media Manager',
  //   image: '/prashansa.jpeg',
  //   portfolio: '/portfolio/prashansa-doharey',
  //   galaxyColor: '#EC4899',
  // },
  {
    name: 'Saiyam jain',
    role: 'Recruiter',
    image: '/sai.jpeg',
    portfolio: '/portfolio/saiyam-jain',
    galaxyColor: '#F59E0B',
  },
  {
    name: 'Chirag Gupta',
    role: 'CTO',
    image: '/cj.jpeg',
    portfolio: '/portfolio/chirag-gupta',
    galaxyColor: '#10B981',
  },
  {
    name: 'Jalaj Jain',
    role: 'Co-Founder',
    image: '/j.png',
    portfolio: '/portfolio/jalaj-jain',
    galaxyColor: '#EF4444',
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [warpingIndex, setWarpingIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      
      const particles = card.querySelectorAll('.particle');
      gsap.to(particles, {
        y: 'random(-20, 20)',
        x: 'random(-20, 20)',
        opacity: 'random(0.3, 1)',
        duration: 'random(2, 4)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.1,
      });
    });
  }, [isInView]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    const card = cardRefs.current[index];
    if (!card) return;

    gsap.to(card, {
      scale: 1.15,
      z: 100,
      rotateY: 8,
      rotateX: 8,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto',
    });

    const glow = card.querySelector('.glow-effect');
    gsap.to(glow, {
      opacity: 1,
      scale: 1.5,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto',
    });

    const particles = card.querySelectorAll('.particle');
    gsap.to(particles, {
      scale: 2,
      opacity: 1,
      duration: 0.6,
      overwrite: 'auto',
    });
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null);
    const card = cardRefs.current[index];
    if (!card) return;

    gsap.to(card, {
      scale: 1,
      z: 0,
      rotateY: 0,
      rotateX: 0,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto',
    });

    const glow = card.querySelector('.glow-effect');
    gsap.to(glow, {
      opacity: 0,
      scale: 1,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto',
    });

    const particles = card.querySelectorAll('.particle');
    gsap.to(particles, {
      scale: 1,
      duration: 0.6,
      overwrite: 'auto',
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  const handleCardClick = (index: number, portfolio: string, color: string) => {
    setWarpingIndex(index);
    
    setTimeout(() => {
      window.location.href = portfolio;
      setWarpingIndex(null);
    }, 800);
  };

  return (
    <section id="team" className="relative py-20 md:py-32 overflow-hidden" ref={ref}>
      {/* Center divider line with design */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        <div className="w-2 h-2 rounded-full bg-white/60" />
        <div className="w-20 h-0.5 bg-gradient-to-r from-white/80 via-white/40 to-white/80" />
        <div className="w-2 h-2 rounded-full bg-white/60" />
      </div>
      
      <GalaxyBackground />
      
      <motion.div className="relative max-w-7xl mx-auto px-4 md:px-9" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ y }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6"
            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            Meet Our Team
          </motion.h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            The cosmic visionaries behind Zion community
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 ">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              ref={(el) => { cardRefs.current[index] = el; }}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.8, ease: 'easeOut' }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onClick={() => handleCardClick(index, member.portfolio, member.galaxyColor)}
              className="relative group cursor-pointer"
              style={{ perspective: '1500px', transformStyle: 'preserve-3d' }}
            >
              {/* Floating particles */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="particle absolute w-2 h-2 rounded-full opacity-0"
                  style={{
                    background: member.galaxyColor,
                    left: `${((i * 37.3 + index * 17.1) % 100)}%`,
                    top: `${((i * 53.7 + index * 23.9) % 100)}%`,
                    boxShadow: `0 0 20px ${member.galaxyColor}, 0 0 40px ${member.galaxyColor}`,
                  }}
                />
              ))}

              {/* Glow effect */}
              <div
                className="glow-effect absolute -inset-8 rounded-3xl opacity-0 blur-3xl"
                style={{ background: `radial-gradient(circle, ${member.galaxyColor}80, transparent 60%)` }}
              />

              {/* Card */}
              
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-6 md:p-8 rounded-3xl border-2 border-slate-700/50 overflow-hidden h-full shadow-2xl">
                {/* Animated border */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${member.galaxyColor}60, transparent, ${member.galaxyColor}60)`,
                    backgroundSize: '200% 200%',
                    animation: 'gradient 3s ease infinite',
                  }}
                />

                {/* Inner glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                  style={{
                    boxShadow: `inset 0 0 60px ${member.galaxyColor}40`,
                  }}
                />

                {/* Orbiting ring effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    border: `3px solid ${member.galaxyColor}60`,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  animate={hoveredIndex === index ? { rotate: 360 } : {}}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />

                {/* Full warp effect on click */}
                {warpingIndex === index && (
                  <motion.div
                    className="absolute inset-0 z-50 rounded-3xl overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {/* Radial energy waves */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={`wave-${i}`}
                        className="absolute inset-0 rounded-full border-4"
                        style={{
                          borderColor: member.galaxyColor,
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                        animate={{
                          scale: [0, 3],
                          opacity: [1, 0],
                        }}
                        transition={{
                          duration: 0.8,
                          delay: i * 0.1,
                          ease: 'easeOut',
                        }}
                      />
                    ))}
                    
                    {/* Particle explosion */}
                    {[...Array(30)].map((_, i) => {
                      const angle = (i / 30) * Math.PI * 2;
                      return (
                        <motion.div
                          key={`particle-${i}`}
                          className="absolute w-2 h-2 rounded-full"
                          style={{
                            background: member.galaxyColor,
                            left: '50%',
                            top: '50%',
                            boxShadow: `0 0 20px ${member.galaxyColor}`,
                          }}
                          animate={{
                            x: Math.cos(angle) * 200,
                            y: Math.sin(angle) * 200,
                            opacity: [1, 0],
                            scale: [1, 0],
                          }}
                          transition={{
                            duration: 0.8,
                            ease: 'easeOut',
                          }}
                        />
                      );
                    })}

                    {/* Warp speed lines */}
                    {[...Array(40)].map((_, i) => (
                      <motion.div
                        key={`line-${i}`}
                        className="absolute w-1 h-full"
                        style={{
                          background: `linear-gradient(to bottom, transparent, ${member.galaxyColor}, transparent)`,
                          left: `${(i / 40) * 100}%`,
                          transformOrigin: 'center',
                        }}
                        animate={{
                          scaleY: [0, 3, 0],
                          opacity: [0, 1, 0],
                          scaleX: [1, 0.5, 0.2],
                        }}
                        transition={{
                          duration: 0.6,
                          delay: i * 0.01,
                          ease: 'easeInOut',
                        }}
                      />
                    ))}

                    {/* Central vortex */}
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(circle, ${member.galaxyColor}, transparent 70%)`,
                      }}
                      animate={{
                        scale: [1, 0],
                        rotate: [0, 720],
                        opacity: [1, 0],
                      }}
                      transition={{
                        duration: 0.7,
                        ease: 'easeIn',
                      }}
                    />
                  </motion.div>
                )}

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Avatar with glow */}
                  <div className="relative mb-6">
                    <motion.div
                      className="absolute inset-0 rounded-full blur-2xl"
                      style={{ background: member.galaxyColor }}
                      initial={{ scale: 1, opacity: 0 }}
                      animate={hoveredIndex === index ? { scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] } : { scale: 1, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: hoveredIndex === index ? Infinity : 0 }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full blur-xl"
                      style={{ background: member.galaxyColor }}
                      initial={{ rotate: 0 }}
                      animate={hoveredIndex === index ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 3, repeat: hoveredIndex === index ? Infinity : 0, ease: 'linear' }}
                    />
                    <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-offset-4 ring-offset-slate-900 shadow-2xl"
                      style={{ 
                       
                        boxShadow: `0 0 15px ${member.galaxyColor}40, 0 0 30px ${member.galaxyColor}20`,
                      }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                      />
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                        style={{ background: `radial-gradient(circle, ${member.galaxyColor}, transparent)` }}
                      />
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-2 transition-all duration-300"
                    style={{ 
                      color: hoveredIndex === index ? 'transparent' : 'white',
                      backgroundImage: hoveredIndex === index ? `linear-gradient(135deg, ${member.galaxyColor}, white)` : undefined,
                      backgroundClip: hoveredIndex === index ? 'text' : undefined,
                      WebkitBackgroundClip: hoveredIndex === index ? 'text' : undefined,
                      WebkitTextFillColor: hoveredIndex === index ? 'transparent' : undefined,
                    }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-sm md:text-base font-semibold mb-2"
                    style={{ color: member.galaxyColor }}
                  >
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-xs md:text-sm">{}</p>
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>
        
        <p className="text-center text-gray-400 text-lg mt-16">Click on profile to visit our portfolio</p>
      </motion.div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}
