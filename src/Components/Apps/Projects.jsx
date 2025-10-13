import React from "react";

const projects = [
  {
    title: "AI Outfit Recommender",
    description: "AI model that suggests the best outfit based on your photo, skin tone, and occasion.",
  },
  {
    title: "SparkMeet",
    description: "A social meet-up app with real-time chat, authentication, and live status updates.",
  },
  {
    title: "MovieVerse",
    description: "OTT platform with AI-powered search and personalized movie recommendations.",
  },
  {
    title: "DevPortfolio",
    description: "Modern developer portfolio with React, Tailwind, and Framer Motion animations.",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-400">{proj.title}</h2>
            <p className="text-gray-300 text-sm">{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
