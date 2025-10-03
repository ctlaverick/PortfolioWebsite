import Link from "next/link";
import type { BlogPost } from "@/data/blogs";

export default function BlogHighlight({ post }: { post: BlogPost }) {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="mt-2">{post.excerpt}</p>
      <p className="mt-1 text-sm opacity-80">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <Link
        href={`/blog/${post.slug}`}
        className="inline-block mt-4 px-4 py-2 bg-white text-pink-600 rounded-lg font-semibold hover:bg-gray-100"
      >
        Read More →
      </Link>
    </div>
  );
}