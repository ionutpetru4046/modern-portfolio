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
  const { ref } = useSectionInView('Home', 0.5);
  const {
    setActiveSection,
    setTimeOfLastClick,
  } = useActiveSectionContext();

  return (
    <section 
    ref={ref} 
    id="home" 
    className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image 
              src="/profile-picture.jpg"
              alt="logo"
              width="292"
              height="292"
              quality="95"
              priority={true}
              className="w-30 rounded-3xl object-cover 
              border-[0.01rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m 
          Coste Ionut.</span> I&apos;m a{"  "}
          <span className="font-bold">Frontend Web 
            Developer</span> with{" "}
            <span className="font-bold">2+ years </span> 
             of experience. I enjoy building <span className="italic">
              Websites & Apps </span>. My Main Focus is{"  "}
              <span className="underline">React.js & Node.js and TypeScript</span>.
      </motion.h1>

      <motion.div className="flex flex-col sm:flex-row items-center justify-center 
      gap-2 px-4 text-lg font-medium"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
      >
        <Link 
        href="#contact" 
        className="group bg-gray-900 text-white px-7 py-3 
        flex items-center gap-2 rounded-full outline-none 
        focus:scale-110 hover:scale-110 hover:bg-gray-950 
        active:scale-105 transition" 
        onClick={() => {
          setActiveSection('Contact');
          setTimeOfLastClick(Date.now());
        }}
        >
        Contact Me Here{" "}
        <BsArrowRight className="opacity-70 
        group-hover:translate-x-1 transition" />
        </Link>

        <a 
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer 
          dark:bg-white/10 border border-black/10" 
          href="/Junior Full Stack Web Developer.pdf" download >
          Download CV{" "} 
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
          <a 
            className="bg-white p-4 text-gray-700 flex 
        items-center gap-2 rounded-full focus:scale-110 
        hover:scale-110 active:scale-105 hover:text-blue-600 transition cursor-pointer border 
        border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-blue-600" href="https://www.linkedin.com/in/coste-ionut-7531312bb/" 
        target="_blank"
        >
              <BsLinkedin />
          </a>

          <a 
             className="bg-white p-4 text-gray-700 flex 
             items-center gap-2 rounded-full focus:scale-110 
             hover:scale-110 active:scale-105 hover:text-red-700 transition 
             cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 
             dark:hover:text-red-600"
             href="https://github.com/ionutpetru4046" 
             target="_blank"
             >
            <FaGithubSquare />
          </a>
      </motion.div>
    </section>
  );
}
