export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto p-6 space-y-12">
      {/* Page Header */}
      <section className="space-y-2">
        <h1 className="text-3xl font-bold text-text">About Me</h1>
        <p className="text-text-secondary">
          Learn more about my background, education, experiences, and interests.
        </p>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-semibold text-text">Education</h2>
        <div className="mt-4 space-y-4">
          <div className="p-4 border border-border rounded-lg bg-surface">
            <h3 className="text-xl font-bold text-accent">Bachelor of Computer Science</h3>
            <p className="text-text-secondary">Northumbria University — 2022–2026</p>
            <p className="mt-2 text-text">
              Short description of your degree, notable achievements, and any relevant projects or coursework.
            </p>
          </div>

          {/* Add more education entries here */}
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-semibold text-text">Experience</h2>
        <div className="mt-4 space-y-4">
          <div className="p-4 border border-border rounded-lg bg-surface">
            <h3 className="text-xl font-bold text-accent">Junior Software Developer</h3>
            <p className="text-text-secondary">Tech Company — June 2025 – Present</p>
            <p className="mt-2 text-text">
              Brief summary of responsibilities, skills learned, and results achieved.
            </p>
          </div>

          {/* Add more experience entries here */}
        </div>
      </section>

      {/* Hobbies Section */}
      <section>
        <h2 className="text-2xl font-semibold text-text">Hobbies & Interests</h2>
        <div className="mt-4 space-y-2">
          <p className="text-text">
            - Playing basketball and following motorsport.<br />
            - Reading fantasy and technology books.<br />
            - Volunteering at local community groups.<br />
            - Exploring new programming languages and frameworks.
          </p>
        </div>
      </section>

      {/* Other Information Section */}
      <section>
        <h2 className="text-2xl font-semibold text-text">Additional Information</h2>
        <div className="mt-4 text-text">
          <p>
            Include any certifications, awards, personal projects, or soft skills that might interest a potential employer.
          </p>
        </div>
      </section>
    </main>
  );
}
