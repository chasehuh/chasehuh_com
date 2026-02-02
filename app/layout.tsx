import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chaewon (Chase) Huh",
  description: "A minimal portfolio showcasing my work and thoughts",
  icons: {
    icon: "/icon.svg",
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
            paddingTop: '128px',
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
