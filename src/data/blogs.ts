// src/data/blogs.ts
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string; // ISO format, e.g. "2025-10-01"
  slug: string;
  content: string; // full blog content
}

const blogs: BlogPost[] = [
  {
    id: "intro-to-nextjs",
    title: "Getting Started with Next.js",
    excerpt: "An introduction to building modern web apps using Next.js.",
    date: "2025-09-21",
    slug: "getting-started-with-nextjs",
    content: `
      <p>Welcome to my first blog post! In this article, we’ll cover the basics of Next.js...</p>
    `,
  },
  {
    id: "typescript-tips",
    title: "10 TypeScript Tips for React Developers",
    excerpt: "Boost your productivity and confidence with these TypeScript tricks.",
    date: "2025-09-28",
    slug: "typescript-tips-for-react-devs",
    content: `
      <ul>
        <li>Use type inference whenever possible</li>
        <li>Leverage utility types like Partial and Pick</li>
      </ul>
    `,
  },
];

export default blogs;