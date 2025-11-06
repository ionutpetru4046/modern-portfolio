"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

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
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const yProgess = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
        y: yProgess,
      }}
      className="group mb-12 last:mb-0"
    >
      <section className="relative max-w-[52rem] mx-auto rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 dark:bg-slate-900/40 border border-white/10 dark:border-slate-700/50 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-blue-400/30 dark:hover:border-blue-400/30">
        {/* Animated gradient border glow */}
        <motion.div
          className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          initial={false}
          animate={{ opacity: 0 }}
        />

        {/* Project Image with Advanced Effects */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          {/* Background gradient overlay layers */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 dark:to-black/60 pointer-events-none z-20"
            initial={{ opacity: 0.4 }}
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.3 }}
          />

          {/* Blue accent glow on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-purple-500/0 to-cyan-500/0 pointer-events-none z-10 mix-blend-screen"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.15 }}
            transition={{ duration: 0.3 }}
          />

          <Image
            src={imageUrl}
            alt={`Screenshot of ${title}`}
            fill
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            priority
          />

          {/* CTA Button with enhanced styling */}
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center z-30"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            tabIndex={0}
            aria-label={`View project: ${title}`}
          >
            <motion.div
              className="flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white font-bold text-lg shadow-xl backdrop-blur-sm border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span>View Live</span>
              <ArrowUpRight className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </div>

        {/* Project Content Section */}
        <div className="relative z-20 px-6 sm:px-10 py-8 sm:py-10">
          {/* Header with title and badge */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {title}
              </h3>
            </motion.div>

            {/* Featured Badge */}
            <motion.div
              className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-500/20 dark:bg-blue-500/10 border border-blue-400/50 dark:border-blue-500/30 text-blue-300 whitespace-nowrap"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Featured
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            className="text-gray-300 dark:text-gray-400 leading-relaxed text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>

          {/* Divider */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          {/* Tech Tags with enhanced styling */}
          <motion.div
            className="flex flex-wrap gap-3 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {tags.map((tag, index) => (
              <motion.div
                key={index}
                className="group/tag relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-lg opacity-0 group-hover/tag:opacity-100 blur transition-opacity duration-300" />

                <div className="relative px-4 py-2 rounded-lg text-sm font-semibold bg-white/5 dark:bg-slate-800/50 border border-blue-400/30 dark:border-blue-500/30 text-blue-300 dark:text-blue-200 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 dark:hover:bg-slate-700/50">
                  {tag}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Action footer */}
          <motion.div
            className="flex items-center gap-4 pt-4 border-t border-white/5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300 group/link"
            >
              <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              <span>Live Demo</span>
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}