import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const About = () => (
  <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
    <h1 className="text-4xl font-bold mb-4">About Me</h1>
    <p className="text-lg max-w-2xl text-center text-gray-300 mb-6">
      Hi, I'm <span className="text-blue-400">Sathwik Reddy</span> — a passionate software developer who loves
      building modern web applications, experimenting with AI, and solving
      real-world problems through code.
    </p>

    <div className="flex space-x-6 mt-4">
      <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} className="hover:text-blue-500 transition" />
      </a>
      <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} className="hover:text-blue-500 transition" />
      </a>
      <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} className="hover:text-blue-500 transition" />
      </a>
      <a href="mailto:youremail@example.com">
        <FaEnvelope size={30} className="hover:text-blue-500 transition" />
      </a>
    </div>
  </div>
);

export default About;
