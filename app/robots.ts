import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard-demo", "/api/"],
    },
    sitemap: "https://scrap-finance-partners.vercel.app/sitemap.xml",
  };
}
