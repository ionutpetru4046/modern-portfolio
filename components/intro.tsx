"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section>
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
              alt="coste ionut profile-picture"
              width="292"
              height="292"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover 
              border-[0.01rem] border-white shadow-xl"
            />
          </motion.div>
            <motion.span className="absolute text-4xl bottom-0 right-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
                👋
            </motion.span>
         </div>
       </div>
    </section>
  )
}
