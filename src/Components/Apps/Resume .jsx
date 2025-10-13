import React from "react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">Resume</h1>

      <div className="max-w-3xl bg-gray-900 p-8 rounded-2xl shadow-lg">
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
          <span className="bg-gray-800 px-3 py-1 rounded-full">React</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">Node.js</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">Python</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">Tailwind</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">AI/ML</span>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
