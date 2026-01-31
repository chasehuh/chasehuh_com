import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "~/lib/markdown";
import { BlogPostContent } from "./blog-post-content";

export async function generateStaticParams() {
  return getAllPostSlugs();
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
