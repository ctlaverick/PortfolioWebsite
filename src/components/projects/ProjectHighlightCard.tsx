// src/components/projects/ProjectHighlight.tsx
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectHighlight({ project }: { project: Project }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg">
      <div className="flex-1">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="mt-2 text-lg">{project.description}</p>
        <p className="mt-2 text-sm opacity-80">{project.type}</p>
        <div className="mt-4 flex gap-2 flex-wrap">
          {project.languages.map((lang) => (
            <span
              key={lang}
              className="bg-white/20 px-2 py-1 rounded-md text-sm"
            >
              {lang}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${project.id}`}
          className="inline-block mt-4 px-4 py-2 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}