interface ExperienceCardProps {
  title: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export default function ExperienceCard({
  title,
  role,
  company,
  period,
  description
}: ExperienceCardProps) {
  return (
    <div className="p-4 border border-border rounded-lg bg-surface">
      <h3 className="text-xl font-bold text-accent">{title}</h3>
      <p className="text-text-secondary">{role} - {company} ({period})</p>
      <p className="mt-2 text-text">{description}</p>
    </div>
  );
}