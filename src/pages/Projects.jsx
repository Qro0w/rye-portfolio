import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

/*
==================================================
HOW TO ADD PROJECT IMAGES
==================================================

1. Put images inside:

src/assets/projects/

Example:

artms.png
kalikha.png
ndcw.png
crbs.png
biyahe.png
balinsasayaw.png
noctis.png

2. Import them:

import kalikhaImg from "../assets/projects/kalikha.png";

3. Replace placeholder values below.
==================================================
*/

const projects = [
  {
    title: "ARTMS",
    category: "Capstone · AI HR System",
    role: "Assistant Project Manager",
    stack: ["AI Screening", "HR Records", "Project Planning", "UAT"],
    desc: "AI-enhanced recruitment and employee records system for Accel4U Business Solutions Inc., covering applicant screening, interview scheduling, requirements verification, and digital 201 files.",
    image: "PUT artms.png HERE",
    github: "",
  },

  {
    title: "Kalikha",
    category: "Marketplace Platform",
    role: "Product / Development",
    stack: ["React", "Firebase", "UI/UX"],
    desc: "Social-commerce marketplace for Filipino arts and crafts where buyers connect directly with sellers.",
    image: "PUT kalikha.png HERE",
    github: "https://github.com/Qro0w/Kalikha",
  },

  {
    title: "ND-CW",
    category: "Booking Platform",
    role: "System Builder",
    stack: ["React", "Booking System", "UX"],
    desc: "Carwash reservation platform designed to modernize scheduling in Cebu.",
    image: "PUT ndcw.png HERE",
    github: "https://github.com/Qro0w/ND-CW",
  },

  {
    title: "CRBS",
    category: "University System",
    role: "Lead Developer",
    stack: ["Web App", "Booking", "Admin Panel"],
    desc: "Centralized room booking system with an admin panel for Southwestern University organizations to reserve rooms and venues digitally.",
    image: "PUT crbs.png HERE",
    github: "https://github.com/Qro0w/CRBS",
  },

  {
    title: "Biyahe Cebu",
    category: "Transport Tech",
    role: "Concept Builder",
    stack: ["Maps", "UX", "Research"],
    desc: "Route guidance system helping Cebu commuters understand jeepney routes.",
    image: "PUT biyahe.png HERE",
    github: "https://github.com/Qro0w/Biyahe-Cebu",
  },

  {
    title: "Balinsasayaw",
    category: "Business Website",
    role: "Web Developer",
    stack: ["Branding", "Frontend"],
    desc: "Digital presence website for Balinsasayaw and related establishments.",
    image: "PUT balinsasayaw.png HERE",
    github: "https://github.com/Qro0w/Balinsasayaw",
  },

  {
    title: "Noctis",
    category: "Game Project",
    role: "Team Developer",
    stack: ["Game Logic", "Teamwork"],
    desc: "Collaborative game development project focused on systems and creativity.",
    image: "PUT noctis.png HERE",
    github: "https://github.com/Qro0w/Noctis",
  },
];

export default function Projects() {
  return (
    <PageTransition>
      <section>
        <p className="text-purple-200 uppercase text-sm tracking-[0.25em]">
          Projects
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-8">
          Real Systems, Real Solutions
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-purple-400/30 transition"
            >
              {/* IMAGE */}
              <div className="relative h-72 md:h-80 bg-black">

                {project.image.startsWith("PUT") ? (
                  <div className="h-full w-full bg-gradient-to-br from-purple-700/30 via-black to-fuchsia-700/20 flex items-center justify-center px-4 text-center">
                    <span className="text-5xl md:text-6xl font-bold tracking-tight text-white/10">
                      {project.title}
                    </span>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                )}

                {/* OVERLAY */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-5 py-4">
                  <p className="text-sm text-purple-300">
                    {project.category}
                  </p>

                  <h2 className="text-xl md:text-2xl font-semibold mt-1">
                    {project.title}
                  </h2>

                  <p className="text-sm text-zinc-300 mt-1">
                    {project.role}
                  </p>
                </div>
              </div>

              {/* INFO */}
              <div className="p-5">
                <p className="text-sm text-zinc-400 line-clamp-3 leading-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs bg-purple-500/10 text-purple-200 border border-purple-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-5 px-5 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 transition"
                  >
                    View GitHub
                  </a>
                ) : (
                  <span className="inline-block mt-5 px-5 py-3 rounded-2xl border border-white/10 bg-white/5 text-zinc-400">
                    In Progress · Client Project
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}