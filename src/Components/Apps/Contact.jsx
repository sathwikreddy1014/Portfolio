import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, Loader2 } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate sending (Replace with real logic like EmailJS)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSent(false), 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6 py-20 flex items-center justify-center">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* --- Left Side: Info & Socials --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text leading-tight">
            Let's create something <br /> amazing together.
          </h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            I'm currently open to new opportunities and collaborations. 
            Whether you have a question, a project idea, or just want to say hi, 
            drop me a message!
          </p>

          <div className="space-y-8">
            {/* Location */}
            <div className="flex items-center gap-5 group">
              <div className="bg-blue-500/10 p-3 rounded-xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Location</p>
                <p className="text-lg font-medium">India</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-5 group">
              <div className="bg-blue-500/10 p-3 rounded-xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Email</p>
                <a 
                  href="mailto:sathwikreddy1014@gmail.com" 
                  className="text-lg font-medium hover:text-blue-400 transition"
                >
                  sathwikreddy1014@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-8 flex gap-4">
              <SocialBtn 
                href="https://github.com/sathwikreddy1014" 
                icon={<Github size={22} />} 
                label="GitHub"
              />
              {/* Assuming LinkedIn follows same username pattern */}
              <SocialBtn 
                href="https://www.linkedin.com/in/sathwik-reddy-06b67130b/" 
                icon={<Linkedin size={22} />} 
                label="LinkedIn"
              />
            </div>
          </div>
        </motion.div>

        {/* --- Right Side: Contact Form --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Decoratve Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl blur opacity-20 animate-pulse"></div>
          
          <form 
            onSubmit={handleSubmit}
            className="relative bg-gray-900/80 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl space-y-6"
          >
            <h2 className="text-2xl font-semibold mb-2">Send a Message</h2>
            
            {/* Name Input */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Your Email</label>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formState.message}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all ${
                isSent 
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : isSent ? (
                "Message Sent!"
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

// Helper Component for Social Buttons
const SocialBtn = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-5 py-3 rounded-full hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 group"
  >
    <span className="text-gray-400 group-hover:text-blue-400 transition-colors">{icon}</span>
    <span className="text-sm font-medium text-gray-300 group-hover:text-white">{label}</span>
  </a>
);

export default Contact;