import ChangelogEntry from "@/components/changelog/ChangelogEntry";

export default function ChangelogPage() {
  const changelogData = [
    {
      version: "0.5.0",
      date: "2025-10-01",
      changes: [
        "Populated pages with text content.",
        "Added new components for about page and home page.",
        "General Fixes and improvements.",
      ],
    },
    {
      version: "0.4.0",
      date: "2025-10-03",
      changes: [
        "Reworked the blog components and pages.",
        "Reworked the projects components and pages.",
        "Reworked the homepage to highlight latest blog post and random projects.",
        "Created contact page with reusable components.",
      ],
    },
    {
      version: "0.3.0",
      date: "2025-10-02",
      changes: [
        "Started work on dark mode toggle.",
        "Created contact page with reusable components.",
      ],
    },
    {
      version: "0.2.0",
      date: "2025-09-25",
      changes: [
        "Added project cards with status tags.",
        "Created projects page with dynamic cards.",
        "Improved mobile responsiveness.",
      ],
    },
    {
      version: "0.1.0",
      date: "2025-09-20",
      changes: [
        "Initial launch of portfolio website.",
        "Added pages with boilerplate content.",
        "Implemented navbar and footer.",
      ],
    },
  ];

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <section className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Website Changelog
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Here’s a history of updates made to my portfolio website.
        </p>
      </section>

      {/* Changelog Entries */}
      <section className="space-y-4">
        {changelogData.map((entry) => (
          <ChangelogEntry
            key={entry.version}
            version={entry.version}
            date={entry.date}
            changes={entry.changes}
          />
        ))}
      </section>
    </main>
  );
}