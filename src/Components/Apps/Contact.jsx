import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white flex flex-col items-center justify-center px-8 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text"
      >
        Contact Me
      </motion.h1>

      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-5"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-md bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-md bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-md bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90 text-white py-3 rounded-md font-semibold transition"
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;
