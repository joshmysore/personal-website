'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CreativeWorks from '@/components/CreativeWorks';
import CodingProjects from '@/components/CodingProjects';
import Photography from '@/components/Photography';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white text-gray-900 font-serif">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
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
