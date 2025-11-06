"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
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

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 30, scale: 0.8 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const skillMeta: Record<string, { bg: string; gradient: string; icon?: JSX.Element }> = {
  HTML: { bg: "bg-orange-500/20 dark:bg-orange-500/10 border-orange-400/30 dark:border-orange-500/30 text-orange-400", gradient: "from-orange-500 to-red-500", icon: <FaHtml5 /> },
  CSS: { bg: "bg-blue-500/20 dark:bg-blue-500/10 border-blue-400/30 dark:border-blue-500/30 text-blue-400", gradient: "from-blue-500 to-cyan-500", icon: <FaCss3Alt /> },
  JavaScript: { bg: "bg-yellow-400/20 dark:bg-yellow-400/10 border-yellow-300/30 dark:border-yellow-400/30 text-yellow-300", gradient: "from-yellow-400 to-amber-500", icon: <FaJs /> },
  TypeScript: { bg: "bg-blue-700/20 dark:bg-blue-600/10 border-blue-500/30 dark:border-blue-500/30 text-blue-300", gradient: "from-blue-600 to-blue-400", icon: <SiTypescript /> },
  React: { bg: "bg-cyan-500/20 dark:bg-cyan-500/10 border-cyan-400/30 dark:border-cyan-500/30 text-cyan-300", gradient: "from-cyan-500 to-blue-500", icon: <FaReact /> },
  "React.js": { bg: "bg-cyan-500/20 dark:bg-cyan-500/10 border-cyan-400/30 dark:border-cyan-500/30 text-cyan-300", gradient: "from-cyan-500 to-blue-500", icon: <FaReact /> },
  Nextjs: { bg: "bg-gray-700/20 dark:bg-gray-700/10 border-gray-500/30 dark:border-gray-600/30 text-gray-300", gradient: "from-gray-700 to-gray-900", icon: <SiNextdotjs /> },
  "Next.js": { bg: "bg-gray-700/20 dark:bg-gray-700/10 border-gray-500/30 dark:border-gray-600/30 text-gray-300", gradient: "from-gray-700 to-gray-900", icon: <SiNextdotjs /> },
  Nodejs: { bg: "bg-green-600/20 dark:bg-green-600/10 border-green-500/30 dark:border-green-500/30 text-green-300", gradient: "from-green-600 to-emerald-500", icon: <FaNodeJs /> },
  "Node.js": { bg: "bg-green-600/20 dark:bg-green-600/10 border-green-500/30 dark:border-green-500/30 text-green-300", gradient: "from-green-600 to-emerald-500", icon: <FaNodeJs /> },
  Express: { bg: "bg-gray-600/20 dark:bg-gray-600/10 border-gray-500/30 dark:border-gray-500/30 text-gray-300", gradient: "from-gray-600 to-slate-700", icon: <SiExpress /> },
  "Express.js": { bg: "bg-gray-600/20 dark:bg-gray-600/10 border-gray-500/30 dark:border-gray-500/30 text-gray-300", gradient: "from-gray-600 to-slate-700", icon: <SiExpress /> },
  MongoDB: { bg: "bg-green-500/20 dark:bg-green-500/10 border-green-400/30 dark:border-green-500/30 text-green-300", gradient: "from-green-500 to-teal-500", icon: <SiMongodb /> },
  Git: { bg: "bg-orange-600/20 dark:bg-orange-600/10 border-orange-500/30 dark:border-orange-500/30 text-orange-300", gradient: "from-orange-600 to-red-500", icon: <FaGitAlt /> },
  GitHub: { bg: "bg-black/30 dark:bg-black/20 border-gray-600/30 dark:border-gray-700/30 text-gray-200", gradient: "from-gray-700 to-black", icon: <FaGithub /> },
  GitHUB: { bg: "bg-black/30 dark:bg-black/20 border-gray-600/30 dark:border-gray-700/30 text-gray-200", gradient: "from-gray-700 to-black", icon: <FaGithub /> },
  Tailwind: { bg: "bg-sky-400/20 dark:bg-sky-400/10 border-sky-300/30 dark:border-sky-400/30 text-sky-300", gradient: "from-sky-400 to-cyan-500", icon: <SiTailwindcss /> },
  "Tailwind CSS": { bg: "bg-sky-400/20 dark:bg-sky-400/10 border-sky-300/30 dark:border-sky-400/30 text-sky-300", gradient: "from-sky-400 to-cyan-500", icon: <SiTailwindcss /> },
  Firebase: { bg: "bg-yellow-500/20 dark:bg-yellow-500/10 border-yellow-400/30 dark:border-yellow-500/30 text-yellow-300", gradient: "from-yellow-500 to-orange-500", icon: <SiFirebase /> },
  Redux: { bg: "bg-purple-600/20 dark:bg-purple-600/10 border-purple-500/30 dark:border-purple-500/30 text-purple-300", gradient: "from-purple-600 to-violet-500", icon: <SiRedux /> },
  Python: { bg: "bg-blue-400/20 dark:bg-blue-400/10 border-blue-300/30 dark:border-blue-400/30 text-blue-300", gradient: "from-blue-500 to-cyan-500", icon: <FaPython /> },
  Vite: { bg: "bg-yellow-400/20 dark:bg-yellow-400/10 border-yellow-300/30 dark:border-yellow-400/30 text-yellow-300", gradient: "from-yellow-400 to-purple-500", icon: <SiVite /> },
  "Postman API": { bg: "bg-orange-400/20 dark:bg-orange-400/10 border-orange-300/30 dark:border-orange-400/30 text-orange-300", gradient: "from-orange-400 to-red-500", icon: <SiPostman /> },
  JSON: { bg: "bg-gray-300/20 dark:bg-gray-400/10 border-gray-300/30 dark:border-gray-500/30 text-gray-300", gradient: "from-gray-400 to-gray-600", icon: <SiJson /> },
  Bootstrap: { bg: "bg-purple-500/20 dark:bg-purple-500/10 border-purple-400/30 dark:border-purple-500/30 text-purple-300", gradient: "from-purple-600 to-pink-500", icon: <SiBootstrap /> },
  Sourcetree: { bg: "bg-blue-500/20 dark:bg-blue-500/10 border-blue-400/30 dark:border-blue-500/30 text-blue-300", gradient: "from-blue-600 to-cyan-500", icon: <SiSourcetree /> },
  Axios: { bg: "bg-blue-400/20 dark:bg-blue-400/10 border-blue-300/30 dark:border-blue-400/30 text-blue-300", gradient: "from-blue-500 to-indigo-500", icon: <SiAxios /> },
  GitHubPages: { bg: "bg-gray-700/20 dark:bg-gray-700/10 border-gray-600/30 dark:border-gray-700/30 text-gray-300", gradient: "from-gray-700 to-slate-800" },
  "Framer Motion": { bg: "bg-pink-400/20 dark:bg-pink-400/10 border-pink-300/30 dark:border-pink-400/30 text-pink-300", gradient: "from-pink-500 to-rose-500" },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="relative mb-28 sm:mb-40 max-w-6xl mx-auto scroll-mt-28 px-4 sm:px-6 py-8 sm:py-16"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/25 via-purple-500/20 to-transparent rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Glass morphism card */}
      <div className="relative z-10 backdrop-blur-xl bg-white/5 dark:bg-slate-900/40 border border-white/10 dark:border-slate-700/50 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-blue-400" />
            </motion.div>
          </div>
          <SectionHeading>
            <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-black text-4xl sm:text-5xl tracking-tight">
              My Skills & Expertise
            </span>
          </SectionHeading>
          <motion.div
            className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Skills Grid */}
        <ul className="relative z-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {skillsData.map((skill, index) => {
            const meta = skillMeta[skill] || {
              bg: "bg-slate-500/20 dark:bg-slate-500/10 border-slate-400/30 dark:border-slate-600/30 text-slate-300",
              gradient: "from-slate-500 to-slate-700",
            };
            return (
              <motion.li
                key={index}
                className={`group relative flex items-center justify-center gap-2 rounded-xl px-4 sm:px-5 py-3 sm:py-4 font-semibold text-base sm:text-lg border backdrop-blur-sm transition-all duration-300 ${meta.bg}`}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                custom={index}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${meta.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                />

                {/* Icon */}
                {meta.icon && (
                  <span className="relative z-10 text-xl sm:text-2xl drop-shadow flex-shrink-0">
                    {meta.icon}
                  </span>
                )}

                {/* Text */}
                <span className="relative z-10">{skill}</span>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ["100%", "-100%"],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  style={{ pointerEvents: "none" }}
                />
              </motion.li>
            );
          })}
        </ul>

        {/* Bottom accent line */}
        <motion.div
          className="mt-12 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
    </section>
  );
}