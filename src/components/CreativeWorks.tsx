'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Book, Palette, Music, FileText, ExternalLink } from 'lucide-react';

interface CreativeWork {
  id: string;
  title: string;
  type: 'story' | 'poetry' | 'design' | 'music';
  description: string;
  content?: string;
  link?: string;
  date: string;
}

export default function CreativeWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedWork, setSelectedWork] = useState<CreativeWork | null>(null);
  const [creativeWorks, setCreativeWorks] = useState<CreativeWork[]>([]);
  const [filter, setFilter] = useState<'all' | 'story' | 'poetry' | 'design' | 'music'>('all');

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem('portfolio-content');
    if (savedContent) {
      const content = JSON.parse(savedContent);
      setCreativeWorks(content.creativeWorks || []);
    } else {
      // Default content if none saved
      setCreativeWorks([
        {
          id: '1',
          title: 'Sample Story',
          type: 'story',
          description: 'A sample story to demonstrate the content management system.',
          content: '# Sample Story\n\nThis is a sample story that you can replace using the dev mode.',
          date: '2024-01-01'
        },
        {
          id: '2',
          title: 'Sample Poem',
          type: 'poetry',
          description: 'A sample poem to demonstrate the content management system.',
          content: '# Sample Poem\n\nThis is a sample poem that you can replace using the dev mode.',
          date: '2024-01-01'
        }
      ]);
    }
  }, []);

  const filteredWorks = filter === 'all' 
    ? creativeWorks 
    : creativeWorks.filter(work => work.type === filter);

  const getTypeIcon = (type: CreativeWork['type']) => {
    switch (type) {
      case 'story': return <FileText className="w-4 h-4" />;
      case 'poetry': return <Book className="w-4 h-4" />;
      case 'design': return <Palette className="w-4 h-4" />;
      case 'music': return <Music className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: CreativeWork['type']) => {
    switch (type) {
      case 'story': return 'text-blue-600';
      case 'poetry': return 'text-purple-600';
      case 'design': return 'text-green-600';
      case 'music': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <section id="creative" className="py-20 px-6 typewriter-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 typewriter-text">
            <span className="orange-accent">//</span> CREATIVE WORKS
          </h2>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-wrap gap-4 justify-center">
              {['all', 'story', 'poetry', 'design', 'music'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type as any)}
                  className={`px-4 py-2 text-sm typewriter-text border-2 transition-all ${
                    filter === type 
                      ? 'border-orange-500 orange-accent' 
                      : 'border-gray-900 text-gray-600 hover:border-gray-700'
                  }`}
                >
                  [{type.toUpperCase()}]
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                className="typewriter-card cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedWork(work)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className={getTypeColor(work.type)}>
                      {getTypeIcon(work.type)}
                    </span>
                    <span className="text-xs typewriter-text text-gray-500 uppercase">
                      {work.type}
                    </span>
                  </div>
                  <span className="text-xs typewriter-text text-gray-400">
                    {work.date}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 typewriter-text">
                  {work.title}
                </h3>
                
                <p className="text-gray-600 text-sm typewriter-text mb-4">
                  {work.description}
                </p>
                
                <div className="flex items-center space-x-2 text-orange-500">
                  <span className="text-xs typewriter-text">[READ MORE]</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>

          {filteredWorks.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-500 typewriter-text">
                No works found. Use dev mode to add content.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Modal for work details */}
      {selectedWork && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedWork(null)}
        >
          <motion.div
            className="bg-gray-50 border-2 border-gray-900 max-w-4xl w-full max-h-[80vh] overflow-y-auto p-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 typewriter-text mb-2">
                  {selectedWork.title}
                </h3>
                <div className="flex items-center space-x-4">
                  <span className={`flex items-center space-x-2 ${getTypeColor(selectedWork.type)}`}>
                    {getTypeIcon(selectedWork.type)}
                    <span className="text-sm typewriter-text uppercase">
                      {selectedWork.type}
                    </span>
                  </span>
                  <span className="text-sm typewriter-text text-gray-500">
                    {selectedWork.date}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedWork(null)}
                className="text-gray-400 hover:text-gray-900 text-2xl typewriter-text"
              >
                ×
              </button>
            </div>

            {selectedWork.content ? (
              <div className="prose prose-gray max-w-none typewriter-text">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {selectedWork.content}
                </ReactMarkdown>
              </div>
            ) : (
              <p className="text-gray-600 typewriter-text mb-6">
                {selectedWork.description}
              </p>
            )}

            {selectedWork.link && (
              <div className="mt-6">
                <a
                  href={selectedWork.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="typewriter-button inline-flex items-center space-x-2"
                >
                  <span>[VIEW EXTERNAL]</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
