import project1 from "@/public/projects1.png";
import project2 from "@/public/projects2.png";
import project3 from "@/public/projects3.png";
import project4 from "@/public/projects4.png";
import project5 from "@/public/projects5.png";
import project6 from "@/public/projects6.png";

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
    title: "Josh’s Turkish Barbers",
    description:
      "A modern barbershop website built for a real client. Fully responsive and animated using Framer Motion, it includes services, gallery, testimonials carousel, and a booking CTA.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Swiper.js",
    ],
    imageUrl: project6,
    link: "https://barbershop-website-chi.vercel.app/",
  },
  {
    title: "MERN Task Manager",
    description:
      "A full-stack task management application with user authentication, CRUD functionality, and RESTful API integration. Built using the MERN stack (MongoDB, Express, React, Node.js).",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    imageUrl: project5,
    link: "https://mern-task-manager-bh80.onrender.com",
  },
  {
    title: "Modern Saas Website",
    description:
      "Optimize your streams, track real-time analytics, and engage your audience effortlessly—all in one place. Perfect for Twitch, YouTube, and Facebook streamers.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Framer-Motion"],
    imageUrl: project1,
    link: "https://modern-saas-website.vercel.app/",
  },
  {
    title: "Advertising Website",
    description: "We create impactful ads that elevate your brand.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Framer-Motion"],
    imageUrl: project2,
    link: "https://landing-page-advertising-website.vercel.app/",
  },
  {
    title: "VirtualR Website",
    description:
      "Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Framer-Motion"],
    imageUrl: project3,
    link: "https://landing-page-3dpjrrx48-ionutpetru4046s-projects.vercel.app/",
  },
  {
    title: "Mechanic Booking Website",
    description:
      "A full-stack booking and service website built for a local mechanic shop. It includes an online booking system, service listings, and a secure admin dashboard to manage appointments and customer data.",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    imageUrl: project4,
    link: "https://mechanic-website-tau.vercel.app/",
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Bootstrap",
  "Postman API",
  "Git",
  "GitHUB",
  "GitHubPages",
  "Redux",
  "Python",
  "Framer Motion",
  "Sourcetree",
  "Vite",
  "JSON",
  "Axios",
] as const;
