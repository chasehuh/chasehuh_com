import type { MetadataRoute } from "next";
import { getAllLogs, getAllPosts } from "~/lib/markdown";
import { siteUrl } from "~/lib/site";

const staticRoutes = ["/", "/thoughts", "/logs", "/awards"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
  }));

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteUrl}/thoughts/${post.slug}`,
    lastModified: post.date,
  }));

  const logEntries: MetadataRoute.Sitemap = getAllLogs().map((log) => ({
    url: `${siteUrl}/logs/${log.slug}`,
    lastModified: log.date,
  }));

  return [...staticEntries, ...postEntries, ...logEntries];
}
