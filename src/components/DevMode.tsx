'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'story' | 'poetry' | 'essay';
}

interface CreativeWork {
  id: string;
  title: string;
  description: string;
  type: 'story' | 'poetry' | 'design' | 'music';
  content?: string;
  link?: string;
}

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

interface ContentData {
  blogPosts: BlogPost[];
  creativeWorks: CreativeWork[];
  codeProjects: CodeProject[];
}

export default function DevMode() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'blog' | 'creative' | 'code'>('blog');
  const [content, setContent] = useState<ContentData>({
    blogPosts: [],
    creativeWorks: [],
    codeProjects: []
  });

  const [newBlogPost, setNewBlogPost] = useState<{
    title: string;
    content: string;
    type: 'essay' | 'story' | 'poetry';
  }>({
    title: '',
    content: '',
    type: 'essay'
  });

  const [newCreativeWork, setNewCreativeWork] = useState<{
    title: string;
    description: string;
    type: 'story' | 'poetry' | 'design' | 'music';
    content: string;
    link: string;
  }>({
    title: '',
    description: '',
    type: 'design',
    content: '',
    link: ''
  });

  const [newCodeProject, setNewCodeProject] = useState({
    name: '',
    description: '',
    url: '',
    language: '',
    tags: ''
  });

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem('portfolio-content');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  const saveContent = () => {
    localStorage.setItem('portfolio-content', JSON.stringify(content));
    alert('Content saved successfully!');
  };

  const addBlogPost = () => {
    if (newBlogPost.title && newBlogPost.content) {
      const post: BlogPost = {
        id: Date.now().toString(),
        title: newBlogPost.title,
        content: newBlogPost.content,
        date: new Date().toISOString().split('T')[0],
        type: newBlogPost.type
      };
      setContent(prev => ({
        ...prev,
        blogPosts: [...prev.blogPosts, post]
      }));
      setNewBlogPost({ title: '', content: '', type: 'essay' });
    }
  };

  const addCreativeWork = () => {
    if (newCreativeWork.title && newCreativeWork.description) {
      const work: CreativeWork = {
        id: Date.now().toString(),
        title: newCreativeWork.title,
        description: newCreativeWork.description,
        type: newCreativeWork.type,
        content: newCreativeWork.content || undefined,
        link: newCreativeWork.link || undefined
      };
      setContent(prev => ({
        ...prev,
        creativeWorks: [...prev.creativeWorks, work]
      }));
      setNewCreativeWork({ title: '', description: '', type: 'design', content: '', link: '' });
    }
  };

  const addCodeProject = () => {
    if (newCodeProject.name && newCodeProject.url) {
      const project: CodeProject = {
        id: Date.now().toString(),
        name: newCodeProject.name,
        description: newCodeProject.description,
        url: newCodeProject.url,
        stars: 0,
        forks: 0,
        language: newCodeProject.language,
        tags: newCodeProject.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
      };
      setContent(prev => ({
        ...prev,
        codeProjects: [...prev.codeProjects, project]
      }));
      setNewCodeProject({ name: '', description: '', url: '', language: '', tags: '' });
    }
  };

  const deleteItem = (type: keyof ContentData, id: string) => {
    setContent(prev => ({
      ...prev,
      [type]: prev[type].filter(item => item.id !== id)
    }));
  };

  if (!isOpen) {
    return (
      <motion.button
        onClick={() => setIsOpen(true)}
        className="dev-mode typewriter-button text-xs px-3 py-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        [DEV MODE]
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="dev-mode dev-panel"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold orange-accent">CONTENT MANAGER</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-white"
        >
          [X]
        </button>
      </div>

      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setActiveTab('blog')}
          className={`px-3 py-1 text-xs ${activeTab === 'blog' ? 'orange-accent' : 'text-gray-400'}`}
        >
          [BLOG]
        </button>
        <button
          onClick={() => setActiveTab('creative')}
          className={`px-3 py-1 text-xs ${activeTab === 'creative' ? 'orange-accent' : 'text-gray-400'}`}
        >
          [CREATIVE]
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`px-3 py-1 text-xs ${activeTab === 'code' ? 'orange-accent' : 'text-gray-400'}`}
        >
          [CODE]
        </button>
      </div>

      {activeTab === 'blog' && (
        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Title"
              className="dev-input"
              value={newBlogPost.title}
              onChange={(e) => setNewBlogPost(prev => ({ ...prev, title: e.target.value }))}
            />
          </div>
          <div>
            <select
              className="dev-input"
              value={newBlogPost.type}
              onChange={(e) => setNewBlogPost(prev => ({ ...prev, type: e.target.value as BlogPost['type'] }))}
            >
              <option value="essay">Essay</option>
              <option value="story">Story</option>
              <option value="poetry">Poetry</option>
            </select>
          </div>
          <div>
            <textarea
              placeholder="Content (markdown supported)"
              className="dev-textarea"
              value={newBlogPost.content}
              onChange={(e) => setNewBlogPost(prev => ({ ...prev, content: e.target.value }))}
            />
          </div>
          <button
            onClick={addBlogPost}
            className="typewriter-button text-sm w-full"
          >
            ADD POST
          </button>
          
          <div className="mt-4 space-y-2">
            <h4 className="text-sm font-bold orange-accent">EXISTING POSTS:</h4>
            {content.blogPosts.map(post => (
              <div key={post.id} className="bg-gray-800 p-2 text-xs">
                <div className="flex justify-between items-center">
                  <span>{post.title} [{post.type}]</span>
                  <button
                    onClick={() => deleteItem('blogPosts', post.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    [DEL]
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'creative' && (
        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Title"
              className="dev-input"
              value={newCreativeWork.title}
              onChange={(e) => setNewCreativeWork(prev => ({ ...prev, title: e.target.value }))}
            />
          </div>  
          <div>
            <select
              className="dev-input"
              value={newCreativeWork.type}
              onChange={(e) => setNewCreativeWork(prev => ({ ...prev, type: e.target.value as CreativeWork['type'] }))}
            >
              <option value="design">Design</option>
              <option value="story">Story</option>
              <option value="poetry">Poetry</option>
              <option value="music">Music</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Description"
              className="dev-input"
              value={newCreativeWork.description}
              onChange={(e) => setNewCreativeWork(prev => ({ ...prev, description: e.target.value }))}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Link (optional)"
              className="dev-input"
              value={newCreativeWork.link}
              onChange={(e) => setNewCreativeWork(prev => ({ ...prev, link: e.target.value }))}
            />
          </div>
          <div>
            <textarea
              placeholder="Content (optional, markdown supported)"
              className="dev-textarea"
              value={newCreativeWork.content}
              onChange={(e) => setNewCreativeWork(prev => ({ ...prev, content: e.target.value }))}
            />
          </div>
          <button
            onClick={addCreativeWork}
            className="typewriter-button text-sm w-full"
          >
            ADD WORK
          </button>
          
          <div className="mt-4 space-y-2">
            <h4 className="text-sm font-bold orange-accent">EXISTING WORKS:</h4>
            {content.creativeWorks.map(work => (
              <div key={work.id} className="bg-gray-800 p-2 text-xs">
                <div className="flex justify-between items-center">
                  <span>{work.title} [{work.type}]</span>
                  <button
                    onClick={() => deleteItem('creativeWorks', work.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    [DEL]
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'code' && (
        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Project Name"
              className="dev-input"
              value={newCodeProject.name}
              onChange={(e) => setNewCodeProject(prev => ({ ...prev, name: e.target.value }))}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Description"
              className="dev-input"
              value={newCodeProject.description}
              onChange={(e) => setNewCodeProject(prev => ({ ...prev, description: e.target.value }))}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="GitHub URL"
              className="dev-input"
              value={newCodeProject.url}
              onChange={(e) => setNewCodeProject(prev => ({ ...prev, url: e.target.value }))}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Language"
              className="dev-input"
              value={newCodeProject.language}
              onChange={(e) => setNewCodeProject(prev => ({ ...prev, language: e.target.value }))}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Tags (comma separated)"
              className="dev-input"
              value={newCodeProject.tags}
              onChange={(e) => setNewCodeProject(prev => ({ ...prev, tags: e.target.value }))}
            />
          </div>
          <button
            onClick={addCodeProject}
            className="typewriter-button text-sm w-full"
          >
            ADD PROJECT
          </button>
          
          <div className="mt-4 space-y-2">
            <h4 className="text-sm font-bold orange-accent">EXISTING PROJECTS:</h4>
            {content.codeProjects.map(project => (
              <div key={project.id} className="bg-gray-800 p-2 text-xs">
                <div className="flex justify-between items-center">
                  <span>{project.name} [{project.language}]</span>
                  <button
                    onClick={() => deleteItem('codeProjects', project.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    [DEL]
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 pt-4 border-t border-gray-700">
        <button
          onClick={saveContent}
          className="typewriter-button text-sm w-full orange-bg"
        >
          SAVE ALL CONTENT
        </button>
      </div>
    </motion.div>
  );
}
