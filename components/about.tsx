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

      {/* Paragraph 1 */}
      <motion.p
        className="mb-6 text-lg sm:text-xl text-gray-700 dark:text-white/80 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Hi there 👋 I’m a{" "}
        <span className="font-semibold text-indigo-600">
          Full Stack Web Developer
        </span>{" "}
        with{" "}
        <span className="font-semibold text-indigo-600">
          3 years of experience
        </span>{" "}
        turning ideas into beautiful, responsive, and high-performing web
        interfaces. I love bringing designs to life with{" "}
        <span className="text-gray-900 dark:text-white">
          HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB
        </span>
        , while keeping every detail clean and user-focused.
      </motion.p>

      {/* Paragraph 2 */}
      <motion.p
        className="mb-6 text-lg sm:text-xl text-gray-700 dark:text-white/80 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Over the years, I’ve built several personal projects, explored{" "}
        <span className="text-gray-900 dark:text-white">Next.js, TailwindCSS, Supabase, Vercel</span> for backend
        database design, and strengthened my workflow with{" "}
        <span className="text-gray-900 dark:text-white">Git & GitHub</span> for
        version control.
      </motion.p>

      {/* Paragraph 3 */}
      <motion.p
        className="mb-6 text-lg sm:text-xl text-gray-700 dark:text-white/80 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Right now, I’m leveling up my skills by mastering the{" "}
        <span className="font-semibold text-indigo-600">MERN Stack</span> — diving deep
        into{" "}
        <span className="font-medium">
          MongoDB, Express.js, REST APIs, and authentication systems
        </span>{" "}
        to become a well-rounded{" "}
        <span className="font-semibold text-indigo-600">full-stack developer</span>.
      </motion.p>

      {/* Paragraph 4 */}
      <motion.p
        className="text-lg sm:text-xl text-gray-700 dark:text-white/80 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        My mission is to{" "}
        <span className="font-semibold text-indigo-600">
          land my first developer role
        </span>{" "}
        where I can solve real-world problems, write meaningful code, and keep
        pushing my creativity and technical skills forward every day.
      </motion.p>
    </motion.section>
  );
}
