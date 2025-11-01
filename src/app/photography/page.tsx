'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Photo {
  id: string;
  url: string;
  caption?: string;
  date?: string;
}

interface Album {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  photos: Photo[];
}

const albums: Album[] = [
  {
    id: 'headshots',
    title: 'Headshots',
    description: 'Professional headshot portfolio',
    coverImage: '/photos/headshots/cover.jpg',
    photos: [
      { id: '1', url: '/photos/headshots/1.jpg', caption: 'Professional headshot' },
      // Add more photos
    ],
  },
  {
    id: 'life-2024',
    title: 'Life Experiences 2024',
    description: 'Moments from my journey',
    coverImage: '/photos/life-2024/cover.jpg',
    photos: [
      { id: '1', url: '/photos/life-2024/1.jpg', caption: 'Summer adventure', date: '2024-06-15' },
      // Add more photos
    ],
  },
];

export default function PhotographyPage() {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (album: Album, photoIndex: number) => {
    setSelectedAlbum(album);
    setSelectedPhotoIndex(photoIndex);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = () => {
    if (selectedAlbum && selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % selectedAlbum.photos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedAlbum && selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + selectedAlbum.photos.length) % selectedAlbum.photos.length
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Photography</h1>
          <p className="text-xl text-gray-600">Capturing moments and memories</p>
        </div>

        {/* Albums Grid */}
        {!selectedAlbum && (
          <div className="grid md:grid-cols-3 gap-8">
            {albums.map((album, index) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedAlbum(album)}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all group"
              >
                <div className="relative h-64 bg-gray-200">
                  {/* Placeholder for cover image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span className="text-sm">Cover Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {album.title}
                  </h3>
                  <p className="text-gray-600">{album.description}</p>
                  <p className="text-sm text-gray-500 mt-2">{album.photos.length} photos</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Album View */}
        {selectedAlbum && selectedPhotoIndex === null && (
          <div>
            <button
              onClick={() => setSelectedAlbum(null)}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Albums
            </button>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{selectedAlbum.title}</h2>
            <p className="text-xl text-gray-600 mb-8">{selectedAlbum.description}</p>

            <div className="grid md:grid-cols-4 gap-4">
              {selectedAlbum.photos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => openLightbox(selectedAlbum, index)}
                  className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                >
                  {/* Placeholder for photo */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span className="text-xs">Photo {index + 1}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedPhotoIndex !== null && selectedAlbum && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevPhoto();
                }}
                className="absolute left-4 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronLeft size={48} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextPhoto();
                }}
                className="absolute right-4 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronRight size={48} />
              </button>

              <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                <div className="relative aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  {/* Placeholder for full-size photo */}
                  <span className="text-white">Photo {selectedPhotoIndex + 1}</span>
                </div>
                {selectedAlbum.photos[selectedPhotoIndex].caption && (
                  <p className="text-white text-center mt-4">
                    {selectedAlbum.photos[selectedPhotoIndex].caption}
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
