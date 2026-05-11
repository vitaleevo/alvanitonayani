import type { MetadataRoute } from "next";

import { blogPosts, navigation, site } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = navigation.map((item) => ({
    url: `${site.url}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: item.href === "/" ? 1 : 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
