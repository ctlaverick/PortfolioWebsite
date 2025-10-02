import { getPostData, getSortedPostsData } from "@/lib/blog";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = await getSortedPostsData();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params; // ✅ Await params before use
  const postData = await getPostData(slug);

  return (
    <main className="max-w-3xl mx-auto p-6">
      <article className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {postData.title}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {postData.date}
        </p>
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </main>
  );
}
