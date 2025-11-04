'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, BookOpen, FileText, Brain, Camera, User, Music, PenTool } from 'lucide-react';
import Link from 'next/link';

const categories = [
  { name: 'Coding', icon: Code2, href: '/coding', color: '#ff6b35' },
  { name: 'Poetry', icon: PenTool, href: '/poetry', color: '#ff6b35' },
  { name: 'Short Stories', icon: BookOpen, href: '/stories', color: '#ff6b35' },
  { name: 'Philosophy', icon: Brain, href: '/philosophy', color: '#ff6b35' },
  { name: 'Photography', icon: Camera, href: '/photography', color: '#ff6b35' },
  { name: 'Modeling', icon: User, href: '/modeling', color: '#ff6b35' },
  { name: 'Music', icon: Music, href: '/music', color: '#ff6b35' },
  { name: 'Blog', icon: FileText, href: '/blog', color: '#ff6b35' },
];

export default function MainPage() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  const texts = categories.map(cat => cat.name);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      const currentFullText = texts[currentIndex];

      if (!isDeleting && currentText === currentFullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        setShowIcons(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setShowIcons(false);
      } else {
        setCurrentText(
          isDeleting
            ? currentFullText.substring(0, currentText.length - 1)
            : currentFullText.substring(0, currentText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="text-center">
        {/* Name and Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Link href="/bio">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-gray-900 mb-4 cursor-pointer hover:text-orange-500 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Josh Mysore
            </motion.h1>
          </Link>
          <div className="text-3xl md:text-5xl text-gray-600 h-20 flex items-center justify-center">
            <span className="font-light">{currentText}</span>
            <span className="animate-pulse ml-1">|</span>
          </div>
        </motion.div>

        {/* Icon Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showIcons ? 1 : 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link key={category.name} href={category.href}>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                  className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
                  style={{ borderTop: `4px solid ${category.color}` }}
                >
                  <Icon
                    size={48}
                    style={{ color: category.color }}
                    className="mb-3 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    {category.name}
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>

        {/* Dev Mode Trigger - Hidden */}
        <div className="mt-16 opacity-0 hover:opacity-100 transition-opacity">
          <Link href="/dev" className="text-xs text-gray-400">
            •
          </Link>
        </div>
      </div>
    </div>
  );
}
