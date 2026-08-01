import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Retired routes. Permanent redirects so existing links, bookmarks and any
   * indexed URLs keep working after the restructure:
   *  - /founder        → /about                 (renamed)
   *  - /pricing        → /ways-to-work-together (renamed; the page carries no prices)
   *  - /software       → /updates               (YardLedger is "exploring" only)
   *  - /dashboard-demo → /health-check          (decorative dashboard removed)
   */
  async redirects() {
    return [
      { source: "/founder", destination: "/about", permanent: true },
      { source: "/pricing", destination: "/ways-to-work-together", permanent: true },
      { source: "/software", destination: "/updates", permanent: true },
      { source: "/dashboard-demo", destination: "/health-check", permanent: true },
    ];
  },
};

export default nextConfig;
