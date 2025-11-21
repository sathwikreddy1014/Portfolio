import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code, Server, Brain, Database, Terminal } from "lucide-react";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6 py-20 flex items-center justify-center">
      <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* --- Left Side: Bio & Story --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-blue-400 font-medium tracking-wider uppercase mb-3 text-sm">
              About Me
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text leading-tight">
              Architecting digital <br /> experiences.
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="text-gray-300 text-lg leading-relaxed mb-6">
            Hi, I'm <span className="text-white font-semibold">Sathwik Reddy</span>. 
            I am a passionate <span className="text-blue-300">Full Stack Developer</span> based in India. 
            I thrive on turning complex problems into elegant, scalable solutions. 
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-gray-400 mb-8 leading-relaxed">
            From building real-time communication platforms to integrating AI-driven features into web apps, 
            I love exploring new technologies. My journey involves constant learning, whether it's mastering 
            <span className="text-white"> React</span> ecosystems or diving deep into <span className="text-white">Node.js</span> backend logic.
          </motion.p>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-5">
            <SocialLink href="https://github.com/sathwikreddy1014" icon={<Github size={20} />} />
            <SocialLink href="https://linkedin.com/in/sathwikreddy1014" icon={<Linkedin size={20} />} />
            <SocialLink href="mailto:sathwikreddy1014@gmail.com" icon={<Mail size={20} />} />
          </motion.div>
        </motion.div>

        {/* --- Right Side: Skills & Cards --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <SkillCard 
            icon={<Code className="text-blue-400" size={32} />} 
            title="Frontend" 
            desc="React, Tailwind, Framer Motion, Next.js" 
          />
          <SkillCard 
            icon={<Server className="text-green-400" size={32} />} 
            title="Backend" 
            desc="Node.js, Express, Socket.io, REST APIs" 
          />
          <SkillCard 
            icon={<Database className="text-yellow-400" size={32} />} 
            title="Database" 
            desc="MongoDB, SQL, efficient schema design" 
          />
          <SkillCard 
            icon={<Brain className="text-purple-400" size={32} />} 
            title="AI Integrations" 
            desc="Leveraging AI APIs for smarter applications" 
          />
        </motion.div>

      </div>
    </div>
  );
};

// --- Helper Components ---

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-blue-400 hover:scale-110 transition-all duration-300"
  >
    {icon}
  </a>
);

const SkillCard = ({ icon, title, desc }) => (
  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
    <div className="mb-4 p-3 bg-gray-900 rounded-lg w-fit group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-300 transition-colors">{title}</h3>
    <p className="text-sm text-gray-400">{desc}</p>
  </div>
);

export default About;