"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { Mail, Sparkles } from "lucide-react";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="relative mb-20 sm:mb-28 w-[min(100%,48rem)] py-16 px-4 sm:px-8 mx-auto scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-blue-500/25 via-purple-500/20 to-transparent rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 -left-40 w-72 h-72 bg-gradient-to-tr from-cyan-400/15 via-blue-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            y: [0, -25, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Glass morphism card */}
      <div className="relative z-10 backdrop-blur-xl bg-white/5 dark:bg-slate-900/40 border border-white/10 dark:border-slate-700/50 rounded-3xl p-8 sm:p-10 shadow-2xl overflow-hidden">
        {/* Gradient border glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-20"
        >
          {/* Heading with icon */}
          <motion.div variants={itemVariants} className="mb-2 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-blue-400" />
              </motion.div>
            </div>
            <SectionHeading>
              <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-black text-4xl sm:text-5xl tracking-tight">
                Get In Touch
              </span>
            </SectionHeading>
            <motion.div
              className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-700 dark:text-gray-300 text-center mb-8 text-base sm:text-lg leading-relaxed"
          >
            Have a project in mind or want to collaborate? Reach out—I'd love to hear from you!
          </motion.p>

          {/* Email link */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <Mail className="w-5 h-5 text-blue-400" />
            <a
              className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold hover:from-blue-300 hover:to-purple-300 transition-all duration-300 text-lg"
              href="mailto:costewebdev@gmail.com"
            >
              costewebdev@gmail.com
            </a>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-400 dark:via-slate-600 to-transparent" />
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
              Or use the form
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-400 dark:via-slate-600 to-transparent" />
          </motion.div>

          {/* Form */}
          <motion.form
            variants={itemVariants}
            className="flex flex-col gap-4 dark:text-slate-900"
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }

              toast.success("Message sent successfully!");
            }}
          >
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <input
                className="w-full h-14 px-5 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white/10 dark:bg-slate-800/50 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 text-base font-medium backdrop-blur-sm"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="your@email.com"
              />
            </motion.div>

            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <textarea
                className="w-full h-48 px-5 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white/10 dark:bg-slate-800/50 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 text-base font-medium resize-none backdrop-blur-sm"
                name="message"
                placeholder="Share your thoughts, project ideas, or how you'd like to collaborate..."
                required
                maxLength={5000}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <SubmitBtn />
            </motion.div>
          </motion.form>

          {/* Footer note */}
          <motion.p
            variants={itemVariants}
            className="text-xs text-center text-gray-500 dark:text-gray-400 mt-6 leading-relaxed"
          >
            I typically respond within 24 hours. Looking forward to connecting!
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}