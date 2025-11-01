'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'creative', label: 'Creative' },
  { id: 'code', label: 'Code' },
  { id: 'photo', label: 'Photo' },
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
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <motion.div
            className="text-2xl font-serif font-bold text-gray-900"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            JM
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-serif text-sm transition-colors duration-300 ${
                  activeSection === item.id ? 'text-gray-900' : 'text-gray-500'
                }`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 h-px bg-gray-900"
                  initial={{ width: 0 }}
                  animate={{ width: activeSection === item.id ? '100%' : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute -bottom-1 left-0 h-px bg-gray-900"
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
