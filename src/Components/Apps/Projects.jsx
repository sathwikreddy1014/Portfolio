import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

// ⬇️ YOUR CUSTOM PROJECTS ARRAY
const PROJECTS = [
  {
    title: "SparkMeet", 
    description: "A seamless meeting platform built with React and Tailwind.",
    tech: "React",
    github: "https://github.com/sathwikreddy1014/SparkMeet-Frontend",
    demo: "https://sparkmeet.shop/",
    // repoName used for the image. I matched this to your github link automatically:
    repoName: "sathwikreddy1014/SparkMeet-Frontend", 
  },
  {
    title: "MoviAI",
    description: "AI-powered movie browsing application.",
    tech: "Node.js",
    github: "https://github.com/sathwikreddy1014/MoviAI",
    demo: "https://movi-ai-one.vercel.app/browse",
    repoName: "sathwikreddy1014/MoviAI",
  },
  {
    title: "Chat Application",
    description: "Real-time messaging app using Socket.io and MongoDB.",
    tech: "Socket.io",
    github: "https://github.com/sathwikreddy1014/chat-app", // Replace with real link
    demo: null, 
    repoName: "sathwikreddy1014/chat-app",
  },
  {
    title: "Task Manager",
    description: "Productivity tool to track daily tasks and long-term goals.",
    tech: "TypeScript",
    github: "https://github.com/sathwikreddy1014/task-manager", // Replace with real link
    demo: "https://task-demo.com",
    repoName: "sathwikreddy1014/task-manager",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-8 py-16">
      <h1 className="text-5xl font-bold text-center mb-14 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
        Projects
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {PROJECTS.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
            className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-blue-500/20 transition-transform"
          >
            {/* Repo Thumbnail */}
            <div className="h-40 overflow-hidden">
              <img
                src={`https://opengraph.githubassets.com/1/${proj.repoName}`}
                alt={proj.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                    e.target.src = "https://placehold.co/600x400?text=Project"; // Fallback if no image
                }}
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between h-[calc(100%-10rem)]">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-blue-400 truncate">
                  {proj.title}
                </h2>
                <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                  {proj.description}
                </p>

                {/* Tech Tag */}
                {proj.tech && (
                  <span className="text-xs bg-blue-500/20 border border-blue-400/30 text-blue-300 px-2 py-0.5 rounded-full">
                    {proj.tech}
                  </span>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-5">
                {/* GitHub: Opens in NEW Tab */}
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                >
                  <Github size={18} />
                  <span className="text-sm">GitHub</span>
                </a>

                {/* Demo: Opens in SAME Tab (target removed) */}
                {proj.demo && (
                  <a
                    href={proj.demo}
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-3 py-1.5 rounded-lg text-sm font-medium transition"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;