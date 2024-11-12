import React from "react";
import project1 from "@/public/projects1.png"
import project2 from "@/public/projects2.png"
import project3 from "@/public/projects3.png"
import project4 from "@/public/projects4.png"
import project5 from "@/public/projects5.png"
import project6 from "@/public/projects6.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Modern Saas Website",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Framer-Motion"],
    imageUrl: project1,
    link: "https://modern-saas-website.vercel.app/",
  },
  {
    title: "Advertising Website",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Framer-Motion"],
    imageUrl: project2,
    link: "https://landing-page-advertising-website.vercel.app/",
  },
  {
    title: "VirtualR Website",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Framer-Motion"],
    imageUrl: project3,
    link: "https://landing-page-3dpjrrx48-ionutpetru4046s-projects.vercel.app/",
  },
  {
    title: "Sample Landing Page",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Framer-Motion"],
    imageUrl: project4,
    link: "https://simple-landing-page-nu.vercel.app/",
  },
  {
    title: "E-ecommerce Website",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Framer-Motion"],
    imageUrl: project5,
    link: "https://ionutpetru4046.github.io/ecommerce/index.html",
  },
  {
    title: "React.js Task Tracker App",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Framer-Motion"],
    imageUrl: project6,
    link: "https://ionutpetru4046.github.io/Task-Tracker-react.js/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;