'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg text-gray-700 leading-relaxed font-serif">
                I'm a multidisciplinary creator working at the intersection of technology and art. 
                My passion lies in building elegant solutions that bridge the digital and physical worlds, 
                crafting stories through code, design, and visual media.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed font-serif">
                With a foundation in software engineering and a love for creative expression, 
                I approach each project with both analytical precision and artistic sensibility. 
                Whether I'm writing code, composing music, or capturing moments through photography, 
                I seek to find the harmony between function and beauty.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                  Core Competencies
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Full-Stack Development',
                    'Creative Writing',
                    'Photography',
                    'UI/UX Design',
                    'Music Production',
                    'Digital Art'
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-gray-900 rounded-full" />
                      <span className="text-gray-700 font-mono text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span className="font-serif text-lg">Profile Photo</span>
                </div>
              </div>
              
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-900 text-white rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold">5+</div>
                  <div className="text-xs font-mono">Years Experience</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 pt-8 border-t border-gray-200"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <p className="text-gray-600 font-mono text-sm mb-4">
                Currently based in San Francisco, available for freelance and collaboration
              </p>
              <motion.button
                className="px-8 py-3 bg-gray-900 text-white font-serif text-sm hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
