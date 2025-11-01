'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Camera, Eye, Download, Calendar } from 'lucide-react';

interface PhotoCategory {
  id: string;
  name: string;
  description: string;
  count: number;
}

interface Photo {
  id: string;
  url: string;
  title: string;
  category: string;
  date: string;
  description?: string;
}

export default function Photography() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const categories: PhotoCategory[] = [
    { id: 'headshots', name: 'Headshots', description: 'Professional portraits and headshots', count: 12 },
    { id: 'modeling', name: 'Modeling', description: 'Fashion and editorial modeling work', count: 18 },
    { id: 'street', name: 'Street', description: 'Urban photography and street style', count: 24 },
    { id: 'artistic', name: 'Artistic', description: 'Creative and experimental photography', count: 15 }
  ];

  const photos: Photo[] = [
    // Headshots
    { id: '1', url: '/photos/headshot-1.jpg', title: 'Professional Headshot', category: 'headshots', date: '2024-03-01', description: 'Clean professional headshot with neutral background' },
    { id: '2', url: '/photos/headshot-2.jpg', title: 'Corporate Portrait', category: 'headshots', date: '2024-02-15', description: 'Corporate style portrait for business profiles' },
    { id: '3', url: '/photos/headshot-3.jpg', title: 'Creative Headshot', category: 'headshots', date: '2024-01-20', description: 'Artistic headshot with dramatic lighting' },
    
    // Modeling
    { id: '4', url: '/photos/modeling-1.jpg', title: 'Fashion Editorial', category: 'modeling', date: '2024-03-10', description: 'Editorial fashion shoot for urban magazine' },
    { id: '5', url: '/photos/modeling-2.jpg', title: 'Street Style', category: 'modeling', date: '2024-02-28', description: 'Casual street style modeling session' },
    { id: '6', url: '/photos/modeling-3.jpg', title: 'Studio Fashion', category: 'modeling', date: '2024-02-10', description: 'Studio fashion photography with minimalist aesthetic' },
    
    // Street Photography
    { id: '7', url: '/photos/street-1.jpg', title: 'Urban Dreams', category: 'street', date: '2024-03-05', description: 'Street photography capturing city life' },
    { id: '8', url: '/photos/street-2.jpg', title: 'Night Lights', category: 'street', date: '2024-02-20', description: 'Night street photography with neon lights' },
    { id: '9', url: '/photos/street-3.jpg', title: 'City Rhythms', category: 'street', date: '2024-01-25', description: 'Documentary style street photography' },
    
    // Artistic
    { id: '10', url: '/photos/artistic-1.jpg', title: 'Abstract Forms', category: 'artistic', date: '2024-03-12', description: 'Experimental abstract photography' },
    { id: '11', url: '/photos/artistic-2.jpg', title: 'Light & Shadow', category: 'artistic', date: '2024-02-18', description: 'Playing with light and shadow patterns' },
    { id: '12', url: '/photos/artistic-3.jpg', title: 'Minimalist Landscape', category: 'artistic', date: '2024-01-30', description: 'Minimalist approach to landscape photography' }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <section id="photo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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
            Photography
          </motion.h2>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-serif text-sm transition-all duration-300 ${
                selectedCategory === 'all' 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Photos
            </motion.button>
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-serif text-sm transition-all duration-300 ${
                  selectedCategory === category.id 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </motion.div>

          {/* Category Info */}
          {selectedCategory !== 'all' && (
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-2">
                {categories.find(c => c.id === selectedCategory)?.name}
              </h3>
              <p className="text-gray-600 font-serif">
                {categories.find(c => c.id === selectedCategory)?.description}
              </p>
            </motion.div>
          )}

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                className="group cursor-pointer relative overflow-hidden rounded-lg bg-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-gray-400" />
                </div>
                
                <motion.div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="text-center text-white p-4">
                    <Eye className="w-6 h-6 mx-auto mb-2" />
                    <p className="text-sm font-serif">{photo.title}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Services Info */}
          <motion.div
            className="bg-gray-50 rounded-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                Photography Services
              </h3>
              <p className="text-gray-600 font-serif max-w-2xl mx-auto">
                Available for commissioned work including headshots, portraits, 
                fashion photography, and creative projects. Contact me to discuss your vision.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Professional Headshots', description: 'Corporate and professional portraits' },
                { title: 'Fashion & Modeling', description: 'Editorial and commercial fashion work' },
                { title: 'Creative Projects', description: 'Artistic and experimental photography' }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-serif font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 font-serif text-sm">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.button
                className="px-8 py-3 bg-gray-900 text-white font-serif text-sm hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Session
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            className="max-w-4xl w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <Camera className="w-16 h-16 text-gray-400" />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                      {selectedPhoto.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedPhoto.date}</span>
                      </div>
                      <span className="capitalize">{selectedPhoto.category}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="text-gray-400 hover:text-gray-900 transition-colors text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                {selectedPhoto.description && (
                  <p className="text-gray-600 font-serif mb-4">
                    {selectedPhoto.description}
                  </p>
                )}
                
                <div className="flex space-x-4">
                  <motion.button
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
