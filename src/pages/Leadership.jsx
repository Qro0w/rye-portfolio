import React from "react";
import PageTransition from "../components/PageTransition";

const leadershipAreas = [
  {
    title: "Organization Leadership",
    desc: "Served as CEO of SwuDevs, guiding direction, managing initiatives, and helping members grow through technical opportunities.",
  },
  {
    title: "Team Management",
    desc: "Coordinated developers, delegated responsibilities, followed timelines, and ensured accountability across collaborative projects.",
  },
  {
    title: "Strategic Planning",
    desc: "Handled decision-making, project prioritization, event planning, and long-term organizational goals.",
  },
  {
    title: "Communication",
    desc: "Worked across technical and non-technical individuals, helping align expectations, explain ideas clearly, and resolve misunderstandings.",
  },
  {
    title: "Execution Under Pressure",
    desc: "Managed deadlines, moving parts, and changing priorities while keeping momentum and delivery standards high.",
  },
];

export default function Leadership() {
  return (
    <PageTransition>
      <section>
        <p className="text-purple-200 uppercase text-sm tracking-[0.25em]">
          Leadership Experience
        </p>

        <h1 className="text-5xl font-bold mt-3 mb-8">
          Leadership Through Action
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {leadershipAreas.map((item, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 bg-white/5 border border-white/10"
            >
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="text-zinc-300 mt-4 leading-8">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}