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
      "Optimize your streams, track real-time analytics, and engage your audience effortlessly—all in one place. Perfect for Twitch, YouTube, and Facebook streamers.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Framer-Motion"],
    imageUrl: project1,
    link: "https://modern-saas-website.vercel.app/",
  },
  {
    title: "Advertising Website",
    description:
      "We create impactful ads that elevate your brand.",
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
    title: "Sample Landing Page",
    description:
      "At VastuSpaze, we believe in transforming houses into dream homes. With a passion for design and a commitment to quality, our team of skilled professionals has been dedicated to delivering exceptional renovation services for over a decade.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Framer-Motion"],
    imageUrl: project4,
    link: "https://simple-landing-page-nu.vercel.app/",
  },
  {
    title: "Restaura",
    description:
      "We Love Cooking, At Restaura, we believe that great food goes beyond taste; it tells a story of dedication and creativity.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Framer-Motion"],
    imageUrl: project6,
    link: "https://restaura-landing-page-website-gu6c5it42.vercel.app/",
  },
  {
    title: "E-ecommerce Website",
    description:
    "Super Value Deals on all Products",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: project5,
    link: "https://ionutpetru4046.github.io/ecommerce/index.html",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "TypeScript",
  "Next.js",
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
  "jQuery",
  "Vite",
  "Vercel",
  "JSON",
  "Axios",
  "SQL"
] as const;