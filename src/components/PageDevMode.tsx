'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Plus, Upload, Link2, FileText, Image, Music, Code, Eye } from 'lucide-react';
import { validateDevAccess, setDevMode, isDevMode } from '@/lib/auth';

interface PageDevModeProps {
  page: 'blog' | 'poetry' | 'stories' | 'philosophy' | 'photography' | 'modeling' | 'music' | 'coding';
  onSave?: (data: any) => void;
}

export default function PageDevMode({ page, onSave }: PageDevModeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'add' | 'manage'>('add');

  useEffect(() => {
    setIsAuthenticated(isDevMode());
  }, []);

  const handleLogin = () => {
    if (validateDevAccess(password)) {
      setDevMode(true);
      setIsAuthenticated(true);
      setPassword('');
    }
  };

  const handleLogout = () => {
    setDevMode(false);
    setIsAuthenticated(false);
    setIsOpen(false);
  };

  const renderContentEditor = () => {
    switch (page) {
      case 'blog':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Add Blog Post</h3>
            <input
              type="text"
              placeholder="Post Title"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <textarea
              placeholder="Write your post in Markdown..."
              className="w-full px-4 py-2 border rounded-lg h-64 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Tags (comma separated)"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Save Post
            </button>
          </div>
        );

      case 'stories':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Add Short Story</h3>
            <input
              type="text"
              placeholder="Story Title"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <textarea
              placeholder="Write your story..."
              className="w-full px-4 py-2 border rounded-lg h-64 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="mx-auto mb-2 text-gray-400" size={24} />
              <p className="text-sm text-gray-500 mb-2">Upload PDF or text file</p>
              <input type="file" accept=".pdf,.txt" className="hidden" id="file-upload" />
              <label
                htmlFor="file-upload"
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
              >
                Choose File
              </label>
            </div>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Save Story
            </button>
          </div>
        );

      case 'poetry':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Add Poem</h3>
            <input
              type="text"
              placeholder="Poem Title"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <textarea
              placeholder="Write your poem...&#10;&#10;Use line breaks for structure&#10;Stanzas are separated by empty lines"
              className="w-full px-4 py-2 border rounded-lg h-64 focus:ring-2 focus:ring-orange-500 focus:border-transparent whitespace-pre-wrap"
            />
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Save Poem
            </button>
          </div>
        );

      case 'coding':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Add GitHub Project</h3>
            <input
              type="text"
              placeholder="Project Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <input
              type="url"
              placeholder="GitHub Repository URL"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <textarea
              placeholder="Project Description"
              className="w-full px-4 py-2 border rounded-lg h-32 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Tags (comma separated)"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Add Project
            </button>
          </div>
        );

      case 'music':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Add Music Track</h3>
            <input
              type="text"
              placeholder="Track Title"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <input
              type="url"
              placeholder="SoundCloud URL"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <textarea
              placeholder="Track Description"
              className="w-full px-4 py-2 border rounded-lg h-32 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Add Track
            </button>
          </div>
        );

      case 'photography':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Add Photos to Album</h3>
            <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              <option value="">Select Album</option>
              <option value="headshots">Headshots</option>
              <option value="life-2024">Life 2024</option>
              <option value="new">+ Create New Album</option>
            </select>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Image className="mx-auto mb-2 text-gray-400" size={24} />
              <p className="text-sm text-gray-500 mb-2">Upload photos</p>
              <input type="file" accept="image/*" multiple className="hidden" id="photo-upload" />
              <label
                htmlFor="photo-upload"
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
              >
                Choose Photos
              </label>
            </div>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Upload Photos
            </button>
          </div>
        );

      default:
        return (
          <div className="text-center text-gray-500 py-8">
            <FileText size={48} className="mx-auto mb-4" />
            <p>Dev mode for this page coming soon</p>
          </div>
        );
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      {/* Floating Dev Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors z-40"
      >
        <Settings size={24} />
      </motion.button>

      {/* Dev Mode Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Dev Mode - {page.charAt(0).toUpperCase() + page.slice(1)}</h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleLogout}
                    className="text-sm text-red-500 hover:text-red-700 transition-colors"
                  >
                    Logout
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex gap-2 mb-6">
                  <button
                    onClick={() => setActiveTab('add')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      activeTab === 'add'
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Plus size={16} className="inline mr-2" />
                    Add Content
                  </button>
                  <button
                    onClick={() => setActiveTab('manage')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      activeTab === 'manage'
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Eye size={16} className="inline mr-2" />
                    Manage
                  </button>
                </div>

                {activeTab === 'add' && renderContentEditor()}
                {activeTab === 'manage' && (
                  <div className="text-center text-gray-500 py-8">
                    <p>Content management interface coming soon</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
