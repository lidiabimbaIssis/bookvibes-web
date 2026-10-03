"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const FAVORITES_KEY = "bookvibes-favorites";

type FavoriteBook = {
  book_id: string;
  title: string;
  author?: string;
  slug?: string;
};

export function FavoritesButton({
  book,
}: {
  book: FavoriteBook;
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      const favorites: FavoriteBook[] = stored
        ? JSON.parse(stored)
        : [];

      setIsFavorite(
        favorites.some(
          (item) => item.book_id === book.book_id
        )
      );
    } catch {
      setIsFavorite(false);
    }
  }, [book.book_id]);

  function toggleFavorite() {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      const favorites: FavoriteBook[] = stored
        ? JSON.parse(stored)
        : [];

      const exists = favorites.some(
        (item) => item.book_id === book.book_id
      );

      const updated = exists
        ? favorites.filter(
            (item) => item.book_id !== book.book_id
          )
        : [...favorites, book];

      localStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify(updated)
      );

      setIsFavorite(!exists);

      window.dispatchEvent(
        new Event("bookvibes-favorites-updated")
      );
    } catch {
      // No hacemos nada si localStorage no está disponible.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleFavorite}
      aria-label="Favorito"
      className="inline-flex items-center justify-center p-1 transition-transform duration-200 hover:scale-110"
    >
      <Heart
        className={`size-[18px] transition-colors duration-200 ${
          isFavorite
            ? "fill-[#B026FF] text-[#B026FF]"
            : "text-muted hover:text-[#B026FF]"
        }`}
      />
    </button>
  );
}