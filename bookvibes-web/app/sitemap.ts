// app/sitemap.ts
//
// Genera https://www.bookvibes.es/sitemap.xml
// Incluye las páginas fijas, TODAS las fichas de libro y todas las páginas
// de autor. Usa el mismo catálogo cacheado que el resto de la web (no toca
// el backend) y se regenera cada 24 h, así los libros nuevos entran solos.

import type { MetadataRoute } from "next";
import { getAuthorIndex } from "@/lib/catalog";

const SITE_URL = "https://www.bookvibes.es";

export const revalidate = 86400;

function createSlug(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/libros`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/tienda`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/sobre`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contacto`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/aviso-legal`, lastModified: now, changeFrequency: "yearly", priority: 0.1 },
    { url: `${SITE_URL}/privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.1 },
    { url: `${SITE_URL}/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.1 },
  ];

  try {
    const books = await getAuthorIndex();

    const bookPages: MetadataRoute.Sitemap = books
      .filter((book: any) => book?.book_id && book?.title)
      .map((book: any) => ({
        url: `${SITE_URL}/libro/${createSlug(book.title)}--${book.book_id}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));

    const authorSlugs = new Set<string>();
    for (const book of books) {
      const slug = createSlug(String(book?.author || "").trim());
      if (slug) authorSlugs.add(slug);
    }

    const authorPages: MetadataRoute.Sitemap = [...authorSlugs].map((slug) => ({
      url: `${SITE_URL}/autor/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    }));

    return [...staticPages, ...bookPages, ...authorPages];
  } catch (error) {
    // Si Railway falla en ese momento, al menos se publican las páginas fijas
    // (y no se rompe el despliegue).
    console.error("Error generando sitemap:", error);
    return staticPages;
  }
}