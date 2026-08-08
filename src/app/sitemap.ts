import { allProjects } from "@/app/data";

export default async function sitemap() {
  const baseUrl = "https://hammad.biz.id";

  const staticUrls = [
    "",
    "/about",
    "/portfolio",
    "/experience",
    "/services",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectUrls = allProjects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: project.projectDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticUrls, ...projectUrls];
}
