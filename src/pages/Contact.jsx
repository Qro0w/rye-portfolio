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

const contacts = [
  {
    label: "Email",
    value: "laoguicorye@gmail.com",
    href: "mailto:laoguicorye@gmail.com",
    icon: "✉️",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rye-nicholas-lao-guico-78a0b11b9",
    href: "https://www.linkedin.com/in/rye-nicholas-lao-guico-78a0b11b9/",
    icon: "💼",
  },
  {
    label: "GitHub",
    value: "github.com/Qro0w",
    href: "https://github.com/Qro0w",
    icon: "💻",
  },
  {
    label: "Facebook",
    value: "facebook.com/Qro0w",
    href: "https://www.facebook.com/Qro0w",
    icon: "📘",
  },
  {
    label: "Phone",
    value: "09274303115",
    href: "tel:09274303115",
    icon: "📞",
  },
  {
    label: "Resume",
    value: "View My Resume",
    href: "/My%20Resume.pdf",
    icon: "📄",
  },
];

export default function Contact() {
  return (
    <PageTransition>
      <section className="py-6">

        {/* ROLES */}
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-purple-800/20 to-fuchsia-700/10 p-6 md:p-10 backdrop-blur">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-200">
            Roles I’m Interested In
          </p>

          <h1 className="text-3xl md:text-5xl font-bold">
            Where I fit best
          </h1>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <div
                key={role}
                className="rounded-2xl border border-white/10 bg-black/20 p-4 text-zinc-200 hover:border-purple-400/30 transition"
              >
                {role}
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-10 backdrop-blur">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-200">
            Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s work together
          </h2>

          <p className="mt-4 text-zinc-400 max-w-2xl leading-8">
            Open to internships, leadership opportunities, project coordination,
            business analyst roles, and client-facing technology work.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                className="group rounded-2xl border border-white/10 bg-black/20 p-5 hover:border-purple-400/30 hover:bg-white/[0.07] transition"
              >
                <p className="text-sm text-purple-300 uppercase tracking-[0.18em]">
                  {item.icon} {item.label}
                </p>

                <p className="mt-2 text-zinc-200 break-all group-hover:text-white transition">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}