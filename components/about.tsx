"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="relative max-w-3xl mx-auto px-6 sm:px-0 text-center leading-8 scroll-mt-28 mb-28 sm:mb-40 py-16 bg-gradient-to-b from-white/80 via-gray-50/80 to-white/60 dark:from-gray-900/80 dark:via-gray-950/80 dark:to-gray-900/60 rounded-3xl shadow-inner overflow-hidden"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {/* Decorative Gradient */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-32 bg-gradient-to-r from-indigo-200/30 via-pink-200/20 to-purple-200/30 blur-2xl rounded-full" />
      </div>
      <SectionHeading>
        <span className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow font-extrabold text-4xl tracking-tight">
          About Me
        </span>
      </SectionHeading>

      <motion.p
        className="mb-4 text-lg sm:text-xl text-gray-700 dark:text-white/80 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        I have{" "}
        <span className="font-semibold text-indigo-600">
          2 years and 9 months
        </span>{" "}
        of experience as a{" "}
        <span className="font-medium">Frontend Web Developer</span> working with{" "}
        <span className="text-gray-900 dark:text-white">
          HTML, CSS, JavaScript, React.js, Node.js
        </span>{" "}
        and version control tools like{" "}
        <span className="text-gray-900 dark:text-white">Git & GitHub</span>.
        <span className="block mt-2 italic text-gray-600 dark:text-gray-400">
          I've built several personal projects and also worked with SQL for
          backend database design.
        </span>
      </motion.p>

      <motion.p
        className="mb-4 text-lg sm:text-xl text-gray-700 dark:text-white/80 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Currently, I'm mastering the{" "}
        <span className="font-semibold text-indigo-600">MERN Stack</span> to
        become a skilled full-stack developer, focusing on{" "}
        <span className="font-medium">
          MongoDB, Express.js, REST APIs, and authentication systems
        </span>
        .
      </motion.p>

      <motion.p
        className="text-lg sm:text-xl text-gray-700 dark:text-white/80 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        My goal is to land my{" "}
        <span className="font-semibold text-indigo-600">
          first developer role
        </span>{" "}
        and continue to improve my{" "}
        <span className="font-medium">
          JavaScript logic, efficiency, and real-world problem-solving skills
        </span>
        .
      </motion.p>
    </motion.section>
  );
}
