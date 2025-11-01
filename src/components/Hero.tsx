'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('about');
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Josh MySore
          </motion.h1>
          
          <motion.div
            className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-8 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="inline-block">Creative Technologist</span>
            <motion.span
              className="inline-block mx-3"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              •
            </motion.span>
            <span className="inline-block">Writer</span>
            <motion.span
              className="inline-block mx-3"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              •
            </motion.span>
            <span className="inline-block">Developer</span>
            <motion.span
              className="inline-block mx-3"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              •
            </motion.span>
            <span className="inline-block">Visual Artist</span>
          </motion.div>

          <motion.p
            className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Crafting experiences at the intersection of technology, creativity, and design.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {['Creative', 'Code', 'Photo'].map((item, index) => (
            <motion.button
              key={item}
              onClick={() => setActiveSection(item.toLowerCase())}
              className="px-8 py-3 border border-gray-900 text-gray-900 font-serif text-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            >
              {item}
            </motion.button>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-gray-900 transition-colors duration-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
