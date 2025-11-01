'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Code, ExternalLink, Github, Star, GitBranch } from 'lucide-react';

interface CodeProject {
  id: string;
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
  tags: string[];
}

export default function CodingProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [projects, setProjects] = useState<CodeProject[]>([]);

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem('portfolio-content');
    if (savedContent) {
      const content = JSON.parse(savedContent);
      setProjects(content.codeProjects || []);
    } else {
      // Default content if none saved
      setProjects([
        {
          id: '1',
          name: 'portfolio-website',
          description: 'A minimalist portfolio website built with Next.js, TypeScript, and TailwindCSS.',
          url: 'https://github.com/joshmysore/portfolio-website',
          stars: 0,
          forks: 0,
          language: 'TypeScript',
          tags: ['Next.js', 'TypeScript', 'TailwindCSS']
        }
      ]);
    }
  }, []);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      TypeScript: 'text-blue-600',
      JavaScript: 'text-yellow-600',
      Python: 'text-green-600',
      React: 'text-cyan-600',
      'C++': 'text-purple-600',
      Go: 'text-orange-600',
      Rust: 'text-red-600',
    };
    return colors[language] || 'text-gray-600';
  };

  return (
    <section id="code" className="py-20 px-6 typewriter-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 typewriter-text">
            <span className="orange-accent">//</span> CODING PROJECTS
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="typewriter-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Code className="w-4 h-4 orange-accent" />
                    <span className={`text-sm typewriter-text font-bold ${getLanguageColor(project.language)}`}>
                      {project.language}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitBranch className="w-3 h-3" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 typewriter-text">
                  {project.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 typewriter-text">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs typewriter-text border border-gray-300 text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 orange-accent hover:orange-hover text-sm typewriter-text"
                  >
                    <Github className="w-4 h-4" />
                    <span>[VIEW CODE]</span>
                  </a>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>

          {projects.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-500 typewriter-text">
                No projects found. Use dev mode to add content.
              </p>
            </motion.div>
          )}

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="https://github.com/joshmysore"
              target="_blank"
              rel="noopener noreferrer"
              className="typewriter-button inline-flex items-center space-x-2"
            >
              <span>[VIEW GITHUB]</span>
              <Github className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
