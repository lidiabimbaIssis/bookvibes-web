"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { BookCard } from "@/components/book-card";
import { VibeIcon } from "@/components/vibe-grid";
import { VIBES } from "@/data/books";
import { getBooks } from "@/lib/api";
import { cn } from "@/lib/utils";

const BOOKS_PER_PAGE = 48;

const WEB_GENRES = [
  { label: "Todos", terms: [] },
  { label: "Romance", terms: ["romance", "dark romance", "romance erótico"] },
  { label: "Thriller", terms: ["thriller"] },
  { label: "Terror", terms: ["terror", "horror"] },
  { label: "Fantasía", terms: ["fantasía", "fantasia"] },
  { label: "Ciencia ficción", terms: ["ciencia ficción", "ciencia ficcion"] },
  { label: "Misterio", terms: ["misterio", "detectives"] },
  { label: "No ficción", terms: ["no ficción", "no ficcion", "ensayo"] },
  { label: "Histórica", terms: ["histórica", "historica"] },
  { label: "Juvenil", terms: ["juvenil"] },
  {
    label: "Ficción literaria",
    terms: ["ficción literaria", "ficcion literaria"],
  },
  {
    label: "Desarrollo personal",
    terms: ["desarrollo personal", "autoayuda"],
  },
  {
    label: "Biografía",
    terms: ["biografía", "biografia", "memorias"],
  },
  { label: "Deportes", terms: ["deportes", "deporte"] },
  { label: "Erótica", terms: ["erótica", "erotica", "sexualidad"] },
  { label: "Música", terms: ["música", "musica"] },
];

function createSlug(title: string) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalize(value: unknown) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function matchesGenre(book: any, terms: string[]) {
  if (terms.length === 0) return true;

  const genre = normalize(book.genre);
  const subgenre = normalize(book.subgenero);

  return terms.some((term) => {
    const normalizedTerm = normalize(term);

    return (
      genre.includes(normalizedTerm) ||
      subgenre.includes(normalizedTerm)
    );
  });
}

function matchesSearch(book: any, search: string) {
  if (!search) return true;

  const searchableText = [
    book.title,
    book.author,
    book.genre,
    book.subgenero,
    book.trope,
    book.summary_es,
    book.summary,
    book.hook,
    book.mood,
    book.saga_info,
    book.contenido_sensible,
    book.ficha_lectura?.dificultad,
    book.ficha_lectura?.estilo,
    ...(Array.isArray(book.vibe_tags)
      ? book.vibe_tags.map((tag: any) =>
          typeof tag === "string" ? tag : tag?.label
        )
      : []),
  ]
    .filter(Boolean)
    .map(normalize)
    .join(" ");

  return searchableText.includes(search);
}

