'use client';

// Animated space-themed background with stars and shooting stars
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  delay: number;
}

export default function SpaceBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Parallax transforms for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0.3]);

  // Generate shooting stars periodically
  useEffect(() => {
    setMounted(true);
    const generateStars = () => {
      const newStars = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
      }));
      setStars(newStars);
    };

    generateStars();
    const interval = setInterval(generateStars, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* Parallax layer 1 - Slow moving stars */}
      <motion.div className="absolute inset-0" style={{ y: y1, opacity }}>
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.div
            key={`layer1-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1, delay: i * 0.01 }}
            style={{
              left: `${(i * 13.7) % 100}%`,
              top: `${(i * 27.3) % 100}%`,
              animation: `twinkle ${2 + (i % 3)}s infinite`,
              animationDelay: `${(i % 3)}s`,
            }}
          />
        ))}
      </motion.div>

      {/* Parallax layer 2 - Medium speed stars */}
      <motion.div className="absolute inset-0" style={{ y: y2 }}>
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.div
            key={`layer2-${i}`}
            className="absolute w-1.5 h-1.5 bg-blue-200 rounded-full opacity-60"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1, delay: i * 0.01 }}
            style={{
              left: `${(i * 17.3) % 100}%`,
              top: `${(i * 31.7) % 100}%`,
              animation: `twinkle ${2.5 + (i % 3)}s infinite`,
              animationDelay: `${(i % 3)}s`,
            }}
          />
        ))}
      </motion.div>

      {/* Parallax layer 3 - Fast moving stars */}
      <motion.div className="absolute inset-0" style={{ y: y3 }}>
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={`layer3-${i}`}
            className="absolute w-2 h-2 bg-purple-200 rounded-full opacity-70"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1, delay: i * 0.01 }}
            style={{
              left: `${(i * 23.1) % 100}%`,
              top: `${(i * 37.9) % 100}%`,
              animation: `twinkle ${3 + (i % 3)}s infinite`,
              animationDelay: `${(i % 3)}s`,
            }}
          />
        ))}
      </motion.div>

      {/* Animated shooting stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: `${star.x}vw`,
            y: `${star.y}vh`,
            opacity: 0,
          }}
          animate={{
            x: [`${star.x}vw`, `${star.x + 30}vw`],
            y: [`${star.y}vh`, `${star.y + 30}vh`],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 8,
          }}
          style={{
            boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)',
          }}
        />
      ))}

      {/* Twinkle animation keyframes */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
