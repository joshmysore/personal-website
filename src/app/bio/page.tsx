'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Mail, MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function BioPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-12"
        >
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-orange-500 mb-6 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">About Josh Mysore</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <p className="text-xl text-gray-700 leading-relaxed">
                A creative developer and artist passionate about building beautiful experiences 
                and exploring the intersection of technology, art, and human expression.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 text-gray-700">
                  <Briefcase className="text-orange-500" size={20} />
                  <span>Full-Stack Developer & Creative</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="text-orange-500" size={20} />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="text-orange-500" size={20} />
                  <span>hello@joshmysore.me</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 text-gray-700">
                  <GraduationCap className="text-orange-500" size={20} />
                  <span>Computer Science & Design</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="text-orange-500" size={20} />
                  <span>Building since 2018</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="border-t pt-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">What I Do</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <h3 className="font-bold text-orange-500 mb-2">Code</h3>
                  <p className="text-sm text-gray-600">Building elegant solutions with modern web technologies</p>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-orange-500 mb-2">Create</h3>
                  <p className="text-sm text-gray-600">Writing poetry, stories, and philosophical reflections</p>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-orange-500 mb-2">Capture</h3>
                  <p className="text-sm text-gray-600">Photography and visual storytelling</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center pt-8 border-t"
            >
              <p className="text-gray-600 italic">
                "I believe in the power of technology to amplify human creativity and connection."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
