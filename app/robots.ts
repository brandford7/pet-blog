import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/studio",
      },
      // You can add more specific rules for different user agents if needed
      // {
      //   userAgent: "Googlebot",
      //   allow: "/",
      //   disallow: "/private/",
      // },
    ],
    sitemap: "https://pawfectdaily.com/sitemap.xml",
  };
}
