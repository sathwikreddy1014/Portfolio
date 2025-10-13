import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-8">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <form className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full px-4 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
