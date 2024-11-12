"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from 'next/image';
import { useScroll } from 'framer-motion';
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl }: 
ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });


    return (
        <motion.div
        
            ref={ref}
            style={{
                scale: scrollYProgress,
                opacity: scrollYProgress,
            }} 
            className="mb-3 sm:mb-8 last:mb-0"
        >

    <section 
    className='group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden 
    sm:pr-8 relative sm:h-[20rem] even:pl-8 hover:bg-gray-200 transition'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] 
        flex flex-col h-full group-even:ml-[18rem]'>
            <h3 
            className='text-2xl font-semibold'>{title}</h3>
            <p 
            className='mt-2 leading-relaxed text-gray-700'>{description}</p>
            <ul 
            className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                {tags.map((tag, index) => (
                    <li 
                    className='bg-black/[0.7] px-3 py-1 text-[0.7rem] 
                    uppercase tracking-wider text-white rounded-full' 
                    key={index}>{tag}</li>
                ))}
            </ul>
        </div>

        <Image 
        src={imageUrl} 
        alt="Project I worked on" 
        quality={95} 
        className='absolute top-8 -right-40 w-[28.25rem] 
        rounded-t-lg shadow-2xl 
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] 
        group-even:-left-40' />
        </section>
       </motion.div>
    );
} 