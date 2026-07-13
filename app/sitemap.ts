import type { MetadataRoute } from "next";

const base = "https://scrap-finance-partners.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/services",
    "/software",
    "/pricing",
    "/founder",
    "/case-studies",
    "/health-check",
    "/contact",
    "/privacy",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
