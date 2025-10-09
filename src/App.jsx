import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./Components/Home/Loader";
import Desktop from "./Components/Home/Desktop";
import About from "./Components/Apps/About";
import Projects from "./Components/Apps/Projects";
import Resume from "./Components/Apps/Resume ";
import Contact from "./Components/Apps/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/home" element={<Desktop />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
