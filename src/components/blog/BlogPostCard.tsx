import Link from "next/link";

type BlogPostCardProps = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags?: string[];
};

export default function BlogPostCard({ title, date, excerpt, slug, tags }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block p-6 border border-border rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-2">{excerpt}</p>
      {tags && (
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs font-semibold bg-accent bg-opacity-20 text-accent rounded">
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}