// src/app/projects/[id]/page.tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import projects from "@/data/projects";
import type { ProjectCardProps } from "@/components/projects/projectCard";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params?.id as string;
  const project = projects.find((p: ProjectCardProps) => p.id === projectId);

  if (!project) {
    return <div className="p-6">Project not found.</div>;
  }

  return (
    <div className="p-6">
      <button
        onClick={() => router.back()}
        className="text-accent hover:underline mb-4"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{project.type}</p>
      <p className="mb-6">{project.description}</p>

      <h2 className="font-semibold text-lg mb-2">Languages / Frameworks</h2>
      <ul className="flex flex-wrap gap-2 mb-4">
        {project.languages.map((lang) => (
          <li key={lang} className="bg-accent text-white px-2 py-1 rounded-full text-xs">
            {lang}
          </li>
        ))}
      </ul>

      <h2 className="font-semibold text-lg mb-2">Skills</h2>
      <ul className="flex flex-wrap gap-2 mb-4">
        {project.skills.map((skill) => (
          <li key={skill} className="bg-highlight text-white px-2 py-1 rounded-full text-xs">
            {skill}
          </li>
        ))}
      </ul>

      <div className="flex gap-4">
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            GitHub
          </a>
        )}
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            Live Site
          </a>
        )}
      </div>
    </div>
  );
}
