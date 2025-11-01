'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Play } from 'lucide-react';
import Link from 'next/link';

const tracks = [
  {
    id: '1',
    title: 'Untitled Track',
    date: '2024-01-15',
    soundcloudUrl: '',
    description: 'Your music will appear here...',
  },
];

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Music</h1>
          <p className="text-xl text-gray-600">Sounds and compositions</p>
        </div>

        <div className="space-y-6">
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Play size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{track.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{track.date}</p>
                  <p className="text-gray-600 mb-4">{track.description}</p>
                  {track.soundcloudUrl && (
                    <div className="mt-4">
                      {/* SoundCloud embed will go here */}
                      <div className="bg-gray-100 rounded-lg p-4 text-center text-gray-500">
                        SoundCloud Player
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
