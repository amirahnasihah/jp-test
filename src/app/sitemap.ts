import type { MetadataRoute } from "next";

const routes = [
  {
    url: "https://aab.co.jp",
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  },
  {
    url: "https://aab.co.jp/#about",
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    url: "https://aab.co.jp/#services",
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    url: "https://aab.co.jp/#works",
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    url: "https://aab.co.jp/#staff",
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  },
  {
    url: "https://aab.co.jp/#recruit",
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  },
  {
    url: "https://aab.co.jp/#contact",
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes;
}
