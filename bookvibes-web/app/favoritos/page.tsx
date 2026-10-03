"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

const FAVORITES_KEY = "bookvibes-favorites";

type FavoriteBook = {
  book_id: string;
  title: string;
  author?: string;
  slug?: string;
};

function coverUrl(bookId: string) {
  return `https://res.cloudinary.com/ddppclcl1/image/upload/f_auto,q_auto,w_400/v1780422197/${bookId}.webp`;
}

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteBook[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    function loadFavorites() {
      try {
        const stored = localStorage.getItem(FAVORITES_KEY);
        const books: FavoriteBook[] = stored
          ? JSON.parse(stored)
          : [];

        setFavorites(books);
      } catch {
        setFavorites([]);
      }

      setLoaded(true);
    }

    loadFavorites();

    window.addEventListener(
      "bookvibes-favorites-updated",
      loadFavorites,
    );

    return () => {
      window.removeEventListener(
        "bookvibes-favorites-updated",
        loadFavorites,
      );
    };
  }, []);

  function removeFavorite(bookId: string) {
    const updated = favorites.filter(
      (book) => book.book_id !== bookId,
    );

    localStorage.setItem(
      FAVORITES_KEY,
      JSON.stringify(updated),
    );

    setFavorites(updated);
  }

  return (
    <div className="bg-home-gradient min-h-dvh text-fg">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6">
        <Link
          href="/"
          className="text-[13px] font-bold text-muted no-underline hover:text-fg"
        >
          ← BookVibes
        </Link>

        <Link
          href="/libros"
          className="rounded-full border border-white/15 px-4 py-2 text-[12px] font-bold text-muted no-underline hover:text-fg"
        >
          Descubrir libros
        </Link>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 sm:pt-10">
        {!loaded ? null : favorites.length === 0 ? (
          <section className="flex min-h-[65vh] flex-col items-center justify-center text-center">
            <div className="mb-6 flex size-20 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10">
              <Heart className="size-9 text-violet-400" />
            </div>

            <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-violet-400">
              Tu estantería
            </p>

            <h1 className="mt-3 max-w-xl text-4xl font-extrabold leading-tight text-balance sm:text-5xl">
              Hay historias que todavía están esperando.
            </h1>

            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
              Guarda con ❤️ los libros que te llamen la atención
              y aparecerán aquí para que no los pierdas de vista.
            </p>

            <Link
              href="/libros"
              className="mt-8 rounded-full bg-violet-500 px-6 py-3 text-[13px] font-extrabold text-white no-underline transition-transform duration-200 hover:scale-105"
            >
              Descubrir libros →
            </Link>
          </section>
        ) : (
          <>
            <div className="mb-8">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-violet-400">
                Tu estantería
              </p>

              <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
                Mis favoritos ❤️
              </h1>

              <p className="mt-2 text-[15px] text-muted">
                Las historias que no quieres perder de vista.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
              {favorites.map((book) => (
                <div
                  key={book.book_id}
                  className="group relative"
                >
                  <Link
                    href={`/libro/${book.slug || book.book_id}`}
                    className="block no-underline"
                  >
                    <div className="book-glow overflow-hidden rounded-[12px]">
                      <img
                        src={coverUrl(book.book_id)}
                        alt={book.title}
                        className="aspect-[2/3] w-full object-cover"
                      />
                    </div>

                    <h2 className="mt-3 line-clamp-2 text-[13px] font-bold leading-snug text-fg">
                      {book.title}
                    </h2>

                    {book.author ? (
                      <p className="mt-1 line-clamp-1 text-[12px] text-muted">
                        {book.author}
                      </p>
                    ) : null}
                  </Link>

                  <button
                    type="button"
                    onClick={() => removeFavorite(book.book_id)}
                    aria-label="Quitar de favoritos"
                    className="absolute right-2 top-2 flex size-9 items-center justify-center rounded-full border border-violet-400/30 bg-black/60 text-violet-300 backdrop-blur-md transition-transform duration-200 hover:scale-110"
                  >
                    <Heart className="size-4 fill-current" />
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}