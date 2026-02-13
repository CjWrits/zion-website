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
import CustomCursor from '@/components/CustomCursor';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen">
        {/* Animated space-themed background */}
        <SpaceBackground />
        {/* Custom cursor for desktop */}
        <CustomCursor />
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
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
