"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Code2, Zap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const techStack = [
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Framer Motion", icon: "✨" },
    { name: "Vercel", icon: "▲" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full px-3 xs:px-4 sm:px-6 mb-6 xs:mb-8 sm:mb-10 md:mb-12"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-20 xs:-top-24 -right-20 xs:-right-24 w-48 xs:w-56 h-48 xs:h-56 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, 15, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 -left-20 xs:-left-24 w-40 xs:w-48 h-40 xs:h-48 bg-gradient-to-tr from-cyan-400/10 via-blue-500/5 to-transparent rounded-full blur-3xl"
          animate={{
            y: [0, -15, 0],
            x: [0, -10, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Glass morphism card */}
      <div className="relative z-10 max-w-4xl xs:max-w-5xl mx-auto backdrop-blur-xl bg-white/5 dark:bg-slate-900/50 border border-white/10 dark:border-slate-700/50 rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl overflow-hidden">
        {/* Gradient border glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl xs:rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="relative z-20"
        >
          {/* Top Section - Copyright & Heart */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col xs:flex-row items-center justify-center gap-1 xs:gap-2 mb-6 xs:mb-8 pb-6 xs:pb-8 border-b border-white/10 dark:border-slate-700/50"
          >
            <p className="text-xs xs:text-sm text-gray-400 dark:text-gray-500 text-center">
              &copy; {currentYear} Coste Ionut Petru
            </p>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hidden xs:block"
            >
              <Heart className="w-3.5 xs:w-4 h-3.5 xs:h-4 text-blue-400 fill-blue-400" />
            </motion.div>
            <p className="text-xs xs:text-sm text-gray-400 dark:text-gray-500">
              All rights reserved
            </p>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div variants={itemVariants} className="mb-6 xs:mb-8">
            <div className="flex items-center justify-center gap-2 mb-4 xs:mb-5">
              <Code2 className="w-3.5 xs:w-4 sm:w-5 h-3.5 xs:h-4 sm:h-5 text-blue-400" />
              <h4 className="text-xs xs:text-sm font-bold uppercase tracking-wider xs:tracking-widest text-gray-300 dark:text-gray-400">
                Built With
              </h4>
              <Zap className="w-3.5 xs:w-4 sm:w-5 h-3.5 xs:h-4 sm:h-5 text-blue-400" />
            </div>

            <div className="flex flex-wrap justify-center gap-2 xs:gap-2.5 sm:gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/10 to-cyan-600/0 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />

                  <div className="relative px-2 xs:px-2.5 sm:px-3 py-1.5 xs:py-2 rounded-lg xs:rounded-lg bg-white/5 dark:bg-slate-800/30 border border-blue-400/20 dark:border-blue-500/20 text-xs xs:text-xs sm:text-sm font-medium text-blue-300 dark:text-blue-200 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 dark:hover:bg-slate-700/40 hover:border-blue-400/40 dark:hover:border-blue-500/40">
                    <span className="mr-1.5 xs:mr-1.5">{tech.icon}</span>
                    <span className="hidden xs:inline">{tech.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-6 xs:mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Description Section */}
          <motion.div variants={itemVariants} className="text-center mb-6 xs:mb-8">
            <p className="text-xs xs:text-sm text-gray-400 dark:text-gray-500 leading-relaxed max-w-2xl mx-auto">
              <span className="block mb-2 xs:mb-2">A modern, high-performance portfolio website showcasing</span>
              <span className="text-gray-300 dark:text-gray-400 font-semibold">
                cutting-edge web development with React, Next.js, and modern tooling
              </span>
              <span className="block mt-2 xs:mt-2">Hosted on Vercel for lightning-fast performance</span>
            </p>
          </motion.div>

          {/* CTA Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col xs:flex-row items-center justify-center gap-3 xs:gap-4 pt-4 xs:pt-5 border-t border-white/10 dark:border-slate-700/50"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#home"
              className="text-xs xs:text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              Back to Top ↑
            </motion.a>
            <div className="hidden xs:block w-px h-4 xs:h-5 bg-white/10" />
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="text-xs xs:text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              Get In Touch
            </motion.a>
            <div className="hidden xs:block w-px h-4 xs:h-5 bg-white/10" />
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/ionutpetru4046"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs xs:text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Credit Line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center text-xs text-gray-500 dark:text-gray-600 mt-4 xs:mt-6 text-opacity-75"
      >
        Crafted with passion by Coste Ionut Petru
      </motion.p>
    </motion.div>
  );
}