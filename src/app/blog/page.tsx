import BlogPostCard from "@/components/blog/BlogPostCard";
import { getSortedPostsData } from "@/lib/blog";

export default async function BlogPage() {
  const blogPosts = await getSortedPostsData();

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Blog</h1>
        <p className="text-gray-600 dark:text-gray-300">
          My thoughts, experiments, and projects — all in one place.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <BlogPostCard
            key={post.slug}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
            slug={post.slug}
            tags={post.tags}
          />
        ))}
      </section>
    </main>
  );
}