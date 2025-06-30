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
      style={{ scale: scaleProgess, opacity: opacityProgess }}
      className="group mb-8 sm:mb-12 last:mb-0"
    >
      <section className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-2xl transition duration-300 sm:flex sm:h-[22rem]">
        {/* Image */}
        <div className="relative w-full h-64 sm:w-[45%] sm:h-full">
          <Image
            src={imageUrl}
            alt={`${title} preview`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1 rounded-t-3xl sm:rounded-l-3xl sm:rounded-tr-none"
            priority
          />
        </div>

        {/* Text content */}
        <div className="flex flex-col justify-between p-6 sm:p-10 sm:w-[55%]">
          <div>
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-white mb-2">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-white/80">
              {description}
            </p>
            <ul className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, i) => (
                <li
                  key={i}
                  className="text-xs bg-neutral-900 text-white dark:bg-white dark:text-black px-3 py-1 rounded-full uppercase tracking-wider"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Link Button */}
          <div className="mt-6">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-300 text-white dark:text-black text-sm font-medium px-5 py-2 rounded-full hover:scale-105 transition-transform duration-200"
            >
              View Project
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
