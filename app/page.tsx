'use client';

// Main page component that assembles all sections
import Hero from '@/components/Hero';
import About from '@/components/About';
import Focus from '@/components/Focus';
import Team from '@/components/Team';
import Community from '@/components/Community';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import SpaceBackground from '@/components/SpaceBackground';
import CanvasCursor from '@/components/CanvasCursor';
import LoadingScreen from '@/components/LoadingScreen';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen">
        {/* Animated space-themed background */}
        <SpaceBackground />
        {/* Canvas cursor trail effect */}
        <CanvasCursor />
        {/* Fixed navigation bar */}
        <Navigation />
        {/* Hero section with animated text */}
        <motion.div style={{ y: y1 }}>
          <Hero />
        </motion.div>
        {/* About Zion section */}
        <motion.div style={{ y: y3 }}>
          <About />
        </motion.div>
        {/* Focus areas section */}
        <motion.div style={{ y: y2 }}>
          <Focus />
        </motion.div>
        {/* Team members section */}
        <Team />
        {/* Community stats section */}
        <Community />
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
