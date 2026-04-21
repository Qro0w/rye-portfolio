import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Journey from "./pages/Journey";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Workshops from "./pages/Workshops";
import Leadership from "./pages/Leadership";
import Certifications from "./pages/Certifications";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pb-16 pt-28 md:px-10 lg:px-12">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}