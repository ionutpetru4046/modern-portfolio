"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { Sparkles, Code2, Zap } from "lucide-react";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative max-w-5xl mx-auto mb-32 sm:mb-48 text-center scroll-mt-28 px-4 sm:px-6 py-8 sm:py-16"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/30 via-purple-500/25 to-transparent rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 via-blue-500/15 to-transparent rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -25, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-tl from-pink-400/15 via-purple-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 40, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Glass morphism card */}
      <div className="relative z-10 backdrop-blur-xl bg-white/5 dark:bg-slate-900/40 border border-white/10 dark:border-slate-700/50 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20"
        >
          {/* Profile Image with Advanced Animation */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-60 blur-lg"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              {/* Pulsing ring */}
              <motion.div
                className="absolute -inset-3 rounded-2xl border-2 border-blue-400/30"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <Image
                src="/profile-picture.jpg"
                alt="Profile Picture of Coste Ionut"
                width={200}
                height={200}
                quality={95}
                priority
                className="relative z-10 rounded-2xl border-4 border-white/20 dark:border-slate-700/50 shadow-2xl backdrop-blur-sm"
              />
            </motion.div>
          </motion.div>

          {/* Decorative line above heading */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
                Full-Stack Developer
              </span>
            </div>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400" />
          </motion.div>

          {/* Hero Heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4">
              <span className="block dark:text-white mb-2">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Coste Ionut
                </span>
              </span>
              <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent text-3xl sm:text-4xl font-bold">
                Crafting Digital Experiences
              </span>
            </h1>
            <p className="text-gray-300 dark:text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mt-6">
              A passionate{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>{" "}
              with 3 years of expertise building high-performance web applications using{" "}
              <span className="font-medium text-white dark:text-white bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-700 dark:to-slate-600 px-2 py-1 rounded-md inline-block">
                React, Node.js, Next.js, TypeScript
              </span>{" "}
              and cutting-edge technologies.
            </p>
          </motion.div>

          {/* Stats/Skills Pills */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 dark:text-white gap-3 sm:gap-4 mb-10 max-w-2xl mx-auto"
          >
            {[
              { icon: Code2, label: "3 Years", value: "Experience" },
              { icon: Zap, label: "10+", value: "Projects" },
              { icon: Sparkles, label: "MERN", value: "Stack" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-4 rounded-xl bg-white/5 dark:bg-slate-800/30 border border-white/10 dark:border-slate-700/50 backdrop-blur-sm"
              >
                <stat.icon className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                <div className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="#contact"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white overflow-hidden"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Contact Me
                  <BsArrowRight className="group-hover:translate-x-1 transition" />
                </span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <a
                href="/CV Resume Full Stack Developer updated.pdf"
                download
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-white/10 dark:bg-slate-800/50 border-2 border-white/20 dark:border-slate-700/50 text-white hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all duration-300 backdrop-blur-sm"
              >
                Download CV
                <HiDownload className="group-hover:translate-y-1 transition" />
              </a>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-4"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-gray-600" />

            <motion.a
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/coste-ionut-petru-7531312bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 dark:bg-slate-800/50 border border-white/20 dark:border-slate-700/50 text-gray-300 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm"
              aria-label="LinkedIn profile"
            >
              <BsLinkedin size={22} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/ionutpetru4046"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 dark:bg-slate-800/50 border border-white/20 dark:border-slate-700/50 text-gray-300 hover:text-slate-200 hover:border-slate-400/50 transition-all duration-300 backdrop-blur-sm"
              aria-label="GitHub profile"
            >
              <FaGithubSquare size={24} />
            </motion.a>

            <div className="h-px w-8 bg-gradient-to-l from-transparent to-gray-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}