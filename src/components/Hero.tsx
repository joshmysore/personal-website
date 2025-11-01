'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const phrases = [
    'Josh Mysore',
    'Developer & Creator',
    'Writer & Thinker',
    'Cambridge, MA'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 typewriter-text">
            {text}
            <span className="typewriter-cursor"></span>
          </h1>
        </div>
        
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex justify-center space-x-8 text-sm">
            <button 
              onClick={() => handleNavClick('about')}
              className="orange-accent hover:orange-hover"
            >
              [about]
            </button>
            <button 
              onClick={() => handleNavClick('creative')}
              className="orange-accent hover:orange-hover"
            >
              [creative]
            </button>
            <button 
              onClick={() => handleNavClick('code')}
              className="orange-accent hover:orange-hover"
            >
              [code]
            </button>
            <button 
              onClick={() => handleNavClick('photos')}
              className="orange-accent hover:orange-hover"
            >
              [photos]
            </button>
          </div>
          
          <div className="pt-8">
            <p className="text-gray-600 text-sm mb-4">
              When I was a kid, I wanted to "live the lives of many men."
            </p>
            <p className="text-gray-600 text-xs">
              Currently based in Cambridge, MA
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
