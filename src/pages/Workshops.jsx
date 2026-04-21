import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";

/*
====================================================
HOW TO ADD IMAGES
====================================================

1. Put photos inside:

src/assets/workshops/

Example:
python1.jpg
python2.jpg
git1.jpg
git2.jpg

2. Import images at top:

import python1 from "../assets/workshops/python1.jpg";

3. Replace placeholder strings inside images:[]
====================================================
*/

const workshops = [
  {
    title: "Python Basics and Syntax",
    org: "SwuDevs / Early Leadership Period",
    desc: "My first major workshop where I personally led, organized, and conducted the session. Focused on teaching Python fundamentals, syntax, and beginner coding concepts.",
    images: [
      "PUT python1.jpg HERE",
      "PUT python2.jpg HERE",
      "PUT python3.jpg HERE",
    ],
  },

  {
    title: "Build Smart: Creating AI-Enabled Apps with Firebase",
    org: "SwuDevs",
    desc: "Headed and organized this workshop featuring an international speaker. Focused on AI-integrated application development using Firebase.",
    images: [
      "PUT buildsmart1.jpg HERE",
      "PUT buildsmart2.jpg HERE",
      "PUT buildsmart3.jpg HERE",
    ],
  },

  {
    title: "Getting Started with Git",
    org: "SwuDevs",
    desc: "Led planning, preparation, and speaking roles for this workshop introducing version control, Git workflows, and collaboration practices.",
    images: [
      "PUT git1.jpg HERE",
      "PUT git2.jpg HERE",
      "PUT git3.jpg HERE",
    ],
  },

  {
    title: "APPventure Begins: Your First Android App Journey Starts Now!",
    org: "SwuDevs",
    desc: "Organized this beginner Android development event. Speaker was my COO, helping attendees explore mobile development fundamentals.",
    images: [
      "PUT appventure1.jpg HERE",
      "PUT appventure2.jpg HERE",
      "PUT appventure3.jpg HERE",
    ],
  },

  {
    title: "Automation with N8N: Connecting AI, Supabase, and PostgreSQL",
    org: "SwuDevs x N8N",
    desc: "Led collaboration and coordination for this event featuring an invited speaker. Covered automation systems and modern backend integrations.",
    images: [
      "PUT n8n1.jpg HERE",
      "PUT n8n2.jpg HERE",
      "PUT n8n3.jpg HERE",
    ],
  },

  {
    title: "Understanding AI System Components",
    org: "SwuDevs x AI GEN",
    desc: "Collaborative workshop focused on helping attendees understand how modern AI systems are structured and built.",
    images: [
      "PUT ai1.jpg HERE",
      "PUT ai2.jpg HERE",
      "PUT ai3.jpg HERE",
    ],
  },

  {
    title: "TechTracks: Design, Code, Lead",
    org: "SwuDevs Flagship Event",
    desc: "Our biggest event featuring professional speakers in Development, Project Management, UI/UX Design, and a Notion representative from Cebu.",
    images: [
      "PUT tech1.jpg HERE",
      "PUT tech2.jpg HERE",
      "PUT tech3.jpg HERE",
    ],
  },
];

export default function Workshops() {
  const [selected, setSelected] = useState(null);

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
              onOpen={(img, title) =>
                setSelected({ image: img, title })
              }
            />
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="max-w-5xl w-full"
                initial={{ scale: 0.92 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.92 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="rounded-3xl overflow-hidden border border-white/10 bg-black">
                  {selected.image.startsWith("PUT") ? (
                    <div className="h-[70vh] flex items-center justify-center text-zinc-500">
                      ADD REAL IMAGE HERE
                    </div>
                  ) : (
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="w-full max-h-[75vh] object-contain"
                    />
                  )}
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <h2 className="text-xl md:text-2xl font-semibold">
                    {selected.title}
                  </h2>

                  <button
                    onClick={() => setSelected(null)}
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
      whileHover={{ y: -5 }}
      className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-purple-400/30 transition"
    >
      <div className="relative h-56 bg-gradient-to-br from-purple-700/20 to-fuchsia-700/10 flex items-center justify-center text-zinc-500">
        <button
          onClick={prevSlide}
          className="absolute left-3 z-10 h-10 w-10 rounded-full bg-black/40 hover:bg-purple-600 transition"
        >
          ←
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 z-10 h-10 w-10 rounded-full bg-black/40 hover:bg-purple-600 transition"
        >
          →
        </button>

        <div
          className="h-full w-full cursor-pointer"
          onClick={() => onOpen(currentImage, item.title)}
        >
          {currentImage.startsWith("PUT") ? (
            <div className="h-full flex items-center justify-center px-4 text-center">
              {item.title}
            </div>
          ) : (
            <img
              src={currentImage}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-xl md:text-2xl font-semibold">
          {item.title}
        </h2>

        <p className="text-purple-300 mt-2">
          {item.org}
        </p>

        <p className="text-zinc-300 mt-4 leading-7">
          {item.desc}
        </p>

        <p className="mt-4 text-sm text-zinc-500">
          Image {active + 1} / {item.images.length}
        </p>
      </div>
    </motion.div>
  );
}