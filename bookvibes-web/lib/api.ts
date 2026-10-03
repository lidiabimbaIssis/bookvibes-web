const API_URL =
  process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;

const CLOUDINARY_BASE = "https://res.cloudinary.com/ddppclcl1/image/upload";
const COVER_VERSION = "v1780422197";

export function coverUrl(bookId: string, width = 400) {
  return `${CLOUDINARY_BASE}/f_auto,q_auto,w_${width}/${COVER_VERSION}/${bookId}.webp`;
}

async function apiGet(path: string, revalidate = 3600) {
  if (!API_URL) {
    throw new Error("Falta API_URL en .env.local");
  }

  const res = await fetch(`${API_URL}${path}`, {
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error(`Error ${res.status} al cargar ${path}`);
  }

  return res.json();
}

export async function getNovedades() {
  return apiGet("/api/books/novedades");
}

// OJO: pide los libros completos. Ya no se usa en el catálogo ni en la ficha;
// se mantiene solo por si otra parte de la web todavía lo importa.
export async function getBooks() {
  return apiGet("/api/books/feed?count=2100");
}

// Ficha individual: un solo libro, cacheado 24 h en Vercel.
export async function getBook(id: string) {
  return apiGet(`/api/books/${encodeURIComponent(id)}`, 86400);
}

// Catálogo ligero para Vibes y búsqueda (todos los libros, pocos datos).
// Se llama desde el navegador a la ruta propia /api/catalog de la web.
export async function getCatalog() {
  const res = await fetch("/api/catalog");

  if (!res.ok) {
    throw new Error(`Error ${res.status} al cargar el catálogo`);
  }

  return res.json();
}