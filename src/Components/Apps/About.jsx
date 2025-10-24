import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const About = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white flex flex-col items-center justify-center px-6">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text"
    >
      About Me
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-lg max-w-2xl text-center text-gray-300 mb-6 leading-relaxed"
    >
      Hi, I'm <span className="text-blue-400 font-semibold">Sathwik Reddy</span> — a passionate software developer who loves
      building modern web applications, experimenting with AI, and solving
      real-world problems through elegant code.
    </motion.p>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="flex space-x-6 mt-4"
    >
      {[
        { icon: <FaGithub />, href: "https://github.com/yourgithub" },
        { icon: <FaLinkedin />, href: "https://linkedin.com/in/yourlinkedin" },
        { icon: <FaTwitter />, href: "https://twitter.com/yourtwitter" },
        { icon: <FaEnvelope />, href: "mailto:youremail@example.com" },
      ].map((link, i) => (
        <motion.a
          key={i}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-300 hover:text-blue-400 transition text-3xl"
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  </div>
);

export default About;
