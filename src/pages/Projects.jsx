import React from "react";
import PageTransition from "../components/PageTransition";

const projects = [
  {
    title: "Kalikha",
    category: "Marketplace Platform",
    role: "Product / Development",
    stack: ["React", "Firebase", "UI/UX"],
    desc: "Marketplace for Filipino arts and crafts where buyers connect directly with sellers.",
    github: "https://github.com/Qro0w/Kalikha",
  },
  {
    title: "ND-CW",
    category: "Booking Platform",
    role: "System Builder",
    stack: ["React", "Booking Logic", "UX"],
    desc: "Carwash reservation platform designed to modernize scheduling in Cebu.",
    github: "https://github.com/Qro0w/ND-CW",
  },
  {
    title: "CRBS",
    category: "University System",
    role: "Lead Builder",
    stack: ["Web App", "Booking", "Admin"],
    desc: "Venue reservation system for Southwestern University organizations.",
    github: "https://github.com/Qro0w/CRBS",
  },
  {
    title: "Biyahe Cebu",
    category: "Transport Tech",
    role: "Concept Builder",
    stack: ["Maps", "UX", "Research"],
    desc: "Route guidance system helping Cebu commuters understand jeepney routes.",
    github: "https://github.com/Qro0w/Biyahe-Cebu",
  },
  {
    title: "Balinsasayaw",
    category: "Business Website",
    role: "Web Developer",
    stack: ["Branding", "Frontend"],
    desc: "Digital presence website for Balinsasayaw and related establishments.",
    github: "https://github.com/Qro0w/Balinsasayaw",
  },
  {
    title: "Noctis",
    category: "Game Project",
    role: "Team Developer",
    stack: ["Game Logic", "Teamwork"],
    desc: "Collaborative game development project focused on systems and creativity.",
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
            <div
              key={i}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-purple-400/30 hover:-translate-y-1 transition duration-300"
            >
              {/* IMAGE PLACEHOLDER */}
              <div className="h-52 bg-gradient-to-br from-purple-700/20 to-fuchsia-600/10 flex items-center justify-center text-zinc-500 border-b border-white/10">
                PUT {project.title.toUpperCase()} SCREENSHOT HERE
              </div>

              <div className="p-6">
                <p className="text-purple-300 text-sm">
                  {project.category}
                </p>

                <h2 className="text-2xl font-semibold mt-2">
                  {project.title}
                </h2>

                <p className="text-sm text-zinc-400 mt-1">
                  Role: {project.role}
                </p>

                <p className="text-zinc-300 mt-4 leading-7">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs bg-purple-500/10 text-purple-200 border border-purple-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-6 px-5 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 transition"
                >
                  View GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}