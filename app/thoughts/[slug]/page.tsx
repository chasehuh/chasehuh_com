import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "~/lib/markdown";
import {
  buildMetadata,
  jsonLd,
  pickDescription,
  siteAuthor,
  siteName,
} from "~/lib/metadata";
import { siteUrl } from "~/lib/site";
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
    publishedTime: post.date,
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

  const description = pickDescription(
    post.content,
    `${post.title} by Chaewon Huh, published on ${post.date}.`,
  );

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author || siteAuthor,
    },
    publisher: {
      "@type": "Person",
      name: siteAuthor,
    },
    mainEntityOfPage: `${siteUrl}/thoughts/${post.slug}`,
    image: [`${siteUrl}/opengraph-image`],
    inLanguage: post.contentKo ? ["en", "ko"] : "en",
    isPartOf: {
      "@type": "Blog",
      name: `${siteName} Thoughts`,
      url: `${siteUrl}/thoughts`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(articleJsonLd) }}
      />
      <BlogPostContent post={post} />
    </>
  );
}
