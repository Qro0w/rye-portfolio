import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Speech, Users } from "lucide-react";
import PageTransition from "../components/PageTransition";

const highlights = [
  {
    icon: <Users size={18} />,
    title: "Leadership",
    text: "Experience guiding organizations, managing people, and helping teams stay aligned.",
  },
  {
    icon: <Speech size={18} />,
    title: "Communication",
    text: "Built confidence through workshops, presentations, hospitality, and public-facing roles.",
  },
  {
    icon: <BriefcaseBusiness size={18} />,
    title: "Execution",
    text: "Strong in coordination, planning, and turning ideas into actual progress.",
  },
];

export default function Home() {
  return (
    <PageTransition>
      <section className="relative min-h-[82vh] overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8%] top-[8%] h-72 w-72 rounded-full bg-purple-700/20 blur-3xl" />
          <div className="absolute right-[-10%] top-[20%] h-80 w-80 rounded-full bg-fuchsia-600/15 blur-3xl" />
          <div className="absolute bottom-[-4%] left-[28%] h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
        </div>

        <div className="relative grid items-center gap-12 py-10 md:grid-cols-[1.15fr_0.85fr] md:py-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 }}
              className="mb-5 inline-flex rounded-full border border-purple-400/25 bg-white/5 px-4 py-2 text-sm text-purple-200 backdrop-blur"
            >
              Modern Hybrid • Dark Luxury Purple
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-purple-200"
            >
              Leadership Backed by Technical Experience
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl"
            >
              I help teams, clients, and ideas move forward with clarity.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg"
            >
              I started with technical foundations in IT and grew into roles centered on
              leadership, communication, coordination, and execution. My value comes from
              understanding both the people side and the technical side of a project.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3 font-medium text-white shadow-[0_12px_30px_rgba(98,0,255,0.28)] transition hover:scale-[1.02]"
              >
                View My Work
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="rounded-2xl border border-white/12 bg-white/5 px-6 py-3 font-medium text-zinc-200 backdrop-blur transition hover:bg-white/10"
              >
                Let’s Work Together
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36 }}
              className="mt-8 grid gap-3 text-sm text-zinc-300"
            >
              <p>📍 PUT ADDRESS HERE</p>
              <p>📞 PUT PHONE NUMBER HERE</p>
              <p>📧 PUT EMAIL HERE</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.18 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-purple-500/25 to-fuchsia-500/10 blur-3xl" />
            <div className="relative flex h-[470px] items-center justify-center rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] text-center text-zinc-400 backdrop-blur-xl">
              <div className="rounded-3xl border border-dashed border-purple-300/35 px-8 py-12">
                PUT PROFESSIONAL PHOTO HERE
                <br />
                OR REPLACE WITH IMG TAG
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42 }}
          className="mt-4 grid gap-4 md:grid-cols-3"
        >
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-purple-400/25 hover:bg-white/[0.075]"
            >
              <div className="mb-4 inline-flex rounded-xl border border-purple-400/20 bg-purple-500/10 p-3 text-purple-200">
                {item.icon}
              </div>
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 leading-7 text-zinc-300">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </PageTransition>
  );
}