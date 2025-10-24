import React from "react";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white flex flex-col items-center justify-center px-8 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text"
      >
        Resume
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl"
      >
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">Experience</h2>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Software Developer Intern at XYZ Company (2024)</li>
          <li>Built full-stack apps with React, Node.js, and MongoDB</li>
          <li>Developed AI-based outfit recommendation system</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-400">Education</h2>
        <p className="text-gray-300">
          B.Tech in Computer Science — ABC University, 2021–2025
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-400">Skills</h2>
        <div className="flex flex-wrap gap-3 text-gray-300">
          {["React", "Node.js", "Python", "Tailwind", "AI/ML"].map((skill) => (
            <span
              key={skill}
              className="bg-blue-500/20 border border-blue-400/30 px-3 py-1 rounded-full text-sm text-blue-300"
            >
              {skill}
            </span>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-8 text-center"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            <FileDown size={18} /> Download Resume
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Resume;
