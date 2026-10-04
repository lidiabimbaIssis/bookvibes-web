// lib/catalog.ts  (SOLO servidor: no importar desde componentes "use client")
//
// Lee /api/books/feed de Railway (que es público, como ya hace la web) y lo
// guarda en la memoria del servidor de Vercel. No toca el backend.
//
// Por qué no usamos /api/books/{id}: ese endpoint exige iniciar sesión
// (devuelve 401 desde la web), así que las fichas se resuelven aquí.

import { unstable_cache } from "next/cache";

// Margen amplio para que 3.000, 5.000... libros sigan entrando.
// Comprueba que el contador de la web coincide con tus libros en MongoDB.
const CATALOG_COUNT = 10000;
const MEMORY_TTL_MS = 60 * 60 * 1000; // 1 hora

function createSlug(title: string) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

type FeedCache = {
  books: any[];
  byId: Map<string, any>;
  bySlug: Map<string, any>;
  at: number;
};

let cache: FeedCache | null = null;
let inflight: Promise<FeedCache> | null = null;

async function fetchFeed(): Promise<any[]> {
  const apiUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("Falta API_URL");
  }

  // no-store a propósito: la respuesta completa pesa más de 2 MB y la caché
  // de fetch de Next no la guarda. La guardamos en memoria (abajo).
   // La respuesta pesa más de 2 MB y la caché de fetch de Next no la guarda
  // (solo avisa en logs). La caché real es la de memoria (abajo). Usamos
  // revalidate en vez de no-store para que las fichas ISR no den
  // DYNAMIC_SERVER_USAGE.
  const res = await fetch(
    `${apiUrl}/api/books/feed?count=${CATALOG_COUNT}`,
    { next: { revalidate: 3600 } },
  );

  if (!res.ok) {
    throw new Error(`Error ${res.status} al cargar el catálogo`);
  }

  const data = await res.json();

  return (data.books || []).filter(
    (book: any) => book?.book_id && book?.title,
  );
}

// Una sola descarga por hora y por instancia, aunque lleguen muchas visitas
// a la vez. Si Railway falla, se sirven los datos anteriores.
async function loadFeed(): Promise<FeedCache> {
  if (cache && Date.now() - cache.at < MEMORY_TTL_MS) return cache;
  if (inflight) return inflight;

  inflight = (async () => {
    try {
      const books = await fetchFeed();

      const byId = new Map<string, any>();
      const bySlug = new Map<string, any>();

      for (const book of books) {
        byId.set(String(book.book_id), book);

        const slug = createSlug(book.title);
        if (!bySlug.has(slug)) bySlug.set(slug, book);
      }

      cache = { books, byId, bySlug, at: Date.now() };
      return cache;
    } catch (error) {
      if (cache) return cache;
      throw error;
    } finally {
      inflight = null;
    }
  })();

  return inflight;
}

// Libro completo para la ficha. Acepta el book_id o, en enlaces antiguos,
// el slug del título.
export async function getFullBook(id: string, slug?: string) {
  const { byId, bySlug } = await loadFeed();

  return byId.get(id) ?? bySlug.get(slug ?? id) ?? null;
}

// Catálogo ligero para Vibes, búsqueda y tarjetas.
export async function getSlimCatalog() {
  const { books } = await loadFeed();

  return books.map((book: any) => ({
    book_id: book.book_id,
    title: book.title,
    author: book.author,
    genre: book.genre,
    subgenero: book.subgenero,
    trope: book.trope,
    hook: book.hook,
    mood: book.mood,
    saga_info: book.saga_info,
    contenido_sensible: book.contenido_sensible,
    vibe_tags: book.vibe_tags,
    ficha_lectura: book.ficha_lectura
      ? {
          dificultad: book.ficha_lectura.dificultad,
          estilo: book.ficha_lectura.estilo,
        }
      : undefined,
  }));
}

// Índice mínimo para páginas de autor (cacheado 1 h; pesa muy poco).
export const getAuthorIndex = unstable_cache(
  async () => {
    const { books } = await loadFeed();

    return books.map((book: any) => ({
      book_id: book.book_id,
      title: book.title,
      author: book.author,
      genre: book.genre,
      mood: book.mood,
    }));
  },
  ["author-index"],
  { revalidate: 3600 },
);