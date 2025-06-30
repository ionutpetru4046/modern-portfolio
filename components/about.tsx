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
      className="max-w-3xl mx-auto px-6 sm:px-0 text-center leading-8 text-gray-700 dark:text-gray-300 scroll-mt-28 mb-28 sm:mb-40"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-4 text-lg sm:text-xl">
        I have <span className="font-semibold text-indigo-600">2+ years</span> of experience as a{" "}
        <span className="font-medium">Frontend Web Developer</span> working with{" "}
        <span className="text-gray-900 dark:text-white">HTML, CSS, JavaScript, React.js, Node.js</span> and version control tools like{" "}
        <span className="text-gray-900 dark:text-white">Git & GitHub</span>.
        <span className="block mt-2 italic text-gray-600 dark:text-gray-400">
          I’ve built several personal projects and also worked with SQL for backend database design.
        </span>
      </p>

      <p className="mb-4 text-lg sm:text-xl">
        Currently, I’m mastering the{" "}
        <span className="font-semibold text-indigo-600">MERN stack</span> to become a skilled full-stack developer, focusing on{" "}
        <span className="font-medium">MongoDB, Express.js, REST APIs, and authentication systems</span>.
      </p>

      <p className="text-lg sm:text-xl">
        My goal is to land my{" "}
        <span className="font-semibold text-indigo-600">first developer role</span> and continue to improve my{" "}
        <span className="font-medium">JavaScript logic, efficiency, and real-world problem-solving skills</span>.
      </p>
    </motion.section>
  );
}
