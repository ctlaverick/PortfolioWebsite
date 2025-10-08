// src/data/projects.ts
import type { ProjectCardProps } from "@/components/projects/projectCard";

export interface Project extends ProjectCardProps {
  id: string; // add id so we can use dynamic routes
}

const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    type: "Portfolio Project",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS to showcase projects and blog posts.",
    languages: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    skills: ["UI Design", "Backend Integration", "SEO", "Hosting", "CI/CD"],
    status: "In-progress",
    githubLink: "https://github.com/ctlaverick/PortfolioWebsite",
    liveLink: "https://charleslaverick.uk",
  },
  // {
  //   id: "ecommerce",
  //   title: "E-commerce Website",
  //   type: "Portfolio Project",
  //   description:
  //     "A full-stack e-commerce platform with product catalogue, cart system, and payment integration.",
  //   languages: ["React", "Next.js", "Tailwind CSS", "Stripe API"],
  //   skills: ["UI Design", "Backend Integration", "Payment Processing"],
  //   status: "In-progress",
  //   githubLink: "https://github.com/charleslaverick/ecommerce",
  //   liveLink: "https://ecommerce.charleslaverick.uk",
  // },
  {
    id: "movie-site",
    title: "Movie Website",
    type: "Portfolio Project",
    description:
      "A dynamic movie information website built with Next.js and TMDB API, featuring filtering, search, and detailed movie pages.",
    languages: ["Next.js", "TypeScript", "Tailwind CSS", "TMDB API"],
    skills: ["API Integration", "Frontend Development", "Responsive Design"],
    status: "In-progress",
    githubLink: "https://github.com/charleslaverick/movie-site",
    liveLink: "https://charleslaverick.uk",
  },
  {
    id: "car-dealership",
    title: "Car Dealership Frontend",
    type: "Client Project",
    description:
      "A client project for a local car dealership, including advanced search filters and booking functionality.",
    languages: ["React", "Node.js", "PostgreSQL"],
    skills: ["Client Communication", "Backend Development", "Database Design"],
    status: "Completed",
    liveLink: "https://cardealership.charleslaverick.uk",
    githubLink:"https://github.com/ctlaverick/RGVehicleSite",
  },
  {
    id: "algorithm-optimisation",
    title: "Algorithm Optimisation",
    type: "Academic Project",
    description:
      "As part of a university assignment for the Data Structures & Algorithms module, I optimised various algorithms for performance and efficiency. This included implementing sorting algorithms, searching techniques, and data structure manipulations to improve time and space complexity. The final task in this assignment was optimised so that it was able to be ran in a few minutes rather than several days or even weeks.",
    languages: ["Python", "C++"],
    skills: ["Algorithm Design", "Performance Analysis"],
    status: "Completed",
    githubLink: "https://github.com/ctlaverick/DSA-Assignment2",
  },
  // {
  //   id: "hci-webapp",
  //   title: "HCI Web App Design",
  //   type: "Academic Project",
  //   description:
  //     "Designed accessible and user-friendly websites and apps for the Human-Computer Interaction module.",
  //   languages: ["Figma", "HTML", "CSS"],
  //   skills: ["UI/UX Design", "Prototyping", "Accessibility"],
  //   status: "Completed",
  // },
  {
    id: "risk-tool",
    title: "Financial Risk Assessment Tool",
    type: "Upcoming Project",
    description:
      "A custom tool for a Canadian financial company to automate risk control testing and streamline assessments.",
    languages: ["Next.js", "TypeScript", "PostgreSQL"],
    skills: ["Full-stack Development", "Risk Management"],
    status: "In-progress",
  },
  {
    id: "stump-tracker-app",
    title: "Stump Tracker",
    type: "Academic Project",
    description:
      "A progresive web app which enables users to track their own cricket matches and training sessions. Created for a university module called Mobile & Web Applications",
    languages: ["React", "Node.js", "Progressive Web App", "Browser Storage"],
    skills: ["Frontend development", "Backend Development", "PWA"],
    status: "Completed",
    liveLink: "https://stumptracker.charleslaverick.uk",
    githubLink:"https://github.com/ctlaverick/StumpTracker",  
 },
  {
    id: "stump-tracker-website",
    title: "Stump Tracker Advertisement Website",
    type: "Academic Project",
    description:
      "A website created to advertise and highlight the stump tracker app created in another project. Created for a university module called Mobile & Web Applications",
    languages: ["React", "Node.js",],
    skills: ["Frontend development", "Backend Development"],
    status: "Completed",
    liveLink: "https://stumptrackerwebsite.charleslaverick.uk",
    githubLink:"https://github.com/ctlaverick/StumpTrackerWebsite",
  },
];

export default projects;