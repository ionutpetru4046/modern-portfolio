"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div
      className="my-24 h-16 w-1 rounded-full hidden sm:block bg-gradient-to-b from-indigo-200/80 via-pink-200/60 to-purple-200/80 dark:from-indigo-700/40 dark:via-purple-700/30 dark:to-pink-700/40 backdrop-blur-md shadow-lg border border-white/20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      aria-hidden="true"
    />
  );
}
