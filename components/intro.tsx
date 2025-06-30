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
      className="max-w-3xl mx-auto mb-36 text-center scroll-mt-[100rem] px-6"
    >
      {/* Profile Image */}
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <Image
            src="/profile-picture.jpg"
            alt="Profile Picture"
            width={220}
            height={220}
            quality={95}
            priority
            className="rounded-full border-4 border-white shadow-lg dark:border-gray-700"
          />
        </motion.div>
      </div>

      {/* Heading */}
      <motion.h1
        className="mt-8 text-3xl sm:text-4xl font-bold leading-snug tracking-tight text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I’m <span className="text-indigo-600">Coste Ionut</span>. <br />
        A Full Stack Developer (MERN) with{" "}
        <span className="text-indigo-500">2+ years</span> of experience building{" "}
        <span className="italic">modern websites & apps</span> using{" "}
        <span className="underline">React, Node, and TypeScript</span>.
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
          className="group bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition focus:scale-105 active:scale-100 inline-flex items-center gap-2"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me <BsArrowRight className="group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/Full Stack Web Developer MERN Stack.pdf"
          download
          className="group bg-white dark:bg-white/10 border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-white/20 text-gray-800 dark:text-gray-100 inline-flex items-center gap-2 transition focus:scale-105 active:scale-100"
        >
          Download CV <HiDownload className="group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/coste-ionut-petru-7531312bb/"
          target="_blank"
          className="bg-white dark:bg-white/10 p-4 rounded-full border border-gray-300 dark:border-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition focus:scale-105 active:scale-100 text-gray-700 dark:text-white/70"
        >
          <BsLinkedin size={22} />
        </a>

        <a
          href="https://github.com/ionutpetru4046"
          target="_blank"
          className="bg-white dark:bg-white/10 p-4 rounded-full border border-gray-300 dark:border-gray-700 hover:text-red-600 dark:hover:text-red-400 transition focus:scale-105 active:scale-100 text-gray-700 dark:text-white/70"
        >
          <FaGithubSquare size={24} />
        </a>
      </motion.div>
    </section>
  );
}
