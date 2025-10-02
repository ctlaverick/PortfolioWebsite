import ProjectCard from "@/components/projectCard";
import type { ProjectCardProps } from "@/components/projectCard"; // 👈 import the props type

export default function ProjectsPage() {
  const projects: ProjectCardProps[] = [ // 👈 explicitly typed
    {
      title: "E-commerce Website",
      type: "Portfolio Project",
      description:
        "A full-stack e-commerce platform with product catalogue, cart system, and payment integration.",
      languages: ["React", "Next.js", "Tailwind CSS", "Stripe API"],
      skills: ["UI Design", "Backend Integration", "Payment Processing"],
      status: "Completed",
      githubLink: "https://github.com/charleslaverick/ecommerce",
      liveLink: "https://ecommerce.charleslaverick.uk",
    },
    {
      title: "Movie Website",
      type: "Portfolio Project",
      description:
        "A dynamic movie information website built with Next.js and TMDB API, featuring filtering, search, and detailed movie pages.",
      languages: ["Next.js", "TypeScript", "Tailwind CSS", "TMDB API"],
      skills: ["API Integration", "Frontend Development", "Responsive Design"],
      status: "Completed",
      githubLink: "https://github.com/charleslaverick/movie-site",
      liveLink: "https://movies.charleslaverick.uk",
    },
    {
      title: "Car Dealership Website",
      type: "Client Project",
      description:
        "A client project for a local car dealership, including advanced search filters and booking functionality.",
      languages: ["React", "Node.js", "PostgreSQL"],
      skills: ["Client Communication", "Backend Development", "Database Design"],
      status: "Completed",
      liveLink: "https://cardealership.charleslaverick.uk",
    },
    {
      title: "Algorithm Optimisation",
      type: "Academic Project",
      description:
        "Improved runtime of sorting algorithms as part of a university module. Focused on efficiency and memory usage.",
      languages: ["Python", "C++"],
      skills: ["Algorithm Design", "Performance Analysis"],
      status: "Completed",
    },
    {
      title: "HCI Web App Design",
      type: "Academic Project",
      description:
        "Designed accessible and user-friendly websites and apps for the Human-Computer Interaction module.",
      languages: ["Figma", "HTML", "CSS"],
      skills: ["UI/UX Design", "Prototyping", "Accessibility"],
      status: "Completed",
    },
    {
      title: "Financial Risk Assessment Tool",
      type: "Upcoming Project",
      description:
        "A custom tool for a Canadian financial company to automate risk control testing and streamline assessments.",
      languages: ["Next.js", "TypeScript", "PostgreSQL"],
      skills: ["Full-stack Development", "Risk Management"],
      status: "In-progress",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto p-6">
      {/* Page Header */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-text">Projects</h1>
        <p className="text-text-secondary mt-2">
          A showcase of my work, including personal projects, academic work, and collaborations with clients.
        </p>
      </section>

      {/* Project Grid */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>
    </main>
  );
}