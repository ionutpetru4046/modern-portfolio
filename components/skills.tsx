"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { delay, motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    }),
};

export default function Skills() {
    const { ref } = useSectionInView('Skills');

  return (
    <section id='skills' ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 
    text-center sm:mb-40'>
        <SectionHeading > My Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-2 
        text-lg text-gray-800'>
            {
                skillsData.map((skills, index) => (
                    <motion.li 
                    className='bg-white border border-black/[0.1] rounded-xl px-5 py-3' 
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                    custom={index}
                    >
                        {skills}
                    </motion.li>
                ))
            }
        </ul>
    </section>
  )
}
