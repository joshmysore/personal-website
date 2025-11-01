'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Camera, Eye, Download, Calendar } from 'lucide-react';

interface Photo {
  id: string;
  title: string;
  category: string;
  description: string;
}

export default function Photography() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    {
      id: '1',
      title: 'Urban Landscapes',
      category: 'Street Photography',
      description: 'Capturing the essence of city life through architectural and street photography.'
    },
    {
      id: '2',
      title: 'Portrait Series',
      category: 'Headshots',
      description: 'Professional headshots and creative portraits for individuals and businesses.'
    },
    {
      id: '3',
      title: 'Modeling Portfolio',
      category: 'Fashion',
      description: 'Fashion and modeling photography showcasing style and personality.'
    }
  ];

  return (
    <section id="photos" className="py-20 px-6 typewriter-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 typewriter-text">
            <span className="orange-accent">//</span> PHOTOGRAPHY
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                className="typewriter-card cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Camera className="w-4 h-4 orange-accent" />
                    <span className="text-xs typewriter-text text-gray-500 uppercase">
                      {photo.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 typewriter-text">
                  {photo.title}
                </h3>
                
                <p className="text-gray-600 text-sm typewriter-text mb-4">
                  {photo.description}
                </p>
                
                <div className="flex items-center space-x-2 text-orange-500">
                  <span className="text-xs typewriter-text">[VIEW PORTFOLIO]</span>
                  <Eye className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 p-8 border-2 border-gray-900 typewriter-card"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 typewriter-text">
              <span className="orange-accent">&gt;</span> SERVICES
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="orange-accent">▸</span>
                  <span className="typewriter-text">Professional Headshots</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="orange-accent">▸</span>
                  <span className="typewriter-text">Modeling Portfolios</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="orange-accent">▸</span>
                  <span className="typewriter-text">Event Photography</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="orange-accent">▸</span>
                  <span className="typewriter-text">Street & Urban Photography</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="orange-accent">▸</span>
                  <span className="typewriter-text">Creative Portraits</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="orange-accent">▸</span>
                  <span className="typewriter-text">Commercial Photography</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a
                href="mailto:photography@joshmysore.me"
                className="typewriter-button inline-flex items-center space-x-2"
              >
                <span>[BOOK SESSION]</span>
                <Calendar className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal for photo details */}
      {selectedPhoto && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            className="bg-gray-50 border-2 border-gray-900 max-w-2xl w-full p-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 typewriter-text mb-2">
                  {selectedPhoto.title}
                </h3>
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-2 orange-accent">
                    <Camera className="w-4 h-4" />
                    <span className="text-sm typewriter-text uppercase">
                      {selectedPhoto.category}
                    </span>
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="text-gray-400 hover:text-gray-900 text-2xl typewriter-text"
              >
                ×
              </button>
            </div>

            <p className="text-gray-600 typewriter-text mb-6">
              {selectedPhoto.description}
            </p>

            <div className="mt-6">
              <a
                href="mailto:photography@joshmysore.me"
                className="typewriter-button inline-flex items-center space-x-2"
              >
                <span>[INQUIRE ABOUT THIS WORK]</span>
                <Calendar className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

  
