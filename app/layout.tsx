import type { Metadata } from "next";
import "./globals.css";
import {
  defaultOgImage,
  siteAuthor,
  siteDescription,
  siteKeywords,
  siteLocale,
  siteName,
  xHandle,
} from "~/lib/metadata";
import { siteUrl } from "~/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: siteAuthor, url: siteUrl }],
  creator: siteAuthor,
  publisher: siteAuthor,
  category: "technology",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: "/",
    siteName,
    locale: siteLocale,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    creator: xHandle,
    images: [defaultOgImage],
  },
  icons: {
    icon: "/icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '100%',
            maxWidth: '48rem',
            paddingTop: '48px',
            paddingBottom: '80px',
            paddingLeft: '32px',
            paddingRight: '32px'
          }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
