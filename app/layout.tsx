import type { Metadata } from "next";
import Script from "next/script";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { seoDescription, siteProfile } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans-plex",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteProfile.name} - ${siteProfile.title} | vaibhavparmar.com`,
    template: `%s - ${siteProfile.name}`,
  },
  description: seoDescription,
  keywords: [
    "Vaibhav Parmar",
    "AI Software Engineer",
    "vaibhavparmar.com",
    "Toronto",
    "mainframe",
    "distributed systems",
    "full-stack developer",
    "Java",
    "TypeScript",
    "React",
    "Node.js",
    "AWS",
    "z/OS",
    "Kafka",
    "AI-assisted development",
    "GitHub Copilot",
  ],
  authors: [{ name: siteProfile.name, url: siteUrl }],
  creator: siteProfile.name,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: `${siteProfile.name} - ${siteProfile.title}`,
    description: seoDescription,
    url: siteUrl,
    siteName: `${siteProfile.name} - vaibhavparmar.com`,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteProfile.name} - ${siteProfile.title}`,
    description: seoDescription,
  },
  robots: { index: true, follow: true },
  appleWebApp: false,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteProfile.name,
    url: siteUrl,
    jobTitle: siteProfile.title,
    sameAs: [siteProfile.github, siteProfile.linkedin],
    email: `mailto:${siteProfile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    knowsAbout: [
      "Mainframe systems",
      "Distributed systems",
      "AI-assisted software engineering",
      "Full-stack development",
      "Java",
      "TypeScript",
      "React",
      "Node.js",
      "AWS",
      "Kafka",
      "z/OS",
      "DB2",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plexSans.variable} ${jetbrainsMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-background font-sans text-foreground antialiased selection:bg-emerald-500/25 dark:selection:bg-emerald-400/25">
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
