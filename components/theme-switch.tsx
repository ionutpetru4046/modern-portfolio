"use client";

import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[1000]">
      <button
        className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white/40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400"
        onClick={toggleTheme}
        aria-label={
          theme === "light" ? "Switch to dark mode" : "Switch to light mode"
        }
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        tabIndex={0}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center text-xl"
          >
            {theme === "light" ? <BsSun /> : <BsMoon />}
          </motion.span>
        </AnimatePresence>
        {showTooltip && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-black/80 text-white text-xs shadow-lg pointer-events-none select-none">
            {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          </span>
        )}
      </button>
    </div>
  );
}
