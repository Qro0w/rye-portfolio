import React from "react";
import PageTransition from "../components/PageTransition";

const roles = [
  "Project Manager",
  "Business Analyst",
  "Product Owner",
  "Technical Liaison",
  "Client Success / Account Roles",
  "Operations / Team Leadership",
];

export default function Contact() {
  return (
    <PageTransition>
      <section className="py-6">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-purple-800/20 to-fuchsia-700/10 p-8 backdrop-blur md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-200">
            Roles I’m Interested In
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Where I fit best
          </h1>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <div
                key={role}
                className="rounded-2xl border border-white/10 bg-black/20 p-4 text-zinc-200"
              >
                {role}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-200">
            Contact
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Let’s work together
          </h2>

          <div className="mt-6 grid gap-4 text-zinc-300 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              📧 PUT EMAIL HERE
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              🔗 PUT LINKEDIN HERE
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              💻 PUT GITHUB HERE
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              💬 PUT MESSENGER / PHONE / CONTACT FORM HERE
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}