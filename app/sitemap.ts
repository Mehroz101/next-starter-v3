import { env } from "@/config/env";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: env.NEXT_PUBLIC_API_URL + "/api/health",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: env.NEXT_PUBLIC_API_URL + "/api/health",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Add more static routes here...
  ];
}
