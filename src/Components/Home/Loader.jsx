import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white transition-all duration-700">
      {loading ? (
        <div className="flex flex-col items-center space-y-6 animate-fade-in">
          {/* Windows Logo */}
          <div className="grid grid-cols-2 gap-[3px] mb-4 animate-pulse">
            <div className="bg-[#f25022] w-14 h-14 sm:w-16 sm:h-16 rounded-sm" />
            <div className="bg-[#7fba00] w-14 h-14 sm:w-16 sm:h-16 rounded-sm" />
            <div className="bg-[#00a4ef] w-14 h-14 sm:w-16 sm:h-16 rounded-sm" />
            <div className="bg-[#ffb900] w-14 h-14 sm:w-16 sm:h-16 rounded-sm" />
          </div>

          <p className="text-lg text-gray-300 tracking-wide">
            Loading Portfolio...
          </p>

          {/* Loading Bar */}
          <div className="mt-5 w-44 h-3 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-[#00a4ef] animate-loading-bar" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-4 transition-opacity duration-1000 animate-fade-in">
          <img
            src="https://res.cloudinary.com/sparkmeet/image/upload/v1759942907/k0minbhqft40jkegd5pu.png"
            alt="Sathwik"
            className="w-1/2 sm:w-1/3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          />
          <h1
            onClick={() => navigate("/home")}
            className="text-4xl font-semibold text-white hover:text-[#00a4ef] cursor-pointer transition-colors"
          >
            Sathwik <span className="text-[#f25022]">Reddy</span>
          </h1>
          <p className="text-gray-400 text-lg">Full-Stack Developer</p>
        </div>
      )}
    </div>
  );
};

export default Loader;
