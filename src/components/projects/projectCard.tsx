import Link from "next/link";

export type StatusType = "Completed" | "In-progress" | "Stopped";
export type ProjectType =
  | "Portfolio Project"
  | "Client Project"
  | "Academic Project"
  | "Upcoming Project"
  | "Software Project"
  | "Technical Challenge";

export type ProjectCardProps = {
  id: string;
  title: string;
  type: ProjectType;
  description: string;
  languages: string[];
  skills: string[];
  status: StatusType;
  githubLink?: string;
  liveLink?: string;
};

export default function ProjectCard({
  id,
  title,
  type,
  description,
  languages,
  skills,
  status,
  githubLink,
  liveLink,
}: ProjectCardProps) {
  const statusColors = {
    Completed: "bg-green-500",
    "In-progress": "bg-yellow-500",
    Stopped: "bg-red-500",
  };

  return (
    <div className="border border-border rounded-lg p-6 shadow-sm transition-shadow hover:shadow-lg bg-white dark:bg-gray-800">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
        <span
          className={`px-3 py-1 text-xs rounded-full text-white whitespace-nowrap ${
            statusColors[status]
          }`}
        >
          {status}
        </span>
      </div>

      {/* Type */}
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{type}</p>

      {/* Description */}
      <p className="text-gray-800 dark:text-gray-200 mb-4">{description}</p>

      {/* Languages / Frameworks */}
      <div className="mb-3">
        <h4 className="font-semibold text-gray-900 dark:text-gray-100">Languages / Frameworks:</h4>
        <div className="flex flex-wrap gap-2 mt-1">
          {languages.map((lang) => (
            <span
              key={lang}
              className="bg-accent text-white px-2 py-1 rounded-full text-xs"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 dark:text-gray-100">Skills:</h4>
        <div className="flex flex-wrap gap-2 mt-1">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-highlight text-white px-2 py-1 rounded-full text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-4 flex-wrap items-center">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            GitHub
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Live Site
          </a>
        )}

        {/* 🔹 View Details button */}
        <Link
          href={`/projects/${id}`}
          className="ml-auto px-3 py-1.5 text-sm bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}