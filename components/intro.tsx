"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="relative max-w-3xl mx-auto mb-36 text-center scroll-mt-[100rem] px-6 py-16 bg-gradient-to-b from-white/80 via-gray-50/80 to-white/60 dark:from-gray-900/80 dark:via-gray-950/80 dark:to-gray-900/60 rounded-3xl shadow-inner overflow-hidden"
    >
      {/* Decorative Gradient */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-32 bg-gradient-to-r from-indigo-200/30 via-pink-200/20 to-purple-200/30 blur-2xl rounded-full" />
      </div>

      {/* Profile Image */}
      <div className="flex justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-400 via-pink-400 to-purple-400 rounded-full blur-md opacity-60 animate-pulse" />
          <Image
            src="/profile-picture.jpg"
            alt="Profile Picture of Coste Ionut"
            width={220}
            height={220}
            quality={95}
            priority
            className="rounded-full border-white shadow-lg dark:border-gray-700 relative z-10"
          />
        </motion.div>
      </div>

      {/* Hero Heading */}
      <motion.h1
        className="mt-8 text-3xl sm:text-4xl font-bold leading-snug tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow dark:drop-shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I’m <span className="font-extrabold">Coste Ionut</span> — {" "}
        <span className="font-semibold text-indigo-600">Full-Stack Developer (MERN)</span>{" "}
        with <span className="font-extrabold">3 years of experience</span>{" "}
        crafting <span className="italic">sleek, high-performing web apps</span> with{" "}
        <span className="underline">React, Node.js, Next.js TypeScript and TailwindCSS</span>.
      </motion.h1>

      {/* Buttons and Links */}
      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-4 text-base font-medium"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition focus:scale-105 active:scale-100 inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me{" "}
          <BsArrowRight className="group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/Full Stack Developer MERN Stack updated.pdf"
          download
          className="group bg-white/80 dark:bg-white/10 border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-white/20 text-gray-800 dark:text-gray-100 inline-flex items-center gap-2 transition focus:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Download CV <HiDownload className="group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/coste-ionut-petru-7531312bb/"
          target="_blank"
          className="bg-white/80 dark:bg-white/10 p-4 rounded-full border border-gray-300 dark:border-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition focus:scale-105 active:scale-100 text-gray-700 dark:text-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          aria-label="LinkedIn profile"
        >
          <BsLinkedin size={22} />
        </a>

        <a
          href="https://github.com/ionutpetru4046"
          target="_blank"
          className="bg-white/80 dark:bg-white/10 p-4 rounded-full border border-gray-300 dark:border-gray-700 hover:text-red-600 dark:hover:text-red-400 transition focus:scale-105 active:scale-100 text-gray-700 dark:text-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          aria-label="GitHub profile"
        >
          <FaGithubSquare size={24} />
        </a>
      </motion.div>
    </section>
  );
}
