import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chaewon.me"),
  title: "Chaewon (Chase) Huh",
  description: "building sumelabs.com",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chaewon (Chase) Huh",
    description: "building sumelabs.com",
    url: "/",
    siteName: "Chaewon (Chase) Huh",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Chaewon (Chase) Huh",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaewon (Chase) Huh",
    description: "building sumelabs.com",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.png",
  },
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
