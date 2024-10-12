import { allPostsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client"; // Adjust this import based on your Sanity client setup
import { MetadataRoute } from "next";
import post from "@/sanity/schemas/documents/post";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://successsecretsbet.com"; // Replace with your actual website URL

  // Define static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    // Add more static routes as needed
  ];

  // Fetch all posts using the allPostsQuery
  const posts = await client.fetch(allPostsQuery);

  // Generate dynamic routes for posts
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: new Date(post._updatedAt),
  }));
    console.log(posts);
    

  // Combine static and dynamic routes
  return [...staticRoutes, ...postRoutes];
}
