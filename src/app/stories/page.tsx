'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';

const stories = [
  {
    id: '1',
    title: 'The Beginning',
    date: '2024-01-15',
    readTime: '5 min read',
    excerpt: 'Your stories will appear here...',
    content: 'Full story content goes here...',
  },
];

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Short Stories</h1>
          <p className="text-xl text-gray-600">Tales from imagination</p>
        </div>

        <div className="space-y-8">
          {stories.map((story, index) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-10 hover:shadow-2xl transition-all"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-3">{story.title}</h2>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span>{story.date}</span>
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {story.readTime}
                </span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{story.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
