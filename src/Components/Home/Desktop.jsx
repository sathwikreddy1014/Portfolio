import React from "react";
import NavIcons from "../Common/NavIcons";
import Taskbar from "../Common/Taskbar";

const Desktop = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden text-white font-sans">
      {/* 🎥 Background Video */}


      {/* Optional dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>

      {/* 💻 Desktop App Icons */}
      <div className="absolute left-6 top-10 flex flex-col gap-10 z-20 animate-fade-in">
        <NavIcons />
      </div>

      {/* 🧭 Taskbar */}
      <div className="absolute bottom-0 w-full z-30 animate-slide-up">
        <Taskbar />
      </div>
    </div>
  );
};

export default Desktop;
