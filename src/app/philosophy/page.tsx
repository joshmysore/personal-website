'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const essays = [
  {
    id: '1',
    title: 'On Existence',
    date: '2024-01-15',
    content: 'Your philosophical writings will appear here...',
  },
];

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Philosophy</h1>
          <p className="text-xl text-gray-600">Reflections on life and meaning</p>
        </div>

        <div className="space-y-12">
          {essays.map((essay, index) => (
            <motion.article
              key={essay.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-12 hover:shadow-2xl transition-all"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{essay.title}</h2>
              <p className="text-sm text-gray-500 mb-8">{essay.date}</p>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">{essay.content}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
