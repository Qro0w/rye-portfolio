import React from "react";
import PageTransition from "../components/PageTransition";

const strengths = [
  "Project Management",
  "Client Communication",
  "Business Analysis",
  "Stakeholder Alignment",
  "Agile / Scrum Workflow",
  "Team Coordination",
  "Technical Documentation",
  "Workshop Facilitation",
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
            planning, and delivery-focused roles. I’m especially interested in work
            where I can serve as the bridge between clients, teams, and execution.
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
      </section>
    </PageTransition>
  );
}