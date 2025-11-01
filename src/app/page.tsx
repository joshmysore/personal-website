'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CreativeWorks from '@/components/CreativeWorks';
import CodingProjects from '@/components/CodingProjects';
import Photography from '@/components/Photography';
import DevMode from '@/components/DevMode';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 typewriter-text">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <DevMode />
      
      <main>
        <Hero setActiveSection={setActiveSection} />
        <About />
        <CreativeWorks />
        <CodingProjects />
        <Photography />
      </main>
    </div>
  );
}
