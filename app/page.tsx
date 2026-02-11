'use client';

// Main page component that assembles all sections
import Hero from '@/components/Hero';
import About from '@/components/About';
import Focus from '@/components/Focus';
import Team from '@/components/Team';
import Community from '@/components/Community';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import SpaceBackground from '@/components/SpaceBackground';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Animated space-themed background */}
      <SpaceBackground />
      {/* Fixed navigation bar */}
      <Navigation />
      {/* Hero section with animated text */}
      <Hero />
      {/* About Zion section */}
      <About />
      {/* Focus areas section */}
      <Focus />
      {/* Team members section */}
      <Team />
      {/* Community stats section */}
      <Community />
      {/* Contact form section */}
      <Contact />
    </main>
  );
}
