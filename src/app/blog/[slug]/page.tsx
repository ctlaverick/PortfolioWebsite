// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import blogs from "@/data/blogs";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const post = blogs.find((b) => b.slug === slug);

  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      {/* Back Button */}
      <Link
        href="/blog"
        className="inline-block mb-6 px-4 py-2 rounded-lg border border-gray-300 
                   text-sm text-gray-700 hover:bg-gray-100 dark:border-gray-600 
                   dark:text-gray-300 dark:hover:bg-gray-700"
      >
        ← Back to Blog
      </Link>

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm opacity-70 mb-6">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <article
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}