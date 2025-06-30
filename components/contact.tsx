"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="relative mb-20 sm:mb-28 w-[min(100%,38rem)] text-center py-16 px-4 bg-gradient-to-b from-white/80 via-gray-50/80 to-white/60 dark:from-gray-900/80 dark:via-gray-950/80 dark:to-gray-900/60 rounded-3xl shadow-inner overflow-hidden mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Decorative Gradient */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-32 bg-gradient-to-r from-indigo-200/30 via-pink-200/20 to-purple-200/30 blur-2xl rounded-full" />
      </div>
      <SectionHeading>
        <span className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow font-extrabold text-4xl tracking-tight">
          Contact Me
        </span>
      </SectionHeading>

      <motion.p
        className="text-gray-700 -mt-6 dark:text-white/80 mb-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Please contact me directly at{' '}
        <a className="underline text-indigo-600 font-semibold" href="mailto:ionthekid@yahoo.com">
          costewebdev@gmail.com
        </a>{' '}
        or through this form.
      </motion.p>

      <motion.form
        className="mt-6 flex flex-col gap-4 dark:text-black relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        action={async (formData) => {
          const{ data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Message sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 text-base shadow-md"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 text-base shadow-md"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </motion.form>
    </motion.section>
  );
}
