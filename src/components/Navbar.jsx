import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Journey", to: "/journey" },
  { label: "Workshops", to: "/workshops" },
  { label: "Leadership", to: "/leadership" },
  { label: "Certifications", to: "/certifications" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 60) {
        setShowNav(true);
      } else if (currentY > lastY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.header
          initial={{ y: -90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -90, opacity: 0 }}
          transition={{ duration: 0.28 }}
          className="fixed left-0 right-0 top-0 z-50"
        >
          <div className="mx-auto mt-4 max-w-7xl px-4 md:px-8 lg:px-12">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/35 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-200">
                    Rye Lao Guico
                  </p>
                  <p className="text-xs text-zinc-400">
                    Leadership Backed by Technical Experience
                  </p>
                </div>

                <nav className="hidden items-center gap-2 md:flex">
                  {links.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        `rounded-xl px-4 py-2 text-sm transition ${
                          isActive
                            ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-900/30"
                            : "text-zinc-300 hover:bg-white/10 hover:text-white"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </nav>

                <button
                  type="button"
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-200 transition hover:bg-white/10 md:hidden"
                >
                  {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>

              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="border-t border-white/10 md:hidden"
                  >
                    <div className="flex flex-col gap-2 px-4 py-4">
                      {links.map((link) => (
                        <NavLink
                          key={link.to}
                          to={link.to}
                          onClick={() => setMenuOpen(false)}
                          className={({ isActive }) =>
                            `rounded-xl px-4 py-3 text-sm transition ${
                              isActive
                                ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white"
                                : "text-zinc-300 hover:bg-white/10 hover:text-white"
                            }`
                          }
                        >
                          {link.label}
                        </NavLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}