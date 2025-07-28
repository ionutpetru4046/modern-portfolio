"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <section
      ref={ref}
      id="projects"
      className="relative scroll-mt-28 mb-28 py-16 px-4 sm:px-0 bg-gradient-to-b from-white/80 via-gray-50/80 to-white/60 dark:from-gray-900/80 dark:via-gray-950/80 dark:to-gray-900/60 rounded-3xl shadow-inner overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-40 bg-gradient-to-r from-indigo-200/30 via-pink-200/20 to-purple-200/30 blur-2xl rounded-full" />
      </div>
      <SectionHeading>
        <span className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow font-extrabold text-4xl tracking-tight">
          My Latest Projects
        </span>
      </SectionHeading>
      <div className="relative z-10 flex flex-col gap-12 sm:gap-16 max-w-3xl mx-auto">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1 + index * 0.15,
              duration: 0.6,
              type: "spring",
            }}
            viewport={{ once: true }}
          >
            <Project {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
