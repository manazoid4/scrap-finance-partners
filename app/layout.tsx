import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scrap-finance-partners.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Scrap Finance Partners — Commercial finance for scrap and recycling", template: "%s — Scrap Finance Partners" },
  description: "Commercial finance insight for UK scrap and recycling businesses, connecting trading, stock, transport and finance decisions.",
  keywords: ["scrap metal finance", "UK scrap yard", "recycling finance", "stock reconciliation", "trading margin"],
  authors: [{ name: "Scrap Finance Partners" }],
  openGraph: { title: "Scrap Finance Partners", description: "Commercial finance insight for UK scrap and recycling businesses.", type: "website", locale: "en_GB", url: siteUrl },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans text-foreground antialiased`}>{children}<Analytics /></body></html>;
}