export function Catalog() {
  const params = useSearchParams();

  const mood = params.get("vibe") || "Todos";

  const [q, setQ] = useState(params.get("q") || "");
  const [genre, setGenre] = useState("Todos");
  const [genreOpen, setGenreOpen] = useState(false);
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(BOOKS_PER_PAGE);

  const vibe = VIBES.find((v) => v.mood === mood);

  useEffect(() => {
    async function loadBooks() {
      try {
        const data = await getBooks();

        const realBooks = (data.books || []).map((book: any) => ({
          ...book,
          slug: book.slug || createSlug(book.title),
        }));

        setBooks(realBooks);
      } catch (error) {
        console.error("Error cargando libros:", error);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    }

    loadBooks();
  }, []);

  useEffect(() => {
    setVisibleCount(BOOKS_PER_PAGE);
  }, [genre, mood, q]);

  const filteredBooks = useMemo(() => {
    const search = normalize(q);

    return books.filter((book) => {
      const matchesMood =
        mood === "Todos" || normalize(book.mood) === normalize(mood);

      const selectedGenre = WEB_GENRES.find(
        (item) => item.label === genre,
      );

      const matchesSelectedGenre = matchesGenre(
        book,
        selectedGenre?.terms || [],
      );

      const bookMatchesSearch = matchesSearch(book, search);

      return (
        matchesMood &&
        matchesSelectedGenre &&
        bookMatchesSearch
      );
    });
  }, [books, q, mood, genre]);

  const visibleBooks = filteredBooks.slice(0, visibleCount);

  const hasMore = visibleCount < filteredBooks.length;

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <Link
        href="/"
        className="text-[13px] font-semibold text-muted no-underline hover:text-fg"
      >
        ← Volver al inicio
      </Link>

      <div className="mt-6 flex items-start gap-4">
        {vibe ? (
          <VibeIcon
            name={vibe.icon}
            className="size-8 shrink-0"
            color={
              ["Intenso", "Épico", "Llorar", "Aprender"].includes(vibe.mood)
                ? "#45b7f5"
                : "#a855f7"
            }
          />
        ) : null}

        <div>
          <h1 className="text-4xl font-extrabold">
            {vibe ? vibe.web : "Todos los libros"}
          </h1>

          <p className="mt-2 max-w-xl text-[15px] text-muted">
            {vibe
              ? vibe.hint
              : "Descubre tu próxima historia entre todo el catálogo de BookVibes."}
          </p>
        </div>
      </div>

      {/* Buscador */}
      <div className="mt-6 flex min-w-0 max-w-md items-center gap-2 rounded-full border border-white/10 bg-surface px-4 py-2.5">
        <Search className="size-4 shrink-0 text-muted" />

        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Busca por título, autor, género, trope..."
          className="min-w-0 flex-1 bg-transparent text-[14px] outline-none placeholder:text-muted"
        />
      </div>

      {/* Géneros */}
      <div className="mt-4">
        {/* MÓVIL */}
        <div className="relative sm:hidden">
          <button
            type="button"
            onClick={() => setGenreOpen((current) => !current)}
            className="flex w-full items-center justify-between rounded-full border border-white/10 bg-surface px-4 py-3 text-[13px] font-bold"
          >
            <span>
              {genre === "Todos" ? "Todos los géneros" : genre}
            </span>

            <span className="text-muted">
              {genreOpen ? "⌃" : "⌄"}
            </span>
          </button>

          {genreOpen && (
            <div className="absolute left-0 right-0 top-full z-20 mt-2 max-h-80 overflow-y-auto rounded-2xl border border-white/10 bg-surface p-2 shadow-2xl">
              {WEB_GENRES.map((item) => {
                const active = genre === item.label;

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => {
                      setGenre(item.label);
                      setGenreOpen(false);
                    }}
                    className={cn(
                      "block w-full rounded-xl px-4 py-2.5 text-left text-[13px] font-semibold",
                      active
                        ? "bg-white/10 text-fg"
                        : "text-muted hover:bg-white/5 hover:text-fg",
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* ORDENADOR */}
        <div className="hidden flex-wrap gap-2 sm:flex">
          {WEB_GENRES.map((item) => {
            const active = genre === item.label;

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => setGenre(item.label)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-[12px] font-bold transition",
                  active
                    ? "border-transparent bg-surface text-fg [background:linear-gradient(var(--color-surface),var(--color-surface))_padding-box,linear-gradient(90deg,var(--color-brass),var(--color-copper))_border-box]"
                    : "border-white/10 bg-surface text-fg hover:border-white/20",
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <span className="mt-2 block text-[12px] text-muted">
          {loading ? "Cargando…" : `${filteredBooks.length} libros`}
        </span>
      </div>

      {/* Resultados */}
      {loading ? (
        <div className="mt-12 text-center text-[13px] text-muted">
          Cargando historias…
        </div>
      ) : filteredBooks.length === 0 ? (
        <div className="mt-12 text-center">
          <p className="text-lg font-extrabold">
            No encontramos historias en esta categoría… todavía.
          </p>

          <p className="mt-2 text-[13px] text-muted">
            Prueba con otro género o busca por título, autor, género o
            temática.
          </p>

          <button
            type="button"
            onClick={() => {
              setGenre("Todos");
              setQ("");
            }}
            className="btn-outline-brand mt-5 inline-flex px-5 py-2.5 text-[13px] font-extrabold"
          >
            Ver todos los libros →
          </button>
        </div>
      ) : (
        <>
          <div
            key={`${genre}-${mood}-${q}`}
            className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8"
          >
            {visibleBooks.map((book) => (
              <BookCard
                key={`${genre}-${book.book_id}`}
                book={book}
              />
            ))}
          </div>

          {hasMore && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() =>
                  setVisibleCount(
                    (current) => current + BOOKS_PER_PAGE,
                  )
                }
                className="btn-outline-brand px-6 py-3 text-[13px] font-extrabold"
              >
                Cargar más libros
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}