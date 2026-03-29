import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "~/lib/markdown";
import { buildMetadata } from "~/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Thoughts",
  description: "Essays and longer-form writing from Chaewon Huh on life, startups, and ideas.",
  path: "/thoughts",
});

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div>
      <div className="mb-8">
        <Link href="/" className="underline hover:no-underline text-[15px]">
          ← Home
        </Link>
      </div>

      <h1 className="text-2xl font-semibold mb-8">Thoughts</h1>

      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.slug} className="text-[15px]">
            <Link href={`/thoughts/${post.slug}`} className="underline hover:no-underline">
              {post.title}
            </Link>
            <span className="ml-2" style={{ color: 'var(--muted-foreground)' }}>— {post.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
