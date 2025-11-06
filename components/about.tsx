"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.section
      ref={ref}
      id="about"
      className="relative max-w-4xl mx-auto px-6 sm:px-8 scroll-mt-28 mb-28 sm:mb-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-transparent rounded-full blur-3xl"
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
        <motion.div
          className="absolute bottom-0 right-1/3 w-72 h-72 bg-gradient-to-tl from-pink-400/10 via-purple-500/5 to-transparent rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, 30, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Glass morphism card */}
      <div className="relative z-10 backdrop-blur-xl bg-white/5 dark:bg-slate-900/30 border border-white/10 dark:border-slate-700/50 rounded-2xl p-8 sm:p-12 shadow-2xl overflow-hidden">
        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-20"
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <SectionHeading>
              <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-black text-4xl sm:text-5xl tracking-tight">
                About Me
              </span>
            </SectionHeading>
            <motion.div
              className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          {/* Paragraphs with staggered animation */}
          <motion.p
            variants={itemVariants}
            className="mb-6 text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-200"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
              Full Stack Web Developer
            </span>{" "}
            with{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold">
              3 years of experience
            </span>{" "}
            transforming ideas into stunning, responsive, and high-performance web
            experiences. I craft digital interfaces with{" "}
            <span className="font-semibold text-white dark:text-white bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-700 dark:to-slate-600 px-2 py-1 rounded-md inline-block">
              HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB
            </span>
            , obsessing over clean code and user-centric design.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mb-6 text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-200"
          >
            Throughout my journey, I've engineered multiple full-stack projects, explored{" "}
            <span className="font-semibold text-white dark:text-white bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-700 dark:to-slate-600 px-2 py-1 rounded-md inline-block">
              Next.js, TailwindCSS, and Supabase
            </span>{" "}
            for database architecture, and mastered{" "}
            <span className="font-semibold text-white dark:text-white bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-700 dark:to-slate-600 px-2 py-1 rounded-md inline-block">
              Git & GitHub
            </span>{" "}
            for seamless version control workflows.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mb-6 text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-200"
          >
            Currently, I'm leveling up by mastering the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
              MERN Stack
            </span>{" "}
            — diving deep into{" "}
            <span className="font-semibold text-white dark:text-white bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-700 dark:to-slate-600 px-2 py-1 rounded-md inline-block">
              MongoDB, Express.js, REST APIs, and authentication systems
            </span>{" "}
            to become a true full-stack powerhouse capable of building production-ready applications.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-200"
          >
            My mission: land my first developer role where I can{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold">
              solve real-world problems
            </span>
            , write meaningful code, and continuously push my creative and technical boundaries.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}