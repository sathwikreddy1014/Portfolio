import React from "react";
import { motion } from "framer-motion";
import { Hammer, HardHat, ArrowLeft, Mail } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
      >
        <motion.div 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.2 
          }}
          className="mx-auto bg-gradient-to-br from-blue-500/20 to-cyan-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 border border-white/10"
        >
          <HardHat className="text-blue-400" size={40} />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
          Work in Progress
        </h1>
        
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          I am currently refining my resume to include my latest projects, architectural decisions, and technical milestones. Excellence takes a little time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-gray-300 hover:text-white w-full sm:w-auto justify-center"
          >
            <ArrowLeft size={18} />
            <span>Back Home</span>
          </a>
          
          <a
            href="mailto:sathwikreddy1014@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/20 transition-all w-full sm:w-auto justify-center"
          >
            <Mail size={18} />
            <span>Request Copy via Email</span>
          </a>
        </div>
      </motion.div>

      <p className="absolute bottom-8 text-gray-600 text-sm font-medium uppercase tracking-widest">
        Coming Soon
      </p>
    </div>
  );
};

export default Resume;