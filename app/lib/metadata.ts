import type { Metadata } from "next";

export const siteName = "Chaewon (Chase) Huh";
export const siteDescription = "building sumelabs.com";
export const baseUrl = "https://www.chasehuh.com";

function joinTitle(title: string) {
  return `${title} | ${siteName}`;
}

function buildAbsoluteUrl(path: string) {
  return new URL(path, baseUrl).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  type = "website",
}: {
  title: string;
  description: string;
  path?: string;
  type?: "article" | "website";
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
    },
    twitter: {
      title: joinTitle(title),
      description,
    },
  };
}

export function buildNoIndexMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    ...buildMetadata({ title, description, path, type: "article" }),
    robots: {
      index: false,
      follow: true,
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
