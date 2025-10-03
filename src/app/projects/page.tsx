import ProjectCard from "@/components/projects/projectCard";
import projects from "@/data/projects";

export default function ProjectsPage() {

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
          <ProjectCard key={project.id} {...project} />
        ))}
      </section>
    </main>
  );
}