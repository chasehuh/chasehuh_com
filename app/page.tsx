import { getAllPosts, getAllLogs } from "~/lib/markdown";
import { HomeContent } from "~/components/home-content";
import { jsonLd, siteDescription, siteName, xHandle } from "~/lib/metadata";
import { siteUrl } from "~/lib/site";

export default function Index() {
  const posts = getAllPosts();
  const recentPosts = posts.slice(0, 3).map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
  }));

  const logs = getAllLogs();
  const recentLogs = logs.slice(0, 3).map((l) => ({
    slug: l.slug,
    date: l.date,
    title: l.title,
  }));

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteName,
    alternateName: "Chase Huh",
    url: siteUrl,
    description: siteDescription,
    sameAs: [
      "https://github.com/chasehuh",
      "https://x.com/chaewonhuh_me",
      "https://sumelabs.com",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    author: {
      "@type": "Person",
      name: siteName,
    },
    publisher: {
      "@type": "Person",
      name: siteName,
    },
    potentialAction: {
      "@type": "ReadAction",
      target: `${siteUrl}/thoughts`,
    },
    mainEntity: {
      "@type": "Person",
      name: siteName,
      sameAs: [
        "https://github.com/chasehuh",
        `https://x.com/${xHandle.replace("@", "")}`,
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(websiteJsonLd) }}
      />
      <HomeContent recentPosts={recentPosts} recentLogs={recentLogs} />
    </>
  );
}
