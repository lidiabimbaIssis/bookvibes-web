import Link from "next/link";
import { notFound } from "next/navigation";
import { BookCard } from "@/components/book-card";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { getBooks } from "@/lib/api";

function createSlug(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = await getBooks();
  const books = data.books || [];

  const authorBooks = books.filter(
    (book: any) =>
      createSlug(String(book.author || "").trim()) === slug,
  );

  if (authorBooks.length === 0) {
    notFound();
  }

  const author = authorBooks[0].author;

  return (
    <div className="bg-home-gradient min-h-dvh text-fg">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Link
          href="/libros"
          className="text-[13px] font-semibold text-muted no-underline hover:text-fg"
        >
          ← Volver a los libros
        </Link>

        <div className="mt-7">
          <p className="text-[11px] font-extrabold tracking-[0.2em] text-copper uppercase">
            Autora / Autor
          </p>

          <h1 className="mt-2 text-4xl font-extrabold text-balance">
            {author}
          </h1>

          <p className="mt-2 text-[14px] text-muted">
            {authorBooks.length}{" "}
            {authorBooks.length === 1 ? "libro" : "libros"} en BookVibes
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {authorBooks.map((book: any) => (
            <BookCard
              key={book.book_id}
              book={{
                ...book,
                slug: createSlug(book.title),
              }}
            />
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}