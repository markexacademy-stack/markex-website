import type { MetadataRoute } from "next";
import { posts } from "@/data/blog";
import { site } from "@/data/site";

const routes = [
  "",
  "/program",
  "/method",
  "/results",
  "/community",
  "/about",
  "/pricing",
  "/faq",
  "/contact",
  "/enroll",
  "/blog",
  "/portal",
  "/privacy-policy",
  "/terms",
  "/refund-policy",
  "/risk-disclosure",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...routes.map((route) => ({
      url: `${site.domain}${route || "/"}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...posts.map((post) => ({
      url: `${site.domain}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
