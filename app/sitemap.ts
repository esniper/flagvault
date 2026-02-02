import type { MetadataRoute } from "next";
import { config } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: config.baseUrl, lastModified: new Date() },
    { url: `${config.baseUrl}/privacy`, lastModified: new Date() },
    { url: `${config.baseUrl}/terms`, lastModified: new Date() },
    { url: `${config.baseUrl}/support`, lastModified: new Date() },
  ];
}
