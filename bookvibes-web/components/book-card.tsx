import Link from "next/link";
import { BookCover } from "@/components/book-cover";
import type { Book } from "@/data/books";

export function BookCard({ book }: { book: Book }) {
  return (
    <Link
      href={`/libro/${book.slug}`}
      className="group flex flex-col no-underline"
    >
      <div className="book-glow book-cover-interaction overflow-hidden rounded-[12px]">
        <BookCover book={book} />
      </div>

      <p className="font-display mt-2.5 text-[14px] leading-snug font-bold text-fg transition-all duration-200 group-hover:font-black">
        {book.title}
      </p>

      <p className="mt-0.5 text-[12px] text-brass">
        {book.author}
      </p>
    </Link>
  );
}