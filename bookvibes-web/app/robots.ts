// app/robots.ts
//
// Genera https://www.bookvibes.es/robots.txt
// Deja a Google entrar en toda la web y le dice dónde está el sitemap.

import type { MetadataRoute } from "next";

const SITE_URL = "https://www.bookvibes.es";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // La API interna y la lista personal de favoritos no aportan nada en Google.
        disallow: ["/api/", "/favoritos"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}