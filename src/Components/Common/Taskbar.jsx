import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";

const Taskbar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-12 bg-[#1e1e1e] text-white flex items-center justify-between px-3 shadow-[0_-2px_6px_rgba(0,0,0,0.4)] border-t border-gray-700">
      {/* Start Button */}
      <button className="flex items-center gap-2 bg-gradient-to-r from-[#0078d7] to-[#00a4ef] px-3 py-1.5 rounded-md font-semibold text-sm hover:brightness-110 active:scale-95 transition-all">
        <Menu size={18} />
        <span>Start</span>
      </button>

      {/* Clock */}
      <div className="text-sm text-gray-300 font-medium">{time}</div>
    </div>
  );
};

export default Taskbar;
