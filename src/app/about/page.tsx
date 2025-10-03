import experiences from "@/data/experiences";
import education from "@/data/education";
import ExperienceCard from "@/components/about/ExperienceCard";

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

      {/* Hobbies Section */}
      <section>
        <h2 className="text-2xl font-semibold text-text">Hobbies & Interests</h2>
        <div className="mt-4 space-y-2">
          <p className="text-text">
            I have a passion for continuous learning and problem-solving, particularly through programming challenges and exploring new technologies. This drives my curiosity and motivates me to improve my skills.
          </p>
          <p className="text-text">
            I play cricket competitively for two teams, participating in at least two matches each week. I primarily bowl while developing my batting skills, and I also take on the role of scorer when needed — an activity that strengthens my focus and attention to detail.
          </p>
          <p className="text-text">
            Outside of programming and sport, I enjoy watching films and TV shows, frequently visiting the cinema either alone or with friends. I value spending quality time with friends, engaging in activities such as playing video and board games, minigolf, bowling, dining out, and attending live comedy events.
          </p>
        </div>
      </section>
      
      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-semibold text-text">Education</h2>
        <div className="mt-4 space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="p-4 border border-border rounded-lg bg-surface">
              <h3 className="text-xl font-bold text-accent">{edu.degree}</h3>
              <p className="text-text-secondary">{edu.institution} — {edu.period}</p>
              {edu.description.map((line, i) => (
               <p key={i} className="mt-2 text-text">{line}</p>
              ))}
            </div>
          ))}
       </div>
</section>

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-semibold text-text">Experience</h2>
        <div className="mt-4 space-y-4">
          {experiences
          .slice()
          .map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </section>

      {/* Other Information Section */}
      {/* <section>
        <h2 className="text-2xl font-semibold text-text">Additional Information</h2>
        <div className="mt-4 text-text">
          <p>
            Include any certifications, awards, personal projects, or soft skills that might interest a potential employer.
          </p>
        </div>
      </section> */}
    </main>
  );
}
