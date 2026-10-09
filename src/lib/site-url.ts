const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL?.trim();

if (process.env.NODE_ENV === "production" && !configuredOrigin) {
  throw new Error("Set NEXT_PUBLIC_SITE_URL to the verified public HTTPS origin before building for production.");
}

const parsedOrigin = new URL(configuredOrigin || "http://localhost:3000");

if (parsedOrigin.protocol !== "https:" && parsedOrigin.protocol !== "http:") {
  throw new Error("NEXT_PUBLIC_SITE_URL must use https:// or http://");
}

if (process.env.NODE_ENV === "production" && parsedOrigin.protocol !== "https:") {
  throw new Error("NEXT_PUBLIC_SITE_URL must use HTTPS for a production build.");
}

if (parsedOrigin.pathname !== "/" || parsedOrigin.search || parsedOrigin.hash) {
  throw new Error("NEXT_PUBLIC_SITE_URL must be an origin only, without a path, query, or fragment.");
}

export const siteUrl = new URL("/", parsedOrigin);
