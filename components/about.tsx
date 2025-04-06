"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section 
    ref={ref}
    className='mb-28 max-w-[45rem] text-center leading-8 
    sm:mb-40 scroll-mt-28'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id='about'
    >
        <SectionHeading>About Me</SectionHeading >
        <p className='mb-3'>
        I have 2 years of experience in frontend web development{" "}
        <span className="font-medium">working with HTML, CSS, JavaScript, React.js, Node.js, and GitHub.</span>.{" "}
        <span className="italic">I’ve built several personal projects </span> and have also worked with SQL for database building. <span className="underline"> Currently,</span> I’m mastering the MERN stack to transition into full-stack development
        {" "}
        <span className="font-medium">
        and enhance my skills in backend technologies like MongoDB, Express.js, and authentication systems. </span> My goal is to land my first industry{" "}
        <span className="font-medium">job as a Full Stack Developer, {" "}</span>
        </p>
        <p>
        <span className="italic">and I’m actively working</span>, on improving my JavaScript {" "}
        <span className="font-medium"> efficiency and programming logic.</span>{" "}
        </p>
    </motion.section>
  )
}
