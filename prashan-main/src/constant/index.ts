
import type { Project } from "@/types";

const projects: Project[] = [
  {
    id: "1",
    name: "StudyNotion",
    description:
      "Built an interactive e-learning platform with user authentication, secure payments, media management, and RESTful APIs. Designed a responsive UI for an enhanced user experience.",
    repo: "https://github.com/Prashan081003/StudyNotion_Edtech_Project",
    demo: "https://study-notion-edtech-project-three.vercel.app/",
    techStack: "Node.js, Express.js, MongoDB, React.js, JWT, Bcrypt, Mongoose, Tailwind CSS",
  },
  {
    id: "2",
    name: "MyShopping Cart App",
    description:
      "Developed a dynamic shopping cart app with item management, filtering, and responsive UI. Utilized React.js and Redux Toolkit for efficient state management.",
    repo: "https://github.com/Prashan081003/ShopApp_Redux",
    demo: "https://shop-app-redux-two.vercel.app/",
    techStack: "React.js, Redux Toolkit, Redux Middleware, Vercel",
  },
  {
    id: "3",
    name: "Portfolio Website",
    description:
      "Created a comprehensive portfolio website to showcase personal projects and skills.",
    repo: "https://github.com/Prashan081003/John-portfolio",
    demo: "https://john-portfolio-pi.vercel.app/",
    techStack: "React.js, Tailwind CSS, Vercel",
  },
];

export { projects };
