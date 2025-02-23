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
        I Enrolled in a Coding Bootcamp and Learned{" "}
        <span className="font-medium">Full-Stack Web Development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My Core Stack
        is{" "}
        <span className="font-medium">
          React.js, Node.js, Express.js, and MongoDB
        </span>
        . I am also familiar with Typescript, Tailwind CSS and Next.js. I am currently looking for a{" "}
        <span className="font-medium">Full-Time Position</span> as a Junior Full-Stack Developer.
        </p>
        <p>
        <span className="italic">When I'm not Coding</span>, I enjoy watching movies, and reading Books about new Technologies. I also enjoy{" "}
        <span className="font-medium">Learning new things</span>. I am currently
        Learning Back-End Development{" "}
        <span className="font-medium">to improve my Back-End Developer Skills</span>.
        </p>
    </motion.section>
  )
}
