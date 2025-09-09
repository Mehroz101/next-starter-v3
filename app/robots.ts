import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/login", "/register", "/reset-password"],
      },
    ],
    sitemap: "https://yourbrand.com/sitemap.xml",
  };
}
