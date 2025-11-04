'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const portfolio = [
  {
    id: '1',
    title: 'Editorial Shoot',
    date: '2024-01-15',
    images: ['/modeling/1.jpg'],
    description: 'Your modeling portfolio will appear here...',
  },
];

export default function ModelingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-orange-500 mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Modeling</h1>
          <p className="text-xl text-gray-600">Portfolio and collaborations</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolio.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="relative aspect-[3/4] bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span className="text-sm">Portfolio Image</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{item.date}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
