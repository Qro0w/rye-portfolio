import React from "react";
import PageTransition from "../components/PageTransition";

const phases = [
  {
    title: "Technical Foundation",
    desc: "Started in software development, learning how systems are built, how developers think, and how projects succeed technically.",
  },
  {
    title: "Discovering Strengths",
    desc: "Realized my strongest value was not only building systems, but organizing people, presenting ideas, and helping teams move efficiently.",
  },
  {
    title: "Leadership Shift",
    desc: "Took on larger responsibilities involving planning, communication, coordination, and helping teams execute effectively.",
  },
  {
    title: "Future Direction",
    desc: "Now focused on project management, business analysis, operations, and client-facing roles where technical understanding is a major advantage.",
  },
];

export default function Journey() {
  return (
    <PageTransition>
      <section>
        <p className="text-purple-200 uppercase text-sm tracking-[0.25em]">
          Career Journey
        </p>

        <h1 className="text-5xl font-bold mt-3 mb-8">
          Growth Beyond Just Coding
        </h1>

        <div className="space-y-6">
          {phases.map((item, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 bg-white/5 border border-white/10"
            >
              <p className="text-purple-300 text-sm">0{i + 1}</p>
              <h2 className="text-2xl font-semibold mt-2">{item.title}</h2>
              <p className="text-zinc-300 mt-4 leading-8">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}