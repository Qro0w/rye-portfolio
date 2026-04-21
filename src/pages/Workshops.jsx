import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";

/* PYTHON */
import python1 from "../assets/workshops/Python/Python 1.png";
import python2 from "../assets/workshops/Python/Python 2.png";
import python3 from "../assets/workshops/Python/Python 3.png";

/* FIREBASE */
import firebasePub from "../assets/workshops/Firebase/Pubmat.png";
import firebase1 from "../assets/workshops/Firebase/Firebase 1.png";
import firebase2 from "../assets/workshops/Firebase/Firebase 2.jpeg";
import firebase3 from "../assets/workshops/Firebase/Firebase 3.jpeg";

/* GIT */
import gitPub from "../assets/workshops/Git/Pubmat.png";
import git1 from "../assets/workshops/Git/Git 1.png";
import git2 from "../assets/workshops/Git/Git 2.png";
import git3 from "../assets/workshops/Git/Git 3.png";

/* APP DEV */
import appPub from "../assets/workshops/App Dev/Pubmat.png";
import app1 from "../assets/workshops/App Dev/App Dev 1.png";
import app2 from "../assets/workshops/App Dev/App Dev 2.png";
import app3 from "../assets/workshops/App Dev/App Dev 3.png";

/* N8N */
import n8nPub from "../assets/workshops/N8N/Pubmat.png";
import n8n1 from "../assets/workshops/N8N/N8N 1.png";
import n8n2 from "../assets/workshops/N8N/N8N 2.png";
import n8n3 from "../assets/workshops/N8N/N8N 3.png";

/* AI SYSTEMS */
import aiPub from "../assets/workshops/AI Systems/Pubmat.png";
import ai1 from "../assets/workshops/AI Systems/AI Systems 1.png";
import ai2 from "../assets/workshops/AI Systems/AI Systems 2.png";
import ai3 from "../assets/workshops/AI Systems/AI Systems 3.png";

/* TECHTRACKS */
import techPub from "../assets/workshops/TechTracks/Pubmat.png";
import tech1 from "../assets/workshops/TechTracks/TechTracks 1.png";
import tech2 from "../assets/workshops/TechTracks/TechTracks 2.png";
import tech3 from "../assets/workshops/TechTracks/TechTracks 3.png";

const workshops = [
  {
    title: "Python Basics and Syntax",
    org: "SwuDevs / Early Leadership Period",
    desc: "My first workshop where I led, organized, and personally conducted beginner Python training.",
    images: [python1, python2, python3],
  },
  {
    title: "Build Smart: Creating AI-Enabled Apps with Firebase",
    org: "SwuDevs",
    desc: "Headed this workshop featuring an international speaker focused on AI-enabled app building.",
    images: [firebasePub, firebase1, firebase2, firebase3],
  },
  {
    title: "Getting Started with Git",
    org: "SwuDevs",
    desc: "Led planning, preparation, and speaking roles for version control training.",
    images: [gitPub, git1, git2, git3],
  },
  {
    title: "APPventure Begins: Your First Android App Journey Starts Now!",
    org: "SwuDevs",
    desc: "Organized Android app development event featuring my COO as speaker.",
    images: [appPub, app1, app2, app3],
  },
  {
    title: "Automation with N8N: Connecting AI, Supabase, and PostgreSQL",
    org: "SwuDevs x N8N",
    desc: "Collaboration event covering automation systems and backend workflows.",
    images: [n8nPub, n8n1, n8n2, n8n3],
  },
  {
    title: "Understanding AI System Components",
    org: "SwuDevs x AI GEN",
    desc: "Workshop focused on explaining how modern AI systems are structured.",
    images: [aiPub, ai1, ai2, ai3],
  },
  {
    title: "TechTracks: Design, Code, Lead",
    org: "SwuDevs Flagship Event",
    desc: "Largest flagship event with speakers in Development, PM, UI/UX, and Notion Cebu.",
    images: [techPub, tech1, tech2, tech3],
  },
];

export default function Workshops() {
  const [selected, setSelected] = useState(null);

  const openModal = (item, index) => {
    setSelected({
      title: item.title,
      images: item.images,
      active: index,
    });
  };

  const closeModal = () => setSelected(null);

  const nextModal = () => {
    setSelected((prev) => ({
      ...prev,
      active:
        prev.active === prev.images.length - 1
          ? 0
          : prev.active + 1,
    }));
  };

  const prevModal = () => {
    setSelected((prev) => ({
      ...prev,
      active:
        prev.active === 0
          ? prev.images.length - 1
          : prev.active - 1,
    }));
  };

  return (
    <PageTransition>
      <section>
        <p className="text-purple-200 uppercase text-sm tracking-[0.25em]">
          Workshops & Events
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-8">
          Leadership Through Technical Events
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {workshops.map((item, i) => (
            <WorkshopCard
              key={i}
              item={item}
              onOpen={openModal}
            />
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="max-w-6xl w-full relative"
                initial={{ scale: 0.94 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.94 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* PREV */}
                <button
                  onClick={prevModal}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-black/50 hover:bg-purple-600 transition"
                >
                  ←
                </button>

                {/* NEXT */}
                <button
                  onClick={nextModal}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-black/50 hover:bg-purple-600 transition"
                >
                  →
                </button>

                <div className="rounded-3xl overflow-hidden border border-white/10 bg-black">
                  <img
                    src={selected.images[selected.active]}
                    alt={selected.title}
                    className="w-full max-h-[78vh] object-contain"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold">
                      {selected.title}
                    </h2>

                    <p className="text-sm text-zinc-400 mt-1">
                      Image {selected.active + 1} / {selected.images.length}
                    </p>
                  </div>

                  <button
                    onClick={closeModal}
                    className="px-5 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 transition"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </PageTransition>
  );
}

function WorkshopCard({ item, onOpen }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) =>
        prev === item.images.length - 1 ? 0 : prev + 1
      );
    }, 15000);

    return () => clearInterval(timer);
  }, [item.images.length]);

  const nextSlide = () => {
    setActive((prev) =>
      prev === item.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActive((prev) =>
      prev === 0 ? item.images.length - 1 : prev - 1
    );
  };

  const currentImage = item.images[active];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-purple-400/30 transition"
    >
      {/* IMAGE */}
      <div className="relative h-72 md:h-80 bg-black">
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/45 hover:bg-purple-600 transition"
        >
          ←
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/45 hover:bg-purple-600 transition"
        >
          →
        </button>

        <div
          className="h-full w-full cursor-pointer"
          onClick={() => onOpen(item, active)}
        >
          <img
            src={currentImage}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-5 py-4">
          <h2 className="text-lg md:text-xl font-semibold">
            {item.title}
          </h2>

          <p className="text-sm text-purple-300 mt-1">
            {item.org}
          </p>
        </div>
      </div>

      {/* INFO */}
      <div className="p-4 md:p-5">
        <p className="text-sm text-zinc-400 line-clamp-2 leading-6">
          {item.desc}
        </p>

        <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
          <span>
            Image {active + 1} / {item.images.length}
          </span>

          <span>Tap image to enlarge</span>
        </div>
      </div>
    </motion.div>
  );
}