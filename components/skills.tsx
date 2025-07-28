"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiVite,
  SiPostman,
  SiJson,
  SiBootstrap,
  SiSourcetree,
  SiAxios,
} from "react-icons/si";

// Fade-in animation
const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

// Map skills to Tailwind background color classes and icons
const skillMeta: Record<string, { bg: string; icon?: JSX.Element }> = {
  HTML: { bg: "bg-orange-500 text-white", icon: <FaHtml5 /> },
  CSS: { bg: "bg-blue-500 text-white", icon: <FaCss3Alt /> },
  JavaScript: { bg: "bg-yellow-400 text-black", icon: <FaJs /> },
  TypeScript: { bg: "bg-blue-700 text-white", icon: <SiTypescript /> },
  React: { bg: "bg-cyan-500 text-white", icon: <FaReact /> },
  "React.js": { bg: "bg-cyan-500 text-white", icon: <FaReact /> },
  Nextjs: { bg: "bg-gray-800 text-white", icon: <SiNextdotjs /> },
  "Next.js": { bg: "bg-gray-800 text-white", icon: <SiNextdotjs /> },
  Nodejs: { bg: "bg-green-600 text-white", icon: <FaNodeJs /> },
  "Node.js": { bg: "bg-green-600 text-white", icon: <FaNodeJs /> },
  Express: { bg: "bg-gray-700 text-white", icon: <SiExpress /> },
  "Express.js": { bg: "bg-gray-700 text-white", icon: <SiExpress /> },
  MongoDB: { bg: "bg-green-500 text-white", icon: <SiMongodb /> },
  Git: { bg: "bg-orange-600 text-white", icon: <FaGitAlt /> },
  GitHub: { bg: "bg-black text-white", icon: <FaGithub /> },
  GitHUB: { bg: "bg-black text-white", icon: <FaGithub /> },
  Tailwind: { bg: "bg-sky-400 text-white", icon: <SiTailwindcss /> },
  "Tailwind CSS": { bg: "bg-sky-400 text-white", icon: <SiTailwindcss /> },
  Firebase: { bg: "bg-yellow-500 text-black", icon: <SiFirebase /> },
  Redux: { bg: "bg-purple-600 text-white", icon: <SiRedux /> },
  Python: { bg: "bg-blue-400 text-white", icon: <FaPython /> },
  Vite: { bg: "bg-yellow-400 text-black", icon: <SiVite /> },
  "Postman API": { bg: "bg-orange-400 text-white", icon: <SiPostman /> },
  JSON: { bg: "bg-gray-200 text-black", icon: <SiJson /> },
  Bootstrap: { bg: "bg-purple-500 text-white", icon: <SiBootstrap /> },
  Sourcetree: { bg: "bg-blue-500 text-white", icon: <SiSourcetree /> },
  Axios: { bg: "bg-blue-400 text-white", icon: <SiAxios /> },
  GitHubPages: { bg: "bg-gray-800 text-white" },
  "Framer Motion": { bg: "bg-pink-400 text-white" },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="relative mb-28 max-w-5xl scroll-mt-28 text-center sm:mb-40 px-4 py-16 bg-gradient-to-b from-white/80 via-gray-50/80 to-white/60 dark:from-gray-900/80 dark:via-gray-950/80 dark:to-gray-900/60 rounded-3xl shadow-inner overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-32 bg-gradient-to-r from-indigo-200/30 via-pink-200/20 to-purple-200/30 blur-2xl rounded-full" />
      </div>
      <SectionHeading>
        <span className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow font-extrabold text-4xl tracking-tight">
          My Skills
        </span>
      </SectionHeading>
      <ul className="relative z-10 mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {skillsData.map((skill, index) => {
          const meta = skillMeta[skill] || {
            bg: "bg-gray-200 text-black dark:bg-white/10 dark:text-white/80",
          };
          return (
            <motion.li
              key={index}
              className={`flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-medium shadow-md hover:shadow-xl transition-all duration-300 text-base sm:text-lg ${meta.bg}`}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              {meta.icon && (
                <span className="text-xl sm:text-2xl drop-shadow">
                  {meta.icon}
                </span>
              )}
              <span>{skill}</span>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
