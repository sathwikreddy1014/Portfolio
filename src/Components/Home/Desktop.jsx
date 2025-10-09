import React from "react";
import NavIcons from "../Common/NavIcons";
import Taskbar from "../Common/Taskbar";
import desktopVideo from "../../assets/desktop-bg.mp4"; // 👈 adjust path as needed

const Desktop = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden text-white">
      
      {/* 🎥 Background Video */}
      <video
        src={desktopVideo}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Left-side app icons */}
      <div className="absolute left-6 top-8 flex flex-col gap-8 z-20">
        <NavIcons />
      </div>

      {/* Taskbar fixed at bottom */}
      <div className="absolute bottom-0 w-full z-30">
        <Taskbar />
      </div>
    </div>
  );
};

export default Desktop;
