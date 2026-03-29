import type { Metadata } from "next";
import "./globals.css";
import { baseUrl, siteDescription, siteName } from "~/lib/metadata";

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: baseUrl,
  },
  icons: {
    icon: "data:,",
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
