import type { Metadata } from "next";
import { siteUrl } from "~/lib/site";

export const siteName = "Chaewon (Chase) Huh";
export const siteDescription = "building sumelabs.com";
export const siteAuthor = "Chaewon Huh";
export const siteLocale = "en_US";
export const xHandle = "@chaewonhuh_me";
export const defaultOgImage = "/opengraph-image";
export const siteKeywords = [
  "Chaewon Huh",
  "Chase Huh",
  "founder",
  "startup",
  "sumelabs",
  "personal site",
  "blog",
  "thoughts",
];

function joinTitle(title: string) {
  return `${title} | ${siteName}`;
}

function buildAbsoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  type = "website",
  publishedTime,
}: {
  title: string;
  description: string;
  path?: string;
  type?: "article" | "website";
  publishedTime?: string;
}): Metadata {
  const url = buildAbsoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: joinTitle(title),
      description,
      url,
      type,
      locale: siteLocale,
      siteName,
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: joinTitle(title),
      description,
      creator: xHandle,
      images: [defaultOgImage],
    },
  };
}

export function pickDescription(input: string, fallback: string) {
  const normalized = input.replace(/\s+/g, " ").trim();

  if (!normalized) {
    return fallback;
  }

  return normalized.length > 160
    ? `${normalized.slice(0, 157).trimEnd()}...`
    : normalized;
}

export function jsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
