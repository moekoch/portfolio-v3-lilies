import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Morgan Koch — moekoch.xyz",
  description: "Morgan Koch — CS + AI + Design. Penn State Behrend.",
  openGraph: {
    title: "Morgan Koch — moekoch.xyz",
    url: "https://moekoch.xyz",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
