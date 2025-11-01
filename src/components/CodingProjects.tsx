'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, ExternalLink, Github, Star, GitBranch } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  stars: number;
  forks: number;
  url: string;
  language: string;
  featured: boolean;
}

export default function CodingProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects: Project[] = [
    {
      id: '1',
      name: 'portfolio-website',
      description: 'A minimalist portfolio website built with Next.js, TypeScript, and TailwindCSS. Features smooth animations, responsive design, and markdown support for creative content.',
      tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
      stars: 42,
      forks: 8,
      url: 'https://github.com/joshmysore/portfolio-website',
      language: 'TypeScript',
      featured: true
    },
    {
      id: '2',
      name: 'ai-story-generator',
      description: 'An AI-powered story generation tool that uses advanced language models to create creative narratives based on user prompts and preferences.',
      tech: ['Python', 'FastAPI', 'OpenAI', 'React'],
      stars: 128,
      forks: 23,
      url: 'https://github.com/joshmysore/ai-story-generator',
      language: 'Python',
      featured: true
    },
    {
      id: '3',
      name: 'minimal-design-system',
      description: 'A comprehensive design system built with React and TypeScript, focusing on minimalist aesthetics and accessibility.',
      tech: ['React', 'TypeScript', 'Storybook', 'Jest'],
      stars: 89,
      forks: 15,
      url: 'https://github.com/joshmysore/minimal-design-system',
      language: 'TypeScript',
      featured: false
    },
    {
      id: '4',
      name: 'photography-portfolio',
      description: 'A sleek photography portfolio application with advanced image optimization, gallery management, and client proofing tools.',
      tech: ['Next.js', 'Cloudinary', 'PostgreSQL', 'Prisma'],
      stars: 67,
      forks: 12,
      url: 'https://github.com/joshmysore/photography-portfolio',
      language: 'TypeScript',
      featured: false
    },
    {
      id: '5',
      name: 'music-streaming-api',
      description: 'RESTful API for music streaming applications with playlist management, audio processing, and recommendation algorithms.',
      tech: ['Node.js', 'Express', 'MongoDB', 'Redis'],
      stars: 156,
      forks: 34,
      url: 'https://github.com/joshmysore/music-streaming-api',
      language: 'JavaScript',
      featured: true
    },
    {
      id: '6',
      name: 'creative-coding-toolkit',
      description: 'A collection of creative coding utilities and generative art algorithms using p5.js and WebGL.',
      tech: ['JavaScript', 'p5.js', 'WebGL', 'Three.js'],
      stars: 234,
      forks: 45,
      url: 'https://github.com/joshmysore/creative-coding-toolkit',
      language: 'JavaScript',
      featured: true
    }
  ];

  const getLanguageColor = (language: string) => {
    switch (language) {
      case 'TypeScript': return 'bg-blue-100 text-blue-600';
      case 'Python': return 'bg-green-100 text-green-600';
      case 'JavaScript': return 'bg-yellow-100 text-yellow-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="code" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
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
            Code & Projects
          </motion.h2>

          {/* Featured Projects */}
          <div className="mb-16">
            <motion.h3
              className="text-2xl font-serif font-semibold text-gray-800 mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Featured Projects
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gray-900 text-white rounded-lg">
                        <Code className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-serif font-semibold text-gray-900">
                          {project.name}
                        </h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${getLanguageColor(project.language)}`}>
                          {project.language}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 font-serif text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span className="text-sm font-mono">{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitBranch className="w-4 h-4" />
                        <span className="text-sm font-mono">{project.forks}</span>
                      </div>
                    </div>
                    
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-mono">View</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <motion.h3
              className="text-2xl font-serif font-semibold text-gray-800 mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              More Projects
            </motion.h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-base font-serif font-semibold text-gray-900">
                      {project.name}
                    </h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${getLanguageColor(project.language)}`}>
                      {project.language}
                    </span>
                  </div>

                  <p className="text-gray-600 font-serif text-xs leading-relaxed mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3" />
                        <span className="text-xs font-mono">{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitBranch className="w-3 h-3" />
                        <span className="text-xs font-mono">{project.forks}</span>
                      </div>
                    </div>
                    
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-gray-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.a
              href="https://github.com/joshmysore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gray-900 text-white font-serif text-sm hover:bg-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              <span>View All on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
