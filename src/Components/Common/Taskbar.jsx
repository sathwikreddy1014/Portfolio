import React, { useEffect, useState } from "react";
import {
  Menu,
  Wifi,
  BatteryFull,
  Volume2,
  Bell,
  User,
  Power,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Taskbar = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const day = now.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
      setTime(`${hours}:${minutes}:${seconds}`);
      setDate(day);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Taskbar */}
      <div className="fixed bottom-0 left-0 w-full h-12 backdrop-blur-lg bg-[rgba(30,30,30,0.6)] text-white flex items-center justify-between px-4 shadow-[0_-2px_8px_rgba(0,0,0,0.4)] border-t border-gray-700 z-50">

        {/* Left Section */}
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="flex items-center gap-2 bg-gradient-to-r from-[#0078d7] to-[#00a4ef] px-3 py-1.5 rounded-md font-semibold text-sm hover:brightness-110 active:scale-95 transition-all"
        >
          <Menu size={18} />
          <span>Start</span>
        </button>

        {/* Center Section - User Info */}
        <div className="flex items-center gap-3 text-sm font-medium">
          <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-xl hover:bg-white/20 transition">
            <User size={18} />
            <span>Sathwik</span>
          </div>
        </div>

        {/* Right Section - System Icons & Clock */}
        <div className="flex items-center gap-4 text-gray-300 text-sm">
          <Wifi size={16} />
          <BatteryFull size={16} />
          <Volume2 size={16} />
          <Bell size={16} />
          <div className="flex flex-col items-end leading-tight">
            <span className="text-white font-semibold">{time}</span>
            <span className="text-xs text-gray-400">{date}</span>
          </div>
        </div>
      </div>

      {/* Start Menu Popup */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-14 left-3 w-64 rounded-2xl bg-[rgba(40,40,40,0.9)] backdrop-blur-xl text-white p-4 shadow-2xl border border-gray-700"
          >
            <div className="font-semibold text-lg mb-3">Start Menu</div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                "Settings",
                "Documents",
                "Photos",
                "Music",
                "Apps",
                "Files",
                "Downloads",
                "About",
              ].map((item) => (
                <button
                  key={item}
                  className="bg-white/10 rounded-lg py-2 hover:bg-white/20 transition"
                >
                  {item}
                </button>
              ))}
            </div>

            <button className="flex items-center gap-2 mt-4 w-full bg-red-500/80 hover:bg-red-500 rounded-lg py-2 transition">
              <Power size={16} /> <span>Shut Down</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Taskbar;
