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
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      {loading ? (
        <>
          {/* Windows Logo */}
          <div className="grid grid-cols-2 gap-[2px] mb-6">
            <div className="bg-[#f25022] w-12 h-12 rounded-sm"></div>
            <div className="bg-[#7fba00] w-12 h-12 rounded-sm"></div>
            <div className="bg-[#00a4ef] w-12 h-12 rounded-sm"></div>
            <div className="bg-[#ffb900] w-12 h-12 rounded-sm"></div>
          </div>
          <p className="text-lg text-gray-300">Loading Portfolio...</p>

          {/* Loading Bar */}
          <div className="mt-5 w-40 h-3 bg-gray-700 rounded-sm overflow-hidden">
            <div className="h-full bg-[#00a4ef] animate-[loading_2s_ease-in-out_infinite]" />
          </div>
        </>
      ) : (
        // After load → show image and name
        <div className="flex flex-col items-center space-y-4 transition-opacity duration-1000">
          <img
            src="https://res.cloudinary.com/sparkmeet/image/upload/v1759942907/k0minbhqft40jkegd5pu.png"
            alt="Sathwik"
            className="w-1/3 rounded-lg shadow-lg"
          />
          <h1
            onClick={() => navigate("/home")}
            className="text-4xl font-semibold text-white hover:text-[#00a4ef] cursor-pointer"
          >
            Sathwik <span className="text-[#f25022]">Reddy</span>
          </h1>
          <p className="text-gray-400">Full-Stack Developer</p>
        </div>
      )}
    </div>
  );
};

export default Loader;
