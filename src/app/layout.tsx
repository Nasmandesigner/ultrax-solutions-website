import type { Metadata } from "next";
import localFont from "next/font/local";
import { MotionConfig } from "motion/react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const lufga = localFont({
  src: [
    { path: "./fonts/Lufga-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/Lufga-SemiBold.otf", weight: "600", style: "normal" },
    { path: "./fonts/Lufga-Bold.otf", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-lufga",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  alternates: { canonical: "/" },
  title: {
    default: "UltraX Solutions — Experience Beyond Digital",
    template: "%s — UltraX Solutions",
  },
  description:
    "UltraX Solutions brings technology, creative thinking, design, and strategic execution together to build stronger brands and better digital experiences.",
  openGraph: {
    title: "UltraX Solutions — Experience Beyond Digital",
    description:
      "Technology, creative thinking, design, and strategic execution in one connected experience.",
    siteName: "UltraX Solutions",
    type: "website",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={lufga.variable} lang="en">
      <body>
        <MotionConfig reducedMotion="user">
          <a className="skip-link" href="#main-content">Skip to content</a>
          <SiteHeader />
          <main id="main-content" tabIndex={-1}>{children}</main>
          <SiteFooter />
        </MotionConfig>
      </body>
    </html>
  );
}
