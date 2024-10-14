import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",

        disallow: "/studio",
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        disallow: ["/studio"],
      },
    ],
    sitemap: "https://pawfectdaily.com/sitemap.xml",
  };
}
