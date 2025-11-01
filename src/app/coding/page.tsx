'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Star, GitFork } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: '1',
    name: 'Project Alpha',
    description: 'A revolutionary web application built with Next.js and TypeScript',
    url: 'https://github.com/joshmysore/project-alpha',
    stars: 42,
    forks: 12,
    language: 'TypeScript',
    tags: ['Next.js', 'React', 'TailwindCSS'],
  },
  // Add more projects here
];

export default function CodingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Coding Projects</h1>
          <p className="text-xl text-gray-600">Building innovative solutions with modern technologies</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <p className="text-gray-600 mb-6">{project.description}</p>

              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Star size={16} />
                  {project.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={16} />
                  {project.forks}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                  {project.language}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
