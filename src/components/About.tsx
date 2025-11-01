'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-6 typewriter-section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 typewriter-text">
            <span className="orange-accent">//</span> ABOUT
          </h2>
          
          <div className="space-y-8 text-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-gray-700 leading-relaxed typewriter-text">
                When I was kid, I wanted to "live the lives of many men." I wanted to go to space, become a founder,
                and be a rockstar. I dreamed a lot. Thought I am older now, I have maintained the same mindset in many 
                aspects of my life. My love for cultures, language learning, and the various permutations of my 
                being humans is something I am proud of.
              </p>
              
              <p className="text-gray-700 leading-relaxed typewriter-text mt-6">
                Men like Rene Descartes inspire me. In an era of human specialization, I am trying to maintain earnest 
                curiosity and a love all ways of Being. 
              </p>
            </motion.div>

            <motion.div
              className="mt-12 p-8 border-2 border-gray-900 typewriter-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 typewriter-text">
                <span className="orange-accent">&gt;</span> INTERESTS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="orange-accent">▸</span>
                    <span className="typewriter-text">Technology & Code</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="orange-accent">▸</span>
                    <span className="typewriter-text">Writing & Philosophy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="orange-accent">▸</span>
                    <span className="typewriter-text">Language Learning</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="orange-accent">▸</span>
                    <span className="typewriter-text">Creative Arts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="orange-accent">▸</span>
                    <span className="typewriter-text">Cultural Exploration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="orange-accent">▸</span>
                    <span className="typewriter-text">Photography</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-gray-600 typewriter-text text-sm mb-6">
                Currently based in Cambridge, MA
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="mailto:josh@example.com" 
                  className="typewriter-button"
                >
                  [CONTACT]
                </a>
                <a 
                  href="#creative" 
                  className="typewriter-button"
                >
                  [VIEW WORK]
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
