import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getLogByDate, getAllLogSlugs } from "~/lib/markdown";
import { GiscusComments } from "~/components/giscus-comments";
import {
  buildMetadata,
  jsonLd,
  pickDescription,
  siteAuthor,
  siteName,
} from "~/lib/metadata";
import { siteUrl } from "~/lib/site";

export async function generateStaticParams() {
  return getAllLogSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ date: string }>;
}): Promise<Metadata> {
  const { date } = await params;
  const log = await getLogByDate(date);

  if (!log) {
    return buildMetadata({
      title: "Logs",
      description: "Daily logs from Chaewon Huh covering startup progress, decisions, and momentum.",
      path: "/logs",
    });
  }

  return buildMetadata({
    title: `Log: ${log.date}`,
    description: pickDescription(
      log.content,
      `Daily log from Chaewon Huh for ${log.date}.`,
    ),
    path: `/logs/${log.slug}`,
    type: "article",
    publishedTime: log.date,
    modifiedTime: log.updatedAt ?? log.date,
  });
}

export default async function LogPost({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  const log = await getLogByDate(date);

  if (!log) {
    notFound();
  }

  const description = pickDescription(
    log.content,
    `Daily log from Chaewon Huh for ${log.date}.`,
  );

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: `Log: ${log.date}`,
    description,
    datePublished: log.date,
    dateModified: log.updatedAt ?? log.date,
    author: {
      "@type": "Person",
      name: siteAuthor,
    },
    publisher: {
      "@type": "Person",
      name: siteAuthor,
    },
    mainEntityOfPage: `${siteUrl}/logs/${log.slug}`,
    image: [`${siteUrl}/opengraph-image`],
    isPartOf: {
      "@type": "Blog",
      name: `${siteName} Logs`,
      url: `${siteUrl}/logs`,
    },
    inLanguage: "en",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(articleJsonLd) }}
      />
      <article>
        <div className="mb-8">
          <Link href="/logs" className="underline hover:no-underline text-[15px]">
            ← Logs
          </Link>
        </div>

        <h1 className="text-2xl font-semibold mb-8">
          {log.date}
        </h1>

        <div
          className="prose text-[15px] leading-[1.8]"
          dangerouslySetInnerHTML={{ __html: log.htmlContent || "" }}
        />

        <GiscusComments />
      </article>
    </>
  );
}
