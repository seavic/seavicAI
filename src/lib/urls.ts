import { siteConfig } from "../data/siteConfig";

const basePath = import.meta.env.BASE_URL || "/";
const normalizedBase = basePath === "/" ? "" : basePath.replace(/\/$/, "");

export function localPath(path = "/") {
  if (/^(?:[a-z][a-z0-9+.-]*:|mailto:|tel:)/i.test(path) || path.startsWith("#")) {
    return path;
  }

  if (path === "/") return `${normalizedBase}/`;

  return `${normalizedBase}${path.startsWith("/") ? path : `/${path}`}`;
}

export function absoluteUrl(path = "/") {
  const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const cleanPath = path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${cleanPath === "/" ? "/" : cleanPath}`;
}
