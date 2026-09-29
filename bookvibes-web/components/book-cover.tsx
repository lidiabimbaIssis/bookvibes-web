import Image from "next/image";
import type { Book } from "@/data/books";
import { coverUrl } from "@/lib/api";

export function BookCover({ book, className = "" }: { book: Book; className?: string }) {
  return (
    <div className={`relative aspect-[2/3] overflow-hidden rounded-[10px] ${className}`}>
      <Image
        src={coverUrl(book.book_id)}
        alt={`Portada de ${book.title}`}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
        className="object-cover"
      />
    </div>
  );
}