import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "~/lib/markdown";
import { buildMetadata, pickDescription } from "~/lib/metadata";
import { BlogPostContent } from "./blog-post-content";

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "Thoughts",
      description: "Essays and longer-form writing from Chaewon Huh on life, startups, and ideas.",
      path: "/thoughts",
    });
  }

  const description = pickDescription(
    post.content,
    `${post.title} by Chaewon Huh, published on ${post.date}.`,
  );

  return buildMetadata({
    title: post.title,
    description,
    path: `/thoughts/${post.slug}`,
    type: "article",
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}
