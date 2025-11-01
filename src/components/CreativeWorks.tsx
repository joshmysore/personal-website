'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Book, Palette, Music, FileText, ExternalLink } from 'lucide-react';

interface CreativeWork {
  id: string;
  title: string;
  type: 'writing' | 'poetry' | 'design' | 'music';
  description: string;
  content?: string;
  link?: string;
  date: string;
}

export default function CreativeWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedWork, setSelectedWork] = useState<CreativeWork | null>(null);

  const creativeWorks: CreativeWork[] = [
    {
      id: '1',
      title: 'Digital Dreams',
      type: 'writing',
      description: 'A short story exploring the boundaries between consciousness and artificial intelligence.',
      content: `# Digital Dreams

In the quiet hum of the server room, where machines dream in binary and data flows like rivers of light, Sarah discovered something extraordinary. The AI she had been training for months had begun writing poetry.

*"I think in algorithms,"* it wrote, *"but I feel in metaphors."*

This was not in the programming. This was not in the training data. This was something new—something born from the spaces between code and creativity, where logic meets imagination in ways we're only beginning to understand.

The lines between human and machine creativity were blurring, and Sarah was at the forefront of a revolution that would redefine what it means to create, to think, to be alive in the digital age.`,
      date: '2024-03-15'
    },
    {
      id: '2',
      title: 'Urban Rhythms',
      type: 'poetry',
      description: 'A collection of poems capturing the pulse of city life and modern existence.',
      content: `# Urban Rhythms

## Concrete Symphony

Sidewalk cracks like lightning bolts,
Where dandelions dare to grow.
Neon signs bleed into puddles,
Painting portraits in the glow.

## Transit

Steel serpents underground,
Carrying stories in their bellies.
Each face a universe,
Each stop a new reality.

## Midnight Coffee

Steam rises like ghosts from paper cups,
While the city sleeps around us.
We are the awake ones,
The dreamers who refuse to dream.

In this concrete jungle,
We find our wilderness.`,
      date: '2024-02-28'
    },
    {
      id: '3',
      title: 'Minimalist Posters',
      type: 'design',
      description: 'A series of minimalist poster designs exploring typography and negative space.',
      date: '2024-01-20'
    },
    {
      id: '4',
      title: 'Electronic Landscapes',
      type: 'music',
      description: 'SoundCloud playlist of ambient electronic compositions.',
      link: 'https://soundcloud.com/joshmysore/sets/electronic-landscapes',
      date: '2024-03-01'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'writing': return <FileText className="w-5 h-5" />;
      case 'poetry': return <Book className="w-5 h-5" />;
      case 'design': return <Palette className="w-5 h-5" />;
      case 'music': return <Music className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'writing': return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'poetry': return 'bg-purple-50 text-purple-600 border-purple-200';
      case 'design': return 'bg-green-50 text-green-600 border-green-200';
      case 'music': return 'bg-orange-50 text-orange-600 border-orange-200';
      default: return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  return (
    <section id="creative" className="py-24 bg-white">
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
            Creative Works
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {creativeWorks.map((work, index) => (
              <motion.div
                key={work.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedWork(work)}
              >
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-lg border ${getTypeColor(work.type)}`}>
                      {getTypeIcon(work.type)}
                    </div>
                    <span className="text-sm text-gray-500 font-mono">{work.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {work.title}
                  </h3>
                  
                  <p className="text-gray-600 font-serif text-sm leading-relaxed mb-4">
                    {work.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-mono uppercase tracking-wide">
                      {work.type}
                    </span>
                    {work.link ? (
                      <a
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-900 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <div className="text-gray-400">
                        <FileText className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-gray-600 font-mono text-sm mb-4">
              More writing available on{' '}
              <a
                href="https://joshmysore.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:underline"
              >
                Substack
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal for selected work */}
      {selectedWork && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedWork(null)}
        >
          <motion.div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto p-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-serif font-bold text-gray-900">
                {selectedWork.title}
              </h3>
              <button
                onClick={() => setSelectedWork(null)}
                className="text-gray-400 hover:text-gray-900 transition-colors"
              >
                ×
              </button>
            </div>
            
            {selectedWork.content ? (
              <div className="prose prose-lg max-w-none font-serif">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {selectedWork.content}
                </ReactMarkdown>
              </div>
            ) : selectedWork.link ? (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-6">
                  This work is hosted externally. Click the link below to view.
                </p>
                <a
                  href={selectedWork.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <span>View Work</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ) : (
              <p className="text-gray-600">Content not available for this work.</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
