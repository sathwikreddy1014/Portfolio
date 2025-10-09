import React from "react";
import { Link } from "react-router-dom";
import { User, FolderGit2, FileText, Phone } from "lucide-react";

const icons = [
  { id: 1, label: "About Me", icon: <User size={28} />, path: "/about" },
  { id: 2, label: "Projects", icon: <FolderGit2 size={28} />, path: "/projects" },
  { id: 3, label: "Resume", icon: <FileText size={28} />, path: "/resume" },
  { id: 4, label: "Contact", icon: <Phone size={28} />, path: "/contact" },
];

const NavIcons = () => {
  return (
    <div className="flex flex-col items-start gap-5">
      {icons.map(({ id, label, icon, path }) => (
        <Link
          key={id}
          to={path}
          className="flex flex-col items-center text-center group cursor-pointer"
        >
          <div className="p-3 bg-gray-800 rounded-md text-[#00a4ef] group-hover:bg-[#00a4ef] group-hover:text-black transition-all duration-300">
            {icon}
          </div>
          <span className="mt-1 text-xs text-gray-300 group-hover:text-white">
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default NavIcons;
