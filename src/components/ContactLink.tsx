type ContactLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

export default function ContactLink({ href, icon, label }: ContactLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-4 border border-border rounded-lg bg-white dark:bg-gray-800 hover:bg-accent hover:text-white transition-colors"
    >
      <span className="h-6 w-6">{icon}</span>
      <span className="text-text dark:text-text">{label}</span>
    </a>
  );
}