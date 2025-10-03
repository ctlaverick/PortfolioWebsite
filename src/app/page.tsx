import Link from "next/link";
import projects from "@/data/projects";
import blogs from "@/data/blogs";
import ProjectHighlight from "@/components/projects/ProjectHighlightCard";
import BlogHighlight from "@/components/blog/BlogHighlight";

export default function HomePage() {
  // Shuffle and take 3 random projects
  const randomProjects = [...projects]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  
  const latestPost = [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )[0];
  
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl font-extrabold mb-4">
          Hi, I’m <span className="text-primary">Charles Laverick</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-6">
          A Computer Science student and aspiring software engineer, passionate
          about building web applications, software, simulations, and automation tools.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="border border-foreground px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-black transition"
          >
            View Projects
          </a>
          <Link
            href="/contact"
            className="border border-foreground px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-black transition"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground">
          I am a 22-year-old Computer Science student in my final year of study, passionate about problem-solving and continuous learning. Upon graduation, I aim to secure a role in the technology industry where I can apply my skills, gain valuable experience, and continue to grow as a professional. Beyond my academic and career pursuits, I enjoy playing cricket, gaming, and watching films often at the cinema.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-muted">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-3xl font-bold">Projects</h2>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all"
            >
              See more <span className="transition group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {randomProjects.map((project) => (
              <ProjectHighlight key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-3xl font-bold">Blog</h2>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all"
          >
            See more <span className="transition group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {latestPost && <BlogHighlight post={latestPost} />}
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            Feel free to reach out for collaborations, freelance work, or just
            to say hello.
          </p>
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            Go to Contact Page →
          </Link>
        </div>
      </section>
    </main>
  );
}