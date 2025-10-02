import ChangelogEntry from "@/components/ChangelogEntry";

export default function ChangelogPage() {
  const changelogData = [
    {
      version: "1.2.0",
      date: "2025-10-01",
      changes: [
        "Added dark mode toggle.",
        "Created contact page with reusable components.",
      ],
    },
    {
      version: "1.1.0",
      date: "2025-09-25",
      changes: [
        "Added project cards with status tags.",
        "Created projects page with dynamic cards.",
        "Improved mobile responsiveness.",
      ],
    },
    {
      version: "1.0.0",
      date: "2025-09-20",
      changes: [
        "Initial launch of portfolio website.",
        "Added home page with welcome section.",
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