import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Outfit Recommender",
    description:
      "AI model that suggests the best outfit based on your photo, skin tone, and occasion.",
    image: "https://images.unsplash.com/photo-1618354691794-85b2cbfa5a16?auto=format&fit=crop&w=400&q=80",
    tags: ["AI", "Python", "React", "Tailwind"],
    github: "https://github.com/yourusername/ai-outfit-recommender",
    demo: "#",
  },
  {
    title: "SparkMeet",
    description:
      "A social meet-up app with real-time chat, authentication, and live status updates.",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=400&q=80",
    tags: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/sathwikreddy1014/SparkMeet-Frontend",
    demo: "#",
  },
  {
    title: "MovieVerse",
    description:
      "OTT platform with AI-powered search and personalized movie recommendations.",
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=400&q=80",
    tags: ["React", "Firebase", "OpenAI API"],
    github: "https://github.com/sathwikreddy1014/MoviAI",
    demo: "#",
  },
  {
    title: "Youtube",
    description:
      "Modern developer portfolio with React, Tailwind, and Framer Motion animations.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80",
    tags: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/sathwikreddy1014/youtube-clone",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-8 py-16">
      <h1 className="text-5xl font-bold text-center mb-14 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
        Projects
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
            className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-blue-500/20 transition-transform"
          >
            {/* Project Image */}
            <div className="h-40 overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between h-[calc(100%-10rem)]">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-blue-400">{proj.title}</h2>
                <p className="text-gray-300 text-sm mb-3">{proj.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {proj.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-blue-500/20 border border-blue-400/30 text-blue-300 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-5">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                >
                  <Github size={18} />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-3 py-1.5 rounded-lg text-sm font-medium transition"
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
