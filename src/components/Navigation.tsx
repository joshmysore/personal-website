'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navItems = [
  { id: 'home', label: '[home]' },
  { id: 'about', label: '[about]' },
  { id: 'creative', label: '[creative]' },
  { id: 'code', label: '[code]' },
  { id: 'photos', label: '[photos]' },
];

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-50/90 backdrop-blur-sm border-b-2 border-orange-500' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <motion.div
            className="text-2xl font-bold text-gray-900 typewriter-text"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <span className="orange-accent">J</span>M
          </motion.div>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`typewriter-text text-sm transition-all duration-300 ${
                  activeSection === item.id ? 'orange-accent' : 'text-gray-600'
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {item.label}
                <motion.div
                  className="h-px bg-orange-500 mt-1"
                  initial={{ width: 0 }}
                  animate={{ width: activeSection === item.id ? '100%' : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="h-px bg-orange-500 mt-1"
                  whileHover={{ width: '100%' }}
                  initial={{ width: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </div>

          <motion.button
            className="md:hidden text-gray-900"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="space-y-1">
              <motion.div
                className="w-6 h-0.5 bg-gray-900"
                animate={{ rotate: 0, y: 0 }}
              />
              <motion.div
                className="w-6 h-0.5 bg-gray-900"
                animate={{ rotate: 0, y: 0 }}
              />
              <motion.div
                className="w-6 h-0.5 bg-gray-900"
                animate={{ rotate: 0, y: 0 }}
              />
            </div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
