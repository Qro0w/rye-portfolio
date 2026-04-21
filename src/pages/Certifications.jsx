import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";

import javaImg from "../assets/certs/Java.png";
import pythonImg from "../assets/certs/Python.png";
import networkProImg from "../assets/certs/Network Professional.png";
import networkSpecImg from "../assets/certs/Network Specialist.png";
import computerNetworksImg from "../assets/certs/Computer Networks.png";
import cablingImg from "../assets/certs/Cabling System.png";

const certs = [
  {
    title: "Java Programming",
    org: "Great Learning Academy",
    year: "2024",
    image: javaImg,
  },
  {
    title: "Python Essentials 1",
    org: "Cisco Networking Academy + Python Institute",
    year: "2023",
    image: pythonImg,
  },
  {
    title: "EnGenius Certified Network Professional",
    org: "EnGenius",
    year: "2024",
    image: networkProImg,
  },
  {
    title: "EnGenius Certified Network Specialist",
    org: "EnGenius",
    year: "2024",
    image: networkSpecImg,
  },
  {
    title: "Setting Up Computer Networks",
    org: "TESDA",
    year: "2024",
    image: computerNetworksImg,
  },
  {
    title: "Structured Cabling System",
    org: "TESDA / Networking",
    year: "2024",
    image: cablingImg,
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <PageTransition>
      <section>
        <p className="text-purple-200 uppercase text-sm tracking-[0.25em]">
          Certifications
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-3">
          Verified Skills & Continuous Learning
        </h1>

        <p className="text-zinc-400 mb-8">
          Click any certificate to enlarge.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-purple-400/40 transition"
            >
              {/* IMAGE */}
              <div className="relative h-72 md:h-80 bg-black">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-5 py-4">
                  <p className="text-sm text-purple-300">
                    {cert.org}
                  </p>

                  <h2 className="text-lg md:text-xl font-semibold mt-1">
                    {cert.title}
                  </h2>

                  <p className="text-sm text-zinc-300 mt-1">
                    Completed {cert.year}
                  </p>
                </div>
              </div>

              {/* FOOTER */}
              <div className="p-5 flex items-center justify-between text-sm">
                <span className="text-zinc-400">
                  Tap to enlarge
                </span>

                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-200 border border-purple-400/20 text-xs">
                  Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                className="relative max-w-6xl w-full"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.22 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* CLOSE */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute -top-12 right-0 text-3xl text-white hover:text-purple-300 transition"
                >
                  ✕
                </button>

                {/* IMAGE */}
                <div className="rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full max-h-[82vh] object-contain"
                  />
                </div>

                {/* INFO */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold">
                      {selectedCert.title}
                    </h2>

                    <p className="text-zinc-400 mt-1">
                      {selectedCert.org} • {selectedCert.year}
                    </p>
                  </div>

                  <span className="px-4 py-2 rounded-2xl bg-purple-600 text-white text-sm">
                    Verified Certification
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </PageTransition>
  );
}