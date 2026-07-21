import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scrap-finance-partners.vercel.app"),
  title: {
    default: "Scrap Finance Partners — Know your margin per tonne",
    template: "%s — Scrap Finance Partners",
  },
  description:
    "26 years in UK scrap metal finance. We fix the gap between what your system reports and what is actually happening — stock, margin, and cash flow clarity for yards, not boardrooms.",
  keywords: [
    "scrap metal finance",
    "UK scrap yard",
    "recycling finance",
    "stock reconciliation",
    "margin recovery",
    "scrap yard accounting",
  ],
  authors: [{ name: "Scrap Finance Partners" }],
  openGraph: {
    title: "Scrap Finance Partners",
    description: "Finance clarity for scrap metal and recycling businesses.",
    type: "website",
    locale: "en_GB",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}