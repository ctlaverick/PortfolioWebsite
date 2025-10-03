import Link from "next/link";
import blogs from "@/data/blogs";

export default function BlogList() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <ul className="space-y-6">
        {blogs.map((post) => (
          <li key={post.id} className="border-b pb-4">
            <Link
              href={`/blog/${post.slug}`}
              className="text-xl font-semibold hover:text-primary"
            >
              {post.title}
            </Link>
            <p className="text-muted-foreground text-sm mt-1">{post.excerpt}</p>
            <p className="text-xs opacity-60 mt-1">
              {new Date(post.date).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}