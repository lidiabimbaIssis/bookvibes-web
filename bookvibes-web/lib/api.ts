const API_URL =
  process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;

const CLOUDINARY_BASE = "https://res.cloudinary.com/ddppclcl1/image/upload";
const COVER_VERSION = "v1780422197";

export function coverUrl(bookId: string, width = 400) {
  return `${CLOUDINARY_BASE}/f_auto,q_auto,w_${width}/${COVER_VERSION}/${bookId}.webp`;
}

async function apiGet(path: string) {
  if (!API_URL) {
    throw new Error("Falta API_URL en .env.local");
  }

  const res = await fetch(`${API_URL}${path}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Error ${res.status} al cargar ${path}`);
  }

  return res.json();
}

export async function getNovedades() {
  return apiGet("/api/books/novedades");
}

export async function getBooks() {
  return apiGet("/api/books/feed?count=2100");
}

export async function getBook(id: string) {
  return apiGet(`/api/books/${id}`);
}