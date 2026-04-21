import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import profilePic from "../assets/home/Pic.jpg";

export default function Home() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden">

        {/* HERO */}
        <div className="py-8 md:py-16 grid gap-10 md:grid-cols-2 items-center">

          <div>
            <p className="text-purple-200 uppercase text-sm tracking-[0.28em]">
              Leadership Backed by Technical Experience
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4">
              I help teams, systems, and ideas move forward.
            </h1>

            <p className="text-zinc-300 mt-6 leading-8 max-w-xl">
              A BSIT candidate with real experience in leadership,
              project coordination, communication, and technical execution.
              Built projects, led organizations, and helped turn ideas into results.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/projects"
                className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 transition"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                Contact Me
              </Link>
                <a
              href="/My%20Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-2xl border border-purple-400/30 bg-white/5 hover:bg-white/10 transition"
             >
              Resume / CV
              </a>
            </div>

            {/* METRICS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {[
                ["6+", "Projects"],
                ["2+", "Leadership Roles"],
                ["5+", "Certificates"],
                ["100+", "People Engaged"],
              ].map(([num, label], i) => (
                <div
                  key={i}
                  className="rounded-2xl p-4 bg-white/5 border border-white/10"
                >
                  <p className="text-2xl font-bold text-purple-300">{num}</p>
                  <p className="text-sm text-zinc-400 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PHOTO */}
          <div className="relative">
            <div className="absolute inset-0 bg-purple-700/20 blur-3xl rounded-full"></div>

            <div className="relative h-[420px] rounded-[2rem] border border-white/10 overflow-hidden bg-white/5">
              <img
                src={profilePic}
                alt="Rye Lao Guico"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CREDIBILITY STRIP */}
        <div className="grid md:grid-cols-4 gap-4 mt-6">
          {[
            "CEO of SwuDevs",
            "Built Real Systems",
            "Workshop Leader",
            "Open to Opportunities",
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl px-5 py-4 bg-white/5 border border-white/10 text-center text-zinc-300"
            >
              {item}
            </div>
          ))}
        </div>

      </section>
    </PageTransition>
  );
}