import { allPostsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.pawfectdaily.com"; // Updated to include www

  // Fetch all posts
  const posts = await client.fetch(allPostsQuery);

  // Generate routes for posts
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug?.current}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: "daily",
    priority: 0.7,
  }));

  // Combine with static routes
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...postRoutes,
  ];
}
