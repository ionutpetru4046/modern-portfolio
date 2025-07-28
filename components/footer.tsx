import React from "react";

export default function Footer() {
  return (
    <footer className="relative mb-10 px-4 py-8 text-center rounded-3xl shadow-inner bg-gradient-to-b from-white/80 via-gray-50/80 to-white/60 dark:from-gray-900/80 dark:via-gray-950/80 dark:to-gray-900/60 max-w-2xl mx-auto overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-16 bg-gradient-to-r from-indigo-200/30 via-pink-200/20 to-purple-200/30 blur-2xl rounded-full" />
      </div>
      <div className="relative z-10">
        <small className="mb-2 block text-xs text-gray-500 dark:text-gray-400">
          &copy; 2025 Coste Ionut Petru. All rights reserved.
        </small>
        <p className="text-xs text-gray-600 dark:text-gray-300">
          <span className="font-semibold">About this Website:</span> Built with
          React.js & Next.js (App Router), Typescript, Tailwind CSS, Framer
          Motion, and Hosting on Vercel.
        </p>
      </div>
    </footer>
  );
}
