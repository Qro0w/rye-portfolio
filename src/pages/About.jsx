import React from "react";
import PageTransition from "../components/PageTransition";

const strengths = [
  "IT Coordination",
  "Project Management",
  "Client & Stakeholder Liaison",
  "Requirements Gathering",
  "Full-Stack Development",
  "AI-Assisted Development",
  "Agile / Scrum Workflow",
  "Technical Documentation",
];

const techStack = [
  {
    group: "Frontend & Languages",
    items: ["React", "JavaScript", "Java", "Python", "Kotlin", "Android Studio"],
  },
  {
    group: "Databases & Backend",
    items: ["Supabase", "PostgreSQL", "Firebase / Firestore", "MySQL"],
  },
  {
    group: "AI & Automation",
    items: ["Claude (AI-assisted development)", "Claude API features", "n8n workflows"],
  },
  {
    group: "Tools & IT",
    items: ["Git", "GitHub", "Networking", "Structured Cabling", "Troubleshooting"],
  },
];

export default function About() {
  return (
    <PageTransition>
      <section className="py-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-200">
          About Me
        </p>
        <h1 className="text-4xl font-bold md:text-5xl">
          Not just technical — strategic and communicative.
        </h1>

        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
          <p className="max-w-4xl text-base leading-8 text-zinc-300">
            My advantage is that I understand both sides of a project. I know how
            developers think because I started by building directly, and I know how
            to communicate with stakeholders because I transitioned into leadership,
            planning, and delivery-focused roles. Today I put both to work as an IT
            Coordinator intern at Sancy Solutions, coordinating development projects
            and translating client needs into technical tasks, and as Assistant
            Project Manager on our ARTMS capstone. I also build full-stack systems
            myself, using Claude to speed up development, add AI features, and
            produce clear documentation.
          </p>
        </div>

        <div className="mt-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-200">
            Core Strengths
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            What I bring to a team
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-zinc-200 backdrop-blur transition hover:-translate-y-1 hover:bg-white/7"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-200">
            Tech Stack
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            What I build with
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {techStack.map((group) => (
              <div
                key={group.group}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <p className="text-sm text-purple-300">{group.group}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}