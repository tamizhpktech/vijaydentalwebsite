import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: "https://www.vijaydentalclinic.in/sitemap.xml",
    host: "https://www.vijaydentalclinic.in",
  };
}
