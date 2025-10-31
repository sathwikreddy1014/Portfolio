import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/sathwikreddy1014/repos");
        const data = await res.json();

        // Filter and sort repos (optional)
        const filtered = data
          .filter(repo => !repo.fork) // ignore forks
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)); // latest first

        setProjects(filtered);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-8 py-16">
      <h1 className="text-5xl font-bold text-center mb-14 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
        Projects
      </h1>

      {projects.length === 0 ? (
        <p className="text-center text-gray-400">Loading projects...</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
              className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-blue-500/20 transition-transform"
            >
              {/* Repo Thumbnail (fallback to default image) */}
              <div className="h-40 overflow-hidden">
                <img
                  src={`https://opengraph.githubassets.com/1/${proj.full_name}`}
                  alt={proj.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-[calc(100%-10rem)]">
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-blue-400">
                    {proj.name}
                  </h2>
                  <p className="text-gray-300 text-sm mb-3">
                    {proj.description || "No description provided."}
                  </p>

                  {/* Tags (Languages placeholder) */}
                  {proj.language && (
                    <span className="text-xs bg-blue-500/20 border border-blue-400/30 text-blue-300 px-2 py-0.5 rounded-full">
                      {proj.language}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-5">
                  <a
                    href={proj.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                  >
                    <Github size={18} />
                    <span className="text-sm">GitHub</span>
                  </a>
                  {proj.homepage && (
                    <a
                      href={proj.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
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
      )}
    </div>
  );
};

export default Projects;
