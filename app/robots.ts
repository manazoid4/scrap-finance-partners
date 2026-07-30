import type { MetadataRoute } from "next";
const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scrap-finance-partners.vercel.app";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/one-pagers/"] }, sitemap: `${base}/sitemap.xml` }; }