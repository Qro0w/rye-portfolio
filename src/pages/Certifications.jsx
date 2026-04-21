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

        <h1 className="text-5xl font-bold mt-3 mb-3">
          Verified Skills & Continuous Learning
        </h1>

        <p className="text-zinc-400 mb-8">
          Click any certificate to enlarge.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-purple-400/40 transition"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-purple-300 text-sm">
                  {cert.org}
                </p>

                <h2 className="text-2xl font-semibold mt-2">
                  {cert.title}
                </h2>

                <p className="text-zinc-400 mt-4">
                  Completed: {cert.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                className="relative max-w-5xl w-full"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute -top-12 right-0 text-white text-3xl hover:text-purple-300 transition"
                >
                  ✕
                </button>

                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full max-h-[88vh] object-contain rounded-3xl border border-white/10 shadow-2xl"
                />

                <div className="mt-4 text-center">
                  <h2 className="text-2xl font-semibold text-white">
                    {selectedCert.title}
                  </h2>
                  <p className="text-zinc-400 mt-2">
                    {selectedCert.org} • {selectedCert.year}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </PageTransition>
  );
}