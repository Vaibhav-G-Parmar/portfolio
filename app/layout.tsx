import type { Metadata } from "next";
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
    default: `${siteProfile.name} — ${siteProfile.title}`,
    template: `%s — ${siteProfile.name}`,
  },
  description: seoDescription,
  openGraph: {
    title: `${siteProfile.name} — ${siteProfile.title}`,
    description: seoDescription,
    url: siteUrl,
    siteName: siteProfile.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteProfile.name} — ${siteProfile.title}`,
    description: seoDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plexSans.variable} ${jetbrainsMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-background font-sans text-foreground antialiased selection:bg-emerald-500/25 dark:selection:bg-emerald-400/25">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
