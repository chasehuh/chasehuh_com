import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chaewon (Chase) Huh",
  description: "building sumelabs.com",
  openGraph: {
    title: "Chaewon (Chase) Huh",
    description: "building sumelabs.com",
    url: "https://www.chasehuh.com",
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
