"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white/20 bg-gradient-to-b from-white/10 via-white/5 to-transparent backdrop-blur-3xl shadow-2xl shadow-black/10 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-2xl dark:border-white/10 dark:bg-gradient-to-b dark:from-gray-900/30 dark:via-gray-950/20 dark:to-transparent"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        {/* Animated glow background */}
        <motion.div
          className="absolute inset-0 rounded-none sm:rounded-2xl bg-gradient-to-r from-cyan-500/0 via-purple-500/5 to-pink-500/0 -z-10"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 relative transition-all duration-300 group hover:scale-105",
                  activeSection === link.name
                    ? "text-gray-950 dark:text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 via-purple-400/20 to-pink-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
                  initial={false}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Shimmer text effect */}
                <motion.span
                  className={clsx(
                    "relative bg-clip-text transition-all duration-300",
                    activeSection === link.name
                      ? "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent font-semibold"
                      : "text-gray-600 dark:text-gray-400"
                  )}
                >
                  {link.name}
                </motion.span>

                {/* Active background with gradient */}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 -z-20"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                {/* Active highlight border */}
                {link.name === activeSection && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"
                    layoutId="activeHighlight"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                {/* Floating particles on active */}
                {link.name === activeSection && (
                  <>
                    <motion.div
                      className="absolute -top-1 right-2 w-1 h-1 bg-cyan-400 rounded-full"
                      animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute -top-1 left-2 w-1 h-1 bg-pink-400 rounded-full"
                      animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2.2, repeat: Infinity, delay: 0.1 }}
                    />
                  </>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Floating gradient orbs in background */}
      <motion.div
        className="fixed top-20 right-40 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl -z-50 pointer-events-none"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-40 left-32 w-56 h-56 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl -z-50 pointer-events-none"
        animate={{ y: [0, -15, 0], x: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </header>
  );
}