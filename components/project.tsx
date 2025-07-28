"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-8 last:mb-0"
    >
      <section className="relative max-w-[44rem] mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/60 dark:bg-white/10 backdrop-blur-lg transition-all duration-300 hover:shadow-3xl hover:scale-[1.025]">
        {/* Project Image with Gradient Overlay */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={`Screenshot of ${title}`}
            fill
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
          {/* View Project Button */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300 z-10 px-6 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            tabIndex={0}
            aria-label={`View project: ${title}`}
          >
            View Live Project
          </a>
        </div>
        {/* Project Content */}
        <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-10 flex flex-col gap-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-2">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <li
                className="px-3 py-1 rounded-full text-xs font-semibold shadow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600 backdrop-blur-sm border border-white/20"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}
