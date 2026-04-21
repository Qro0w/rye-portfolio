import React from "react";
import PageTransition from "../components/PageTransition";

const workshops = [
  {
    title: "Python Workshop",
    org: "PUT SCHOOL / ORG",
    desc: "Led Python fundamentals and practical coding sessions.",
  },
  {
    title: "Java Workshop",
    org: "PUT SCHOOL / ORG",
    desc: "Introduced object-oriented programming and Java basics.",
  },
  {
    title: "Flutter Workshop",
    org: "PUT SCHOOL / ORG",
    desc: "Taught mobile app development using Flutter.",
  },
  {
    title: "Android Studio Workshop",
    org: "PUT SCHOOL / ORG",
    desc: "Guided students through Android development workflows.",
  },
];

export default function Workshops() {
  return (
    <PageTransition>
      <section>
        <p className="text-purple-200 uppercase text-sm tracking-[0.25em]">
          Workshops & Training
        </p>

        <h1 className="text-5xl font-bold mt-3 mb-8">
          Technical Communication Through Teaching
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {workshops.map((item, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 bg-white/5 border border-white/10"
            >
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="text-purple-300 mt-2">{item.org}</p>
              <p className="text-zinc-300 mt-4">{item.desc}</p>

              <div className="mt-5 h-40 rounded-2xl border border-dashed border-purple-400 flex items-center justify-center text-zinc-500">
                PUT WORKSHOP PHOTO HERE
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}