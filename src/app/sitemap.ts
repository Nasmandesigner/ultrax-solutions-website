import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site-url";

const routes = [
  { path: "/", priority: 1 },
  { path: "/work", priority: 0.9 },
  { path: "/capabilities", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  ...projects.map(({ slug }) => ({ path: `/work/${slug}`, priority: 0.6 })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: new URL(path, siteUrl).toString(),
    priority,
  }));
}
