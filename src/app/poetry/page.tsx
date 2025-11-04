'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import PageDevMode from '@/components/PageDevMode';

const poems = [
  {
    id: '1',
    title: 'Untitled',
    date: '2024-01-15',
    content: 'Your poems will appear here...',
  },
];

export default function PoetryPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-orange-500 mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Poetry</h1>
          <p className="text-xl text-gray-600">Words that resonate</p>
        </div>

        <div className="space-y-12">
          {poems.map((poem, index) => (
            <motion.article
              key={poem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-12 hover:shadow-2xl transition-all"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{poem.title}</h2>
              <p className="text-sm text-gray-500 mb-8">{poem.date}</p>
              <div className="prose prose-lg max-w-none">
                <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">{poem.content}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <PageDevMode page="poetry" />
    </div>
  );
}
